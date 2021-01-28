import {
    Directive,
    Input,
    OnInit,
    AfterContentChecked,
    ElementRef,
    EventEmitter,
    ContentChildren,
    QueryList,
} from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Components } from "@shoelace-style/shoelace";

import { fromEvent } from "rxjs";
import { SubscribableDirective } from "ngx-subscribable";

import { ShoelaceStyleControlsDirective } from "./shoelace-style-controls.directive";

@Directive({
    selector: "sl-form[data]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormDirective
    extends SubscribableDirective
    implements OnInit, AfterContentChecked {
    @Input("data")
    form: FormGroup;

    @ContentChildren(ShoelaceStyleControlsDirective)
    controlsQueryList: QueryList<ShoelaceStyleControlsDirective>;

    submit = new EventEmitter<CustomEvent>();

    constructor(
        private elementRef: ElementRef<Components.SlForm & HTMLElement>,
    ) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions.push(
            fromEvent(element, "sl-submit").subscribe((event: CustomEvent) => {
                this.submit.emit(event);
            }),
        );
    }

    ngAfterContentChecked(): void {
        this.controlsQueryList.forEach(control => {
            const formControl = this.form.get(control.element.name);

            if (formControl) {
                control.connectTo(formControl);
            }
        });
    }
}
