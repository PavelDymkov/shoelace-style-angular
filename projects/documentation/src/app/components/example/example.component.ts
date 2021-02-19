import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, forkJoin } from "rxjs";
import { highlightBlock } from "highlight.js";

@Component({
    selector: "app-example",
    templateUrl: "./example.component.html",
    styleUrls: ["./example.component.css"],
})
export class ExampleComponent implements OnInit {
    @Input()
    fileName: string;

    code: string;

    @ViewChild("codeContainer")
    codeContainer!: ElementRef<HTMLElement>;

    private codeTabAwaiting = new BehaviorSubject<void>(void 0);

    constructor(
        private readonly httpClient: HttpClient,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        forkJoin({
            code: this.httpClient.get(`assets/examples/${this.fileName}.ts`, {
                responseType: "text",
            }),
            onTab: this.codeTabAwaiting,
        }).subscribe(({ code }) => {
            this.code = code.trim();

            this.changeDetectorRef.detectChanges();

            highlightBlock(this.codeContainer.nativeElement);
        });
    }

    onTabEnter(event: CustomEvent<{ name: string }>): void {
        if (event.detail.name === "code") this.codeTabAwaiting.complete();
    }
}
