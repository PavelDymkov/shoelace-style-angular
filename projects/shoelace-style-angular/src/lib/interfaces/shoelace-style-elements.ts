export interface ISlFormElement extends HTMLFormElement {
    getFormControls: () => Promise<HTMLElement[]>;
    getFormData: () => Promise<FormData>;
}

export interface ISlControlElement extends HTMLElement {
    name: string;
    value: string;
    checked: boolean;
}
