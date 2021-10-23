import React from 'react';
import styles from './aboutMe.module.css'

export interface IAboutMeProps {
}

export default function AboutMe(): JSX.Element {
  return (
    <section className={styles.about_me_section_wrapper}>
      <span>About Me </span><span>in 30sec</span>
      <p>
        Creative Front End Developer, passionate Mobile App Developer 
        who writes clean, elegant and efficient code currently based in INDIA and having an experience 
        of building web application with JavaScript / ReactJS / NextJS / NodeJS and Cross-platform Mobile 
        applications with Flutter. I am always experimenting always learning and never bored.
        <a href={`${window.location}/assets/profile_pic.jpeg`} download="surya-dev.jpeg"> Download my Resume</a>
      </p>
    </section>
  );
}
