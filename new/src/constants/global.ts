import { type Owner } from 'solid-js';

type Global = {
	$: Owner | null;
	STATE: RenderState | null;
};

export const enum RenderState {
	Mounted,
	Hydrated,
}

export const GLOBAL: Global = {
	$: null,
	STATE: null,
};
