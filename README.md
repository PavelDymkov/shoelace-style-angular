# ShoelaceStyleAngular

![tests: passing](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/tests.svg)
![tests with @shoelace-style/shoelace: 2.0.0-beta.61](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/shoelace-version.svg)
![npm: 1.0.11](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/npm-version.svg)
![license: MIT](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/license.svg)

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

For using `shoelace` assets, add to [config](https://angular.io/guide/workspace-config#asset-config):

```json
{
    "glob": "**/*.*",
    "input": "node_modules/@shoelace-style/shoelace/dist",
    "output": "/assets/shoelace"
}
```

and to `src/main.ts`:

```ts
import { setBasePath } from "@shoelace-style/shoelace";

setBasePath("/assets/shoelace");
```

Provide `shoelace` components and styles to `index.html`:

```html
<link rel="stylesheet" href="/assets/shoelace/themes/base.css" />
<script type="module" src="/assets/shoelace/shoelace.js"></script>
```

## Example

> Use two-way bindings for sl-dialog open attribute!

```ts
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-greeter",
    template: `
        <sl-form [data]="form" (submit)="isDialogOpen = true">
            <sl-input name="username" label="Enter your name"></sl-input>
            <br />
            <sl-button submit [disabled]="form.invalid">Say Hello</sl-button>
        </sl-form>

        <sl-dialog label="Greetings" [(open)]="isDialogOpen">
            Hello,
            {{ form.get("username").value }}!
        </sl-dialog>
    `,
})
export class GreeterComponent {
    form = this.formBuilder.group({
        username: ["World", Validators.required],
    });

    isDialogOpen = false;

    constructor(private formBuilder: FormBuilder) {}
}
```

## Provided Shoelace events

<table>
    <thead>
        <tr>
            <th>Shoelace event</th>
            <th>Angular output</th>
            <th>In template</th>
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
            <td>sl-icon,<br>sl-include</td>
        </tr>
        <tr>
            <td>sl-initial-focus,<br>sl-request-close</td>
            <td>initialFocus,<br>requestClose</td>
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
        <tr>
            <td>
                sl-start,<br>
                sl-finish,<br>
                sl-cancel
            </td>
            <td>
                start,<br>
                finish,<br>
                cancel
            </td>
            <td>sl-animation</td>
        </tr>
        <tr>
            <td>sl-resize</td>
            <td>resize</td>
            <td>sl-resize-observer</td>
        </tr>
    </tbody>
</table>
