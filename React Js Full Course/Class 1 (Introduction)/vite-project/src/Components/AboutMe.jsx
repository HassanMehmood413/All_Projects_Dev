import React from 'react'

export default function AboutMe() {
  const handleContactClick = () => {
    window.location.href = 'https://mail.google.com/mail/?view=cm&to=ihassan463m@gmail.com';
  };

  return (
    <div>
      <div className="maincontainer">

        <div className="aboutme">
          <h1>About Me</h1>

          <div className="bottomline">

          </div>

          <div className="para">
            <p> Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology</p>
          </div>
        </div>

        <div className="gridcolumn">

          <div className="onecolumn">
            <div className="knowme">

              <h2>Get To Know Me</h2>
              <p className='p1'>
                I'm a
                <strong> Front-End Web Developer </strong>
                building
                and managing the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the
                <strong> Projects </strong>section
              </p>

              <p className='p2'>
                I also like sharing content related to the stuff that I have
                learned over the years in
                <strong> Web Development </strong>
                so it
                can help other people of the Dev Community. Feel free to Connect
                or Follow me on my
                <a href="#" target='_blank'> Linkedin </a>
                where I post useful content related to Web Development and
                Programming
              </p>
            </div>

            <div className="button">
              <button onClick={handleContactClick} >Contact Me</button>
            </div>

          </div>

          <div className="secondcolumn">
            <div className="skills">
              <h2>Skills</h2>
              <div className="skills">
                <div className="skills__skill">Panda</div>
                <div className="skills__skill">Python</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">Typescript</div>
                <div className="skills__skill">C++</div>
                <div className="skills__skill">DSA</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">Wordpress</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">Github</div>
                <div className="skills__skill">Responsive Design</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
