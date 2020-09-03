import { Directive, forwardRef, ElementRef, OnDestroy } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

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

    private onChange: () => void;
    private onTouch: () => void;

    constructor(private elementRef: ElementRef<ISlControlElement>) {
        super();
    }

    ngOnDestroy(): void {
        this.element.removeEventListener(this.changeEventName, this.onChange);
        this.element.removeEventListener(this.changeEventName, this.onTouch);
    }

    writeValue(value: any): void {
        this.setValue(value);
    }

    registerOnChange(changeTo: any): void {
        this.onChange = () => {
            changeTo(this.getValue());
        };

        this.elementRef.nativeElement.addEventListener(
            this.changeEventName,
            this.onChange,
            false,
        );
    }

    registerOnTouched(touch: any): void {
        this.onTouch = () => {
            touch();
        };

        this.elementRef.nativeElement.addEventListener(
            this.changeEventName,
            this.onTouch,
            false,
        );
    }
}
