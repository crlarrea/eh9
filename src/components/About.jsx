import React from 'react'
import { about } from '../assets/data/data'
export const About = () => {
  return (
    <section className='about'>
      
            {about.map(entry=>{
                return(
                    <article>
                    <h3>{entry.title}</h3>
                    {entry.body.split('\n').map(paragraph=>{
                        return(<p>{paragraph}</p>)
                    })}
                    <img src={entry.image} loading='lazy'/>
        </article>
                )
            })}

    </section>
  )
}
