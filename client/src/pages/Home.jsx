import Hero from './Hero'
import Service from './Service'
import AboutUs from './AboutUs'
import ContactSection from './ContactSection'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const {hash} = useLocation();
  useEffect(()=>{
    if (hash) {
      const id = hash.replace('#', "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior:'smooth'
        });
      } else{
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  },[hash])
  return (
    <>
      <section id='hero'><Hero/></section>
      <section id='services'><Service/></section>
      <section id='about'><AboutUs/></section>
      <section id='contact'><ContactSection/></section>
    </>
  )
}

export default Home
