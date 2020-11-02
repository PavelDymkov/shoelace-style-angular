# ShoelaceStyleAngular

## Использование

В первую очередь, необходимо подключить соответствующий модуль:

```ts
import { ShoelaceStyleAngularModule } from "shoelace-style-angular";
```

Это позволит использовать shoelace style формы с angular:

```ts
@Component({
    selector: "app-form-page",
    template: `
        <sl-form [form]="form" (submit)="onSubmit()">
            <sl-input formControlName="name" label="Name"></sl-input>
        </sl-form>
    `,
})
export class FormComponent {
    form = this.formBuilder.group({
        name: [null],
    });

    constructor(formBuilder: FormBuilder) {}

    onSubmit(): void {}
}
```

А также добавит директивы для отлеживания показа/скрытия и фокуса:

```ts
@Component({
    selector: "app-some",
    template: `
        <sl-alert
            (show)="toDoSome($event)"
            (hide)="toDoSome($event)"
            (afterShow)="toDoSome($event)"
            (afterHide)="toDoSome($event)"
        >
            Shoelace Style Alert
        </sl-alert>

        <sl-select (focus)="toDoSome($event)" (blur)="toDoSome($event)">
            <sl-menu-item value="option-1">Option 1</sl-menu-item>
            <sl-menu-item value="option-2">Option 2</sl-menu-item>
        </sl-select>
    `,
})
export class SomeComponent {
    toDoSome(element: HTMLElement): void {}
}
```
