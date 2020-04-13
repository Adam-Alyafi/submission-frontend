const meals = [
    {
        name: "Beef Lo Mein",
        area: "Chinese",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/1529444830.jpg",
        instructions: "STEP 1 - MARINATING THE BEEF\r\nIn a bowl, add the beef, salt, 1 pinch white pepper, 1 Teaspoon sesame seed oil, 1/2 egg, corn starch,1 Tablespoon of oil and mix together.\r\nSTEP 2 - BOILING THE THE NOODLES\r\nIn a 6 qt pot add your noodles to boiling water until the noodles are submerged and boil on high heat for 10 seconds. After your noodles is done boiling strain and cool with cold water.\r\nSTEP 3 - STIR FRY\r\nAdd 2 Tablespoons of oil, beef and cook on high heat untill beef is medium cooked.\r\nSet the cooked beef aside\r\nIn a wok add 2 Tablespoon of oil, onions, minced garlic, minced ginger, bean sprouts, mushrooms, peapods and 1.5 cups of water or until the vegetables are submerged in water.\r\nAdd the noodles to wok\r\nTo make the sauce, add oyster sauce, 1 pinch white pepper, 1 teaspoon sesame seed oil, sugar, and 1 Teaspoon of soy sauce.\r\nNext add the beef to wok and stir-fry"
    },
    {
        name: "Chicken Congee",
        area: "Chinese",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        instructions: "STEP 1 - MARINATING THE CHICKEN\r\nIn a bowl, add chicken, salt, white pepper, ginger juice and then mix it together well.\r\nSet the chicken aside.\r\nSTEP 2 - RINSE THE WHITE RICE\r\nRinse the rice in a metal bowl or pot a couple times and then drain the water.\r\nSTEP 2 - BOILING THE WHITE RICE\r\nNext add 8 cups of water and then set the stove on high heat until it is boiling. Once rice porridge starts to boil, set the stove on low heat and then stir it once every 8-10 minutes for around 20-25 minutes.\r\nAfter 25 minutes, this is optional but you can add a little bit more water to make rice porridge to make it less thick or to your preference.\r\nNext add the marinated chicken to the rice porridge and leave the stove on low heat for another 10 minutes.\r\nAfter an additional 10 minutes add the green onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper and stir for 10 seconds.\r\nServe the rice porridge in a bowl\r\nOptional: add Coriander on top of the rice porridge."
    },
    {
        name: "Egg Drop Soup",
        area: "Chinese",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/1529446137.jpg",
        instructions: "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top."
    },
    {
        name: "General Tso's Chicken",
        area: "Chinese",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
        instructions: "DIRECTIONS:\r\nSTEP 1 - SAUCE\r\nIn a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar.\r\nMix together well and set aside.\r\nSTEP 2 - MARINATING THE CHICKEN\r\nIn a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch\r\nSTEP 3 - DEEP FRY THE CHICKEN\r\nDeep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together.\r\nSet the chicken aside.\r\nSTEP 4 - STIR FRY\r\nAdd the sauce to the wok and then the broccoli and wait until it is boiling.\r\nTo thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.\r\nNext add in the chicken and stir-fry for a minute and serve on a plate"
    },
    {
        name: "Hot and Sour Soup",
        area: "Chinese",
        category: "Pork",
        thumb: "https://www.themealdb.com/images/media/meals/1529445893.jpg",
        instructions: "STEP 1 - MAKING THE SOUP\r\nIn a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, sesame seed oil, white pepper, hot pepper sauce, vinegar and soy sauce and stir for few seconds.\r\nAdd Tofu, mushrooms, black wood ear mushrooms to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup and stir for 8 seconds\r\nServe the soup in a bowl and add the bbq pork and sliced green onions on top."
    },
    {
        name: "Kung Pao Chicken",
        area: "Chinese",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/1525872624.jpg",
        instructions: "Combine the sake or rice wine, soy sauce, sesame oil and cornflour dissolved in water. Divide mixture in half.\r\nIn a glass dish or bowl, combine half of the sake mixture with the chicken pieces and toss to coat. Cover dish and place in refrigerator for about 30 minutes.\r\nIn a medium frying pan, combine remaining sake mixture, chillies, vinegar and sugar. Mix together and add spring onion, garlic, water chestnuts and peanuts. Heat sauce slowly over medium heat until aromatic.\r\nMeanwhile, remove chicken from marinade and sauté in a large frying pan until juices run clear. When sauce is aromatic, add sautéed chicken and let simmer together until sauce thickens."
    },
    {
        name: "Kung Po Prawns",
        area: "Chinese",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
        instructions: "Mix the cornflour and 1 tbsp soy sauce, toss in the prawns and set aside for 10 mins. Stir the vinegar, remaining soy sauce, tomato purée, sugar and 2 tbsp water together to make a sauce.\r\n\r\nWhen you’re ready to cook, heat a large frying pan or wok until very hot, then add 1 tbsp oil. Fry the prawns until they are golden in places and have opened out– then tip them out of the pan.\r\n\r\nHeat the remaining oil and add the peanuts, chillies and water chestnuts. Stir-fry for 2 mins or until the peanuts start to colour, then add the ginger and garlic and fry for 1 more min. Tip in the prawns and sauce and simmer for 2 mins until thickened slightly. Serve with rice."
    },
    {
        name: "Ma Po Tofu",
        area: "Chinese",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/1525874812.jpg",
        instructions: "Add a small pinch of salt and sesame oil to minced beef. Mix well and set aside.\r\nMix 1 tablespoon of cornstarch with 2 and ½ tablespoons of water in a small bowl to make water starch.\r\nCut tofu into square cubes (around 2cms). Bring a large amount of water to a boil and then add a pinch of salt. Slide the tofu in and cook for 1 minute. Move out and drain.\r\nGet a wok and heat up around 2 tablespoons of oil, fry the minced meat until crispy. Transfer out beef out and leave the oil in.\r\nFry doubanjiang for 1 minute over slow fire and then add garlic, scallion white, ginger and fermented black beans to cook for 30 seconds until aroma. Then mix pepper flakes in.\r\nAdd water to the seasonings and bring to boil over high fire. Gently slide the tofu cubes. Add light soy sauce and beef.Slow the heat after boiling and then simmer for 6-8 minutes. Then add chopped garlic greens.\r\nStir the water starch and then pour half of the mixture to the simmering pot. Wait for around 30 seconds and then pour the other half. You can slightly taste the tofu and add pinch of salt if not salty enough. By the way, if you feel it is too spicy, add some sugar can milder the taste. But be carefully as the broth is very hot at this point.\r\nTransfer out when almost all the seasonings stick to tofu cubes. Sprinkle Szechuan peppercorn powder (to taste)and chopped garlic greens if using.\r\nServe immediately with steamed rice."
    },
    {
        name: "Shrimp Chow Fun",
        area: "Chinese",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/1529445434.jpg",
        instructions: "STEP 1 - SOAK THE RICE NOODLES\r\nSoak the rice noodles overnight untill they are soft\r\nSTEP 2 - BOIL THE RICE NOODLES\r\nBoil the noodles for 10-15 minutes and then rinse with cold water to stop the cooking process of the noodles.\r\nSTEP 3 -MARINATING THE SHRIMP\r\nIn a bowl add the shrimp, egg, 1 pinch of white pepper, 1 Teaspoon of sesame seed oil, 1 Tablespoon corn starch and 1 tablespoon of oil\r\nMix together well\r\nSTEP 4 - STIR FRY\r\nIn a wok add 2 Tablespoons of oil, shrimp and stir fry them until it is golden brown\r\nSet the shrimp aside\r\nAdd 1 Tablespoon of oil to the work and then add minced garlic, ginger and all of the vegetables.\r\nAdd the noodles to the wok\r\nNext add sherry cooking wine, oyster sauce, sugar, vinegar, sesame seed oil, 1 pinch white pepper, and soy sauce\r\nAdd back in the shrimp\r\nTo thicken the sauce, whisk together 1 Tablespoon of corn starch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness."
    },
    {
        name: "Sweet and Sour Pork",
        area: "Chinese",
        category: "Pork",
        thumb: "https://www.themealdb.com/images/media/meals/1529442316.jpg",
        instructions: "Preparation\r\n1. Crack the egg into a bowl. Separate the egg white and yolk.\r\n\r\nSweet and Sour Pork\r\n2. Slice the pork tenderloin into strips.\r\n\r\n3. Prepare the marinade using a pinch of salt, one teaspoon of starch, two teaspoons of light soy sauce, and an egg white.\r\n\r\n4. Marinade the pork strips for about 20 minutes.\r\n\r\n5. Put the remaining starch in a bowl. Add some water and vinegar to make a starchy sauce.\r\n\r\nSweet and Sour Pork\r\nCooking Instructions\r\n1. Pour the cooking oil into a wok and heat to 190°C (375°F). Add the marinated pork strips and fry them until they turn brown. Remove the cooked pork from the wok and place on a plate.\r\n\r\n2. Leave some oil in the wok. Put the tomato sauce and white sugar into the wok, and heat until the oil and sauce are fully combined.\r\n\r\n3. Add some water to the wok and thoroughly heat the sweet and sour sauce before adding the pork strips to it.\r\n\r\n4. Pour in the starchy sauce. Stir-fry all the ingredients until the pork and sauce are thoroughly mixed together.\r\n\r\n5. Serve on a plate and add some coriander for decoration."
    },
    {
        name: "Szechuan Beef",
        area: "Chinese",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/1529443236.jpg",
        instructions: "STEP 1 - MARINATING THE BEEF\r\nIn a bowl, add the beef, salt, sesame seed oil, white pepper, egg white, 2 Tablespoon of corn starch and 1 Tablespoon of oil.\r\nSTEP 2 - STIR FRY\r\nFirst Cook the beef by adding 2 Tablespoon of oil until the beef is golden brown.\r\nSet the beef aside\r\nIn a wok add 1 Tablespoon of oil, minced ginger, minced garlic and stir-fry for few seconds.\r\nNext add all of the vegetables and then add sherry cooking wine and 1 cup of water.\r\nTo make the sauce add oyster sauce, hot pepper sauce, and sugar.\r\nadd the cooked beef and 1 spoon of soy sauce\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness."
    },
    {
        name: "Wontons",
        area: "Chinese",
        category: "Pork",
        thumb: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
        instructions: "Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl.\r\nSeparate wonton skins.\r\nPlace a heaping teaspoon of filling in the center of the wonton.\r\nBrush water on 2 borders of the skin, covering 1/4 inch from the edge.\r\nFold skin over to form a triangle, sealing edges.\r\nPinch the two long outside points together.\r\nHeat oil to 450 degrees and fry 4 to 5 at a time until golden.\r\nDrain and serve with sauce."
    }
];

export default meals;