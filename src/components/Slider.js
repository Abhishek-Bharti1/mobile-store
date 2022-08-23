import { Carousel } from 'bootstrap'
import React from 'react'
import { CarouselItem } from 'react-bootstrap'
// import { CarouselItem } from 'react-bootstrap'

const Slider = ({start}) => {
  return (
  <Carousel>
{start.map((item,index)=>(
<CarouselItem>
    <img className='d-block w-100'
    src={item}
    alt='First slide'
    />
</CarouselItem>
))}
  </Carousel>
  )
}

export default Slider