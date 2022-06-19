export function longpress(node, threshold = 500) {
	// note — a complete answer would also consider touch events
	let startX;
	let startY;
	let x;
	let y;

	const handle_longTouch = (e) => {
		// let start = Date.now();
		const event = e.touches ? e.touches[0] : e;
		x = startX = event.clientX;
		y = startY = event.clientY;
		// console.log(startX,startY)

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