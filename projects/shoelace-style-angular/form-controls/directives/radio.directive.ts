import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlRadioGroup } from "@shoelace-style/shoelace";

@Directive({
    selector: `
        sl-radio-group[formControlName],
        sl-radio-group[formControl],
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
    constructor(private hostRef: ElementRef<SlRadioGroup>) {}

    writeValue(value: any): void {
        const host = this.hostRef.nativeElement;

        host.value = value;
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

    setDisabledState(disabled: boolean): void {}
}
