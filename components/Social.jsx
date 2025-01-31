import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaInstagram, FaDiscord} from "react-icons/fa"

const social = [
  {icon: <FaGithub />, path: 'https://github.com/DaudRazzaq'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/daud-razzaq-3a3892233/'},
  {icon: <FaInstagram />, path: 'https://www.instagram.com/daud_razzaq_/'},
 // {icon: <FaDiscord />, path: 'https://discord.com/channels/@me'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
              {item.icon}
          </Link> 
        );
      })} 
    </div>
  )
}

export default Social