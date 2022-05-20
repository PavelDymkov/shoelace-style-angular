import { createServer } from "http";
import { basename, resolve } from "path";
import staticServer from "serve-handler";
import { ls } from "shelljs";

type Rewrites = Exclude<
    Exclude<Parameters<typeof staticServer>[2], undefined>["rewrites"],
    undefined
>;

export interface TestServerParams {
    casesDirectory: string;
    port: number;
    staticRoot: string;
}

export class TestServer {
    private readonly server = createServer(
        async (request, response) =>
            await staticServer(request, response, {
                public: this.params.staticRoot,
                rewrites: this.rewrites,
            }),
    );
    private rewrites: Rewrites = [];

    constructor(private readonly params: TestServerParams) {}

    run(): Promise<void> {
        const extension = ".test.js";
        const pattern = resolve(this.params.casesDirectory, "**" + extension);
        const files = Array.from(ls(pattern));

        this.rewrites = files
            .map(path => basename(path, extension))
            .map(url => ({
                source: "/" + url,
                destination: "/index.html",
            }));

        return new Promise(resolve =>
            this.server.listen(this.params.port, resolve),
        );
    }

    shutdown(): Promise<void> {
        return new Promise(resolve => this.server.close(() => resolve()));
    }
}
