import { type JSX } from 'solid-js';
import { type DOMElement } from 'solid-js/types/jsx';

export const PASSIVE = { passive: true };
export const PASSIVE_ONCE = { once: true, passive: true };

export const DEFER = { defer: true };

export const nextPaint = (fn: VoidFunction): void => {
	setTimeout(fn, 0);
};

export const intoListener = <T>(fn: (...args: T[]) => void, ...args: T[]): VoidFunction => {
	return () => fn(...args);
};

export const inputValue = <T extends Readonly<DOMElement & { value: string }>>(
	fn: (value: string) => void,
): JSX.ChangeEventHandler<T, Event> => {
	return e => fn((e.target as T).value);
};
