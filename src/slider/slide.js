import React from 'react'

const Slide = ({id, activeSlide, children}) => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      opacity: activeSlide == id ? 1 : 0,
      transition: 'all 1s ease-in-out'}}>
      <div>
        {children}
      </div>
      <img
        src={`/img/${id}.jpg`}
        style={{
          height: "100vh",
          zIndex: 0,
          position: 'absolute'}}/>
    </div>
  )
}

export default Slide
