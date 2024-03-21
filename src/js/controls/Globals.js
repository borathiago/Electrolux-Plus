export class Globals {
    static select(item) {
        return document.querySelector(item)
    }
    static selectAll(items) {
        return document.querySelectorAll(items)
    }
    static selectAllToArray(items) {
        return [...document.querySelectorAll(items)]
    }
}