import { Component } from "@angular/core";

import { SlMenuItem } from "@shoelace-style/shoelace";

@Component({
    selector: "app-select-page",
    templateUrl: "./select.component.html",
})
export class SelectComponent {
    onSelect(event: CustomEvent<{ item: SlMenuItem }>): void {
        console.log(event.detail.item.value);
    }
}
