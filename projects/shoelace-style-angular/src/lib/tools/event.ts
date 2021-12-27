import { EventEmitter } from "@angular/core";

export function event<T = {}>(): EventEmitter<CustomEvent<T>> {
    return new EventEmitter<CustomEvent<T>>();
}
