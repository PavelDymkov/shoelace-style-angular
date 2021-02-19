import { Component } from "@angular/core";

@Component({
    selector: "xmpl-simply-dialog",
    template: `
        <sl-dialog label="Диалоговое окно" [(open)]="isDialogOpen">
            Какой-то текст...

            <sl-button
                slot="footer"
                type="primary"
                (click)="isDialogOpen = false"
            >
                Закрыть диалоговое окно
            </sl-button>
        </sl-dialog>

        <sl-button (click)="isDialogOpen = true">
            Открыть диалоговое окно
        </sl-button>
    `,
})
export class SimplyDialog {
    isDialogOpen = false;
}
