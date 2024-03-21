import { instance } from './instances.js'
import { Globals } from './controls/Globals.js'
import { Observer } from './utils/Observer.js'
import { Carousel } from './swiper/Carousel.js'

window.onload = () => {
    const animateScrollHiddenArray = Globals.selectAllToArray('.animate-scroll-hidden')

    if (animateScrollHiddenArray.length > 0) {
        animateScrollHiddenArray.map((animateScrollHiddenItem, index) => {
            animateScrollHiddenItem.classList.add(`${animateScrollHiddenItem.getAttribute('data-animate')}`)
            animateScrollHiddenItem.style.transitionDelay = `${((index + 1) * 1)}ms`
            window.onscroll = () => {
                if (animateScrollHiddenItem.classList.contains('show')) {
                    animateScrollHiddenItem.classList.add(`${animateScrollHiddenItem.getAttribute('data-animate')}`)
                    animateScrollHiddenItem.style.transitionDelay = `${((index + 1) * 1)}ms`
                }
            }
            new Observer().watch.observe(animateScrollHiddenItem)
        })
    } 

    if (animateScrollHiddenArray === 0 && instance.environment === 'dev') {
        console.error('Não há .animate-scroll-hidden')
    }

    Carousel.loadSwiper('#section-07')
    Carousel.alignSwiperSliders()
}