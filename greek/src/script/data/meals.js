const meals = [
    {
        name: "Chicken Quinoa Greek Salad",
        area: "Greek",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
        instructions: "Cook the quinoa following the pack instructions, then rinse in cold water and drain thoroughly.\r\n\r\nMeanwhile, mix the butter, chilli and garlic into a paste. Toss the chicken fillets in 2 tsp of the olive oil with some seasoning. Lay in a hot griddle pan and cook for 3-4 mins each side or until cooked through. Transfer to a plate, dot with the spicy butter and set aside to melt.\r\n\r\nNext, tip the tomatoes, olives, onion, feta and mint into a bowl. Toss in the cooked quinoa. Stir through the remaining olive oil, lemon juice and zest, and season well. Serve with the chicken fillets on top, drizzled with any buttery chicken juices."
    },
    {
        name: "Garides Saganaki",
        area: "Greek",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
        instructions: "Place the prawns in a pot and add enough water to cover. Boil for 5 minutes. Drain, reserving the liquid, and set aside.\r\nHeat 2 tablespoons of oil in a saucepan. Add the onion; cook and stir until soft. Mix in the parsley, wine, tomatoes, garlic and remaining olive oil. Simmer, stirring occasionally, for about 30 minutes, or until the sauce is thickened.\r\nWhile the sauce is simmering, the prawns should become cool enough to handle. First remove the legs by pinching them, and then pull off the shells, leaving the head and tail on.\r\nWhen the sauce has thickened, stir in the prawns. Bring to a simmer again if the sauce has cooled with the prawns, and cook for about 5 minutes. Add the feta and remove from the heat. Let stand until the cheese starts to melt. Serve warm with slices of crusty bread.\r\nThough completely untraditional, you can add a few tablespoons of stock or passata to this recipe to make a delicious pasta sauce. Toss with pasta after adding the feta, and serve."
    },
    {
        name: "Gigantes Plaki",
        area: "Greek",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg",
        instructions: "Soak the beans overnight in plenty of water. Drain, rinse, then place in a pan covered with water. Bring to the boil, reduce the heat, then simmer for approx 50 mins until slightly tender but not soft. Drain, then set aside.\r\n\r\nHeat oven to 180C/160C fan/gas 4. Heat the olive oil in a large frying pan, tip in the onion and garlic, then cook over a medium heat for 10 mins until softened but not browned. Add the tomato purée, cook for a further min, add remaining ingredients, then simmer for 2-3 mins. Season generously, then stir in the beans. Tip into a large ovenproof dish, then bake for approximately 1 hr, uncovered and without stirring, until the beans are tender. The beans will absorb all the fabulous flavours and the sauce will thicken. Allow to cool, then scatter with parsley and drizzle with a little more olive oil to serve."
    },
    {
        name: "Honey Yogurt Cheesecake",
        area: "Greek",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg",
        instructions: "Heat oven to 160C/140C fan/gas 3. Crush the biscuits and most of the almonds inside a plastic food bag using a rolling pin. Mix with the butter, then press into the bottom of a deep, oval, 23cm dish (or something similar in size – a roasting tin, baking dish or cake tin will work). Bake for 10 mins until crisp.\r\n\r\nStir or mash together the yogurt and mascarpone, then whisk in the eggs, one at a time. Stir in the lemon and orange zests, then stir in most of the honey, reserving about 3 tbsp. Spread over the biscuit base, cover loosely with foil and cook for 1 hr. Remove the foil and cook for 15 mins more until lightly golden and the top is firm with just the slightest wobble in the middle. Leave to cool. Can be kept in the fridge for up to 2 days.\r\n\r\nTo serve, scatter with almonds, drizzle over the remaining honey, and hand around fresh fruit to go with it."
    },
    {
        name: "Lamb and Lemon Souvlaki",
        area: "Greek",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/rjhf741585564676.jpg",
        instructions: "Pound the garlic with sea salt in a pestle and mortar (or use a small food processor), until the garlic forms a paste. Whisk together the oil, lemon juice, zest, dill and garlic. Mix in the lamb and combine well. Cover and marinate for at least 2 hrs or overnight in the fridge. If you’re going to use bamboo skewers, soak them in cold water.\r\n\r\nIf you’ve prepared the lamb the previous day, take it out of the fridge 30 mins before cooking. Thread the meat onto the soaked or metal skewers. Heat the grill to high or have a hot griddle pan or barbecue ready. Cook the skewers for 2-3 mins on each side, basting with the remaining marinade. Heat the pitta or flatbreads briefly, then stuff with the souvlaki. Add Greek salad (see 'Goes well with', right) and Tzatziki (below), if you like."
    },
    {
        name: "Lamb Tzatziki Burgers",
        area: "Greek",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg",
        instructions: "Tip the bulghar into a pan, cover with water and boil for 10 mins. Drain really well in a sieve, pressing out any excess water.\r\n\r\nTo make the tzatziki, squeeze and discard the juice from the cucumber, then mix into the yogurt with the chopped mint and a little salt.\r\n\r\nWork the bulghar into the lamb with the spices, garlic (if using) and seasoning, then shape into 4 burgers. Brush with a little oil and fry or barbecue for about 5 mins each side until cooked all the way through. Serve in the buns (toasted if you like) with the tzatziki, tomatoes, onion and a few mint leaves."
    },
    {
        name: "Moussaka",
        area: "Greek",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
        instructions: "Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning.\r\n\r\nStir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden."
    },
    {
        name: "Stuffed Lamb Tomatoes",
        area: "Greek",
        category: "Lamb",
        thumb: "https://www.themealdb.com/images/media/meals/u55lbp1585564013.jpg",
        instructions: "Heat oven to 180C/160C fan/gas 4. Slice the tops off the tomatoes and reserve. Scoop out most of the pulp with a teaspoon, being careful not to break the skin. Finely chop the pulp, and keep any juices. Sprinkle the insides of the tomatoes with a little sugar to take away the acidity, then place them on a baking tray.\r\n\r\nHeat 2 tbsp olive oil in a large frying pan, add the onion and garlic, then gently cook for about 10 mins until soft but not coloured. Add the lamb, cinnamon and tomato purée, turn up the heat, then fry until the meat is browned. Add the tomato pulp and juice, the rice and the stock. Season generously. Bring to the boil, then simmer for 15 mins or until the rice is tender and the liquid has been absorbed. Set aside to cool a little, then stir in the herbs.\r\n\r\nStuff the tomatoes up to the brim, top tomatoes with their lids, drizzle with 2 tbsp more olive oil, sprinkle 3 tbsp water into the tray, then bake for 35 mins. Serve with salad and crusty bread, hot or cold."
    }
];

export default meals;