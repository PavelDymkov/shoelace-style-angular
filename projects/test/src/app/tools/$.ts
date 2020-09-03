import { not } from "logical-not";

export function $<K extends string>(
    root: HTMLElement,
    map: Record<K, string>,
): Record<K, HTMLElement> {
    const elements = {} as Record<K, HTMLElement>;

    Object.entries(map).forEach(([name, selector]: [string, string]) => {
        const element = root.querySelector(selector);

        if (not(element)) throw new Error();

        elements[name] = element;
    });

    return elements;
}
