import { Component } from "@angular/core";

import { Components } from "@shoelace-style/shoelace";

@Component({
    selector: "app-select-page",
    templateUrl: "./select.component.html",
})
export class SelectComponent {
    onSelect(event: CustomEvent<{ item: Components.SlMenuItem }>): void {
        console.log(event.detail.item.value);
    }
}
