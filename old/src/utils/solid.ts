import { splitProps as splitPropsBase } from 'solid-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
export function splitProps<T extends Record<any, any>, K extends Partial<T>>(
	props: T,
	keys: UnionToTuples<keyof K>,
) {
	return splitPropsBase(props, keys);
}