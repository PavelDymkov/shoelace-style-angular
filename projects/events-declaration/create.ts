import { readFileSync as read, writeFileSync as write } from "fs";
import { join } from "path";

const tags = [
    "HTMLAnchorElement",
    "HTMLAreaElement",
    "HTMLBodyElement",
    "HTMLButtonElement",
    "HTMLDListElement",
    "HTMLDataElement",
    "HTMLDataListElement",
    "HTMLDetailsElement",
    "HTMLDialogElement",
    "HTMLDivElement",
    "HTMLFieldSetElement",
    "HTMLFormElement",
    "HTMLHeadElement",
    "HTMLHeadingElement",
    "HTMLHtmlElement",
    "HTMLLIElement",
    "HTMLLabelElement",
    "HTMLLegendElement",
    "HTMLLinkElement",
    "HTMLMapElement",
    "HTMLMenuElement",
    "HTMLOListElement",
    "HTMLParagraphElement",
    "HTMLPreElement",
    "HTMLQuoteElement",
    "HTMLSpanElement",
    "HTMLTableCellElement",
    "HTMLTableElement",
    "HTMLTableRowElement",
    "HTMLTableSectionElement",
    "HTMLUListElement",
];

export function createEventsDeclaration(packageDirectory: string): void {
    const file = "events.d.ts";
    const eventsDTs = join(__dirname, file);
    const eventsDTsTarget = join(packageDirectory, file);

    const source = read(eventsDTs, { encoding: "utf-8" });
    const pattern = /\{(\s*interface\s+HTMLElement\s*\{[\s\S]+?\}\s*)\}/;

    const eventsDeclaration = source.replace(
        pattern,
        (_, declaration: string) => {
            const declarations = tags.map(tag =>
                declaration.replace(/HTMLElement/g, tag),
            );

            declarations.unshift(declaration);

            return `{${declarations.join("")}}`;
        },
    );

    write(eventsDTsTarget, eventsDeclaration);
}
