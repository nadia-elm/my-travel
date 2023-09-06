import React from 'react'
import { Title } from './Title.js'
import { services} from '../data.js'


export const Services = () => {
  return (
    <div>
      <section class='section services' id='services'>
        <Title title='our' subtitle='services' />
        <div class='section-center services-center'>
          {services.map((service) => {
            return (
              <article className='service'>
                <span className='service-icon'>
                  <i className={service.icon}></i>
                </span>
                <div className='service-info'>
                  <h4 className='service-title'>{service.title}</h4>
                  <p className='service-text'>{service.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
