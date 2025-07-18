import {Browser, BrowserContext, chromium, Page, test } from "playwright/test";

test("auth test",async()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserContext1:BrowserContext = await browser.newContext();
    const page:Page = await browserContext1.newPage();

    //below approach is not good bcs it doesnt work properly mostly
    //await page.goto("http://userid:userpassquiz.hematitecorp.com/");
    const userId:string = "Praveenraj.T@changepond.com"
    const userPass:string = "Praveen@2002";
    const authHeader:string = "Basic "+btoa(userId+":"+userPass);
    
    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz.hematitecorp.com/");

   // browserContext1.close();
   // browser.close();
});