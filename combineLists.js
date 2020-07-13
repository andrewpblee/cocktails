const unforgettables = require("./cocktails/unforgettables");
const contemporaries = require("./cocktails/contemporary_classics");
const newEra = require("./cocktails/newEraDrinks");
const getCocktailDetails = require("./getCocktailDetails");
const root = "https://en.wikipedia.org";
process.setMaxListeners(0);

const generateList = async (list, category) => {
  const promises = list.map(async (url) => {
    const details = await getCocktailDetails(root + url);
    // scrape each url then add additional keys
    details.category = category;
    details.src = url;
    return details;
  });
  //   map will return promises, so we need to resolve them all
  return Promise.all(promises);
};

// We need to have one array rather than 3, so combining these within the async function
const mergeLists = async () => {
  const unforgettableList = await generateList(
    unforgettables,
    "The Unforgettables"
  );
  const contList = await generateList(contemporaries, "Contemporary Classics");
  const newEraList = await generateList(newEra, "New Era");
  return [...unforgettableList, ...contList, ...newEraList];
};

mergeLists().then(console.log);
