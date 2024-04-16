type Indexable = { length: number };

export function last(string: string): string | undefined;
export function last<T>(array: T[]): T | undefined;
export function last<T>(indexable: T[] | string): T | string | undefined {
	return indexable[indexable.length - 1];
}

export function chunk(string: string, size: number): string[];
export function chunk<T>(array: T[], size: number): JaggedArray<T>;
export function chunk<T>(indexable: T[] | string, size: number): JaggedArray<T> | string[] {
	if (indexable.length <= 0 || size <= 0) return [];
	const result: JaggedArray<T> | string[] = Array(Math.ceil(indexable.length / size)).fill(
		undefined,
	);

	for (let i = 0; i < result.length; i++) {
		result[i] = indexable.slice(i * size, i * size + size);
	}
	return result;
}

export function randomIndex(indexable: Indexable): number | undefined {
	return Math.floor(Math.random() * indexable.length);
}

export function random(string: string): string | undefined;
export function random<T>(array: T[]): T | undefined;
export function random<T>(indexable: T[] | string): T | string | undefined {
	return indexable[randomIndex(indexable)!];
}

/**
 * Randomize the order of the elements in the array
 * In place, return a reference to the mutated array
 */
export function randomize<T>(indexable: T[]): T[] {
	return indexable.sort(() => Math.random() - 0.5);
}
