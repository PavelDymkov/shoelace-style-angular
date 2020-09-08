import { Component, AfterViewInit } from "@angular/core";

import { timer } from "rxjs";
import { take, map } from "rxjs/operators";

@Component({
    selector: "app-show-hide-page",
    templateUrl: "./show-hide.component.html",
})
export class ShowHideComponent implements AfterViewInit {
    isShowAlert = false;

    ngAfterViewInit(): void {
        timer(0, 100)
            .pipe(
                take(2),
                map(n => n + 1),
            )
            .subscribe(step => {
                this[`toStep${step}`]();
            });
    }

    toStep1(): void {
        this.isShowAlert = true;
    }

    toStep2(): void {
        this.isShowAlert = false;
    }

    onShow(target: HTMLElement) {
        console.log(`show ${this.getTagName(target)}`);
    }

    onHide(target: HTMLElement) {
        console.log(`hide ${this.getTagName(target)}`);
    }

    onAfterShow(target: HTMLElement) {
        console.log(`after show ${this.getTagName(target)}`);
    }

    onAfterHide(target: HTMLElement) {
        console.log(`after hide ${this.getTagName(target)}`);
    }

    private getTagName(element: HTMLElement): string {
        return element.tagName.toLowerCase();
    }
}
