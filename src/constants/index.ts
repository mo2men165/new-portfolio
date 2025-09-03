
const navLinks = [
  {
    name: "About Me",
    link: "/about",
  },
  {
    name: "Work",
    link: "/#work",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Testimonials",
    link: "/#testimonials",
  },
];

const techStackIcons = [
  {
    name: "MongoDB",
    img: "/images/mongo.png",
  },
  {
    name: "Express.Js",
    img: "/images/express-white.png",
  },
  {
    name: "React",
    img: "/images/React.webp",
  },
  {
    name: "Node.Js",
    img: "/images/node.svg",
  },
  {
    name: "Next.Js",
    img: "/images/next-icon.svg",
  },
];

const additionalSkills = [
  {
    category: "Frontend Development",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "HTML5",
      "CSS3",
      "SASS/SCSS",
      "Tailwind CSS",
      "Material-UI",
      "Shadcn/UI (Radix UI)",
      "Three.js",
      "GSAP",
      "Framer Motion",
      "React Hook Form",
      "Zod"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "MongoDB & Mongoose",
      "Redis",
      "Authentication (JWT, OAuth)",
      "Socket.io",
      "Webhooks",
      "Serverless Functions",
      "API Documentation (Swagger/OpenAPI)"
    ]
  },
  {
    category: "Development Tools & Testing",
    skills: [
      "Git & GitHub",
      "GitHub Actions",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Vite",
      "ESLint",
      "Storybook",
      "CI/CD Pipelines"
    ]
  },
  {
    category: "DevOps & Deployment",
    skills: [
      "Docker",
      "Kubernetes (basics)",
      "AWS Services",
      "Vercel",
      "Netlify",
      "DigitalOcean",
      "MongoDB Atlas",
      "Performance Optimization"
    ]
  }
];

const expCards = [
  {
    review:
      "Mo'men consistently delivers high-quality, scalable frontend solutions tailored to client needs. His ability to understand business goals and translate them into polished React applications is unmatched.",
    imgPath: "/images/mylogo.png",
    imgClass: 'w-24 h-16',
    logoPath: "/images/mylogo.png",
    logoClass: 'ml-5',
    nodeBG: '',
    title: "Freelance Fullstack Web Developer",
    date: "May 2023 - Present",
    responsibilities: [
      "Built modular, responsive React apps using hooks and context API.",
      "Created reusable components ensuring consistency and scalability.",
      "Integrated RESTful APIs and focused on performance and accessibility.",
    ],
  },
  {
    review:
      "Mo'men is an exceptional team leader who combines data-driven decision making with empathetic leadership. He builds high-performing teams through structure, feedback, and strategy.",
    imgPath: "/images/o4u.png",
    imgClass: 'size-22',
    logoPath: "/images/o4u.png", 
    logoClass: '',
    nodeBG: 'bg-purple-900',
    title: "Operations Team Leader",
    date: "Feb 2024 – March 2025",
    responsibilities: [
      "Led a team of telesales agents, building collaborative workflows.",
      "Designed performance tracking systems to optimize productivity.",
      "Mentored and coached team members for growth and accountability.",
    ],
  },
  {
    review:
      "Mo'men brought a fresh digital approach to our acquisition strategy. His frontend work aligned seamlessly with marketing goals and helped scale lead generation efforts effectively.",
    imgPath: "/images/midas.png",
    imgClass: 'size-22',
    logoPath: "/images/midas.png", 
    logoClass: '',
    nodeBG: 'bg-white',
    title: "Frontend Developer & Digital Marketing Specialist",
    date: "May 2023 – Dec 2023",
    responsibilities: [
      "Redesigned the company website with React to enhance user engagement.",
      "Developed high-converting, mobile-friendly landing pages.",
      "Implemented analytics and email marketing to support sales funnels.",
    ],
  },
  {
    review:
      "Mo’men's dedication and strategic mindset made him a standout team member. His contributions to team performance and client relations set a standard of excellence.",
    imgPath: "/images/o4u.png",
    imgClass: 'size-22',
    logoPath: "/images/o4u.png", 
    logoClass: '',
    nodeBG: 'bg-purple-900',
    title: "Senior Sales Executive",
    date: "Jan 2021 – May 2023",
    responsibilities: [
      "Promoted from entry-level to senior through consistent performance.",
      "Led initiatives and mentored junior staff, fostering team growth.",
      "Improved client retention through tailored, solutions-focused approaches.",
    ],
  },
];

