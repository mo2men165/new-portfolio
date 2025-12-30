import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

// interface NavLink {
//   name: string;
//   link: string;
// }

interface Section {
  id: string;
  name: string;
  element: HTMLElement | null;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isAboutPage, setIsAboutPage] = useState<boolean>(false);

  useEffect(() => {
    // Check if we're on the about page
    const path = window.location.pathname;
    const onAboutPage = path === "/about";
    setIsAboutPage(onAboutPage);
    
    // Set initial active link
    if (onAboutPage) {
      setActiveLink("About Me");
    } else {
      // On homepage, initialize to first non-about link or just the first link if no other options
      const initialLink = navLinks.find(link => link.name !== "About Me")?.name || navLinks[0]?.name || "";
      setActiveLink(initialLink);
    }

    // Throttle function to limit how often the scroll handler fires
    const throttle = <T extends (...args: unknown[]) => unknown>(fn: T, delay: number) => {
      let lastCall = 0;
      return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return fn(...args);
      };
    };

    // Cache section elements to avoid frequent DOM queries
    const sectionCache: Section[] = [];
    
    // Initialize section cache
    const initializeSectionCache = () => {
      // Clear cache
      sectionCache.length = 0;
      
      // Special handling for hero/home section to ensure it's correctly identified
      const heroElement = document.getElementById('hero') || 
                          document.getElementById('home') || 
                          document.querySelector('[id*="hero"]') || 
                          document.querySelector('[id*="home"]');
      
      if (heroElement) {
        // Find the corresponding navigation link for the hero section
        const heroNavLink = navLinks.find(link => {
          const linkId = link.link.replace(/^\/#/, '');
          return linkId.toLowerCase() === 'hero' || 
                 linkId.toLowerCase() === 'home' || 
                 linkId.toLowerCase().includes('hero') || 
                 linkId.toLowerCase().includes('home');
        });
        
        if (heroNavLink) {
          // Add the hero section first to ensure it's prioritized
          sectionCache.push({
            id: 'hero',
            name: heroNavLink.name,
            element: heroElement
          });
        }
      }
      
      // Get all section elements that correspond to nav links (excluding About Me)
      const sections: Section[] = navLinks
        .filter(link => link.name !== "About Me") // Exclude About Me from scrollspy
        .map(link => {
          const sectionId = link.link.replace(/^\/#/, ''); // Remove leading /# if present
          return {
            id: sectionId,
            name: link.name,
            element: document.getElementById(sectionId)
          };
        })
        .filter((section): section is Section & { element: HTMLElement } => 
          section.element !== null && 
          // Don't add duplicate hero section
          !sectionCache.some(cached => cached.element === section.element)
        );
      
      // Add contact section (which might not be in navLinks)
      const contactSection = document.getElementById('contact');
      if (contactSection && !sectionCache.some(cached => cached.element === contactSection)) {
        sections.push({
          id: 'contact',
          name: 'Contact',
          element: contactSection
        });
      }
      
      // Sort sections by their position on the page
      sections.sort((a, b) => {
        if (!a.element || !b.element) return 0;
        const aTop = a.element.getBoundingClientRect().top;
        const bTop = b.element.getBoundingClientRect().top;
        return aTop - bTop;
      });
      
      // Add to cache
      sectionCache.push(...sections);
    };

    // Initialize section cache
    initializeSectionCache();

    // Improved active section detection for top of page and hero section
    const getActiveSection = () => {
      if (sectionCache.length === 0) return '';
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Special handling for hero section / top of page
      // If we're within the first 90% of the viewport height from the top
      if (scrollTop < windowHeight * 0.9) {
        // Look for a "hero" or "home" section first
        const heroSection = sectionCache.find(section => 
          section.id.toLowerCase().includes('hero') || 
          section.id.toLowerCase().includes('home')
        );
        
        if (heroSection) {
          return heroSection.name;
        }
        
        // If no hero section is found, use the first section
        return sectionCache[0]?.name || '';
      }
      
      // If we're at the very bottom of the page
      if (scrollTop + windowHeight >= docHeight - 50) {
        const lastSection = sectionCache[sectionCache.length - 1];
        return lastSection?.name || '';
      }
      
      // Define the active zone (the area we consider most important for section detection)
      // Using top 30% of viewport as the primary active zone
      const activeZoneStart = scrollTop;
      const activeZoneEnd = scrollTop + (windowHeight * 0.3);
      
      // First, check if any section's top is within the active zone
      for (const section of sectionCache) {
        if (!section.element) continue;
        
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop; // Absolute position from top of document
        
        // If section's top is within the active zone
        if (sectionTop >= activeZoneStart && sectionTop <= activeZoneEnd) {
          return section.name;
        }
      }
      
      // If we're here, no section top is in the active zone
      // Check which section takes up most of the active zone
      let maxOverlap = 0;
      let maxOverlapSection = '';
      
      for (const section of sectionCache) {
        if (!section.element) continue;
        
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top + scrollTop;
        const sectionBottom = rect.bottom + scrollTop;
        
        // Calculate overlap with active zone
        const overlapStart = Math.max(sectionTop, activeZoneStart);
        const overlapEnd = Math.min(sectionBottom, activeZoneEnd);
        const overlap = Math.max(0, overlapEnd - overlapStart);
        
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          maxOverlapSection = section.name;
        }
      }
      
      if (maxOverlapSection) {
        return maxOverlapSection;
      }
      
      // If still no section found, determine which section we're closest to
      let minDistance = Infinity;
      let closestSection = '';
      
      const viewportMiddle = scrollTop + (windowHeight / 2);
      
      for (const section of sectionCache) {
        if (!section.element) continue;
        
        const rect = section.element.getBoundingClientRect();
        const sectionMiddle = rect.top + (rect.height / 2) + scrollTop;
        const distance = Math.abs(sectionMiddle - viewportMiddle);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section.name;
        }
      }
      
      return closestSection || '';
    };

    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      
      // Update navbar background when scrolled
      setScrolled(scrollTop > 100);
      
      // Skip scrollspy on about page - keep "About Me" always active
      if (onAboutPage) {
        return;
      }
      
      // Get the active section
      const currentSection = getActiveSection();
      
      // Only update state if the section has changed to avoid re-renders
      // Force update if activeLink is not in sectionCache (fixes Skills section issue)
      setActiveLink((prevActiveLink) => {
        const activeLinkIsValid = sectionCache.some(section => section.name === prevActiveLink);
        
        if (currentSection && (currentSection !== prevActiveLink || !activeLinkIsValid)) {
          return currentSection;
        }
        return prevActiveLink;
      });
    }, 100); // Throttle to 100ms (10 updates per second maximum)

    // Handle window resize - recalculate section positions
    const handleResize = throttle(() => {
      initializeSectionCache();
      handleScroll();
    }, 200); // Less frequent updates for resize

    // Initial scroll check and add scroll listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine if a link should be active
  const isLinkActive = (linkName: string): boolean => {
    // About Me is only active on the about page
    if (linkName === "About Me") {
      return isAboutPage;
    }
    
    // On about page, no other link should be active
    if (isAboutPage) {
      return false;
    }
    
    // On homepage, check against activeLink
    return activeLink === linkName;
  };

  // Handle link click
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string, linkHref: string): void => {
    e.preventDefault();
    
    // About Me link should navigate to about page
    if (linkName === "About Me") {
      window.location.href = "/about";
      return;
    }
    
    setActiveLink(linkName);
    
    // Extract section ID
    const targetId = linkHref.replace(/^\/#/, '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Scroll to the section
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    } else {
      // If no matching element, navigate to the link
      window.location.href = linkHref;
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-100 ${
        scrolled
          ? "py-6 xl:py-3 bg-gray-900/90 backdrop-blur-lg shadow-lg"
          : "py-8 xl:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo and Name */}
        <motion.a
          href="/"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-100" />
            <div className="absolute inset-0.5 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/mylogo.png"
                alt="Mo'men Abdeltawab"
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>
          <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-100">
            Mo'men Abdeltawab
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }, index) => (
              <motion.li
                key={name}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link}
                  className={`text-${
                    isLinkActive(name) ? "white" : "gray-400"
                  } hover:text-white transition-colors duration-100`}
                  onClick={(e) => handleLinkClick(e, name, link)}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-100 ${
                      isLinkActive(name) ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden lg:block relative group overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              window.scrollTo({
                top: contactSection.offsetTop - 100,
                behavior: 'smooth'
              });
            }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-100" />
          <div className="relative px-6 py-2 rounded-lg flex items-center gap-2 text-white font-medium">
            <span>Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none cursor-pointer"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-100 ${
                  mobileMenuOpen
                    ? "rotate-45 top-3"
                    : "rotate-0 top-1"
                }`}
              ></span>
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-100 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                } top-3`}
              ></span>
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-100 ${
                  mobileMenuOpen
                    ? "-rotate-45 top-3"
                    : "rotate-0 top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-gray-900/95 backdrop-blur-lg transition-all duration-100 overflow-hidden ${
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="border-b border-gray-800 pb-2">
                <a
                  href={link}
                  className={`block text-${
                    isLinkActive(name) ? "white" : "gray-400"
                  } hover:text-white transition-colors duration-100`}
                  onClick={(e) => handleLinkClick(e, name, link)}
                >
                  {name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-4 rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 100,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span>Contact Me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;