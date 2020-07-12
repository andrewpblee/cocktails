const cocktails = [
  {
    title: "Alexander",
    image: "/wiki/File:Alexander_Cocktail.png",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cognac\nCrème de cacao",
    served: "Straight up; without ice",
    "standard-garnish": "Nutmeg",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl cognac\n3 cl brown crème de cacao\n3 cl light cream",
    preparation:
      "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
    timing: "After dinner",
    category: "The Unforgettables",
    src: "/wiki/Alexander_(cocktail)",
  },
  {
    title: "Americano",
    image: "/wiki/File:Americano_cocktail_at_Nightwood_Restaurant.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Vermouth\nCampari",
    served: "On the rocks; poured over ice",
    "standard-garnish": "half an orange slice, lemon twist",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "3 cl Campari\n3 cl red vermouth\nA splash of soda water",
    preparation:
      "Pour the Campari and vermouth over ice into a highball glass, add a splash of soda water and garnish with half orange slice and a lemon twist.",
    timing: "Before dinner",
    category: "The Unforgettables",
    src: "/wiki/Americano_(cocktail)",
  },
  {
    title: "Angel Face",
    image: "/wiki/File:IBA_Cocktail_Angel_Face_(28068833805).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin\nCalvados",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients": "3 cl gin\n3 cl Apricot brandy\n3 cl Calvados",
    preparation:
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake and strain into a chilled cocktail glass.",
    timing: "All day",
    category: "The Unforgettables",
    src: "/wiki/Angel_Face_(cocktail)",
  },
  {
    title: "Aviation",
    image: "/wiki/File:Aviation_Cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "cherry",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "45 ml gin\n" +
      "15 ml lemon juice\n" +
      "15 ml maraschino liqueur\n" +
      "1 barspoon crème de violette",
    preparation:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
    timing: "All day",
    category: "The Unforgettables",
    src: "/wiki/Aviation_(cocktail)",
  },
  {
    title: "Between the Sheets",
    image: "/wiki/File:Between_The_Sheets_Cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cognac\nRum\nTriple sec",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl white rum\n3 cl cognac\n3 cl triple sec\n2 cl fresh lemon juice",
    preparation:
      "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Between_the_Sheets_(cocktail)",
  },
  {
    title: "Boulevardier",
    image: "/wiki/File:Society_Lounge_-_Boulevardier_-_16164913902.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Bourbon whiskey\nVermouth\nCampari",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Orange peel or cherry",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "30 ml (1 part) or 45 ml (1.5 parts) bourbon\n" +
      "30 ml (1 part) sweet red vermouth\n" +
      "30 ml (1 part) campari",
    preparation: "Stir with ice, strain, garnish and serve.",
    category: "The Unforgettables",
    src: "/wiki/Boulevardier_(cocktail)",
  },
  {
    title: "Brandy Crusta",
    image: "/wiki/File:15-09-26-RalfR-WLC-0306.jpg",
    type: "Cocktail",
    served: "up",
    "standard-garnish": "Orange or Lemon Twist",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "52.5 ml brandy\n" +
      "7.5 ml Maraschino Luxardo\n" +
      "1 Bar Spoon curacao\n" +
      "15 ml Fresh lemon juice\n" +
      "1 barspoon simple syrup\n" +
      "2 dashes aromatic bitters",
    preparation:
      "Mix all ingredients with ice cubes in a mixing glass. Strain into slim cocktail glass rimmed with sugar.",
    category: "The Unforgettables",
    src: "/wiki/Brandy_Crusta",
  },
  {
    title: "Casino",
    image: "/wiki/File:Casino_Cocktail_(9120690108).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "Lemon twist and maraschino cherry",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4 cl gin (Old Tom)\n" +
      "1 cl Maraschino\n" +
      "1 cl fresh lemon juice\n" +
      "2 dashes orange bitters",
    preparation:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Casino_(cocktail)",
  },
  {
    title: "Clover Club Cocktail",
    image: "/wiki/File:Cloverclub.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4.5cl Gin\n1.5cl lemon juice\n1.5cl raspberry syrup\n1 egg white",
    preparation:
      "Dry shake ingredients to emulsify, add ice, shake and served straight up.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Clover_Club_Cocktail",
  },
  {
    title: "Daiquiri",
    image: "/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "6 cl white rum\n2 cl lime juice\n2 bar spoons superfine sugar",
    preparation:
      "In a cocktail shaker add all ingredients. Stir well to dissolve the sugar. Add ice and shake. Strain into chilled cocktail glass.",
    timing: "Happy Hour / Summer drink",
    category: "The Unforgettables",
    src: "/wiki/Daiquiri",
  },
  {
    title: "Dry Martini",
    image: "/wiki/File:15-09-26-RalfR-WLC-0084.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Up (or on the rocks)",
    "standard-garnish": "Olive or lemon twist",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "6 cl (6 parts) gin\n1 cl (1 parts) dry vermouth",
    preparation:
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    timing: "Before dinner",
    category: "The Unforgettables",
    src: "/wiki/Martini_(cocktail)",
  },
  {
    title: "Fizz",
    image: "/wiki/File:Gin_Fizz_en_El_Bulli.jpg",
    type: "Cocktail family",
    "common-alcohol(s)": "Gin\nWhiskey\nRum",
    category: "The Unforgettables",
    src: "/wiki/Fizz_(cocktail)#Gin_fizz",
  },
  {
    title: "Hanky Panky",
    image: "/wiki/File:Hanky_Panky_cocktail.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Gin\nVermouth",
    served: "up",
    "standard-garnish": "Orange zest",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "45 ml London Dry Gin\n45 ml Sweet Red Vermouth\n7.5 ml Fernet Branca",
    preparation:
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    category: "The Unforgettables",
    src: "/wiki/Hanky_Panky_(cocktail)",
  },
  {
    title: "John Collins",
    image: "/wiki/File:IBA_Cocktail_John_Collins_(29221732881).jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Gin",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lemon slice and maraschino cherry",
    "standard-drinkware": "Collins glass",
    "iba-specified-ingredients":
      "4.5 cl (3 parts) gin\n" +
      "3 cl (2 parts) freshly squeezed lemon juice\n" +
      "1.5 cl (1 part) sugar syrup\n" +
      "6 cl (4 parts) carbonated water",
    preparation:
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.",
    category: "The Unforgettables",
    src: "/wiki/John_Collins_(cocktail)",
  },
  {
    title: "The Last Word",
    image: "/wiki/File:The_Last_Word_cocktail_raised.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "green Chartreuse",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "One part gin\n" +
      "One part lime juice\n" +
      "One part green Chartreuse\n" +
      "One part maraschino liqueur",
    preparation: "Shake with ice and strain into a cocktail glass.",
    category: "The Unforgettables",
    src: "/wiki/Last_Word_(cocktail)",
  },
  {
    title: "Manhattan",
    image: "/wiki/File:Manhattan_Cocktail2.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Whiskey",
    served: "Straight up; without ice",
    "standard-garnish": "Luxardo cherry",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "5 cL Rye whiskey\n2 cL Sweet red vermouth\nDash Angostura bitters",
    preparation:
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    timing: "Before Dinner",
    category: "The Unforgettables",
    src: "/wiki/Manhattan_(cocktail)",
  },
  {
    title: "Martinez",
    image: "/wiki/File:Martinez_Cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "up",
    "standard-garnish": "lemon zest",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "45 ml London Dry Gin\n" +
      "45 ml Sweet Red Vermouth\n" +
      "1 Bar Spoon Maraschino Liqueur\n" +
      "2 Dashes Orange Bitters",
    preparation:
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    category: "The Unforgettables",
    src: "/wiki/Martinez_(cocktail)",
  },
  {
    title: "Mary Pickford",
    image: "/wiki/File:Mary_Pickford_Cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "6 cl white rum\n6 cl fresh pineapple juice\n1 cl Grenadine\n1 cl Maraschino",
    preparation: "Shake and strain into a chilled large cocktail glass",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Mary_Pickford_(cocktail)",
  },
  {
    title: "Monkey Gland",
    image: "/wiki/File:Monkey_Gland_(11677703163).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "5cl gin\n3cl orange juice\n2 drops absinthe\n2 drops grenadine",
    preparation:
      "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Monkey_Gland",
  },
  {
    title: "Negroni",
    image: "/wiki/File:Negroni_served_in_Vancouver_BC.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin\nVermouth\nCampari",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Orange slice",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "3 cl gin\n3 cl sweet red vermouth\n3 cl Campari",
    preparation: "Stir into glass over ice, garnish and serve.",
    timing: "Before dinner",
    category: "The Unforgettables",
    src: "/wiki/Negroni",
  },
  {
    title: "Old Fashioned",
    image: "/wiki/File:Whiskey_Old_Fashioned1.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Whiskey",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Orange twist or cocktail cherry",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "4.5 cl Bourbon or Rye whiskey\n" +
      "2 dashes Angostura bitters\n" +
      "1 sugar cube\n" +
      "Few dashes plain water",
    preparation:
      "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add whiskey. Garnish with orange twist, and a cocktail cherry.",
    timing: "Before dinner",
    category: "The Unforgettables",
    src: "/wiki/Old_fashioned_(cocktail)",
  },
  {
    title: "Paradise",
    image: "/wiki/File:Question_book-new.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3.5 cl (7 parts) gin\n" +
      "2 cl (4 parts) apricot brandy\n" +
      "1.5 cl (3 parts) orange juice",
    preparation:
      "Shake together over ice. Strain into cocktail glass and serve chilled.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Paradise_(cocktail)",
  },
  {
    title: "Planter's punch",
    image: "/wiki/File:Planters_Punch_2.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Cherry and pineapple slice",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "4.5cl Dark rum\n" +
      "3.5 cl fresh orange juice\n" +
      "3.5 cl fresh pineapple juice\n" +
      "2 cl fresh lemon juice\n" +
      "1 cl Grenadine syrup\n" +
      "1 cl simple syrup\n" +
      "3 or 4 dashes Angostura bitters",
    preparation:
      "Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add dash Angostura bitters. Garnish with cocktail cherry and pineapple.",
    category: "The Unforgettables",
    src: "/wiki/Planter%27s_Punch",
  },
  {
    title: "Porto Flip",
    image: "/wiki/File:Question_book-new.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Port",
    served: "Straight up; without ice",
    "standard-garnish": "Grated nutmeg",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "1.5 cl (3 parts) brandy\n4.5 cl (9 parts) port\n1 cl (2 parts) egg yolk",
    preparation:
      "Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve",
    timing: "After Dinner",
    category: "The Unforgettables",
    src: "/wiki/Porto_flip",
  },
  {
    title: "Fizz",
    image: "/wiki/File:Gin_Fizz_en_El_Bulli.jpg",
    type: "Cocktail family",
    "common-alcohol(s)": "Gin\nWhiskey\nRum",
    category: "The Unforgettables",
    src: "/wiki/Fizz_(cocktail)#Ramos_gin_fizz",
  },
  {
    title: "Rusty Nail",
    image:
      "/wiki/File:Rusty_Nail_a_cocktail_by_@tokenchick13_(16503594826).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Scotch whisky",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lemon twist",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients": "4.5 cl Scotch Whisky\n2.5 cl Drambuie",
    preparation:
      "Pour all ingredients directly into old-fashioned glass filled with ice. Stir gently. Garnish with a lemon twist. Serve.",
    timing: "After Dinner",
    category: "The Unforgettables",
    src: "/wiki/Rusty_Nail_(cocktail)",
  },
  {
    title: "Sazerac",
    image: "/wiki/File:SazeracRooseveltNOLA1July2009.JPG",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cognac",
    served: "Straight up; without ice",
    "standard-garnish": "Lemon peel",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "5 cl cognac\n1 cl absinthe\nOne sugar cube\nTwo dashes Peychaud's Bitters",
    preparation:
      "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.[1]",
    timing: "After dinner",
    notes:
      "Note: The original recipe changed in the latter part of the 19th century. Rye whiskey was substituted when cognac became difficult to obtain.[2]",
    category: "The Unforgettables",
    src: "/wiki/Sazerac",
  },
  {
    title: "Sidecar",
    image: "/wiki/File:Sidecar-cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cognac",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "5 cl cognac\n2 cl triple sec\n2 cl lemon juice",
    preparation:
      "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Sidecar_(cocktail)",
  },
  {
    title: "Stinger",
    image: "/wiki/File:Stinger_Cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cognac",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients": "5 cL cognac\n2 cL white crème de menthe",
    preparation:
      "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
    timing: "After Dinner (Before Dinner)",
    notes:
      "It has been suggested that during the 1920s the Stinger ceased being an after-dinner cocktail, and instead should be consumed before dinner.[1] However, the IBA continues to list the Stinger as an after-dinner cocktail.[2]",
    category: "The Unforgettables",
    src: "/wiki/Stinger_(cocktail)",
  },
  {
    title: "Tuxedo",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "cherry, lemon zest",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl gin (Old Tom)\n" +
      "3 cl dry Vermouth\n" +
      "1/2 barspoon Maraschino\n" +
      "1/4 barspoon Absinthe\n" +
      "3 dashes orange bitters",
    preparation:
      "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
    timing: "All Day",
    category: "The Unforgettables",
    src: "/wiki/Tuxedo_(cocktail)",
  },
  {
    title: "Vieux Carré",
    image: "/wiki/File:Vieux_Carre_Cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rye whiskey\nCognac\nVermouth",
    served: "Straight up; without ice",
    "standard-garnish": "Orange zest and maraschino cherry",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl rye whiskey\n" +
      "3 cl cognac\n" +
      "3 cl sweet Vermouth\n" +
      "1 barspoon Bénédictine\n" +
      "2 dashes Peychaud's bitters",
    preparation:
      "Pour all ingredients into a mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with orange zest and a maraschino cherry.",
    category: "The Unforgettables",
    src: "/wiki/Vieux_Carr%C3%A9_(cocktail)",
  },
  {
    title: "Whiskey Sour",
    image: "/wiki/File:Whiskey_Sour.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Whiskey",
    served: "On the rocks or straight up",
    "standard-garnish": "Maraschino cherry and half orange slice",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "4.5 cl (3 parts) bourbon whiskey\n" +
      "3 cl (2 parts) fresh lemon juice\n" +
      "1.5 cl (1 part) simple syrup",
    preparation:
      "Shake with ice. Strain into chilled glass, garnish and serve.",
    timing: "Before Dinner",
    notes:
      "If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
    category: "The Unforgettables",
    src: "/wiki/Whiskey_sour",
  },
  {
    title: "Sours",
    image: "/wiki/File:Whiskey_sour.jpg",
    type: "Cocktail family",
    "common-alcohol(s)": "Gin\nBourbon whiskey\nBrandy\nPisco\nRum\nAmaretto",
    notes: "See the article for specifics.",
    category: "The Unforgettables",
    src: "/wiki/Sour_(cocktail)#White_Lady",
  },
  {
    title: "Bellini",
    image: "/wiki/File:Bellini_Cipriani,_Macaroni_Grill,_Dunwoody_GA.jpg",
    type: "Wine cocktail",
    "primary-alcohol-by-volume": "Prosecco",
    served: "Straight up; without ice",
    "standard-drinkware": "Champagne flute",
    "iba-specified-ingredients":
      "10 cl (2 parts) Prosecco\n5 cl (1 part) fresh peach purée",
    preparation:
      "Pour peach purée into chilled glass, add sparkling wine. Stir gently.",
    notes: "Traditionally a Bellini uses white peaches for the fruit.",
    category: "Contemporary Classics",
    src: "/wiki/Bellini_(cocktail)",
  },
  {
    title: "Black Russian",
    image: "/wiki/File:Black_Russian.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Vodka",
    served: "On the rocks; poured over ice",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients": "4 cl Vodka\n2 cl Coffee liqueur",
    preparation:
      "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
    timing: "After dinner",
    category: "Contemporary Classics",
    src: "/wiki/Black_Russian",
  },
  {
    title: "Bloody Mary",
    image:
      "/wiki/File:Bloody_Mary_Coctail_with_celery_stalk_-_Evan_Swigart.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Vodka",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Celery stalk and lemon wedge (optional)",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "4.5 cl/1 jigger (3 parts) vodka\n" +
      "9 cl/3 oz (6 parts) Tomato juice\n" +
      "1.5 cl/1 tbsp (1 part) Lemon juice\n" +
      "2 to 3 dashes of Worcestershire Sauce\n" +
      "Tabasco sauce\n" +
      "Celery salt\n" +
      "Black pepper",
    preparation:
      "Stirring gently, pour all ingredients into highball glass. Garnish.",
    category: "Contemporary Classics",
    src: "/wiki/Bloody_Mary_(cocktail)",
  },
  {
    title: "Caipirinha",
    image: "/wiki/File:15-09-26-RalfR-WLC-0048.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cachaça",
    served: "On the rocks; poured over ice",
    "standard-garnish": "sugarcane, lime(ingredient)",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "5 cl cachaça\nHalf a lime cut into 4 wedges\n2 teaspoons sugar",
    preparation:
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.",
    notes:
      "A wide variety of fresh fruits can be used in place of lime. In the absence of cachaça, vodka can be used, making a caipiroska.[1]",
    category: "Contemporary Classics",
    src: "/wiki/Caipirinha",
  },
  {
    title: "Champagne Cocktail",
    image: "/wiki/File:Question_book-new.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Champagne",
    served: "Straight up; without ice",
    "standard-garnish": "Orange slice and maraschino cherry",
    "standard-drinkware": "Champagne flute",
    "iba-specified-ingredients":
      "9cl Champagne\n1cl cognac\n2 dashes Angostura bitters\n1 sugar cube",
    preparation:
      "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.",
    category: "Contemporary Classics",
    src: "/wiki/Champagne_cocktail",
  },
  {
    title: "Corpse Reviver №1",
    image: "/wiki/File:Edvard_Munch-The_Day_After.jpg",
    category: "Contemporary Classics",
    src: "/wiki/Corpse_Reviver_(cocktail)#Corpse_Reviver_№2_&_№2A",
  },
  {
    title: "Cosmopolitan",
    image: "/wiki/File:Cosmopolitan_(5076906532).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Vodka",
    served: "Straight up; without ice",
    "standard-garnish": "lime slice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4 cl Vodka Citron\n" +
      "1.5 cl Cointreau\n" +
      "1.5 cl Fresh lime juice\n" +
      "3 cl Cranberry juice",
    preparation:
      "Shake all ingredients in cocktail shaker filled with ice. Strain into a large cocktail glass. Garnish with lime slice.",
    timing: "All day",
    notes: "The drink should be a frothy bright pink color",
    category: "Contemporary Classics",
    src: "/wiki/Cosmopolitan_(cocktail)",
  },
  {
    title: "Rum and Coke (Cuba libre)",
    image: "/wiki/File:15-09-26-RalfR-WLC-0056.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lime wedge",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "12 cl Cola\n5 cl white rum\n1 cl Fresh lime juice",
    preparation:
      "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
    category: "Contemporary Classics",
    src: "/wiki/Cuba_libre",
  },
  {
    title: "French 75",
    image: "/wiki/File:French_75.jpg",
    type: "Wine cocktail",
    "primary-alcohol-by-volume": "Champagne",
    served: "Straight up; without ice",
    "standard-drinkware": "Champagne flute",
    "iba-specified-ingredients":
      "3 cl gin\n2 dashes simple syrup\n1.5 cl lemon juice\n6 cl Champagne",
    preparation:
      "Combine gin, syrup, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.",
    category: "Contemporary Classics",
    src: "/wiki/French_75_(cocktail)",
  },
  {
    title: "French Connection",
    image: "/wiki/File:Old_Fashioned_Glass.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Cognac",
    served: "On the rocks; poured over ice",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients": "3.5cl Cognac\n3.5cl Amaretto liqueur",
    preparation:
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
    timing: "After dinner",
    category: "Contemporary Classics",
    src: "/wiki/French_Connection_(cocktail)",
  },
  {
    title: "Golden Dream",
    image: "/wiki/File:Godlen-Dream_Mixed_Drink_Cocktail_(2360538105).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Orange-flavored liqueur\nGalliano",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "2 cl (2 parts) Galliano\n" +
      "2 cl (2 parts) Triple Sec\n" +
      "2 cl (2 parts) Fresh orange juice\n" +
      "1 cl (1 part) Fresh cream",
    preparation: "Shake with cracked ice. Strain into glass and serve.",
    timing: "After dinner",
    notes: "Should be quite fluffy",
    category: "Contemporary Classics",
    src: "/wiki/Golden_dream_(cocktail)",
  },
  {
    title: "Grasshopper",
    image: "/wiki/File:Grasshopper_cocktail.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Crème de cacao\nCrème de menthe",
    served: "up",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl Crème de menthe (green)\n3 cl Crème de cacao (white)\n3 cl cream",
    preparation:
      "Pour ingredients into a cocktail shaker with ice. Shake briskly and then strain into a chilled cocktail glass.",
    timing: "After dinner",
    category: "Contemporary Classics",
    src: "/wiki/Grasshopper_(cocktail)",
  },
  {
    title: "Hemingway Special",
    image: "/wiki/File:Hemingway_Daiquiri.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Rum",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "6 cL (12 parts) Rum\n" +
      "4 cl (8 parts) grapefruit juice\n" +
      "1.5 cL (3 parts) Maraschino liqueur\n" +
      "1.5 cl (3 parts) fresh lime juice",
    preparation: "Pour all ingredients into a shaker with ice. Shake.",
    timing: "All day",
    category: "Contemporary Classics",
    src: "/wiki/Hemingway_Special",
  },
  {
    title: "Horse's Neck",
    image: "/wiki/File:Horse%27s_Neck_cocktail.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Brandy",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Long spiral of lemon zest",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "4 cL (1 part) Brandy\n" +
      "12 cL (3 parts) Ginger ale\n" +
      "Dash of Angostura bitter (optional)",
    preparation:
      "Pour brandy and ginger ale directly into highball glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter.",
    category: "Contemporary Classics",
    src: "/wiki/Horse%27s_Neck",
  },
  {
    title: "Irish Coffee",
    image: "/wiki/File:Irish_coffee_glass.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Irish whiskey",
    served: "Hot",
    "standard-drinkware": "Irish coffee mug",
    "iba-specified-ingredients":
      "4 cl (2 parts) Irish whiskey\n" +
      "8 cl (4 parts) hot coffee\n" +
      "3 cl (1½ parts) fresh cream\n" +
      "1 tsp brown sugar",
    preparation:
      "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
    category: "Contemporary Classics",
    src: "/wiki/Irish_coffee",
  },
  {
    title: "Kir",
    image: "/wiki/File:Kir_cocktail.jpg",
    type: "Wine cocktail",
    "primary-alcohol-by-volume": "Wine",
    served: "Straight up; without ice",
    "standard-drinkware": "Wine glass (white)",
    "iba-specified-ingredients":
      "9 cl (9 parts) white wine\n1 cl (1 part) crème de cassis",
    preparation:
      "Add the crème de cassis to the bottom of the glass, then top up with wine.",
    timing: "Before Dinner",
    notes:
      "A recipe can be found at the International Bartenders Association website.",
    category: "Contemporary Classics",
    src: "/wiki/Kir_(cocktail)",
  },
  {
    title: "Long Island Iced Tea",
    image: "/wiki/File:Long_Island_Iced_Teas.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin\nTequila\nVodka\nRum\nTriple sec",
    served: "On the rocks; poured over ice",
    "standard-garnish": "lemon slice",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "1.5 cl Tequila\n" +
      "1.5 cl Vodka\n" +
      "1.5 cl White rum\n" +
      "1.5 cl Triple sec\n" +
      "1.5 cl Gin\n" +
      "2.5 cl Lemon juice\n" +
      "3.0 cl simple syrup\n" +
      "Top with Cola",
    preparation:
      "Add all ingredients into highball glass filled with ice. Stir gently. Optionally garnish with lemon slice. [1]",
    category: "Contemporary Classics",
    src: "/wiki/Long_Island_iced_tea",
  },
  {
    title: "Mai Tai",
    image: "/wiki/File:Trader_Vic%27s_1944_Mai_Tai.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish": "spearmint leaves and lime shell",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "3 cl amber Jamaican rum\n" +
      "3 cl Martinique molasses rum\n" +
      "1.5 cl orange curaçao\n" +
      "1.5 cl orgeat syrup\n" +
      "3 cl fresh lime juice\n" +
      ".75 cl simple syrup",
    preparation:
      "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
    category: "Contemporary Classics",
    src: "/wiki/Mai_Tai",
  },
  {
    title: "Margarita",
    image: "/wiki/File:MargaritaReal.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Tequila",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Salt on the rim (optional)",
    "standard-drinkware": "Margarita glass",
    "iba-specified-ingredients":
      "5 cL (10 parts) Tequila\n" +
      "2 cL (4 parts) Triple sec or Cointreau\n" +
      "1.5 cL (3 parts) Lime juice",
    preparation:
      "Pour all ingredients into shaker with ice. Shake well and strain into cocktail glass rimmed with salt.",
    timing: "All Day",
    category: "Contemporary Classics",
    src: "/wiki/Margarita",
  },
  {
    title: "Mimosa",
    image: "/wiki/File:Pool-side_Mimosas_at_The_Standard_Hotel.jpg",
    type: "Wine cocktail",
    "primary-alcohol-by-volume": "Champagne",
    served: "Straight up; without ice",
    "standard-garnish": "Orange twist",
    "standard-drinkware": "Champagne flute",
    "iba-specified-ingredients": "7.5 cl champagne\n7.5 cl orange juice",
    preparation:
      "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
    category: "Contemporary Classics",
    src: "/wiki/Mimosa_(cocktail)",
  },
  {
    title: "Mint Julep",
    image: "/wiki/File:Mint_Julep_im_Silberbecher.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Bourbon whiskey",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Mint sprig",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "6 cL Bourbon whiskey\n" +
      "4 mint leaves\n" +
      "1 teaspoon powdered sugar\n" +
      "2 teaspoons water",
    preparation:
      "In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.",
    category: "Contemporary Classics",
    src: "/wiki/Mint_julep",
  },
  {
    title: "Mojito",
    image: "/wiki/File:Mojito98775.jpeg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish":
      "sprig of mint (Yerba buena in the original recipe), slice of lime",
    "standard-drinkware": "Collins glass",
    "iba-specified-ingredients":
      "4 cl white rum\n" +
      "3 cl fresh lime juice\n" +
      "6 sprigs of mint\n" +
      "2 teaspoons sugar (or 2 cl of sugar syrup)",
    preparation:
      "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish with sprig of mint leaves and lemon slice. Serve with straw.",
    category: "Contemporary Classics",
    src: "/wiki/Mojito",
  },
  {
    title: "Moscow mule",
    image: "/wiki/File:Moscow_Mule_at_Rye,_San_Francisco.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Vodka",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lime slice",
    "standard-drinkware": "copper mug",
    "iba-specified-ingredients":
      "4.5 cl (9 parts) vodka\n" +
      "0.5 cl (1 part) lime juice\n" +
      "12 cl (24 parts) ginger beer",
    preparation:
      "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
    category: "Contemporary Classics",
    src: "/wiki/Moscow_mule",
  },
  {
    title: "Piña Colada",
    image: "/wiki/File:Pi%C3%B1a_Colada.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Rum",
    served: "Blended with ice (frozen style)",
    "standard-garnish": "Pineapple slice and/or maraschino cherry",
    "standard-drinkware": "Poco Grande glass",
    "iba-specified-ingredients":
      "50 ml White Rum\n30 ml Coconut Cream\n50 ml Fresh Pineapple Juice",
    preparation:
      "Blend all the ingredients with ice in an electric blender, pour into a large goblet or Hurricane glass and serve.",
    category: "Contemporary Classics",
    src: "/wiki/Pi%C3%B1a_Colada",
  },
  {
    title: "Pisco Sour",
    image: "/wiki/File:Pisco_sour_20100613b.JPG",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Pisco",
    served: "Straight up; without ice",
    "standard-garnish": "Angostura bitters (1 dash)",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "60ml Pisco\n" +
      "30ml lime juice\n" +
      "20ml simple syrup\n" +
      "1 egg white\n" +
      "Several drops of aromatic bitters at the end",
    preparation:
      "Vigorously shake contents in a cocktail shaker with ice cubes, then strain into a glass and garnish with bitters.[1]",
    timing: "All day",
    category: "Contemporary Classics",
    src: "/wiki/Pisco_Sour",
  },
  {
    title: "Sea Breeze",
    image: "/wiki/File:Cocktail_with_vodka.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Vodka",
    served: "On the rocks; poured over ice",
    "standard-garnish": "lime slice",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "4 cl Vodka\n12 cl Cranberry juice\n3 cl Grapefruit juice",
    preparation:
      "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
    category: "Contemporary Classics",
    src: "/wiki/Sea_Breeze_(cocktail)",
  },
  {
    title: "Sex on the Beach",
    image: "/wiki/File:Question_book-new.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Vodka",
    served: "On the rocks; poured over ice",
    "standard-garnish": "orange slice",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "4 cl Vodka\n2 cl Peach schnapps\n4 cl Orange juice\n4 cl cranberry juice",
    preparation:
      "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
    category: "Contemporary Classics",
    src: "/wiki/Sex_on_the_Beach",
  },
  {
    title: "Singapore Sling",
    image: "/wiki/File:Singaporesling-march2017.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "Maraschino cherry, pineapple",
    "standard-drinkware": "Hurricane glass",
    "iba-specified-ingredients":
      "3 cl gin\n" +
      "1.5 cl cherry liqueur (cherry brandy)\n" +
      "0.75 cl Cointreau\n" +
      "0.75 cl DOM Bénédictine\n" +
      "1 cl Grenadine\n" +
      "12 cl pineapple juice\n" +
      "1.5 cl fresh lime juice\n" +
      "1 dash Angostura bitters",
    preparation:
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cherry.",
    category: "Contemporary Classics",
    src: "/wiki/Singapore_Sling",
  },
  {
    title: "Tequila sunrise",
    image: "/wiki/File:Tequila_Sunrise_glass.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Tequila",
    served: "On the rocks; poured over ice",
    "standard-garnish": "orange slice and cherry",
    "standard-drinkware": "Collins glass",
    "iba-specified-ingredients":
      "4.5 cl (3 parts) Tequila\n" +
      "9 cl (6 parts) Orange juice\n" +
      "1.5 cl (1 part) Grenadine syrup",
    preparation:
      "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
    category: "Contemporary Classics",
    src: "/wiki/Tequila_Sunrise_(cocktail)",
  },
  {
    title: "Vesper",
    image: "/wiki/File:Gordon%27s_Vesper.jpeg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "lemon twist",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4.5 cl gin\n1.5 cl vodka\n0.75 cl Lillet Blanc",
    preparation:
      "Shake and strain into a chilled cocktail glass. Add the garnish.",
    timing: "Before dinner",
    category: "Contemporary Classics",
    src: "/wiki/Vesper_(cocktail)",
  },
  {
    title: "Zombie",
    image: "/wiki/File:ZombieCocktail.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish": "mint sprig",
    "standard-drinkware": "Zombie glass",
    "iba-specified-ingredients":
      "45 ml Jamaican dark rum\n" +
      "45 ml Puerto Rican gold rum\n" +
      "30 ml Demerara rum\n" +
      "20 ml fresh lime juice\n" +
      "15 ml falernum\n" +
      "15 ml Donn’s Mix (2 parts fresh yellow grapefruit and 1 part cinnamon syrup)\n" +
      "1 tsp Grenadine syrup\n" +
      "1 dash Angostura bitters\n" +
      "6 drops Pernod",
    preparation:
      "Mix ingredients in a shaker with crushed ice. Pour into a tall tumbler glass.",
    notes:
      "Because of the high proof rum, this cocktail could be lit if desired.",
    category: "Contemporary Classics",
    src: "/wiki/Zombie_(cocktail)",
  },
  {
    title: "Barracuda",
    image: "/wiki/File:Barracuda_Sparkling_Cocktail.png",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "Straight up; without ice",
    "standard-drinkware": "Margarita glass",
    "iba-specified-ingredients":
      "4.5 cl Gold rum\n" +
      "1.5 cl Galliano\n" +
      "6 cl Pineapple juice\n" +
      "1 dash fresh lime juice\n" +
      "Top with Prosecco",
    preparation:
      "Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.",
    category: "New Era",
    src: "/wiki/Barracuda_(cocktail)",
  },
  {
    title: "Bee's Knees",
    image: "/wiki/File:Bee%27s_Knees_(cocktail).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "lemon peel",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients": "2 oz gin\n3/4 oz lemon juice\n3/4 oz honey",
    preparation:
      "Shake with ice and strain into a chilled large cocktail glass",
    category: "New Era",
    src: "/wiki/Bee%27s_Knees_(cocktail)",
  },
  {
    title: "Bramble",
    image: "/wiki/File:Bramble_Cocktail1.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Gin",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Blackberry, lemon slice",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "5 cl gin\n" +
      "2.5 cl lemon juice\n" +
      "1.25 cl simple syrup\n" +
      "1.5 cl Creme de Mure (blackberry liqueur)",
    preparation:
      "Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.",
    timing: "All Day",
    category: "New Era",
    src: "/wiki/Bramble_(cocktail)",
  },
  {
    title: "Canchanchara",
    image: "/wiki/File:Canchanchara.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lime wedge",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "6 cl rum (Cuban aguardiente)\n" +
      "1.5 cl fresh lime juice\n" +
      "1.5 cl raw honey\n" +
      "5 cl water",
    preparation:
      "Mix honey with water and lime juice and spread the mixture on the bottom and sides of the glass. Add cracked ice, and then the rum. End by energetically stirring from bottom to top.",
    category: "New Era",
    src: "/wiki/Canchanchara",
  },
  {
    title: "Dark 'n' Stormy",
    image: "/wiki/File:DarknStormy.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Rum",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lime wedge",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients": "6 cl dark rum\n10 cl ginger beer",
    preparation:
      "Fill glass with ice, add rum and top with ginger beer. Garnish with lime wedge.",
    category: "New Era",
    src: "/wiki/Dark_%27n%27_Stormy",
  },
  {
    title: "Espresso martini",
    image:
      "/wiki/File:Bistrot_Bruno_Loubet,_Clerkenwell,_London_(4574785649).jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Vodka",
    served: "Straight up; without ice",
    "standard-garnish": "3 coffee beans",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "5 cl vodka\n" +
      "3 cl Kahlúa\n" +
      "Sugar syrup (according to individual preference of sweetness)\n" +
      "1 strong espresso",
    preparation:
      "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass.",
    category: "New Era",
    src: "/wiki/Espresso_martini",
  },
  {
    title: "Fernandito",
    image: "/wiki/File:Fernet_and_Coke_(Fernet_con_Coca).jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Fernet-Branca",
    served: "On the rocks; poured over ice",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients": "5 cl Fernet-Branca\nCola to top up",
    preparation:
      "Fill a double old-fashioned glass with ice. Pour in the Fernet-Branca, fill the glass with cola. Stir gently.",
    category: "New Era",
    src: "/wiki/Fernandito",
  },
  {
    title: "French martini",
    image: "/wiki/File:Question_book-new.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Vodka\nRaspberry liqueur",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4.5 cl vodka\n1.5 cl Raspberry Liqueur\n1.5 cl fresh pineapple juice",
    preparation:
      "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from lemon peel onto the drink.",
    timing: "Before dinner",
    category: "New Era",
    src: "/wiki/French_martini",
  },
  {
    title: "Illegal",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Mezcal",
    served:
      "Served in one of two ways:\n" +
      "Straight up (no ice) in a chilled cocktail glass\n" +
      "On the rocks (over ice) in a traditional clay or terracotta mug",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl Mezcal (espadín)\n" +
      "1.5 cl Jamaica overproof white rum\n" +
      "1.5 cl Falernum liqueur\n" +
      "1 barspoon maraschino Luxardo\n" +
      "2.25 cl fresh lime juice\n" +
      "1.5 cl simple syrup\n" +
      "Few drops of egg white (optional)",
    preparation:
      'Pour all ingredients into shaker with ice cubes. Shake vigorously. Strain into chilled cocktail glass, or "on the rocks" into a traditional clay or terracotta mug.',
    category: "New Era",
    src: "/wiki/Illegal_(cocktail)",
  },
  {
    title: "Lemon Drop Martini",
    image: "/wiki/File:Lemon_Drop_cocktails.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Vodka",
    served: "Straight up; without ice",
    "standard-garnish": "Lemon slice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl vodka citron\n2 cl triple sec\n1.5 cl lemon juice",
    preparation:
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass. Garnish with sugar rim around the glass.",
    timing: "All Day",
    category: "New Era",
    src: "/wiki/Lemon_drop_martini",
  },
  {
    title: "Naked and Famous",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Mezcal",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "2.25 cl mezcal\n" +
      "2.25 cl yellow Chartreuse\n" +
      "2.25 cl Aperol\n" +
      "2.25 cl fresh lime juice",
    preparation:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass.",
    category: "New Era",
    src: "/wiki/Naked_and_Famous_(cocktail)",
  },
  {
    title: "New York Sour",
    image: "/wiki/File:New_York_Sour.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Whiskey",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lemon or orange zest and cherry",
    "standard-drinkware": "Rocks glass",
    "iba-specified-ingredients":
      "6 cl whiskey (rye or bourbon)\n" +
      "2.25 cl Simple syrup\n" +
      "3 cl fresh lemon juice\n" +
      "Few drops of egg white\n" +
      "1.5 cl red wine (Shiraz or Malbec)",
    preparation:
      "Pour the whiskey, syrup, lemon juice, and egg white into shaker with ice cubes. Shake vigorously. Strain into chilled rocks glass filled with ice. Float the wine on top. Garnish with lemon or orange zest and cherry.",
    category: "New Era",
    src: "/wiki/New_York_Sour",
  },
  {
    title: "Old Cuban",
    image: "/wiki/File:VTR_-_The_%22Old_Cuban%22_(6038903420).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "Straight up; without ice",
    "standard-garnish": "Mint sprigs",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4.5 cl aged rum\n" +
      "2.25 cl fresh lime juice\n" +
      "3 cl simple syrup\n" +
      "2 dashes Angostura bitters\n" +
      "6 to 8 mint leaves\n" +
      "6 cl champagne brut or Prosecco",
    preparation:
      "Pour all ingredients except the wine into cocktail shaker, shake well with ice, strain into chilled elegant cocktail glass. Top up with the sparkling wine and garnish with mint sprigs",
    category: "New Era",
    src: "/wiki/Old_Cuban",
  },
  {
    title: "Paloma",
    image: "/wiki/File:TequilaPaloma.JPG",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Tequila",
    served: "On the rocks; poured over ice",
    "standard-garnish": "lime wedge",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "One part tequila\nThree parts grapefruit soda",
    preparation: "Stir together and serve over ice.",
    category: "New Era",
    src: "/wiki/Paloma_(cocktail)",
  },
  {
    title: "Paper Plane",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Bourbon whiskey",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl Bourbon whiskey\n" +
      "3 cl amaro Nonino\n" +
      "3 cl Aperol\n" +
      "3 cl fresh lemon juice",
    preparation:
      "Pour all ingredients into cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
    category: "New Era",
    src: "/wiki/Paper_Plane_(cocktail)",
  },
  {
    title: "Penicillin",
    image: "/wiki/File:The_Spotted_Owl_-_Penicillin.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Whiskey",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Candied ginger",
    "standard-drinkware": "Old Fashioned glass",
    "iba-specified-ingredients":
      "6 cl blended Scotch whiskey\n" +
      "0.75 cl Lagavulin 16y whiskey\n" +
      "2.25 cl fresh lemon juice\n" +
      "2.25 cl honey syrup\n" +
      "2-3 quarter-sized slices of fresh ginger",
    preparation:
      "Muddle fresh ginger in a shaker and add the remaining ingredients, except for the Lagavulin whiskey. Fill the shaker with ice and shake. Double-strain into a chilled old fashioned glass with ice. Float the Lagavulin whiskey on top.",
    category: "New Era",
    src: "/wiki/Penicillin_(cocktail)",
  },
  {
    title: "Russian Spring Punch",
    image: "/wiki/File:Russian_spring_punch.jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Vodka",
    served: "On the rocks; poured over ice",
    "standard-drinkware": "Highball glass",
    "iba-specified-ingredients":
      "2.5 cl Vodka\n" +
      "1.5 cl Crème de cassis\n" +
      "1 cl Sugar Syrup\n" +
      "2.5 cl Lemon Juice, fresh",
    preparation:
      "Pour all ingredients into cocktail shaker except the sparkling wine, shake well with ice, strain into chilled tall tumbler glass filled with ice and top up with sparkling wine.",
    category: "New Era",
    src: "/wiki/Russian_Spring_Punch",
  },
  {
    title: "South Side or Southside",
    image: "/wiki/File:Wikibooks-logo.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Gin",
    served: "Straight up; without ice",
    "standard-garnish": "mint leaf",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "2 oz gin\n" +
      "1 oz lime juice\n" +
      "3/4 oz simple syrup\n" +
      "1 sprig mint\n" +
      "1 fresh mint leaf[1]",
    preparation:
      "Shake with ice and strain into a chilled large cocktail glass",
    notes: "A variant, the Southside Fizz, adds soda water and ice.",
    category: "New Era",
    src: "/wiki/Southside_(cocktail)",
  },
  {
    title: "Spicy Fifty",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Vodka",
    served: "Straight up; without ice",
    "standard-garnish": "Red chili pepper",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "5 cl vodka vanilla\n" +
      "1.5 cl elderflower cordial\n" +
      "1.5 cl fresh lemon juice\n" +
      "1 cl Monin honey syrup\n" +
      "2 thin slices red chili pepper",
    preparation:
      "Pour all ingredients into a cocktail shaker, shake well with ice, double-strain into chilled cocktail glass.",
    category: "New Era",
    src: "/wiki/Spicy_Fifty",
  },
  {
    title: "Spritz Veneziano",
    image: "/wiki/File:20120704_170702_venezia_1584.jpg",
    type: "Wine cocktail",
    "primary-alcohol-by-volume": "Prosecco",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Slice of Orange",
    "standard-drinkware": "Aperol Spritz Glass / Wine Glass[1]",
    "iba-specified-ingredients":
      "9 cl Prosecco\n6 cl Aperol\nSplash of soda water",
    preparation:
      "Build all ingredients into a wine glass filled with ice. Stir gently.",
    category: "New Era",
    src: "/wiki/Spritz_Veneziano",
  },
  {
    title: "Suffering Bastard",
    image: "/wiki/File:Suffering_Bastard_Cocktail.jpg",
    type: "Mixed drink",
    "standard-garnish": "Orange slice & mint sprig",
    "standard-drinkware": "Double Old-Fashioned",
    "iba-specified-ingredients":
      "1 ounce gin\n" +
      "1 ounce brandy (or bourbon)\n" +
      "1/2 ounce lime juice cordial\n" +
      "2 dashes Angostura bitters\n" +
      "4 ounces ginger beer, chilled",
    preparation:
      "Shake everything but ginger beer with ice, then stir & pour unstrained",
    category: "New Era",
    src: "/wiki/Suffering_Bastard",
  },
  {
    title: "Tipperary",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Irish whiskey",
    served: "Straight up; without ice",
    "standard-garnish": "Orange slice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "5 cl Irish whiskey\n" +
      "2.5 cl sweet red vermouth\n" +
      "1.5 cl green Chartreuse\n" +
      "2 dashes Angostura bitters",
    preparation:
      "Pour all ingredients into mixing glass with ice cubes. Stir well. Strain into chilled cocktail glass. Garnish with a slice of orange.",
    category: "New Era",
    src: "/wiki/Tipperary_(cocktail)",
  },
  {
    title: "Tommy's margarita",
    image: "/wiki/File:TommysMargarita.jpg",
    type: "Mixed drink",
    "primary-alcohol-by-volume": "Tequila",
    served: "Straight (except at Tommy's)",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4.5 cl Tequila\n" +
      "1.5 cl Freshly squeezed lime juice\n" +
      "2 bar spoons of agave nectar",
    preparation: "Shake and strain into a chilled cocktail glass.",
    timing: "All Day",
    category: "New Era",
    src: "/wiki/Tommy%27s_margarita",
  },
  {
    title: "Trinidad Sour",
    image: "/wiki/File:VTR_-_Trinidad_Sour_(18045674468).jpg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Angostura bitters",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "4.5 cl Angostura bitters\n" +
      "3 cl orgeat syrup\n" +
      "2.25 cl fresh lemon juice\n" +
      "1.5 cl rye whiskey",
    preparation:
      "Pour all ingredients into a cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
    category: "New Era",
    src: "/wiki/Trinidad_Sour",
  },
  {
    title: "Ve.n.to",
    image: "/wiki/File:Question_book-new.svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Grappa",
    served: "On the rocks; poured over ice",
    "standard-garnish": "Lemon zest and white grapes",
    "standard-drinkware": "tumbler",
    "iba-specified-ingredients":
      "4.5 cl white smooth grappa\n" +
      "2.25 cl fresh lemon juice\n" +
      "1.5 cl honey mix (made with chamomile infusion if desired)\n" +
      "1.5 cl chamomile cordial\n" +
      "1 cl egg white (optional)",
    preparation:
      "Pour all ingredients into the shaker. Shake vigorously with ice. Strain into a chilled small tumbler glass filled with ice.",
    notes:
      "If desired, the water used to make the honey mix can be replaced by chamomile infusion.",
    category: "New Era",
    src: "/wiki/Ve.n.to",
  },
  {
    title: "Yellow Bird",
    image: "/wiki/File:Cocktail_Glass_(Martini).svg",
    type: "Cocktail",
    "primary-alcohol-by-volume": "Rum",
    served: "Straight up; without ice",
    "standard-drinkware": "Cocktail glass",
    "iba-specified-ingredients":
      "3 cl White Rum\n1.5 cl Galliano\n1.5 cl Triple sec\n1.5 cl Lime juice",
    preparation:
      "Pour all ingredients into a cocktail shaker, shake well with ice, strain into chilled cocktail glass.",
    timing: "All Day",
    category: "New Era",
    src: "/wiki/Yellow_Bird_(cocktail)",
  },
];
