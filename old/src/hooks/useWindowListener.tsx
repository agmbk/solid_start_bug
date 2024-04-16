import { type EventMapOf, makeEventListener } from '@solid-primitives/event-listener';
import { createSingletonRoot } from '@solid-primitives/rootless';
import { type Accessor, createSignal, onMount } from 'solid-js';
import { isServer } from 'solid-js/web';

import { PASSIVE } from '~/utils/events';

type EventMap = EventMapOf<Window>;

type EventAccessor<T extends keyof EventMap> = Accessor<EventMap[T] | undefined>;

const Listeners = new Map<keyof EventMap, () => EventAccessor<keyof EventMap>>();

export default function useWindowListener<T extends keyof EventMap>(type: T): EventAccessor<T> {
	if (isServer) {
		return (): undefined => undefined;
	}

	let createListener = Listeners.get(type);

	if (createListener) return createListener() as EventAccessor<T>;

	createListener = createSingletonRoot<EventAccessor<T>>(() => {
		const [event, setEvent] = createSignal<EventMap[T]>();

		onMount(() => {
			makeEventListener(window, type, setEvent, PASSIVE);
		});

		return event;
	});

	Listeners.set(type, createListener);

	return createListener() as EventAccessor<T>;
}
