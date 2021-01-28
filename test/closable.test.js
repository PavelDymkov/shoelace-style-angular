const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Closable Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check close output", async () => {
        const page = await browser.newPage();

        await page.goto(url("/closable"));

        await io({
            page,
            async input() {
                await page.click("#close");
            },
            async output({ message }) {
                await message("sl-tab closed");
            },
        });

        await page.close();
    });
});
