import { Observable, fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

export function observe(
    element: HTMLElement,
    eventName: string,
): Observable<CustomEvent> {
    return fromEvent(element, eventName).pipe(
        filter((event: any) => event?.target === element),
    );
}
