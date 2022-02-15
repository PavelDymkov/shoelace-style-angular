import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlRadio } from "@shoelace-style/shoelace";

@Directive({
    selector: `
        sl-radio[formControlName],
        sl-radio[formControl],
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormControlRadio),
            multi: true,
        },
    ],
})
export class FormControlRadio implements ControlValueAccessor {
    constructor(private hostRef: ElementRef<SlRadio>) {}

    writeValue(value: any): void {
        const host = this.hostRef.nativeElement;

        host.checked = host.value === value;
    }

    registerOnChange(callback: any): void {
        const host = this.hostRef.nativeElement;

        host.addEventListener("sl-change", () => {
            callback(host.value);
        });
    }

    registerOnTouched(callback: any): void {
        this.hostRef.nativeElement.addEventListener("sl-blur", callback);
    }

    setDisabledState(disabled: boolean): void {
        this.hostRef.nativeElement.disabled = disabled;
    }
}
