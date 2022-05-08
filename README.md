# ShoelaceStyleAngular

![tests: passing](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/tests.svg)
![npm: 1.0.23](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/npm-version.svg)
![tests with @shoelace-style/shoelace: 2.0.0-beta.73](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/shoelace-version.svg)
![license: MIT](https://raw.githubusercontent.com/PavelDymkov/shoelace-style-angular/master/badges/license.svg)

## Shoelace and Angular

_src/app/app.module.ts_

```ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ShoelaceStyleModule } from "shoelace-style-angular";

@NgModule({
    imports: [BrowserModule, ShoelaceStyleModule],
    // required 'cause shoelace based on Web Components:
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

### Outputs (shoelace events)

Add to `src/main.ts`:

```ts
/// <reference types="shoelace-style-angular/events" />
```

Now you can use outputs on every elements in templates. Events are bubbling:

```html
<div (sl-change)="onChange($event)">
    <sl-switch value="1">Switch 1</sl-switch>
    <sl-switch value="2">Switch 2</sl-switch>
</div>
```

```ts
onChange(event: CustomEvent): void {
    console.assert(event instanceof CustomEvent);

    if (event.target instanceof SlSwitch) {
        const { checked, value } = event.target;

        console.log(checked, value);
    }
}
```

### Assets

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

<!--
    add script if never import "@shoelace-style/shoelace" in code:

    <script type="module" src="/assets/shoelace/shoelace.js"></script>
-->
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
