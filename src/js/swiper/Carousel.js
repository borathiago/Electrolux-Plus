import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { Globals } from '../controls/Globals.js'
import { instance } from '../instances.js'

export class Carousel {
    static loadSwiper(sectionToObserve) {
        new Promise((resolve) => {
            const electroluxSlidersArray = Globals.selectAllToArray('.electrolux-slider')
            if (electroluxSlidersArray.length > 0) {
                electroluxSlidersArray.map( electroluxSlider => {
                    let swiperItem = new Swiper(electroluxSlider, {
                        direction: 'horizontal',
                        slidesPerView : 1,
                        autoplay: false,
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<div class="' + className + ' bg-electrolux-gray-400 small-desktop:bg-white">' + (`<span class="opacity-0 pointer-events-none">${index}</span>`) + '</div>'
                            },
                        }
                    })
                    new IntersectionObserver((entries) => {
                        entries.map((elementObserved) => {
                            if (elementObserved.isIntersecting) {
                                swiperItem.autoplay.start()
                            } else {
                                swiperItem.autoplay.stop()
                            }
                        })
                        
                    }).observe(Globals.select(sectionToObserve))
                    return swiperItem
                } )
            } 
            if (electroluxSlidersArray.length === 0 && instance.environment === 'dev') {
                console.error('▶︎ Não há .electrolux-slider nesta revista')
            }
            setTimeout(() => {
                resolve()
            }, 500)
        })
    }
    static alignSwiperSliders() {
        const swiperItemsArray = Globals.selectAllToArray('.swiper-slide')
        const swiperItemsCarouselItemsHeightArray = []
        swiperItemsArray.map((swiperItem) => {
            swiperItemsCarouselItemsHeightArray.push(swiperItem.offsetHeight)
        })
        const n = swiperItemsCarouselItemsHeightArray
        const max = Math.max(...n)
        swiperItemsArray.map((swiperItem) => {
            swiperItem.style.height = `${max}px`
        })
    }
}