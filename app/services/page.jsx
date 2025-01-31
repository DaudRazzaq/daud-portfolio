"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Professional web development services for modern, responsive websites. Boost engagement with fast, user-friendly designs and clean code.',
    href: '/services/web-development'
  },
  {
    num: '02',
    title: 'Mobile Application Development',
    description: 'Expert mobile app development using React Native and Flutter. Build high-performance, scalable apps for iOS and Android.',
    href: '/services/mobile-app-development'
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'Creative UI/UX design services for intuitive, visually stunning interfaces. Enhance user experience with accessible and engaging designs.',
    href: '/services/ui-ux-design'
  },
  {
    num: '04',
    title: 'Logo Design',
    description: 'Custom logo design services for unique, memorable branding. Create impactful visuals that reflect your brand identity.',
    href: '/services/logo-design'
  },
  {
    num: '05',
    title: 'SEO',
    description: 'Data-driven SEO services to improve search rankings, drive organic traffic, and increase online visibility.',
    href: '/services/seo'
  }
]

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
        initial={{ opacity: 0}}
        animate={{ 
          opacity: 1, 
          transition: { duration: 0.4, delay: 2.4, ease: "easeIn"},
          }}
        className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index)=> {
            return (
              <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                {/* top */}
                <div className="flex items-center justify-between w-full">
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{services.num}</div>
                  <Link href={services.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all durarion-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
                {/* title */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{services.title}</h2>
                {/* description */}
                <p className='text-white/60'>{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services