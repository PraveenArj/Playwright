import { test, expect } from '@playwright/test';

test("check addition of two number",async({page})=>{

  await page.goto('file:///C:/Users/Praveenraj.t/Downloads/Javascript/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btnadd');

  const result = await page.textContent('#res');
  await expect(result).toBe('8');
})
test("check subtraction of two number",async({page})=>{
  
  await page.goto('file:///C:/Users/Praveenraj.t/Downloads/Javascript/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btnadd1');

  const result = await page.textContent('#res');
  await expect(result).toBe('2');
})
test("check multiplication of two number",async({page})=>{
  
  await page.goto('file:///C:/Users/Praveenraj.t/Downloads/Javascript/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btnadd2');

  const result = await page.textContent('#res');
  await expect(result).toBe('15');
})
test("check division of two number",async({page})=>{
  
  await page.goto('file:///C:/Users/Praveenraj.t/Downloads/Javascript/calc.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','5');
  await page.click('#btnadd3');

  const result = await page.textContent('#res');
  await expect(result).toBe('1');
})







// import { test, expect } from '@playwright/test';

// test("check title",async({page})=>{
//   await page.goto('https://www.selenium.dev/');

// await expect(page).toHaveTitle("Selenium");
// })


// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
