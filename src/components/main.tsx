import { useEffect, useRef } from 'react'
import { Home } from './home/home'
import { Navbar } from './navbar/navbar'
import { Sidebar } from './sidebar/sidebar'
import { SkillStrip } from './skillStrip/skillStrip'
import { Aboutme } from './aboutme/aboutme'
import { Skills } from './skills/skills'
import { Projects } from './projects/projects'
import { Education } from './education/education'
import { Experience } from './experience/experience'
import { Contact } from './contact/contact'
import { Footer } from './footer/footer'
import { Sidenav } from './sidenav/sidenav'

export const Main = () => {
  const homeRef = useRef<HTMLElement | null>(null)
  const aboutMeRef = useRef<HTMLElement | null>(null)
  const skillsRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const educationRef = useRef<HTMLElement | null>(null)
  const experienceRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  const refs = {
    home: homeRef,
    aboutMe: aboutMeRef,
    skills: skillsRef,
    education: educationRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
  }

  // 👇 Intersection Observer for triggering effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            console.log(entry.target)
          } else {
            entry.target.classList.remove("animate-fade-in")
          }
        })
      },
      { threshold: 0.3 }
    )

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="w-full bg-[#f5f5f5]">
      <Navbar refs={refs} />
      <Sidebar />
      <Sidenav refs={refs} />

      {/* <div className='block md:hidden'>
      <Home homeRef={homeRef}/>
      <SkillStrip />
      <Aboutme aboutMeRef={aboutMeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Experience experienceRef={experienceRef}/>
      <Education educationRef={educationRef}/>
      <Contact contactRef={contactRef}/>
      </div> */}
    
    {/* <div className='hidden md:block w-full'> */}
      <section ref={homeRef} className="opacity-0 transition-all duration-700">
        <Home homeRef={homeRef}/>
      </section>
    <section ref={aboutMeRef} className="opacity-0 transition-all duration-700">
        <Aboutme aboutMeRef={aboutMeRef}/>
      </section>
       <SkillStrip />
      <section ref={skillsRef} className="opacity-0 transition-all duration-700">
        <Skills skillsRef={skillsRef}/>
      </section>

      <section ref={projectsRef} className="opacity-0 transition-all duration-700">
        <Projects projectsRef={projectsRef}/>
      </section>

      <section ref={experienceRef} className="opacity-0 transition-all duration-700">
        <Experience experienceRef={experienceRef}/>
      </section>

      <section ref={educationRef} className="opacity-0 transition-all duration-700">
        <Education educationRef={educationRef}/>
      </section>

      <section ref={contactRef} className="opacity-0 transition-all duration-700">
        <Contact contactRef={contactRef}/>
      </section>
    {/* </div> */}
  

      <Footer />
    </main>
  )
}