import { highlight } from "highlight.js";

export type Language = "angular";

export const highlightFor: Record<Language, (source: string) => string> = {
    angular(source: string): string {
        return highlight("typescript", source).value;
    },
};
