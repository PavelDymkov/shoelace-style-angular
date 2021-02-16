import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InputSuggestionComponent } from "./input-suggestion.component";

@NgModule({
    imports: [CommonModule],
    exports: [InputSuggestionComponent],
    declarations: [InputSuggestionComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InputSuggestionModule {}
