export class Observer {
    match
    constructor() {
        this.match = new IntersectionObserver((entries) => {
            entries.map((record) => {
                if (record.isIntersecting) {
                    record.target.classList.add('show')
                } else {
                    record.target.classList.remove('show')
                }
            })
        })
    }
}