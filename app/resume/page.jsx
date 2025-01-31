"use client";

import { Info } from 'lucide-react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython } from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs } from 'react-icons/si'

// about data
const about = {
  title: 'About Me', 
  description: " .",
  Info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Daud Razzaq Khan"
    },
    {
      fieldName: "Phone",
      fieldValue: "+92 315 016 6360"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years"
    },
    {
      fieldName: "Age",
      fieldValue: "21"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani"
    },
    {
      fieldName: "Languages",
      fieldValue: "English,French, Urdu "
    },
    {
      fieldName: "Email",
      fieldValue: "daudrazzaq7890@gmail.com"
    },
  ]
}

// experience data
const experience = {
  icon: '',
  title: 'My Experience',
  description: 'Frontend Developer with expertise in HTML, CSS, JavaScript, React, Next.js, React Native, Node.js, and Python. Experienced in building intuitive, high-quality web and mobile applications. Passionate about solving real-world problems through code and delivering seamless user experiences. Skilled in both front-end and back-end development, committed to creating functional, user-friendly, and impactful solutions.',
  items: [
    {
      company: "Funtash",
      position: "Internship in Front-end Development",
      duration: "Jan-May, 2024"
    },
    {
      company: "IIUI Research Lab",
      position: "Internship in Machine learning",
      duration: "July-August, 2023"
    },
    {
      company: "Soluton of Technology",
      position: "Learn Languagues (C++ and OOP)",
      duration: "July-August, 2024"
    },
  ]
}

// education data
const education = {
  icon: '',
  title: 'My Education',
  description: '',
  items: [
    {
      institute: "COMSATS University Islamabad, Abbottabad Campus",
      degree: "Bs Software Engineering",
      duration: "2021 - present"
    },
    {
      institute: " Coursera",
      degree: "Specialization Meta React Native",
      duration: "2024"
    },
    {
      institute: "Coursera",
      degree: "Developing Front-end Apps with React",
      duration: "2024"
    },
    {
      institute: "Coursera",
      degree: "Programming with JavaScript",
      duration: "2024"
    },
  ]
}

// skills data 
const skills = {
  icon: '',
  title: 'My Skills',
  description: 'I have a strong foundation in programming languages, specializing in C++, Data Structures and Algorithms (DSA), and Object-Oriented Programming (OOP). Skilled in various development languages and frameworks, I design efficient, scalable, and maintainable solutions. With a problem-solving mindset, I tackle complex challenges and deliver high-quality results.',
  items: [
    {
      icon: <FaHtml5 />,
      name: 'HTML5',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'React JS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next JS',
    },
  
    {
      icon: <FaNodeJs />, 
      name: 'Node JS',
    },
    {
      icon: <FaPython />,
      name: 'Python',
    },
    {
      icon: <FaReact />,
      name: 'React Native',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
   
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
       }}
       className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='experience' 
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education" >Education</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="about" >About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-[#232329] h-[184px] py-6 px-10 rouunded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dots */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                        </li>
                      );
                    })}
                      
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-[#232329] h-[184px] py-6 px-10 rouunded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                            <div className='flex items-center gap-3'>
                              {/* dots */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                              <p className='text-white/60'>{item.institute}</p>
                            </div>
                        </li>
                      );
                    })}
                      
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.items.map((items, index) => {
                    return (
                      <li
                      key={index}
                      className="flex items-center gap-3"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{items.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{items.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.Info.map((items, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{items.fieldName}</span>
                        <span className='text-xl'>{items.fieldValue}</span> 
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume