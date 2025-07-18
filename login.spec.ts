import { test, expect, chromium, Browser, Page, Locator } from '@playwright/test'

test("login test", async() =>{
    const browser:Browser = await chromium.launch({ headless: false});
    const page:Page = await browser.newPage();

    await page.goto("http://quiz.hematitecorp.com/#/");

    const email:Locator = await page.locator("#email");
    const password: Locator = await page.locator("#password");
    const submitButton: Locator = await page.locator("[type='submit']");

    await email.fill("Praveenraj.t@changepond.com");
    await password.fill("Praveen@2002");
    await submitButton.click();

    const title = await page.title();
    console.log("Home Page title", title);
    await page.screenshot({ path: 'VoucherCode.png' });

    expect(title).toEqual("Quiz App");
    //browser.close()
});