const meals = [
    {
        name: "Cashew Ghoriba Biscuits",
        area: "Tunisian",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
        instructions: "Preheat the oven at 180 C / Gas 4. Line a baking tray with greaseproof paper.\r\nIn a bowl, mix the cashews and icing sugar. Add the egg yolks and orange blossom water and mix to a smooth homogeneous paste.\r\nTake lumps of the cashew paste and shape into small balls. Roll the balls in icing sugar and transfer to the baking tray. Push an almond in the centre of each ghribia.\r\nBake until the biscuits are lightly golden, about 20 minutes. Keep an eye on them, they burn quickly."
    },
    {
        name: "Chakchouka",
        area: "Tunisian",
        category: "Miscellaneous",
        thumb: "https://www.themealdb.com/images/media/meals/gpz67p1560458984.jpg",
        instructions: "In a large cast iron skillet or sauté pan with a lid, heat oil over medium high heat. Add the onion and sauté for 2-3 minutes, until softened. Add the peppers and garlic, and sauté for an additional 3-5 minutes. Add the tomatoes, cumin, paprika, salt, and chili powder. Mix well and bring the mixture to a simmer. Reduce the heat to medium low and continue to simmer, uncovered, 10-15 minutes until the mixture has thickened to your desired consistency. (Taste the sauce at this point and adjust for salt and spice, as desired.) Using the back of a spoon, make four craters in the mixture, large enough to hold an egg. Crack one egg into each of the craters. Cover the skillet and simmer for 5-7 minutes, until the eggs have set. Serve immediately with crusty bread or pita."
    },
    {
        name: "Kafteji",
        area: "Tunisian",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
        instructions: "Peel potatoes and cut into 5cm cubes.\r\nPour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain.\r\nCut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins.\r\nIn the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end.\r\nCut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper.\r\nPour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a large chopping board, add salt and pepper and chopped and mix everything with a big knife."
    },
    {
        name: "Keleya Zaara",
        area: "Tunisian",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
        instructions: "Heat the vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes.\r\nUncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve.\r\n"
    },
    {
        name: "Leblebi Soup",
        area: "Tunisian",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg",
        instructions: "Heat the oil in a large pot. Add the onion and cook until translucent.\r\nDrain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes.\r\nIn the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste.\r\nAdd the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes.\r\nSeason to taste with salt, pepper and lemon juice and serve hot."
    },
    {
        name: "Tuna and Egg Briks",
        area: "Tunisian",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
        instructions: "Heat 2 tsp of the oil in a large saucepan and cook the spring onions over a low heat for 3 minutes or until beginning to soften. Add the spinach, cover with a tight-fitting lid and cook for a further 2–3 minutes or until tender and wilted, stirring once or twice. Tip the mixture into a sieve or colander and leave to drain and cool.\r\nUsing a saucer as a guide, cut out 24 rounds about 12.5 cm (5 in) in diameter from the filo pastry, cutting 6 rounds from each sheet. Stack the filo rounds in a pile, then cover with cling film to prevent them from drying out.\r\nWhen the spinach mixture is cool, squeeze out as much excess liquid as possible, then transfer to a bowl. Add the tuna, eggs, hot pepper sauce, and salt and pepper to taste. Mix well.\r\nPreheat the oven to 200°C (400°F, gas mark 6). Take one filo round and very lightly brush with some of the remaining oil. Top with a second round and brush with a little oil, then place a third round on top and brush with oil.\r\nPlace a heaped tbsp of the filling in the middle of the round, then fold the pastry over to make a half-moon shape. Fold in the edges, twisting them to seal, and place on a non-stick baking sheet. Repeat with the remaining pastry and filling to make 8 briks in all.\r\nLightly brush the briks with the remaining oil. Bake for 12–15 minutes or until the pastry is crisp and golden brown.\r\nMeanwhile, combine the tomatoes and cucumber in a bowl and sprinkle with the lemon juice and seasoning to taste. Serve the briks hot with this salad and the chutney."
    },
    {
        name: "Tunisian Lamb Soup",
        area: "Tunisian",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/t8mn9g1560460231.jpg",
        instructions: "Add the lamb to a casserole and cook over high heat. When browned, remove from the heat and set aside.\r\nKeep a tablespoon of fat in the casserole and discard the rest. Reduce to medium heat then add the garlic, onion and spinach and cook until the onion is translucent and the spinach wilted or about 5 minutes.\r\nReturn the lamb to the casserole with the onion-spinach mixture, add the tomato puree, cumin, harissa, chicken, chickpeas, lemon juice, salt and pepper in the pan. Simmer over low heat for about 20 minutes.\r\nAdd the pasta and cook for 15 minutes or until pasta is cooked."
    },
    {
        name: "Tunisian Orange Cake",
        area: "Tunisian",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
        instructions: "Preheat oven to 190 C / Gas 5. Grease a 23cm round springform tin.\r\nCut off the hard bits from the top and bottom of the orange. Slice the orange and remove all seeds. Puree the orange with its peel in a food processor. Add one third of the sugar and the olive oil and continue to mix until well combined.\r\nSieve together flour and baking powder.\r\nBeat the eggs and the remaining sugar with an electric hand mixer for at least five minutes until very fluffy. Fold in half of the flour mixture, then the orange and the vanilla, then fold in the remaining flour. Mix well but not for too long.\r\nPour cake mixture into prepared tin and smooth out. Bake in preheated oven for 20 minutes. Reduce the oven temperature to 160 C / Gas 2 and bake again for 30 minutes Bake until the cake is golden brown and a skewer comes out clean. Cool on a wire cake rack."
    },
];

export default meals;