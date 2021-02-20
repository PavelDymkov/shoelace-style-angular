import { highlight } from "highlight.js";

export type Language = "angular" | "typescript" | "html";

const TEMPLATE = "$%@TEMPLATE@%$";

export const highlightFor: Record<Language, (source: string) => string> = {
    angular(source: string): string {
        let processedTemplate = "";

        source = source.replace(
            /(template\s*:\s*`\s*)([^`]*?)(\s*`)/g,
            (_, left, template, right) => {
                processedTemplate = highlightFor.html(template);

                return left + TEMPLATE + right;
            },
        );

        return highlight("typescript", source).value.replace(
            TEMPLATE,
            processedTemplate,
        );
    },

    typescript(source: string): string {
        return highlight("typescript", source).value;
    },

    html(source: string): string {
        return highlight("html", source).value;
    },
};
