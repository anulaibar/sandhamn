import React from 'react'

const SliderIndicatorBall = ({onClick, active}) => {

  return (
    <div onClick={() => { onClick() }} style={{
      width: '1vw',
      height: '1vw',
      cursor: 'pointer',
      transition: 'all .5s linear',
      backgroundColor: active ? 'white' : 'gray',
      borderRadius: '50%'}}>
    </div>
  )
}

export default SliderIndicatorBall
