export class Logger {
    log(event: CustomEvent): void {
        const { tagName } = event.target as HTMLElement;

        console.log(`${tagName} dispatch ${event.type}`);
    }
}