const testimonials = [
  {
    name: "Tarek Hasan",
    position: "RevAmp Hub's Co-Founder",
    review:
      "Awesome work - really exceeded our expectations and vision in terms of our website development.",
  },
  {
    name: "Ayman Abdullah",
    position: "5D Outsourcing's Founder & CTO",
    review:
      "Amazing work impressed with our new site. It’s easy to navigate, and the blog really helps us connect with clients. we’ve seen more leads since launch. he was super collaborative and truly cared about our success. Highly recommend!",
  },
  {
    name: "Aceil El-Gazar",
    position: "EGA's CEO",
    review:
      "Moamen did a fantastic job building our new bilingual website. He delivered a clean, modern design with Next.js and Tailwind that runs fast and works seamlessly across devices. He was professional, proactive, and easy to work with — the site has already improved our online presence",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "Github",
    imgPath: "/images/github.svg",
  },
  {
    name: "Upwork",
    imgPath: "/images/upwork.svg",
  },
  {
    name: "Fiverr",
    imgPath: "/images/fiverr.svg",
  },
];

const myProjects = [
  {
    title: 'Golden Mix - Ready Mix Concrete Solutions',
    desc: 'Golden Mix specializes in high-quality ready mix concrete and related construction materials, providing reliable supply and delivery services for construction projects of all scales.',
    subdesc:
      'Built with React and Vite, styled with Tailwind CSS and enhanced with Framer Motion animations, delivering a modern, responsive experience that reflects the company\'s professional construction services.',
    href: 'https://goldenmix.net/',
    texture: '/images/goldenmix.png',
    logo: '/images/golden-mix-logo.png',
    logoStyle: {
      backgroundColor: '#1A1A1A',
      border: '0.2px solid #FFD700',
      boxShadow: '0px 0px 20px 0px #FFD700',
    },
    spotlight: '/images/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' },
      { id: 2, name: 'Vite', path: '/images/vite.svg' },
      { id: 3, name: 'TailwindCSS', path: '/images/tailwindcss.png' },
      { id: 4, name: 'Framer Motion', path: '/images/framer.png' },
    ],
    githubLink: "https://github.com/mo2men165/golden-mix"
  },
    {
      title: 'EGA - Digital Marketing Agency',
      desc: 'EGA is a forward-thinking digital marketing agency that helps brands scale with precision targeting, content strategy, and conversion-optimized campaigns across all platforms.',
      subdesc:
        'Built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion, the EGA website showcases a sleek, modern UI reflecting the agency’s innovative approach to digital solutions.',
      href: 'https://ega-f51q.vercel.app/en',
      texture: '/images/EGA.png',
      logo: '/images/ega-logo.png',
      logoStyle: {
        backgroundColor: '#02091C',          
        border: '0.2px solid #9AE600',        
        boxShadow: '0px 0px 20px 0px #9AE600' 
      },      
      spotlight: '/images/spotlight3.png',
      tags: [
        { id: 1, name: 'React.js', path: '/images/react.svg' },
        { id: 1, name: 'NexJs', path: '/images/next-icon.svg' },
        { id: 2, name: 'TailwindCSS', path: 'images/tailwindcss.png' },
        { id: 3, name: 'TypeScript', path: '/images/typescript.png' },
        { id: 4, name: 'Framer Motion', path: '/images/framer.png' },
      ],
      githubLink: "https://github.com/mo2men165/EGA"
    },
    {
      title: 'RevAmp Hub - CRM Automation Experts',
      desc: 'RevAmp Hub partners with businesses to unlock the full potential of HubSpot and other CRMs through tailored automations, integrations, and workflow enhancements.',
      subdesc:
        'Developed using React and Vite, with Tailwind CSS and Framer Motion, RevAmp Hub delivers a fast and interactive user experience optimized for performance and smooth animations',
      href: 'https://revamp-hub.vercel.app/',
      texture: '/images/revamp.png',
      logo: '/images/RA_Logo.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 20px 0px #2F6DB5',
      },
      spotlight: '/images/spotlight5.png',
      tags: [
        { id: 1, name: 'React.js', path: '/images/react.svg' },
        { id: 1, name: 'Vite', path: '/images/vite.svg' },
        { id: 2, name: 'TailwindCSS', path: 'images/tailwindcss.png' },
        { id: 4, name: 'Framer Motion', path: '/images/framer.png' },
      ],
      githubLink: "https://github.com/mo2men165/RevAmp-Hub"
    },
    {
      title: '5D Outsourcing - Multisector Business Services',
      desc: '5D Outsourcing delivers comprehensive services in IT, HR, digital marketing, and business development, enabling clients to scale efficiently across departments.',
      subdesc:
        'Built using WordPress, the 5D Outsourcing website ensures ease of content management, responsive design, and scalability for service-driven business needs.',
      href: 'https://www.outsourcing-eg.com/',
      texture: '/images/5d.png',
      logo: '/images/5dlogo.png',
      logoStyle: {
        backgroundColor: '#ffffff',
        border: '0.2px solid #F74116',
        boxShadow: '0px 0px 20px 0px #F74116',
      },
      spotlight: '/images/spotlight1.png',
      tags: [
        { id: 1, name: 'WordPress', path: '/images/wordpress-icon.svg' },
      ],
      githubLink: "https://www.outsourcing-eg.com/"
    },
];

