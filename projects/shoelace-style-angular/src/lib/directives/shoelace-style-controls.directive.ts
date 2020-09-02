import { Directive, forwardRef, ElementRef, OnDestroy } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

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
    implements ControlValueAccessor, OnDestroy {
    private readonly element = this.elementRef.nativeElement;
    private readonly changeEventName = this.getChangeEventName();

    private onChange: () => void;
    private onTouch: () => void;

    constructor(private elementRef: ElementRef<HTMLElement & { value: any }>) {}

    ngOnDestroy(): void {
        this.element.removeEventListener(this.changeEventName, this.onChange);
        this.element.removeEventListener(this.changeEventName, this.onTouch);
    }

    writeValue(value: any): void {
        this.element.value = value;
    }

    registerOnChange(changeTo: any): void {
        this.onChange = () => {
            changeTo(this.element.value);
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

    private getChangeEventName(): string {
        switch (this.element.tagName) {
            case "sl-input":
            case "sl-textarea":
                return "slInput";
            default:
                return "slChange";
        }
    }
}
