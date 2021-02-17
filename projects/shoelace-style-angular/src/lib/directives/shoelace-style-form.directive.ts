import {
    Directive,
    Input,
    OnInit,
    AfterContentChecked,
    ElementRef,
    EventEmitter,
    NgZone,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Components } from "@shoelace-style/shoelace";
import { from, Subscription } from "rxjs";
import { debounceTime, filter, switchMap } from "rxjs/operators";
import { SubscribableDirective } from "ngx-subscribable";
import { not } from "logical-not";

import { observe } from "../tools/observe";

type SlForm = Components.SlForm & HTMLElement;

interface HTMLFormControl extends HTMLElement {
    name: string;
    value: string;
    checked: boolean;
}

export const validationMessage = "sl-error";

@Directive({
    selector: "sl-form[data]",
    outputs: ["submit"],
})
export class ShoelaceStyleFormDirective
    extends SubscribableDirective
    implements OnInit, AfterContentChecked {
    @Input("data")
    form: AbstractControl;

    submit = new EventEmitter<
        CustomEvent<{ formData: FormData; formControls: HTMLElement[] }>
    >();

    private trigger = new EventEmitter<void>();
    private registry = new Map<HTMLFormControl, Subscription[]>();

    constructor(
        private readonly elementRef: ElementRef<SlForm>,
        private readonly ngZone: NgZone,
    ) {
        super();
    }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;

        this.subscriptions = [
            observe<
                CustomEvent<{ formData: FormData; formControls: HTMLElement[] }>
            >(element, "sl-submit").subscribe(event => this.submit.emit(event)),

            this.trigger
                .pipe(debounceTime(10))
                .pipe(
                    switchMap(() =>
                        from(this.elementRef.nativeElement.getFormControls()),
                    ),
                )
                .subscribe((elements: HTMLFormControl[]) => {
                    const registred = new Set<HTMLFormControl>(
                        this.registry.keys(),
                    );

                    elements
                        .filter(element => element.name)
                        .forEach(element => {
                            registred.delete(element);

                            if (not(this.registry.has(element))) {
                                const control = pick(this.form, element.name);

                                if (control)
                                    this.addToRegistry(element, control);
                            }
                        });

                    registred.forEach(control => this.free(control));
                }),
        ];
    }

    ngAfterContentChecked(): void {
        this.ngZone.runOutsideAngular(() => this.trigger.emit());
    }

    ngOnDestroy(): void {
        this.registry.forEach((_, control) => this.free(control));

        super.ngOnDestroy();
    }

    private addToRegistry(
        element: HTMLFormControl,
        control: AbstractControl,
    ): void {
        setValue(element, control.value);

        switch (getTagName(element)) {
            case "sl-radio":
            case "radio":
                this.registry.set(element, [
                    observe(element, getChangeEventName(element))
                        .pipe(filter(() => element.checked))
                        .subscribe(() => {
                            const value = getValue(element);

                            if (value !== control.value)
                                control.patchValue(value);
                        }),

                    control.valueChanges
                        .pipe(filter(value => element.value === value))
                        .subscribe(value => {
                            if (value !== getValue(element))
                                setValue(element, value);
                        }),
                ]);
                break;
            default:
                this.registry.set(element, [
                    observe(element, getChangeEventName(element)).subscribe(
                        () => {
                            const value = getValue(element);

                            if (value !== control.value)
                                control.patchValue(value);
                        },
                    ),

                    control.valueChanges.subscribe(value => {
                        if (value !== getValue(element))
                            setValue(element, value);
                    }),
                ]);
        }
    }

    private free(control: HTMLFormControl): void {
        this.registry
            .get(control)
            ?.forEach(subscription => subscription.unsubscribe());

        this.registry.delete(control);
    }
}

function pick(source: AbstractControl, path: string): AbstractControl | null {
    const picker = /[\[](.+?)[\]]|[^\[\]]+/g;

    let match: RegExpExecArray;

    while ((match = picker.exec(path))) {
        const name = match[1] || match[0];

        source = source.get(name);

        if (not(source)) return null;
    }

    return source;
}

function getTagName(control: HTMLFormControl): string {
    return control.tagName.toLowerCase();
}

function getChangeEventName(control: HTMLFormControl): string {
    const tagName = getTagName(control);

    switch (tagName) {
        case "sl-input":
        case "sl-textarea":
            return "sl-input";
        case "input":
        case "textarea":
            return "input";
        default:
            return tagName.startsWith("sl-") ? "sl-change" : "change";
    }
}

function getValue(element: HTMLFormControl): any {
    const tagName = getTagName(element);

    switch (tagName) {
        case "sl-checkbox":
        case "sl-radio":
        case "checkbox":
        case "radio":
            if (element.value) return element.checked ? element.value : null;
            else return element.checked;
        default:
            return element.value || null;
    }
}

function setValue(element: HTMLFormControl, value: any): void {
    switch (getTagName(element)) {
        case "sl-checkbox":
        case "sl-radio":
            element.checked = Boolean(value);
            break;
        case "checkbox":
        case "radio":
            element.checked = (element.value || true) === value;
            break;
        default:
            element.value = value || "";
    }
}
