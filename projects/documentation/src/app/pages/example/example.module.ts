import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ShoelaceStyleAngularModule } from "../../../../../shoelace-style-angular/src/lib/shoelace-style-angular.module";

import { routes } from "./example.routing";

import { ExampleComponent } from "./example.component";
import { ExampleFormComponent } from "./example-form/example-form.component";

import { InputSuggestionModule } from "../../components/input-suggestion/input-suggestion.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ShoelaceStyleAngularModule,
        InputSuggestionModule,
    ],
    exports: [ExampleComponent],
    declarations: [ExampleComponent, ExampleFormComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExampleModule {}
