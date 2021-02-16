import { Component, Input } from "@angular/core";

@Component({
    selector: "app-input-suggestion",
    templateUrl: "./input-suggestion.component.html",
})
export class InputSuggestionComponent {
    @Input()
    name: string;

    focused = false;
}
