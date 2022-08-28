import React from 'react'
import me from '../img/me.jpg' 

function Content() {
  return (
    <div className='content'>
      <main>
        <div>
          <h1>Hi</h1>
          <h1>I'm Kosei</h1>
          <h1>Front-end developer</h1>
          <p>I design and developer experiences that make people's lives simpler through Web and Mobile Apps. I work with HTML5, CSS3, JavaScript, React</p>
        </div>
        <div className='buttons'>
          <button className="cta hire">HIRE ME</button>
          <button className="cta project">SEE MY PROJECTS</button>
        </div>
      </main>
        <img src={me} alt="Kosei" className='me-img' width={350} /> 
    </div>
  )
}

export default Content