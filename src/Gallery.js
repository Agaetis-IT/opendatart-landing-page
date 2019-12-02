import React, { useState } from 'react'
import ReactSwipe from 'react-swipe'
import heroImg from "./images/hero.jpg"
import cute from "./images/cute.png"
import { CardMedia, IconButton, makeStyles } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons'

const images = [heroImg, cute]

const useStyles = makeStyles({
    root: {
      height: 500,
      position: 'relative',
    },
    swipe: {
      maxHeight: 'inherit',
    },  
    image: {
      height: 534,
      width: '100%',
    },
    landscape: {
      height: 242,
      width: '100%',
    },
    arrowBack: {
      position: 'absolute',
      top: 240,
      left: 0,
      color: 'white',
    },
    arrowBackLandscape: {
      position: 'absolute',
      top: 90,
      left: 0,
      color: 'white',
    },
    arrowForward: {
      position: 'absolute',
      top: 240,
      right: 0,
      color: 'white',
    },
    arrowForwardLandscape: {
      position: 'absolute',
      top: 90,
      right: 0,
      color: 'white',
    },
})

const Gallery = () => {
    const classes = useStyles()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const reactSwipeEl = React.createRef()

    const handleClickNext = () => {
        reactSwipeEl.current.next()
        setCurrentImageIndex(currentImageIndex + 1)
      }
      const handleClickPrev = () => {
        reactSwipeEl.current.prev()
        setCurrentImageIndex(currentImageIndex - 1)
      }

    return (
        <div className={classes.root}>
            <ReactSwipe
            swipeOptions={{auto: 4000}}
            //{{ continuous: false, disableScroll: true }}
            childCount={images.length}
            ref={reactSwipeEl}
            className={classes.swipe}
        >
            {images.map((image, index) => (
                <CardMedia
                    image={image}
                    key={index}
                    className={classes.image}
                    /*classNames(landscape ? classes.landscape : */
                    //onClick={() => onImageClicked && onImageClicked(image, currentImageIndex)}
                />
            ))}
        </ReactSwipe>
        {currentImageIndex < images.length - 1 && (
            <IconButton
            onClick={handleClickNext}
            /*landscape ? classes.arrowForwardLandscape : */
            className={classes.arrowForward}
            >
            <ChevronRight style={{ fontSize: 50 }} />
            </IconButton>
        )}
        {currentImageIndex !== 0 && images.length > 1 && (
            <IconButton onClick={handleClickPrev} className={classes.arrowBack}>
            <ChevronLeft style={{ fontSize: 50 }} />
            </IconButton>
        )}
      </div>
    )
}

export default Gallery
