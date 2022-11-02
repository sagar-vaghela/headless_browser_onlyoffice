const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost/sdkjs-plugins/headless_plugin/test/test.html');

  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'beforeClick.png' });
  await page.click('#button3')
  //await page.screenshot({ path: 'example.png' });
// ayathi button click preview button
// code paste and download docx
//close()
// await page.evaluate(() => {
//   var dom = document.querySelector('#button3');
//   console.log(dom.outerHTML);
// });
  // const selector = await page.$eval("#button3", el => el.addEventListener("click"));
  // console.log(selector);
 
  await page.screenshot({ path: 'afterClick.png' });

  await browser.close();
})();