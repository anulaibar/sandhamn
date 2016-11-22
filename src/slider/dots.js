import React from 'react'
import Dot from './dot'

const Dots = ({onClick, slideCount, activeSlide}) => {

  let dots = []
  for(let i = 0; i <= slideCount; i++){
    dots.push(
      <Dot key={i} active={activeSlide == i} onClick={() => {onClick(i)}}/>
    )
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
      bottom: '1em'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: slideCount * 3 + 'vw'}}>
        {dots}
      </div>
    </div>
  )
}

export default Dots
