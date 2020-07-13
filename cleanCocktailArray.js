const cocktails = require("./cocktails.js");

const cocktailCleaned = cocktails
  .filter((c) => c["iba-specified-ingredients"] !== undefined)
  .filter((c) => c.alcohol !== undefined);

for (let cocktail of cocktailCleaned) {
  const alc = cocktail.alcohol.split("\n");
  const ingredients = cocktail["iba-specified-ingredients"].split("\n");
  delete cocktail["iba-specified-ingredients"];
  delete cocktail.alcohol;
  cocktail.drinkware = cocktail["standard-drinkware"];
  delete cocktail["standard-drinkware"];
  cocktail.alcohol = alc;
  cocktail.ingredients = ingredients;
}

console.log(JSON.stringify(cocktailCleaned));
