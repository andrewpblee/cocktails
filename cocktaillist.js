const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://en.wikipedia.org/wiki/List_of_IBA_official_cocktails"
  );
  const list = await page.evaluate(() => {
    /*
    In this script I want to collect a list of urls to loop through and collect info on. 
    As this wiki separates the cocktails out into The Unforgettables, Contemporary Classics and New Era, I would like to keep this detail to use as a filter later on the frontend.
    I could select all li elements, but that returns an ordered list and so I lose the cocktail type.
    if we needed this more than 3 times I would create a function, also the element depth changes for New Era, so I needed to write a separate statement anyway. 
      In this instance I'm exporting to a new file using "node cocktaillist > filename.js" 
      That way I can create 3 arrays of urls to loop over and collect info, and still 
      keep track of what type of cocktail they are
    As I don't think this wiki will be updated regularly, I'm keeping this script rougher than production standard. 
    */
    const cocktails = document
      .querySelector("#New_era_drinks")
      .parentNode.nextSibling.nextSibling.querySelectorAll("li");
    //   This way of selecting is not ideal but is the only way to reach the ul from the id in a span
    urls = [];
    cocktails.forEach((li) => {
      try {
        const href = li.querySelector("a").getAttribute("href");
        urls.push(href);
      } catch (exception) {
        console.error(exception);
      }
    });
    return urls;
  });

  console.log(list);
  await browser.close();
})();
