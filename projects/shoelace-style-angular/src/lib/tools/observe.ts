import { Event } from "@angular/router";
import { Observable, fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

export function observe<T = CustomEvent>(
    element: HTMLElement,
    eventName: string,
): Observable<T> {
    return fromEvent<T>(element, eventName).pipe(
        filter((event: any) => event?.target === element),
    );
}
