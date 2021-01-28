# ShoelaceStyleAngular

## Shoelace and Angular

_src/app/app.module.ts_

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

@NgModule({
    imports: [
        BrowserModule,
        // provide angular outputs for shoelace events:
        ShoelaceStyleAngularModule,
    ],
    // required 'cause shoelace based on Web Components:
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

## Example

```ts
@Component({
    selector: "app-my-component",
    template: `
        <sl-form [data]="form" (submit)="isDialogOpen = true">
            <sl-input name="message" label="Enter message"></sl-input>
            <br />
            <sl-button submit>Show dialog</sl-button>
        </sl-form>

        <sl-dialog
            label="You entered"
            [open]="isDialogOpen"
            (hide)="isDialogOpen = false"
        >
            {{ form.get("message").value }}
        </sl-dialog>
    `,
})
export class FormComponent {
    form = this.formBuilder.group({
        message: ["initial text"],
    });

    isDialogOpen = false;

    constructor(formBuilder: FormBuilder) {}
}
```

## Provided Shoelace events

<table>
    <thead>
        <tr>
            <th>Shoelace event</th>
            <th>Angular output</th>
            <th>Components</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>sl-submit</td>
            <td>submit</td>
            <td>sl-form[data]</td>
        </tr>
        <tr>
            <td>sl-change</td>
            <td>change</td>
            <td>
                sl-checkbox,<br>
                sl-color-picker,<br>
                sl-form,<br>
                sl-input,<br>
                sl-radio,<br>
                sl-range,<br>
                sl-rating,<br>
                sl-select,<br>
                sl-switch,<br>
                sl-textarea
            </td>
        </tr>
        <tr>
            <td>sl-clear</td>
            <td>clear</td>
            <td>sl-tag[clearable]</td>
        </tr>
        <tr>
            <td>sl-close</td>
            <td>close</td>
            <td>sl-tab[closable]</td>
        </tr>
        <tr>
            <td>sl-load</td>
            <td>load</td>
            <td>sl-icon</td>
        </tr>
        <tr>
            <td>sl-initial-focus,<br>sl-overlay-dismiss</td>
            <td>initialFocus,<br>overlayDismiss</td>
            <td>sl-dialog,<br>sl-drawer</td>
        </tr>
        <tr>
            <td>
                sl-show,<br>
                sl-hide,<br>
                sl-after-show,<br>
                sl-after-hide
            </td>
            <td>
                show,<br>
                hide,<br>
                afterShow,<br>
                afterHide
            </td>
            <td>
                sl-alert,<br>
                sl-color-picker,<br>
                sl-details,<br>
                sl-dialog,<br>
                sl-drawer,<br>
                sl-dropdown,<br>
                sl-tooltip
            </td>
        </tr>
    </tbody>
</table>
