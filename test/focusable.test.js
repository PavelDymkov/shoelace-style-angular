const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { url } = require("./tools");

let browser;

describe("Focusable Directive", () => {
    before(async () => {
        browser = await puppeteer.launch();
    });

    after(async () => {
        await browser.close();
    });

    it("should check onFocus and onBlur outputs", async () => {
        const page = await browser.newPage();

        await io({
            page,
            async input() {
                await page.goto(url("/focusable"));
            },
            async output({ message }) {
                await message("focus: sl-input");
                await message("blur: sl-input");
                await message("focus: sl-button");
                await message("blur: sl-button");
            },
        });

        await page.close();
    });
});
