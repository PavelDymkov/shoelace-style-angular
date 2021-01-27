const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Overlay Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check sl-drawer outputs", async () => {
        const page = await browser.newPage();

        await page.goto(url("/overlay"));

        await io({
            page,
            async input() {
                await page.click("#open");
            },
            async output({ message }) {
                await message("initialFocus");
            },
        });

        await page.close();
    });
});
