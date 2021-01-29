import { Directive, OnInit, ElementRef, EventEmitter } from "@angular/core";
import { AbstractControl } from "@angular/forms";

import { Components } from "@shoelace-style/shoelace";

import { SubscribableDirective } from "ngx-subscribable";
import { fromEvent } from "rxjs";

type ShoelaceStyleControlElement = HTMLInputElement &
    (
        | Components.SlCheckbox
        | Components.SlColorPicker
        | Components.SlForm
        | Components.SlInput
        | Components.SlRadio
        | Components.SlRange
        | Components.SlRating
        | Components.SlSelect
        | Components.SlSwitch
        | Components.SlTextarea
    );

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
    outputs: ["change"],
})
export class ShoelaceStyleControlsDirective
    extends SubscribableDirective
    implements OnInit {
    readonly change = new EventEmitter<CustomEvent>();
    readonly element = this.elementRef.nativeElement;

    private connected = false;

    get tagName(): string {
        return this.element.tagName.toLowerCase();
    }

    get changeEventName(): string {
        switch (this.tagName) {
            case "sl-input":
            case "sl-textarea":
                return "sl-input";
            default:
                return "sl-change";
        }
    }

    constructor(private elementRef: ElementRef<ShoelaceStyleControlElement>) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            fromEvent(element, "sl-change").subscribe((event: CustomEvent) => {
                this.change.emit(event);
            }),
        ];
    }

    connectTo(formControl: AbstractControl): void {
        if (this.connected) return;
        else this.connected = true;

        if (this.element.value) {
            formControl.patchValue(this.element.value, { emitEvent: false });
        }

        this.element.value = formControl.value;

        this.subscriptions.push(
            formControl.valueChanges.subscribe(value => {
                if (this.element.value !== value) {
                    this.element.value = value;
                }
            }),
            fromEvent(this.element, this.changeEventName).subscribe(() => {
                formControl.patchValue(this.element.value);
            }),
        );
    }
}
