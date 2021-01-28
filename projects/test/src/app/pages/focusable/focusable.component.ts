import { Component, AfterViewInit } from "@angular/core";

import { from } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Component({
    selector: "app-focusable-page",
    templateUrl: "./focusable.component.html",
})
export class FocusableComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        from(Array.from(document.querySelector("app-focusable-page").children))
            .pipe(delay(100))
            .pipe(tap(item => (item as any).setFocus()))
            .pipe(delay(100))
            .pipe(tap(item => (item as any).removeFocus()))
            .subscribe();
    }

    logFocus(target: HTMLElement) {
        console.log(`focus: ${this.getTagName(target)}`);
    }

    logBlur(target: HTMLElement) {
        console.log(`blur: ${this.getTagName(target)}`);
    }

    private getTagName(element: HTMLElement): string {
        return element.tagName.toLowerCase();
    }
}
