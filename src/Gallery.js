import React, { useState, useEffect } from 'react'
import ReactSwipe from 'react-swipe'
import nyc from "./images/gallery/image-porto-cab.png"
import nyc2 from "./images/gallery/image-nyc-cab2.png"
import porto from "./images/gallery/image-porto-cab2.png"
import porto2 from "./images/gallery/image-porto-cab4.png"
import nyc3 from "./images/gallery/points1B-log-green-orange.png"
import nyc4 from "./images/gallery/points16 (1).png"
import nyc5 from "./images/gallery/points16.png"
import tshirt from "./images/gallery/tshirt.jpg"
import hat from "./images/gallery/hat.jpg"
import {  IconButton, makeStyles, } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import useInterval from './useInterval'
import mediumZoom from 'medium-zoom';
import clsx from 'clsx';

const images = [nyc, nyc2, nyc3, nyc4, nyc5, tshirt, porto, porto2, hat]

const useStyles = makeStyles({
    root: {
      height: '100vw',
      maxHeight: 534,
      marginTop: 50,
      position: 'relative',
    },
    swipe: {
      maxHeight: 'inherit',
      '& > div': {
        display: 'flex'
      }
    },  
    image: {
      maxHeight: 534,
      maxWidth: '100%',
    },
    arrowBack: {
      position: 'absolute',
      top: 240,
      left: 0,
      color: '#bbb',
      '@media screen and (max-width: 534px)': {
        top: '33vw'
      }
    },
    arrowForward: {
      position: 'absolute',
      top: 240,
      right: 0,
      color: '#bbb',
      '@media screen and (max-width: 534px)': {
        top: '33vw'
      }
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
})

const Gallery = () => {
    const classes = useStyles()
    const [isAutoSwipeActive, setAutoSwipeActive] = useState(true)
    const reactSwipeEl = React.createRef()

    useInterval(() => {
      handleNext()
    }, isAutoSwipeActive ? 5000 : null);

    const handleNext = (e) => {
      e && e.stopPropagation()
      reactSwipeEl.current.next()
    }
    const handlePrev = (e) => {
      e.stopPropagation()
      reactSwipeEl.current.prev()
    }

    const toggleAutoSwipe = (forceStatus) => () => {
      return setAutoSwipeActive(forceStatus)
    }
    
    useEffect(() => {
      setTimeout(() => {
        const images = [
          ...document.querySelectorAll('[data-zoomable]'),
        ]
        mediumZoom(images, { background: '#333' })
      }, 2000)
    }, [])

    return (
      <div>
        <div className={classes.root} onMouseOver={toggleAutoSwipe(false)} onMouseOut={toggleAutoSwipe(true)}>
            <ReactSwipe
            childCount={images.length}
            ref={reactSwipeEl}
            className={classes.swipe}
        >
            {images.map((image, index) => (
              <div key={index} className={clsx(classes.image, classes.wrapper)}>
                <img
                  src={image}
                  data-zoomable
                  className={classes.image}
                  style={{ backgroundColor: 'black' }}
                />
              </div>
            ))}
        </ReactSwipe>
        <IconButton
        onClick={handleNext}
        /*landscape ? classes.arrowForwardLandscape : */
        className={classes.arrowForward}
        >
        <ChevronRight style={{ fontSize: 50 }} />
        </IconButton>
        <IconButton onClick={handlePrev} className={classes.arrowBack}>
        <ChevronLeft style={{ fontSize: 50 }} />
        </IconButton>
      </div>
      </div>
    )
}

export default Gallery
