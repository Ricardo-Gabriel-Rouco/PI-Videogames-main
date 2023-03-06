import React from 'react'
import styles from './About.module.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {Link } from 'react-router-dom'
import image from '../../assets/aboutphoto.jpeg'

function About() {
  const gitLink = 'https://github.com/Ricardo-Gabriel-Rouco'
  const linkedLink = 'https://www.linkedin.com/in/gabriel-rouco-437761246/'
  return (
    <div className={styles.aboutContainer}>
      <div >
      <h1 className={styles.littleTitle}>Ricardo Gabriel Rouco</h1>
      <img src={image} alt="" />
      <p>On road to become a full stack developer</p>
      <p>Learning CSS, HTML, REACT, REDUX, Node and SEQUELIZE</p>
      <div >
        <Link to={linkedLink}>
          <BsLinkedin className={styles.socials}/>
        </Link>
        <Link to={gitLink}>
        <BsGithub className={styles.socials}/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default About