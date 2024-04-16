import { type JSX } from 'solid-js';

declare global {
	type State = Record<string, string> | null;

	type Result<Success, Error> = Error | Success;

	type JSXElement = JSX.Element;

	type PickOfType<T, Type> = { [K in keyof T]: T[K] extends Type ? K : never }[keyof T];

	type Indexer<T, IncludeType = T[keyof T], ExcludeType = never> = Exclude<
		PickOfType<T, IncludeType>,
		PickOfType<T, ExcludeType>
	>;

	type StringifyObject<T> = {
		[K in keyof T]: string;
	};

	type NonNullableReturn<T extends (...args: unknown[]) => unknown> = (
		...args: unknown[]
	) => NonNullable<ReturnType<T>>;

	type Merge<A, B> = (A | B) & Partial<A & B>;

	type Writeable<T> = { -readonly [K in keyof T]: T[K] };

	type Undefined<T> = { [K in keyof T]: undefined };

	type RequiredPartial<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

	type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

	type ClassList = { [k: string]: boolean | undefined };

	type JaggedArray<T> = T[][];

	type UnionToIntersection<U> = (U extends never ? never : (arg: U) => never) extends (
			arg: infer I,
		) => void
		? I
		: never;

	type UnionToTuple<T> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (
			_: never,
		) => infer W
		? [...UnionToTuple<Exclude<T, W>>, W]
		: [];

	interface String {
		toNumber(): null | number;
	}

	interface Array<T> {
		chunk(size: number): JaggedArray<T>;

		last(): T | undefined;

		/**
		 * Returns a random element from the array.
		 * Returns undefined if the array is empty.
		 */
		random(): T | undefined;

		/**
		 * Returns a random index from the array.
		 * Returns undefined if the array is empty.
		 */
		randomIndex(): number | undefined;

		randomize(): T[];
	}

	type Cons<H, T extends readonly unknown[]> = H extends unknown
		? T extends unknown
			? ((h: H, ...t: T) => void) extends (...r: infer R) => void
				? R
				: never
			: never
		: never;
	type Prev = [
		never,
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
	];
	// illegally recursive, use at your own risk
	type UnionToTuples<T, U = T, N extends number = 20> = T extends unknown
		? Cons<
			T,
			Exclude<U, T> extends infer X
				? {
					0: [];
					1: UnionToTuples<X, X, Prev[N]>;
				}[[X] extends [never] ? 0 : 1]
				: never
		>
		: never;
}

String.prototype.toNumber = function(): Result<number, null> {
	const result = Number(this);
	return isNaN(result) ? null : result;
};

Array.prototype.last = function <T>(): T | undefined {
	return this[this.length - 1];
};

Array.prototype.chunk = function <T>(size: number): JaggedArray<T> {
	if (this.length <= 0 || size <= 0) return [];
	const result: JaggedArray<T> = Array(Math.ceil(this.length / size)).fill(null);

	for (let i = 0; i < result.length; i++) {
		result[i] = this.slice(i * size, i * size + size);
	}
	return result;
};

Array.prototype.randomIndex = function(): number | undefined {
	return Math.floor(Math.random() * this.length);
};

Array.prototype.random = function <T>(): T | undefined {
	if (this.length <= 0) return undefined;
	return this[this.randomIndex()!];
};

Array.prototype.randomize = function <T>(): T[] {
	return this.sort(() => Math.random() - 0.5);
};
