import { SlMenuItem } from "@shoelace-style/shoelace";

interface ShoelaceEventMap {
    "sl-after-hide": CustomEvent<{}>;
    "sl-after-show": CustomEvent<{}>;
    "sl-blur": CustomEvent<{}>;
    "sl-cancel": CustomEvent<{}>;
    "sl-change": CustomEvent<{}>;
    "sl-clear": CustomEvent<{}>;
    "sl-error": CustomEvent<{}>;
    "sl-finish": CustomEvent<{}>;
    "sl-focus": CustomEvent<{}>;
    "sl-hide": CustomEvent<{}>;
    "sl-input": CustomEvent<{}>;
    "sl-load": CustomEvent<{}>;
    "sl-mutation": CustomEvent<{ mutationList: MutationRecord[] }>;
    "sl-request-close": CustomEvent<{}>;
    "sl-remove": CustomEvent<{}>;
    "sl-reposition": CustomEvent<{}>;
    "sl-resize": CustomEvent<{ entries: ResizeObserverEntry[] }>;
    "sl-select": CustomEvent<{ item: SlMenuItem }>;
    "sl-show": CustomEvent<{}>;
    "sl-start": CustomEvent<{}>;
    "sl-tab-hide": CustomEvent<{}>;
    "sl-tab-show": CustomEvent<{}>;
}

declare global {
    interface HTMLElement {
        addEventListener<EventName extends keyof ShoelaceEventMap>(
            type: EventName,
            listener: (
                this: HTMLElement,
                event: ShoelaceEventMap[EventName],
            ) => void,
            options?: boolean | AddEventListenerOptions,
        ): void;
    }
}

export {};
