const meals = [
    {
        name: "Chicken Couscous",
        area: "Moroccan",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
        instructions: "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like."
    },
    {
        name: "Lamb Tagine",
        area: "Moroccan",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg",
        instructions: "Heat the olive oil in a heavy-based pan and add the onion and carrot. Cook for 3- 4 mins until softened.\r\n\r\nAdd the diced lamb and brown all over. Stir in the garlic and all the spices and cook for a few mins more or until the aromas are released.\r\n\r\nAdd the honey and apricots, crumble in the stock cube and pour over roughly 500ml boiling water or enough to cover the meat. Give it a good stir and bring to the boil. Turn down to a simmer, put the lid on and cook for 1 hour.\r\n\r\nRemove the lid and cook for a further 30 mins, then stir in the squash. Cook for 20 – 30 mins more until the squash is soft and the lamb is tender. Serve alongside rice or couscous and sprinkle with parsley and pine nuts, if using."
    },
    {
        name: "Lamb tomato and sweet spices",
        area: "Moroccan",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg",
        instructions: "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling. And remove any stalks. Drain the preserved leaves, immerse them in boiling water for 10 minutes and then leave to dry on a tea towel before use. \r\nBasmati rice with butter and pine nuts is an ideal accompaniment. Couscous is great, too. Serves four.\r\nFirst make the filling. Put all the ingredients, apart from the tomatoes, in a bowl. Cut the tomatoes in half, coarsely grate into the bowl and discard the skins. Add half a teaspoon of salt and some black pepper, and stir. Leave on the side, or in the fridge, for up to a day. Before using, gently squeeze with your hands and drain away any juices that come out.\r\nTo make the sauce, heat the oil in a medium pan. Add the ginger and garlic, cook for a minute or two, taking care not to burn them, then add the tomato, lemon juice and sugar. Season, and simmer for 20 minutes.\r\nWhile the sauce is bubbling away, prepare the vine leaves. Use any torn or broken leaves to line the base of a wide, heavy saucepan. Trim any leaves from the fennel, cut it vertically into 0.5cm-thick slices and spread over the base of the pan to cover completely.\r\nLay a prepared vine leaf (see intro) on a work surface, veiny side up. Put two teaspoons of filling at the base of the leaf in a 2cm-long by 1cm-wide strip. Fold the sides of the leaf over the filling, then roll it tightly from bottom to top, in a cigar shape. Place in the pan, seam down, and repeat with the remaining leaves, placing them tightly next to each other in lines or circles (in two layers if necessary).\r\nPour the sauce over the leaves (and, if needed, add water just to cover). Place a plate on top, to weigh the leaves down, then cover with a lid. Bring to a boil, reduce the heat and cook on a bare simmer for 70 minutes. Most of the liquid should evaporate. Remove from the heat, and leave to cool a little - they are best served warm. When serving, bring to the table in the pan - it looks great. Serve a few vine leaves and fennel slices with warm rice. Spoon the braising juices on top and garnish with coriander."
    },
    {
        name: "Rigatoni with fennel sausage sauce",
        area: "Moroccan",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/qtqvys1468573168.jpg",
        instructions: "Heat a tablespoon of oil in a large saute pan for which you have a lid. Add the sausage pieces and fry on a medium-high heat for 10 minutes, stirring regularly, until golden-brown all over. Transfer the sausages to a plate, then add the onion and fennel to the hot pan and fry for 15 minutes, stirring once in a while, until soft and caramelised; if the pan goes a bit dry, add a teaspoon or so of extra oil. Stir in the paprika, garlic and half the fennel seeds, fry for two minutes more, then pour on the wine and boil for 30 seconds, to reduce by half. Add the tomatoes, sugar, 100ml water, the seared sausage and half a teaspoon of salt, cover and simmer for 30 minutes; remove the lid after 10 minutes, and cook until the sauce is thick and rich. Remove from the heat, stir through the olives and remaining fennel seeds and set aside until you’re ready to serve.\r\n\r\nBring a large pot of salted water to a boil, add the pasta and cook for 12-14 minutes (or according to the instructions on the packet), until al dente. Meanwhile, reheat the sauce. Drain the pasta, return it to the pot, stir in a tablespoon of oil, then divide between the bowls. \r\n\r\nPut all the pesto ingredients except the basil in the small bowl of a food processor. Add a tablespoon of water and blitz to a rough paste. Add the basil, then blitz until just combined (the pesto has a much better texture if the basil is not overblended).\r\n\r\nSpoon over the ragù and top with a spoonful of pesto. Finish with a sprinkling of chopped fennel fronds, if you have any, and serve at once."
    },
    {
        name: "Spicy North African Potato Salad",
        area: "Moroccan",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
        instructions: "Cook potatoes - place potatoes in a pot of cold water, and bring to the boil. Boil 20 minutes, or until potatoes are tender. You know they are cooked when you can stick a knife in them and the knife goes straight through.\r\nCombine harissa spice, olive oil, salt and pepper and lemon juice in a small bowl and whisk until combined.\r\nOnce potatoes are cooked, drain water and roughly chop potatoes in half.\r\nAdd harissa mix and spring onions/green onions to potatoes and stir.\r\nIn a large salad bowl, lay out arugula/rocket.\r\nTop with potato mix and toss.\r\nAdd fetta, mint and sprinkle over pine nuts.\r\nAdjust salt and pepper to taste."
    },
    {
        name: "Tahini Lentils",
        area: "Moroccan",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
        instructions: "In a jug, mix the tahini with the zest and juice of the lemon and 50ml of cold water to make a runny dressing. Season to taste, then set aside.\r\nHeat the oil in a wok or large frying pan over a medium-high heat. Add the red onion, along with a pinch of salt, and fry for 2 mins until starting to soften and colour. Add the garlic, pepper, green beans and courgette and fry for 5 min, stirring frequently.\r\nTip in the kale, lentils and the tahini dressing. Keep the pan on the heat for a couple of mins, stirring everything together until the kale is wilted and it’s all coated in the creamy dressing."
    },
];

export default meals;