export function isNumber(value: unknown): value is number {
	return typeof value === 'number' && !isNaN(value);
}

export function isString(value: unknown): value is string {
	return typeof value === 'string';
}

export function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean';
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
	return typeof value === 'function';
}

export function isArray(value: unknown): value is unknown[] {
	return Array.isArray(value);
}

export function isObject(value: unknown): value is object {
	return typeof value === 'object';
}

export function isRealObject(value: unknown): value is { [key: string]: unknown } {
	return isObject(value) && !isNull(value) && !isArray(value);
}

export function isNull(value: unknown): value is null {
	return value === null;
}

export function isUndefined(value: unknown): value is undefined {
	return typeof value === 'undefined';
}

export function isSymbol(value: unknown): value is symbol {
	return typeof value === 'symbol';
}

/**
 * Check if a value is defined and not null
 */
export function isDefined<T>(value: T | null | undefined): value is T {
	return undefined != value;
}

export function isTruthy<T>(value: T | false | null | undefined): value is T {
	return Boolean(value);
}

export function isEmpty(value: null | string | undefined): value is '' | null | undefined;
export function isEmpty(value: Array<unknown> | null | undefined): value is [] | null | undefined;
export function isEmpty(
	value?: Array<unknown> | null | string | undefined,
): value is '' | [] | null | undefined {
	return value ? value.length === 0 : true;
}

export function isNode(value: unknown): value is Node {
	return value instanceof Node;
}
