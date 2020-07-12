const puppeteer = require("puppeteer");

const getCocktailDetails = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const details = await page.evaluate(() => {
    const title = document.querySelector("caption").textContent;
    const imageUrl = document.querySelector(".image").getAttribute("href");
    const infobox = document.querySelector(".infobox");
    let cocktails = [];
    cocktails.push({ title: title });
    cocktails.push({ image: imageUrl });
    // most of the info is within a table at the top, so we can grab all rows
    const tableRows = infobox.querySelectorAll("tr");
    tableRows.forEach((el) => {
      let cocktailJSON = {};
      try {
        let headers = el
          .querySelector("th")
          .innerText.replace(/\n|\s/gi, "-")
          .toLowerCase();
        let details = el.querySelector("td").innerText;
        cocktailJSON[headers] = details;
      } catch (exception) {}
      cocktails.push(cocktailJSON);
    });
    return cocktails;
  });
  await browser.close();
  let total = {};
  details.forEach((el) => {
    for (let [key, value] of Object.entries(el)) {
      total[key] = value;
    }
  });
  return total;
};

module.exports = getCocktailDetails;
