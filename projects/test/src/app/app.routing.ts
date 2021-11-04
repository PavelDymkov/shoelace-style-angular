import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadChildren: () =>
            import("./pages/greeter/greeter.module").then(
                m => m.GreeterPageModule,
            ),
    },
    {
        path: "animation",
        loadChildren: () =>
            import("./pages/animation/animation.module").then(
                m => m.AnimationPageModule,
            ),
    },
    {
        path: "autofocus",
        loadChildren: () =>
            import("./pages/autofocus/autofocus.module").then(
                m => m.AutofocusPageModule,
            ),
    },
    {
        path: "change",
        loadChildren: () =>
            import("./pages/change/change.module").then(
                m => m.ChangePageModule,
            ),
    },
    {
        path: "closable",
        loadChildren: () =>
            import("./pages/closable/closable.module").then(
                m => m.ClosablePageModule,
            ),
    },
    {
        path: "focusable",
        loadChildren: () =>
            import("./pages/focusable/focusable.module").then(
                m => m.FocusablePageModule,
            ),
    },
    {
        path: "form",
        loadChildren: () =>
            import("./pages/form/form.module").then(m => m.FormPageModule),
    },
    {
        path: "load",
        loadChildren: () =>
            import("./pages/load/load.module").then(m => m.LoadPageModule),
    },
    {
        path: "open",
        loadChildren: () =>
            import("./pages/open/open.module").then(m => m.OpenPageModule),
    },
    {
        path: "overlay",
        loadChildren: () =>
            import("./pages/overlay/overlay.module").then(
                m => m.OverlayPageModule,
            ),
    },
    {
        path: "removable",
        loadChildren: () =>
            import("./pages/removable/removable.module").then(
                m => m.RemovablePageModule,
            ),
    },
    {
        path: "resize",
        loadChildren: () =>
            import("./pages/resize/resize.module").then(
                m => m.ResizePageModule,
            ),
    },
    {
        path: "select",
        loadChildren: () =>
            import("./pages/select/select.module").then(
                m => m.SelectPageModule,
            ),
    },
    {
        path: "show-hide",
        loadChildren: () =>
            import("./pages/show-hide/show-hide.module").then(
                m => m.ShowHidePageModule,
            ),
    },
    {
        path: "validation",
        loadChildren: () =>
            import("./pages/validation/validation.module").then(
                m => m.ValidationPageModule,
            ),
    },
];
