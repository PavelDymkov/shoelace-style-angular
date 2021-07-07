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
import { SlForm } from "@shoelace-style/shoelace";
import { of, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import { SubscribableDirective } from "ngx-subscribable";
import { not } from "logical-not";

import { observe } from "../tools/observe";

interface HTMLFormControl extends HTMLElement {
    name: string;
    value: string;
    checked: boolean;
    setCustomValidity?: (message: string) => void;
    reportValidity?: () => void;
}

export const validationMessage = "sl-error";

@Directive({
    selector: "sl-form[data]",
    outputs: ["submit"],
})
export class FormDirective
    extends SubscribableDirective
    implements OnInit, AfterContentChecked
{
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

            this.trigger.pipe(debounceTime(10)).subscribe(() => {
                const elements =
                    this.elementRef.nativeElement.getFormControls() as HTMLFormControl[];
                const registred = new Set<HTMLFormControl>(
                    this.registry.keys(),
                );

                elements
                    .filter(element => element.name)
                    .forEach(element => {
                        registred.delete(element);

                        if (not(this.registry.has(element))) {
                            fixNameAttribute(element);

                            const control = pick(this.form, element.name);

                            if (control)
                                this.ngZone.run(() =>
                                    this.addToRegistry(element, control),
                                );
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

        const validation =
            typeof element.setCustomValidity === "function" &&
            typeof element.reportValidity === "function"
                ? control.statusChanges
                      .pipe(distinctUntilChanged())
                      .subscribe(status => {
                          const message =
                              status === "INVALID"
                                  ? control.getError(validationMessage) || ""
                                  : "";

                          element.setCustomValidity(message);
                          element.reportValidity();
                      })
                : of(null).subscribe();

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

                    validation,
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

                    validation,
                ]);
        }
    }

    private free(control: HTMLFormControl): void {
        this.registry.get(control)?.forEach(subscription => {
            subscription.unsubscribe();
        });

        this.registry.delete(control);
    }
}

function fixNameAttribute(element: HTMLFormControl): void {
    let source: string[] | null = null;

    if (Array.isArray(element.name)) source = element.name as string[];
    else {
        const parts = element.name.split(",");

        if (parts.length > 1) source = parts;
    }

    if (source) {
        const [first] = source;
        const name =
            (isNumber(first) ? bracketify(first) : first) +
            source.slice(1).map(bracketify).join("");

        element.setAttribute("name", name);
    }
}

function isNumber(source: string): boolean {
    return not(Number.isNaN(Number(source)));
}

function bracketify(source: string): string {
    return `[${source}]`;
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
        case "sl-switch":
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
        case "sl-switch":
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
