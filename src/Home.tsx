import ContactSection from "./components/ContactSection"
import { ExperienceTimeline } from "./components/ExperienceSection"
import Hero from "./components/Hero"
// import MernStackSkillsDisplay from "./components/MernStackSkillDisplay"
import SimplifiedSkillsSection from "./components/SimplifiedSkillsSection"
import { SimpleProjectShowcase } from "./components/ProjectsSection"
import TestimonialsMasonryGrid from "./components/TestimonialsMasonryGrid"

const Home = () => {
  return (
    <>
      <Hero />
      <SimpleProjectShowcase />
      <ExperienceTimeline />
      {/* <MernStackSkillsDisplay /> */}
      <SimplifiedSkillsSection />
      <TestimonialsMasonryGrid />
      <ContactSection />
    </>
  )
}

export default Home