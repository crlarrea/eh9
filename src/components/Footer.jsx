import React from 'react'
import {contact} from '../assets/data/data'
export const Footer = () => {
  return (
    <>
    <article>
        <ul>
            {contact.map(el=>{
                return(<li>
                    <a href={el.url} target='_blank' rel='noopener noreferrer'>{el.icon}</a>
                    </li>)
            })}
        </ul>
    </article>
    <article>        
    </article>
    </>
  )
}
