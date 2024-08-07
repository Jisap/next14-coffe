"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import Badge from "./Badge"
import Separator from "./Separator"

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description: "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time."
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description: "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description: "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
  },
]

const About = () => {

  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useLayoutEffect(() => {                             // useLayoutEffect asegura que la animación esté lista antes de que el usuario vea cualquier contenido.
    gsap.registerPlugin(ScrollTrigger)                // Registra el plugin ScrollTrigger de GSAP y configura e inicia la animación GSAP antes de que el navegador pinte el DOM
    
    const animation = gsap.fromTo(                    // Este método crea una animación que va desde un estado inicial a un estado final.                
      scrollableSectionRef.current,                   // Es el elemento del DOM que se va a animar.
      { translateX: 0 },                              // La animación comienza con el elemento en su posición original                         
      {
        translateX: "-200vw",                         // La animación moverá el elemento 200 viewports width (vw) hacia la izquierda.
        ease: "none",                                 // La animación progresará de manera lineal, sin aceleración ni desaceleración.
        duration: 1,                                  // La duración base de la animación es 1 segundo, pero esto se modifica por el scrub en ScrollTrigger.
        
        scrollTrigger: {                              // Esta es la parte clave que vincula la animación al scroll de la página 
          trigger: scrollTriggerRef.current,          // a el elemento que activa la animación cuando entra en la vista.
          start: "top top",                           // La animación comienza cuando la parte superior del trigger alcanza la parte superior de la ventana
          end: "1800vw top",                          // La animación termina cuando se ha desplazado 1800vw desde el punto de inicio.
          scrub: 0.6,                                 // El valor 0.6 añade un pequeño retraso para suavizar el efecto.
          pin: true,                                  // Esto mantiene el contenido visible mientras se desplaza horizontalmente.
        },
        
      }
    );

    return () => {
      animation.kill();
    }
  },[])

  return (
    <section className="overflow-hidden bg-primary" id="about">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => {
            return(
              <div 
                key={index} 
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    
                    {/* text */}
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div className="max-w-[650px] text-center">
                        {/* title */}
                        <h2 className="h2 text-white mb-4">
                          <span className="mr-4">{item.title.split(" ")[0]}</span>
                          <span className="text-accent">{item.title.split(" ")[1]}</span>
                        </h2>
                        {/* separator */}
                        <div className="mb-8">
                          <Separator />
                        </div>
                        {/* description */}
                        <p className="leading-relaxed mb-16 px-8 xl:px-0">{item.description}</p>
                        {/* btn */}
                        <button className="btn">See more</button>
                      </div>
                    </div>

                    {/* image */}
                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image 
                        src={item.imgSrc}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        alt=""
                      />
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About