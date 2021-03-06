import React , {useEffect,useState} from 'react';
import styles from './aboutMe.module.css'

export interface IAboutMeProps {
}

export default function AboutMe(): JSX.Element {
  const [location, setLocation] = useState<Location|null>(null)
  React.useEffect(() => {
    setLocation(window.location);
  }, [])

  return (
    <section className={styles.about_me_section_wrapper}>
      <span>About Me </span><span>in 30sec</span>
      <p>
        Creative Front End Developer, passionate Mobile App Developer 
        who writes clean, elegant and efficient code currently based in INDIA and having an experience 
        of building web application with JavaScript / ReactJS / NextJS / NodeJS and Cross-platform Mobile 
        applications with Flutter. I am always experimenting always learning and never bored.
        <a href={`${location}/assets/surya_resume.pdf`} download="surya_dev_resume.pdf"> Download my Resume</a>
      </p>
    </section>
  );
}
