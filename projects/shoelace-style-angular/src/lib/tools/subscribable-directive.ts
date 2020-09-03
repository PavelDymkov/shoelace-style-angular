import { Directive, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

@Directive()
export abstract class SubscribableDirective implements OnDestroy {
    protected subscriptions: Subscription[] = [];

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        this.subscriptions = [];
    }
}
