import React, {Component} from 'react'
import Slide from './slide'
import Dots from './dots'

class Slider extends Component {

  constructor(){
    super()
    this.state = { activeSlide: 0 }
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.pause = this.pause.bind(this)
    this.play = this.play.bind(this)
    this.indicatorClick = this.indicatorClick.bind(this)
    this.slideCount = 20
  }

  componentDidMount() {
    this.play()
    window.onkeyup = (event) => {
      let left = 37
      let right = 39
      let p = 80
      if(event.keyCode == left){
        this.prev()
      }
      if(event.keyCode == right){
        this.next()
      }
      if(event.keyCode == p){
        if(this.interval) {
          this.pause()
        } else {
          this.play()
        }
      }
    }
  }

  pause(){
    if(this.interval) this.interval = window.clearInterval(this.interval)
  }

  play(){
    this.interval = window.setInterval(() => {
      this.next()
    }, 3000)
  }

  next() {
    this.setState({
      activeSlide: this.state.activeSlide < this.slideCount ? this.state.activeSlide + 1 : 0
    })
  }

  prev() {
    this.setState({
      activeSlide: this.state.activeSlide > 0 ? this.state.activeSlide - 1 : this.slideCount
    })
  }

  indicatorClick(activeSlide) {
    this.pause()
    this.setState({
      activeSlide: activeSlide
    })
    this.play()
  }

  render() {
    console.log(this.state.activeSlide)
    let slides = []
    for(let i = 0; i <= this.slideCount; i++){
      slides.push(
        <Slide key={i} id={i} activeSlide={this.state.activeSlide}/>
      )
    }
    return (
      <div style={{
        filter: 'grayscale(1) contrast(1.3)',
        position: 'relative'}}>
        {slides}
        <img src={`/img/0.jpg`} style={{
          height: "95vh",
          zIndex: 0,
          opacity: 0,
          position: 'relative'}}/>
        <Dots
          onClick={(activeSlide) => {this.indicatorClick(activeSlide)}}
          slideCount={this.slideCount}
          activeSlide={this.state.activeSlide} />
      </div>
    )
  }
}

export default Slider
