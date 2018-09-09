const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://map.naver.com/');

    const el =  driver.findElement(By.id('search-input')).sendKeys('증미역', Key.RETURN);

    console.log(el.getText());

  } finally {
    //await driver.quit();
  }
})();