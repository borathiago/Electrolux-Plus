import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import { Globals } from '../controls/Globals.js'
import { instance } from '../instances.js'

export class Carousel {
    static loadSwiper(sectionToObserve) {
        new Promise((resolve) => {
            const electroluxSliders = Globals.selectAllToArray('.electrolux-slider')
            if (electroluxSliders.length > 0) {
                electroluxSliders.map( item => {
                    let p = new Swiper('.swiper.electrolux-slider', {
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
                        entries.map((record) => {
                            if (record.isIntersecting) {
                                /* p.autoplay.start() */
                            } else {
                                /* p.autoplay.stop() */
                            }
                        })
                        
                    }).observe(Globals.select(sectionToObserve))
                    return p, item
                } )
            } else {
                if (instance.env === 'dev') {
                    console.error('▶︎ Não há .electrolux-slider nesta revista')
                }
            }
            setTimeout(() => {
                resolve()
            }, 500)
        })
    }
    static alignSwiperSliders() {
        const swiperItems = Globals.selectAllToArray('.swiper-slide')
        const numbers = []
        swiperItems.map((slide) => {
            numbers.push(slide.offsetHeight)
        })
        const n = numbers
        const max = Math.max(...n)
        swiperItems.map((item) => {
            item.style.height = `${max}px`
        })
    }
}