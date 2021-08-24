import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
    ShoelaceStyleAngularModule,
    SL_TOAST_OPTIONS,
    ToastOptions,
} from "shoelace-style-angular";

import { ToastComponent } from "./toast.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: "", component: ToastComponent }]),
        ShoelaceStyleAngularModule,
    ],
    declarations: [ToastComponent],
    providers: [
        {
            provide: SL_TOAST_OPTIONS,
            useValue: {
                duration: 1,
                closable: true,
            } as ToastOptions,
        },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ToastPageModule {}
