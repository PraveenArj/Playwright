import {Browser, BrowserContext, chromium ,Locator,Page, test, expect} from '@playwright/test';
import { channel } from 'diagnostics_channel';

test("testing browser context",async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel: "chrome" });

    //browsercontext-1
    const browserContext_1:BrowserContext = await browser.newContext();
    const page1:Page = await browserContext_1.newPage();
    //browsercontext-2
    const browserContext_2:BrowserContext = await browser.newContext();
    const page2:Page = await browserContext_2.newPage();

    //page 1 credentials
    await page1.goto("http://quiz.hematitecorp.com/");
    const email:Locator = await page1.locator("#email");
    const password:Locator = await page1.locator("#password");
    const submitButton:Locator = await page1.locator("[type='submit']");

    await email.fill("Praveenraj.t@changepond.com");
    await password.fill("Praveen@2002");
    await submitButton.click();

    const title = await page1.title();
    expect(title).toEqual("Quiz App");

    //page 2 credentials
    await page2.goto("http://quiz.hematitecorp.com/");
    const email2:Locator = await page2.locator("#email");
    const password2:Locator = await page2.locator("#password");
    const submitButton2:Locator = await page2.locator("[type='submit']");

    await email2.fill("vijayasarathy.r@changepond.com");
    await password2.fill("@Vijay997670");
    await submitButton2.click();

    const title1 = await page2.title();
    expect(title1).toEqual("Quiz App");

    //browserContext1.close();
    //browserContext_2.close();
    //browser.close()
});