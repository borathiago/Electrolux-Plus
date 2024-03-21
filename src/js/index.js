import { instance } from './instances.js'
import { Globals } from './controls/Globals.js'
import { Observer } from './utils/Observer.js'
import { Carousel } from './swiper/Carousel.js'


const hiddenElements = Globals.selectAllToArray('.animate-scroll-hidden')

if (hiddenElements.length > 0) {
    hiddenElements.map((element, index) => {
        element.classList.add(`${element.getAttribute('data-animate')}`)
        element.style.transitionDelay = `${((index + 1) * 1)}ms`
        window.onscroll = () => {
            if (element.classList.contains('show')) {
                element.classList.add(`${element.getAttribute('data-animate')}`)
                element.style.transitionDelay = `${((index + 1) * 1)}ms`
            }
        }
        new Observer().match.observe(element)
    })
} else {
    if (instance.env === 'dev') {
        console.error('Não há .animate-scroll-hidden')
    }
}


window.onload = () => {
    Carousel.loadSwiper('#section-07')
    Carousel.alignSwiperSliders()
}