import {useState, useEffect, useRef} from 'react'
import '../pages.css'

import { motion } from 'framer-motion'

import image1 from '../../../../public/imgs/carrossel-index/img1.png'
import image2 from '../../../../public/imgs/carrossel-index/img2.png'
import image3 from '../../../../public/imgs/carrossel-index/img3.png'
import image4 from '../../../../public/imgs/carrossel-index/img4.png'
import image5 from '../../../../public/imgs/carrossel-index/img5.png'
import image6 from '../../../../public/imgs/carrossel-index/img6.png'

const image = [image1, image2, image3, image4, image5, image6]

function Carrossel(){

  const carousel = useRef();
  const [width, setWidth] = useState(0)
  useEffect(() =>{
    //console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current?.offsetWidth)

  }, [])

  return (
    <>
      <div className="carro">
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor : 'grabbing'}}>

          <motion.div className='inner' drag='x' dragConstraints={{right: 0, left: -width}}
            initial={{x: 100}}
            animate={{x: 0}}
            transition={{duration: 0.8}}>

              {image.map(image =>(
                <motion.div className='item2' key={image}>
                  <img src={image} alt='texto alt'/>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Carrossel