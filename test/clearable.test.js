const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Clearable Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check clear output", async () => {
        const page = await browser.newPage();

        await page.goto(url("/clearable"));

        await io({
            page,
            async input() {
                await page.click("#clear");
            },
            async output({ message }) {
                await message("sl-tag cleared");
            },
        });

        await page.close();
    });
});
