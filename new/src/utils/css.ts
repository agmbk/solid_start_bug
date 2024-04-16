export function clsx(...args: (boolean | null | string | undefined)[]): string {
	let classNames = '';
	for (const arg of args) {
		if (typeof arg === 'string') {
			classNames += (classNames && ' ') + arg;
		}
	}
	return classNames;
}
