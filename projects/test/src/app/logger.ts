export class Logger {
    log(event: CustomEvent): void {
        const { tagName } = event.target as HTMLElement;

        console.log(`${tagName} dispatch ${event.type}`);
    }

    logDetail(event: CustomEvent, path: string): void {
        const { tagName } = event.target as HTMLElement;

        const payload = path
            .split(".")
            .reduce((object: any, key: string) => object?.[key], event.detail);

        console.log(`${tagName} dispatch ${event.type} with ${payload}`);
    }
}
