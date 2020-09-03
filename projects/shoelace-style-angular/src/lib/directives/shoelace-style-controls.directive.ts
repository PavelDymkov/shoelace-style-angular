import { Directive, forwardRef, ElementRef, OnDestroy } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { fromEvent } from "rxjs";

import { ISlControlElement } from "../interfaces/shoelace-style-elements";
import { ShoelaceStyleControlBase } from "../tools/shoelace-style-control";

@Directive({
    selector: `
        sl-checkbox,
        sl-color-picker,
        sl-form,
        sl-input,
        sl-radio,
        sl-range,
        sl-rating,
        sl-select,
        sl-switch,
        sl-textarea,
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ShoelaceStyleControlsDirective),
            multi: true,
        },
    ],
})
export class ShoelaceStyleControlsDirective
    extends ShoelaceStyleControlBase
    implements ControlValueAccessor, OnDestroy {
    readonly element = this.elementRef.nativeElement;

    private readonly getValue = this.createValueGetter();
    private readonly setValue = this.createValueSetter();

    constructor(private elementRef: ElementRef<ISlControlElement>) {
        super();
    }

    writeValue(value: any): void {
        this.setValue(value);
    }

    registerOnChange(changeTo: any): void {
        this.subscriptions.push(
            fromEvent(this.element, this.changeEventName).subscribe(() => {
                changeTo(this.getValue());
            }),
        );
    }

    registerOnTouched(touch: any): void {
        this.subscriptions.push(
            fromEvent(this.element, this.changeEventName).subscribe(() => {
                touch();
            }),
        );
    }
}
