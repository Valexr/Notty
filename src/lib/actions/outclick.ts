export function outclick(node: HTMLElement, cb: () => void) {
    if (window instanceof Window) {
        window.onclick = (e) => {
            if (e.composedPath().includes(node) || e.defaultPrevented) return
            cb instanceof Function && cb()
        }
    }
    return {
        destroy() {
            window.onclick = null
        }
    }
}