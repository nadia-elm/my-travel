import React from 'react'

export const Hero = () => {
  return (
    <div>
      <section class='hero' id='home'>
        <div class='hero-banner'>
          <h1>
            Welcome to <span>my</span>
            <span id="logo">Travel</span> Tours
          </h1>
          <p>
            myTravel is a major travel company based in Morocco, entirely
            dedicated to the travel industry. It is a business-to-business
            provider for wholesalers, travel operators, corporate companies as
            well as sport organizations.
          </p>
          <a href='#tours' class='btn hero-btn'>
            explore tours
          </a>
        </div>
      </section>
    </div>
  )
}
