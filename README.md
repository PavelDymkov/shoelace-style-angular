# ShoelaceStyleAngular

![tests: passing](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/tests.svg)
![tests with @shoelace-style/shoelace: 2.0.0-beta.68](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/shoelace-version.svg)
![npm: 1.0.16](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/npm-version.svg)
![license: MIT](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/license.svg)

## Shoelace and Angular

_src/app/app.module.ts_

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ShoelaceStyleAngularModule } from "shoelace-style-angular";

@NgModule({
    imports: [BrowserModule, ShoelaceStyleAngularModule],
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
<link rel="stylesheet" href="/assets/shoelace/themes/light.css" />
<script type="module" src="/assets/shoelace/shoelace.js"></script>
```

## Example

Pay attention to use two-way bindings for sl-dialog open attribute!

```ts
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-greeter",
    template: `
        <form [formGroup]="form" (submit)="isDialogOpen = true">
            <sl-input
                label="Enter your name"
                formControlName="username"
            ></sl-input>
            <br />
            <sl-button type="submit" [disabled]="form.invalid">
                Say Hello
            </sl-button>
        </form>

        <sl-dialog label="Greetings" [(open)]="isDialogOpen">
            Hello,
            {{ form.get("username")!.value }}!
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
