import { Directive, ElementRef, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SlCheckbox, SlSwitch } from "@shoelace-style/shoelace";

@Directive({
    selector: `
        sl-checkbox[formControlName],
        sl-checkbox[formControl],
        sl-switch[formControlName],
        sl-switch[formControl],
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormControlCheckable),
            multi: true,
        },
    ],
})
export class FormControlCheckable implements ControlValueAccessor {
    constructor(private hostRef: ElementRef<SlCheckbox | SlSwitch>) {}

    writeValue(checked: any): void {
        this.hostRef.nativeElement.checked = Boolean(checked);
    }

    registerOnChange(callback: any): void {
        const host = this.hostRef.nativeElement;

        host.addEventListener("sl-change", () => {
            if (host.checked) callback(host.value || true);
            else callback(null);
        });
    }

    registerOnTouched(callback: any): void {
        this.hostRef.nativeElement.addEventListener("sl-blur", callback);
    }

    setDisabledState(disabled: boolean): void {
        this.hostRef.nativeElement.disabled = disabled;
    }
}
