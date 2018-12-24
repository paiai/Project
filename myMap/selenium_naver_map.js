const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://map.naver.com/');

    const el =  driver.findElement(By.id('search-input')).sendKeys('증미역', Key.RETURN);


    const addr =  driver.findElement(By.xpath('*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/ul/li[1]/div[1]/dl/dd[1]/text()'))

    console.log(addr);
    //console.log(el.getText());

    //*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/ul/li[1]/div[1]/dl/dd[1]/text()

    //*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/ul/li[1]/div[1]/dl/dd[2]

    //*[@id="panel"]/div[2]/div[1]/div[2]/div[2]/ul/li[1]/div[1]/dl/dd[3]

  } finally {
    //await driver.quit();
  }
})();