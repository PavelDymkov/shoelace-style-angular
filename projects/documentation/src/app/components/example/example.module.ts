import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ExampleComponent } from "./example.component";

@NgModule({
    imports: [CommonModule, HttpClientModule],
    exports: [ExampleComponent],
    declarations: [ExampleComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExampleModule {}
