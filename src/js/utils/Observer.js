export class Observer {
    watch
    constructor() {
        this.watch = new IntersectionObserver((entries) => {
            entries.map((elementObserved) => {
                if (elementObserved.isIntersecting) {
                    elementObserved.target.classList.add('show')
                } else {
                    elementObserved.target.classList.remove('show')
                }
            })
        })
    }
}