import {test,chromium,Page,Locator, Browser} from '@playwright/test';
 
test("Locator",async()=>{
    const browser:Browser = await chromium.launch({headless: false,channel:'chrome'});
    const page:Page = await browser.newPage();
 
    await page.goto("http://127.0.0.1:5500/form.html");
 
    const fname:Locator = await page.locator("#txt1");
    await fname.fill("Praveenraj");
 
    const password:Locator = await page.locator("#txt2");
    await password.fill("Praveenraj@123");
 
    //use of class selector
 
     const logo:Locator = await page.locator(".logo");
     const logoExist = await logo.isEnabled();
     console.log(logoExist);
     const contact:Locator = await page.locator(".txtContact");
     await contact.fill("8768678768");
 
    //use of text selector
 
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);
 
    // use of css property tag name
    const address:Locator = await page.locator("css=input#txtaddress");
    await address.fill("Chennai")

    //use of xpath selector
    const pincode:Locator = await page.locator('xpath =//input[@id="txtpincode"]');
    await pincode.fill("603103");
    
    const email:Locator = await page.locator('xpath =//input[@id="myemail"]');
    await email.fill("tpraveenraj09@gmail.com");

    const checkbox:Locator = await page.locator('xpath =//input[@id="tick"]');
    const check = await checkbox.isEnabled();
    console.log(check);
    
});