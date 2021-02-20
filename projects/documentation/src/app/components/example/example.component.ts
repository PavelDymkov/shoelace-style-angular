import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    TemplateRef,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { highlightBlock } from "highlight.js";
import not from "logical-not";

import { Language, highlightFor } from "./highlighters";

@Component({
    selector: "app-example",
    templateUrl: "./example.component.html",
    styleUrls: ["./example.component.css"],
})
export class ExampleComponent implements OnInit, AfterViewInit {
    @Input()
    language: Language = "angular";

    @Input()
    exampleTemplate: TemplateRef<any>;

    @Input()
    fileName: string;
    code: string;

    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
        private readonly httpClient: HttpClient,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        if (this.fileName)
            this.httpClient
                .get(`assets/examples/${this.fileName}.ts`, {
                    responseType: "text",
                })
                .subscribe(code => {
                    this.code = highlightFor[this.language](code.trim());

                    this.changeDetectorRef.detectChanges();

                    // this.initializeCodeBlocks();
                });
    }

    ngAfterViewInit(): void {
        if (not(this.fileName)) this.initializeCodeBlocks();
    }

    private initializeCodeBlocks(): void {
        this.elementRef.nativeElement
            .querySelectorAll("code")
            .forEach(element =>
                Object.assign(element, {
                    className: "hljs",
                    innerHTML: highlightFor[this.language](
                        element.innerHTML.trim(),
                    ),
                }),
            );
    }
}
