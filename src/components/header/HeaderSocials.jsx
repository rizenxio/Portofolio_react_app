import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com" target="_blank"><BsGithub /></a>
        <a href="http://instagram.com" target="_blank"><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials