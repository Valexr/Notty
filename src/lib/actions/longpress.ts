export function longpress(node: HTMLElement, threshold = 500) {
    // note — a complete answer would also consider touch events
    let startX;
    let startY;
    let x: number;
    let y: number;

    const handle_longTouch = (e: TouchEvent) => {
        // let start = Date.now();
        const event = e.touches && e.touches[0]
        const { clientX, clientY } = event

        x = startX = clientX;
        y = startY = clientY;

        const timeout = setTimeout(() => {
            node.dispatchEvent(
                new CustomEvent('longpress', {
                    detail: { x, y },
                })
            );
        }, threshold);

        const cancel = () => {
            clearTimeout(timeout);
            node.removeEventListener('touchmove', cancel);
            node.removeEventListener('touchstart', cancel);
        };

        node.addEventListener('touchmove', cancel);
        node.addEventListener('touchstart', cancel);
    };

    node.addEventListener('touchstart', handle_longTouch);

    return {
        destroy() {
            node.removeEventListener('touchend', handle_longTouch);
        }
    };
}