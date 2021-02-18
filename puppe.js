const puppeteer = require("puppeteer");
const io = require("puppeteer-io");

const { delay } = require("./test/tools");

console.log;

async function test() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:4200/form");

    await io({
        page,
        async input() {
            await page.click("#fill-dynamic-form");
            await page.click(`button[type="submit"]#dynamic`);
        },
        async output({ dataFromMessage }) {
            const formData = await dataFromMessage("sl-form data");

            console.log(formData, {
                "[0][items][0]": "foo",
                "[1][items][0]": "foo",
                "[1][items][1]": "bar",
                "[1][selected]": "selected",
                "[2][items][0]": "baz",
                "[2][selected]": "selected",
            });
        },
    });

    await io({
        page,
        async input() {
            await page.click("#change-dynamic-form");
            await delay(100);
            await page.click(`button[type="submit"]#dynamic`);
        },
        async output({ dataFromMessage }) {
            const formData = await dataFromMessage("sl-form data");

            console.log(formData, {
                "[0][items][0]": "foo",
                "[1][items][0]": "foo",
                "[1][items][1]": "bar",
                "[1][selected]": "selected",
                "[2][items][0]": "baz",
                "[2][selected]": "selected",
            });
        },
    });

    console.log("OK");
    await page.close();
    await browser.close();
}

test();
