import React, { useState } from 'react';

const Header = () => {
  const [projects, setProjects] = useState('Hello.')
  const [about, setAbout] = useState('I am')
  const [contact, setContact] = useState('Esteban Diaz')
  return (
    <>
      <div className="header-container">
        <div id="text">
          <div id="projects">
            <h1 onMouseEnter={() => setProjects('Projects')}
            onMouseLeave={() => setProjects('Hello.')}>{projects}</h1>
            <h1 onMouseEnter={() => setAbout('About')}
            onMouseLeave={() => setAbout('I am')}>{about}</h1>
            <h1 onMouseEnter={() => setContact('Contact')}
            onMouseLeave={() => setContact('Esteban Diaz')}>{contact}</h1>

          </div>
          {/* <div id="about"><h1>I am</h1></div>
          <div id="contact"><h1>Esteban</h1></div> */}
        </div>

        {/* <div id="image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png" width="50px"/>
        </div> */}
      </div>
    </>
  )
}

export default Header