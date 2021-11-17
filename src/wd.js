const {Builder, By} = require('selenium-webdriver');
require('chromedriver');


(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://chromedriver.chromium.org/')
  await driver.sleep(5000);

  const title1 = await driver.findElement(By.css('.Rn3Z1b'));
  let text = await title1.getText();
  console.log(text);
  chai.expect(text).to.have.text('ChromeDriver')

  const headerItems = await driver.findElements(By.css('.plFg0c .PsKE7e'));
  await headerItems[2].click();
  await driver.sleep(5000);

  const title2 = await driver.findElement(By.css('.Rn3Z1b'));
  driver.executeScript("arguments[0].style.backgroundColor = 'red'", title2);

  text = await title2.getText();
  console.log(text);

  await driver.sleep(5000);
  await driver.quit();
  
})();

