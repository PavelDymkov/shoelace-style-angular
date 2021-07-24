import { Routes } from "@angular/router";

enum Route {
    Animation = "animation",
    Change = "change",
    Clearable = "clearable",
    Closable = "closable",
    Focusable = "focusable",
    Form = "form",
    Load = "load",
    Open = "open",
    Overlay = "overlay",
    Resize = "resize",
    Select = "select",
    ShowHide = "show-hide",
    Validation = "validation",
}

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
        path: Route.Animation,
        loadChildren: () =>
            import("./pages/animation/animation.module").then(
                m => m.AnimationPageModule,
            ),
    },
    {
        path: Route.Change,
        loadChildren: () =>
            import("./pages/change/change.module").then(
                m => m.ChangePageModule,
            ),
    },
    {
        path: Route.Clearable,
        loadChildren: () =>
            import("./pages/clearable/clearable.module").then(
                m => m.ClearablePageModule,
            ),
    },
    {
        path: Route.Closable,
        loadChildren: () =>
            import("./pages/closable/closable.module").then(
                m => m.ClosablePageModule,
            ),
    },
    {
        path: Route.Focusable,
        loadChildren: () =>
            import("./pages/focusable/focusable.module").then(
                m => m.FocusablePageModule,
            ),
    },
    {
        path: Route.Form,
        loadChildren: () =>
            import("./pages/form/form.module").then(m => m.FormPageModule),
    },
    {
        path: Route.Load,
        loadChildren: () =>
            import("./pages/load/load.module").then(m => m.LoadPageModule),
    },
    {
        path: Route.Open,
        loadChildren: () =>
            import("./pages/open/open.module").then(m => m.OpenPageModule),
    },
    {
        path: Route.Overlay,
        loadChildren: () =>
            import("./pages/overlay/overlay.module").then(
                m => m.OverlayPageModule,
            ),
    },
    {
        path: Route.Resize,
        loadChildren: () =>
            import("./pages/resize/resize.module").then(
                m => m.ResizePageModule,
            ),
    },
    {
        path: Route.Select,
        loadChildren: () =>
            import("./pages/select/select.module").then(
                m => m.SelectPageModule,
            ),
    },
    {
        path: Route.ShowHide,
        loadChildren: () =>
            import("./pages/show-hide/show-hide.module").then(
                m => m.ShowHidePageModule,
            ),
    },
    {
        path: Route.Validation,
        loadChildren: () =>
            import("./pages/validation/validation.module").then(
                m => m.ValidationPageModule,
            ),
    },
];