const portfolioProjects = [
  {
    title: 'LiveDocs',
    desc: 'Real-time collaborative document editor',
    subdesc: 'Google Docs clone built with **Next.js** as the core framework with **TypeScript** for type safety. Features real-time collaboration powered by **Liveblocks**, rich text editing with **Lexical**, and authentication via **Clerk**. UI components built with **Radix UI** for accessibility, error tracking with **Sentry**, and deployed on Vercel for optimal performance.',
    href: 'https://live-docs-sooty.vercel.app/',
    logo: '/images/livedocs.svg',
    logoStyle: {
      backgroundColor: '', // White background
      border: '0.2px solid #0099FF', // Light blue border
      boxShadow: '0px 0px 20px 0px rgb(0, 153, 255)' // Blue glow effect
    },
    spotlight: '/images/spotlight2.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/images/next-icon.svg' },
      { id: 2, name: 'TypeScript', path: '/images/typescript.png' },
      { id: 3, name: 'Liveblocks', path: '/images/liveblocks.jpeg' },
      { id: 4, name: 'Lexical', path: '/images/lexical.png' },
      { id: 5, name: 'Clerk', path: '/images/clerk.png' },
      { id: 6, name: 'Radix UI', path: '/images/radix.png' },
      { id: 7, name: 'Sentry', path: '/images/sentry-icon.svg' },
      { id: 8, name: 'React.js', path: '/images/react.svg' }
    ],
    githubLink: "https://github.com/mo2men165/LiveDocs"
  },
  {
    title: 'FigPro',
    desc: 'Collaborative design tool',
    subdesc: 'Figma-inspired design platform built with **Next.js** and **TypeScript**, featuring real-time collaboration via **Liveblocks**. The canvas rendering is powered by **Fabric.js** with PDF export capability using **jsPDF**. UI components created with **Radix UI** for accessibility, styled with **Tailwind CSS**, and includes advanced state management for design elements.',
    href: 'https://figma-clone-three-snowy.vercel.app/',
    logo: '/images/figpro.svg',
    logoStyle: {
      backgroundColor: '', // White background
      border: '0.2px solid #00E6D6', // Teal/cyan border matching the text
      boxShadow: '0px 0px 20px 0px rgb(0, 230, 214)' // Teal glow effect
    },
    spotlight: '/images/spotlight3.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/images/next-icon.svg' },
      { id: 2, name: 'TypeScript', path: '/images/typescript.png' },
      { id: 3, name: 'Liveblocks', path: '/images/liveblocks.jpeg' },
      { id: 4, name: 'Fabric', path: '/images/fabric.png' },
      { id: 5, name: 'TailwindCSS', path: '/images/tailwindcss.png' },
      { id: 6, name: 'Radix UI', path: '/images/radix.png' },
      { id: 7, name: 'JSPDF', path: '/images/jspdf.png' },
      { id: 8, name: 'React.js', path: '/images/react.svg' }
    ],
    githubLink: "https://github.com/mo2men165/Figma-Clone"
  },
  {
    title: 'Yoom Meetings',
    desc: 'Video conferencing platform clone',
    subdesc: 'Zoom-inspired application built with **Next.js** and **TypeScript**, featuring real-time video communication via **Stream**. Includes authentication with **Clerk**, accessible UI components with **Radix UI**, and modern styling with **Tailwind CSS**. The architecture leverages Next.js API routes for backend functionality and optimized performance.',
    href: 'https://yoom-eight-flame.vercel.app/',
    logo: '/images/yoom-logo.svg',
    logoStyle: {
      backgroundColor: '', // White background
      border: '0.2px solid #4A90E2', // Medium blue border
      boxShadow: '0px 0px 20px 0px rgb(74, 144, 226)' // Blue glow effect
    },
    spotlight: '/images/spotlight2.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/images/next-icon.svg' },
      { id: 2, name: 'TypeScript', path: '/images/typescript.png' },
      { id: 3, name: 'Stream', path: '/images/stream.png' },
      { id: 4, name: 'Clerk', path: '/images/clerk.png' },
      { id: 5, name: 'TailwindCSS', path: '/images/tailwindcss.png' },
      { id: 6, name: 'Radix UI', path: '/images/radix.png' },
      { id: 7, name: 'React.js', path: '/images/react.svg' }
    ],
    githubLink: "https://github.com/mo2men165/Yoom"
  },
  {
    title: 'Car Hub',
    desc: 'Automotive showcase with RapidAPI integration',
    subdesc: 'Car showcase platform built with **Next.js** and **TypeScript**, integrating vehicle data from **RapidAPI**. Features include advanced search with **Headless UI** components, responsive design with **Tailwind CSS**, and optimized image loading. The project demonstrates clean API integration patterns and modern Next.js data fetching strategies.',
    href: 'https://car-hub-wine-ten.vercel.app/',
    logo: '/images/carhub.png',
    logoStyle: {
      backgroundColor: '#FFFFFF', // White background
      border: '0.2px solid #4D4DBA', // Purple-blue border
      boxShadow: '0px 0px 20px 0px rgb(77, 77, 186)' // Purple-blue glow    
    },
    spotlight: '/images/spotlight5.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/images/next-icon.svg' },
      { id: 2, name: 'TypeScript', path: '/images/typescript.png' },
      { id: 3, name: 'Rapid API', path: '/images/rapidapi.png' },
      { id: 4, name: 'TailwindCSS', path: '/images/tailwindcss.png' },
      { id: 5, name: 'Headless UI', path: '/images/headless.png' },
      { id: 6, name: 'React.js', path: '/images/react.svg' }
    ],
    githubLink: "https://github.com/mo2men165/Car-hub"
  },
  {
    title: '3D Shirt Customizer',
    desc: 'A 3D tool that allows you to create unique t-shirt designs',
    subdesc: 'Interactive 3D editor built with **React** and **Three.js** for 3D rendering, powered by **Vite** for fast development. Features real-time customization with state management via **Valtio**, smooth animations with **Framer Motion**, and responsive styling with **Tailwind CSS**. The application demonstrates advanced 3D manipulation in the browser with texture mapping capabilities.',
    href: 'https://mo2men165.github.io/3D-Shirt-Customizer/',
    logo: '/images/logo-tshirt.png',
    logoStyle: {
      backgroundColor: '#8ede62',
      border: '0.2px solid #326b19',
      boxShadow: '0px 0px 20px 0px rgb(142, 222, 98)'
    },
    spotlight: '/images/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' },
      { id: 2, name: 'Three.js', path: '/images/three-js.png' },
      { id: 3, name: 'Vite.js', path: '/images/vite.svg' },
      { id: 4, name: 'Valtio', path: '/images/valtio.png' },
      { id: 5, name: 'Framer Motion', path: '/images/framer.png' },
      { id: 6, name: 'TailwindCSS', path: '/images/tailwindcss.png' }
    ],
    githubLink: "https://github.com/mo2men165/3D-Shirt-Customizer"
  },
  {
    title: 'iPhone Store',
    desc: 'Apple product showcase and e-commerce',
    subdesc: "Immersive Apple product showcase built with **React** and **Vite**, featuring advanced animations with **GSAP** and 3D product visualization using **Three.js**. Includes error tracking with **Sentry** for production monitoring. The UI showcases meticulous attention to Apple's design language with smooth transitions and micro-interactions.",
    href: 'https://iphone-pied.vercel.app/',
    logo: '/images/apple.svg',
    logoStyle: {
      backgroundColor: '#000000',
      border: '0.2px solid #a6a6a6',
      boxShadow: '0px 0px 20px 0px rgb(166, 166, 166)'
    },
    spotlight: '/images/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' },
      { id: 2, name: 'Vite.js', path: '/images/vite.svg' },
      { id: 3, name: 'GSAP', path: '/images/gsap-white.svg' },
      { id: 4, name: 'Three.js', path: '/images/three-js.png' },
      { id: 5, name: 'Sentry', path: '/images/sentry-icon.svg' }
    ],
    githubLink: "https://github.com/mo2men165/Iphone"
  },
  {
    title: 'Metaversus',
    desc: 'A VR experience that allows you to explore different worlds',
    subdesc: 'VR platform landing page built with **Next.js** for optimized performance, featuring fluid animations with **Framer Motion** and responsive design with **Tailwind CSS**. The project showcases modern web techniques including lazy loading, smooth scroll effects, and attention-grabbing hover states for an immersive experience.',
    href: 'https://mo2men165.github.io/Metaversus/',
    logo: '/images/metaversus.png',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #ADADAD',
      boxShadow: '0px 0px 20px 0px rgb(173, 173, 173)'
    },    
    spotlight: '/images/spotlight5.png',
    tags: [
      { id: 1, name: 'Next.js', path: '/images/next-icon.svg' },
      { id: 2, name: 'React.js', path: '/images/react.svg' },
      { id: 3, name: 'TailwindCSS', path: '/images/tailwindcss.png' },
      { id: 4, name: 'Framer Motion', path: '/images/framer.png' }
    ],
    githubLink: "https://github.com/mo2men165/Metaversus"
  },
  {
    title: 'HooBank',
    desc: 'Next-generation digital banking platform',
    subdesc: 'Modern fintech landing page built with **React** and **Vite** for fast development, featuring gradient-rich UI with **Tailwind CSS**. The design system includes carefully crafted components with attention to financial UX patterns, responsive layouts for all devices, and performance-optimized asset loading.',
    href: 'https://mo2men165.github.io/HooBank/',
    logo: '/images/hoobank.png',
    logoStyle: {
      backgroundColor: '', // White background
      border: '0.2px solid #40E0D0', // Turquoise border
      boxShadow: '0px 0px 15px 0px rgb(64, 224, 208)' // Turquoise glow
    },
    spotlight: '/images/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' },
      { id: 2, name: 'Vite.js', path: '/images/vite.svg' },
      { id: 3, name: 'TailwindCSS', path: '/images/tailwindcss.png' }
    ],
    githubLink: "https://github.com/mo2men165/HooBank"
  },
  {
    title: 'Brainwave AI',
    desc: 'Cutting-edge AI chatbot interface',
    subdesc: 'AI platform built with **React** and **Vite**, featuring animated gradients and modern UI components styled with **Tailwind CSS**. The interface demonstrates elite design principles with perfect color contrast, thoughtful micro-interactions, and responsive layouts that adapt beautifully across all device sizes.',
    href: 'https://brainwave-jet-zeta.vercel.app/',
    logo: '/images/brainwave.svg',
    logoStyle: {
      backgroundColor: '',
      border: '0.2px solid #AC6AFF',
      boxShadow: '0px 0px 15px 0px #AC6AFF'
    },
    spotlight: '/images/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' },
      { id: 2, name: 'Vite.js', path: '/images/vite.svg' },
      { id: 3, name: 'TailwindCSS', path: '/images/tailwindcss.png' }
    ],
    githubLink: "https://github.com/mo2men165/Brainwave"
  },
  {
    title: 'Shoppy Dashboard',
    desc: 'Feature-rich admin dashboard with comprehensive analytics',
    subdesc: 'Professional dashboard built with **React** and **Syncfusion** component library, featuring data visualization charts, calendar widgets, and management tools. Styled with **Tailwind CSS** for customizable utility classes, the UI demonstrates clean information architecture and thoughtful data hierarchy for business applications.',
    href: 'https://mo2men165.github.io/Shoppy-Dashboard/',
    logo: '/images/shoppy.png',
    logoStyle: {
      backgroundColor: '#FFFFFF',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 15px 0px #fff'
    },
    spotlight: '/images/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' },
      { id: 2, name: 'Syncfusion', path: '/images/syncfusion.png' },
      { id: 3, name: 'TailwindCSS', path: '/images/tailwindcss.png' }
    ],
    githubLink: "https://github.com/mo2men165/Shoppy-Dashboard"
  },
  {
    title: 'GPT-3 Landing Page',
    desc: 'Showcase of OpenAI\'s revolutionary language model',
    subdesc: 'Marketing page for GPT-3 built with **React**, demonstrating elite design principles with perfect typography hierarchy, balanced white space, and strategic color usage. The single-page application features smooth section transitions, responsive layouts, and accessibility-focused markup that meets WCAG standards.',
    href: 'https://mo2men165.github.io/GPT3/',
    logo: '/images/gpt3.png',
    logoStyle: {
      backgroundColor: '#F5F5F7', // Light gray/silver background
      border: '0.2px solid #333333', // Dark gray border
      boxShadow: '0px 0px 15px 0px #fff' // Subtle shadow for depth
    },
    spotlight: '/images/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' }
    ],
    githubLink: "https://github.com/mo2men165/GPT3"
  },
  {
    title: 'Gericht Restaurant',
    desc: 'Premium dining experience website',
    subdesc: 'Restaurant website built with **React**, featuring an elite culinary design aesthetic with premium typography, sophisticated color palette, and meticulous attention to detail in spacing and layout. The UI demonstrates mastery of visual hierarchy with carefully balanced imagery and text for an elegant dining experience.',
    href: 'https://mo2men165.github.io/Gericht-Restaurant/',
    logo: '/images/gericht.png',
    logoStyle: {
      backgroundColor: '#FFFFFF',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 15px 0px #fff'
    },
    spotlight: '/images/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/images/react.svg' }
    ],
    githubLink: "https://github.com/mo2men165/Gericht-Restaurant"
  }
];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: "/images/linkedin.png", 
      url: "https://linkedin.com/in/yourprofile",
      color: "bg-blue-600"
    },
    { 
      name: "GitHub", 
      icon: "/images/github.svg", 
      url: "https://github.com/yourusername",
      color: "bg-gray-800"
    },
    // { 
    //   name: "Upwork", 
    //   icon: "/images/upwork.svg", 
    //   url: "https://upwork.com/freelancers/yourusername",
    //   color: "bg-green-600"
    // },
    // { 
    //   name: "Fiverr", 
    //   icon: "/images/fiverr.svg", 
    //   url: "https://fiverr.com/yourusername",
    //   color: "bg-purple-500"
    // }
  ];

export {
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
  myProjects,
  portfolioProjects,
  additionalSkills,
  socialLinks
};
