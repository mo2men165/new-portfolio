import ContactSection from './components/ContactSection'
import MernStackSkillsDisplay from './components/MernStackSkillDisplay'
import PersonalHero from './components/PersonalHero'
import PersonalInfo from './components/PersonalInfo'
import ProjectShowcase from './components/ProjectShowcase'

const About = () => {
  return <>
    <PersonalHero />
    <ProjectShowcase />
    <PersonalInfo />
    <MernStackSkillsDisplay />
    <ContactSection />
    </>
}

export default About