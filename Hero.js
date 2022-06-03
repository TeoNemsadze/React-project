import React from "react";
import phoneImg from './images/phone.svg';
import { useGlobalContext } from "./context";

const Hero = () => {
   const {closeSubmenu} = useGlobalContext()

   return (
   <section className='hero' onMouseOver={closeSubmenu}>
       <div className="hero-center">
           <article className="hero-info">
               <h1>Payments</h1>
               <p>Google  is an American multinational technology company that
                    focuses on artificial intelligence,[10]
                    search engine, online advertising, cloud computing, computer software, quantum 
                     powerful company in the world" and one of the world's most valuable brands
                      due to its market dominance, data collection, and technological advantages in the area of artificial intelligence.
                    It is considered one of the Big Five American information technology
                    companies, alongside Amazon, Apple, Meta, and Microsoft.</p>
                <button className="btn">Start now</button>
           </article>
           <article className='hero-images'>
               <img src={phoneImg} className='phone-img' alt='phone' />
           </article>
       </div>
   </section>
   )
}
export default Hero;