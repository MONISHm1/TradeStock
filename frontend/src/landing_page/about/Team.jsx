import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5   text-muted ">
        <h2 className='text-center about-heading-crew'>TRADESTOCK  DEVELOPED BY </h2>
      </div>
      <div className="row p-5 about-people ">
        <div className="col-6 p-5 text-center">
          <img src='media\images\mypics.jpg' 
          alt='MONISH' 
          className='about-people-img'  
          style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  objectFit: "cover"
  }}>

  </img>
          <h5 className='mt-4'>MONISH KUMAR SHAH</h5>
          <h7>Full Stack Developer (MERN)</h7>
        </div>
        <div className="col-6 p-5">
          <p className='about-para'>I’m  Computer Science Engineer student, who is passionate about software development and web technologies. I enjoy building responsive and user-friendly applications using the MERN Stack . With a solid foundation in programming and a keen eye for design, I aspires to create innovative solutions that enhance user experiences.</p>
          <p className='about-para'> I am constantly expanding my skill set, staying updated with the latest technologies and trends in the industry.</p>
          <p className="about-para">Outside of Tech, I love Travelling which keep me motivated and inspired.</p>
          <p className='about-para'>Connect on <a href="https://www.linkedin.com/in/monish-m1/">LinkedIn</a> / <a href="https://github.com/MONISHm1">gitHub</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team
