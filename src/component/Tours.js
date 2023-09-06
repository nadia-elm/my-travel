import React from 'react'
import {tours} from '../data.js'
import { Title } from './Title.js'



export const Tours = () => {
  return (
    <div>
      <section class='section' id='tours'>
        <Title  title='featured' subtitle='tours'/>
        

        <div class='section-center featured-center'>
          {tours.map((t) => {
            return (
              <article class='tour-card'>
                <div className='tour-img-container'>
                  <img src={t.image} class='tour-img' alt='' />
                  <p class='tour-date'>{t.date}</p>
                </div>
                <div class='tour-info'>
                  <div class='tour-title'>
                    <h4>{t.title}</h4>
                  </div>
                  <p>
                    {t.info}
                  </p>
                  <div class='tour-footer'>
                    <p>
                      <span>
                        <i class='fas fa-map'></i>
                      </span>{' '}
                      {t.location}
                    </p>
                    <p>{t.duration}</p>
                    <p>${t.cost}</p>
                  </div>
                </div>
              </article>
            )
          })}
          

          
        </div>
      </section>
    </div>
  )
}
