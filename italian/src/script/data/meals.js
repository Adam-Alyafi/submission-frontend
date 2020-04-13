const meals = [
    {
        name: "Budino Di Ricotta",
        area: "Italian",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/1549542877.jpg",
        instructions: "Mash the ricotta and beat well with the egg yolks, stir in the flour, sugar, cinnamon, grated lemon rind and the rum and mix well. You can do this in a food processor. Beat the egg whites until stiff, fold in and pour into a buttered and floured 25cm cake tin. Bake in the oven at 180ºC/160ºC fan/gas 4 for about 40 minutes, or until it is firm.\r\n\r\nServe hot or cold dusted with icing sugar."
    },
    {
        name: "Chicken Alfredo Primavera",
        area: "Italian",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
        instructions: "Heat 1 tablespoon of butter and 2 tablespoons of olive oil in a large skillet over medium-high heat. Season both sides of each chicken breast with seasoned salt and a pinch of pepper. Add the chicken to the skillet and cook for 5-7 minutes on each side, or until cooked through.  While the chicken is cooking, bring a large pot of water to a boil. Season the boiling water with a few generous pinches of kosher salt. Add the pasta and give it a stir. Cook, stirring occasionally, until al dente, about 12 minutes. Reserve 1/2 cup of  pasta water before draining the pasta.  Remove the chicken from the pan and transfer it to a cutting board; allow it to rest. Turn the heat down to medium and dd the remaining 1 tablespoon of butter and olive oil to the same pan you used to cook the chicken. Add the veggies (minus the garlic) and red pepper flakes to the pan and stir to coat with the oil and butter (refrain from seasoning with salt until the veggies are finished browning). Cook, stirring often, until the veggies are tender, about 5 minutes. Add the garlic and a generous pinch of salt and pepper to the pan and cook for 1 minute.  Deglaze the pan with the white wine. Continue to cook until the wine has reduced by half, about 3 minutes. Stir in the milk, heavy cream, and reserved pasta water. Bring the mixture to a gentle boil and allow to simmer and reduce for 2-3 minutes. Turn off the heat and add the Parmesan cheese and cooked pasta. Season with salt and pepper to taste. Garnish with Parmesan cheese and chopped parsley, if desired. "
    },
    {
        name: "Chilli prawn linguine",
        area: "Italian",
        category: "Pasta",
        thumb: "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
        instructions: "Mix the dressing ingredients in a small bowl and season with salt and pepper. Set aside.\r\n\r\nCook the pasta according to the packet instructions. Add the sugar snap peas for the last minute or so of cooking time.\r\n\r\nMeanwhile, heat the oil in a wok or large frying pan, toss in the garlic and chilli and cook over a fairly gentle heat for about 30 seconds without letting the garlic brown. Tip in the prawns and cook over a high heat, stirring frequently, for about 3 minutes until they turn pink.\r\n\r\nAdd the tomatoes and cook, stirring occasionally, for 3 minutes until they just start to soften. Drain the pasta and sugar snaps well, then toss into the prawn mixture. Tear in the basil leaves, stir, and season with salt and pepper.\r\n\r\nServe with salad leaves drizzled with the lime dressing, and warm crusty bread."
    },
    {
        name: "Fettucine alfredo",
        area: "Italian",
        category: "Pasta",
        thumb: "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
        instructions: "In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.\r\nMeanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage).\r\nPut the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.\r\nAdd the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately."
    },
    {
        name: "Lasagne",
        area: "Italian",
        category: "Pasta",
        thumb: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
        instructions: "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.\r\nAdd the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.\r\nStir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.\r\nHeat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.\r\nPut the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like."
    },
    {
        name: "Mediterranean Pasta Salad",
        area: "Italian",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
        instructions: "Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving."
    },
    {
        name: "Osso Buco alla Milanese",
        area: "Italian",
        category: "Miscellaneous",
        thumb: "https://www.themealdb.com/images/media/meals/wwuqvt1487345467.jpg",
        instructions: "Heat the oven to 300 degrees.\r\nDredging the shanks: pour the flour into a shallow dish (a pie plate works nicely). Season the veal shanks on all sides with salt and pepper. One at a time, roll the shanks around in the flour coat, and shake and pat the shank to remove any excuses flour. Discard the remaining flour.\r\nBrowning the shanks: put the oil and 1 tablespoon of the butter in a wide Dutch oven or heavy braising pot (6 to 7 quart) and heat over medium-high heat. When the butter has melted and the oil is shimmering, lower the shanks into the pot, flat side down; if the shanks won’t fit without touching one another, do this in batches. Brown the shanks, turning once with tongs, until both flat sides are well caramelized, about 5 minutes per side. If the butter-oil mixture starts to burn, lower the heat just a bit. Transfer the shanks to a large platter or tray and set aside.\r\nThe aromatics: pour off and discard the fat from the pot. Wipe out any burnt bits with a damp paper towel, being careful not to remove any delicious little caramelized bits. Ad the remaining 2 tablespoons butter to the pot and melt it over medium heat. When the butter has stopped foaming, add the onion, carrot, celery, and fennel. Season with salt and pepper, stir, and cook the vegetables until they begin to soften but do not brown, about 6 minutes. Stir in the garlic, orange zest, marjoram, and bay leaf, and stew for another minute or two.\r\nThe braising liquid: add the wine, increase the heat to high, and bring to a boil. Boil, stirring occasionally, to reduce the wine by about half, 5 minutes. Add the stock and tomatoes, with their juice, and boil again to reduce the liquid to about 1 cup total, about 10 minutes.\r\nThe braise: Place the shanks in the pot so that they are sitting with the exposed bone facing up, and pour over any juices that accumulated as they sat. Cover with parchment paper, pressing down so the parchment nearly touches the veal and the edges hang over the sides of the pot by about an inch. Cover tightly with the lid, and slide into the lower part of the oven to braise at a gentle simmer. Check the pot after the first 15 minutes, and if the liquid is simmering too aggressively, lower the oven heat by 10 or 15 degrees. Continue braising, turning the shanks and spooning some pan juices over the top after the first 40 minutes, until the meat is completely tender and pulling away from the bone, about 2 hours.\r\nThe gremolata: While the shanks are braising, stir together the garlic, parsley, and lemon zest in a small bowl. Cover with plastic wrap and set aside in a cool place (or the refrigerator, if your kitchen is very warm.)\r\nThe finish: When the veal is fork-tender and falling away from the bone, remove the lid and sprinkle over half of the gremolata. Return the veal to the oven, uncovered, for another 15 minutes to caramelize it some.\r\nUsing a slotted spatula or spoon, carefully lift the shanks from the braising liquid, doing your best to keep them intact. The shanks will be very tender and threatening to fall into pieces, and the marrow will be wobbly inside the bones, so this can be a bit tricky. But if they do break apart, don’t worry, the flavor won’t suffer at all. Arrange the shanks on a serving platter or other large plate, without stacking, and cover with foil to keep warm.\r\nFinishing the sauce: Set the braising pot on top of the stove and evaluate the sauce: if there is a visible layer of fat floating on the surface, use a large spoon to skim it off and discard it. Taste the sauce for concentration of flavor. If it tastes a bit weak or flat, bring it to a boil over high heat, and boil to reduce the volume and intensify the flavor for 5 to 10 minutes. Taste again for salt and pepper. If the sauce wants more zip, stir in a teaspoon or two of the remaining gremolata.\r\nPortioning the veal shanks: if the shanks are reasonably sized, serve one per person. If the shanks are gargantuan or you’re dealing with modest appetites, pull apart the larger shanks, separating them at their natural seams, and serve smaller amounts. Be sure to give the marrow bones to whomever prizes them most.\r\nServing: Arrange the veal shanks on warm dinner plates accompanied by the risotto, if serving. Just before carrying the plates to the table, sprinkle on the remaining gremolata and then spoon over a generous amount of sauce – the contact with the hot liquid will aromatize the gremolata and perk up everyone’s appetite with the whiff of garlic and lemon."
    },
    {
        name: "Pilchard puttanesca",
        area: "Italian",
        category: "Pasta",
        thumb: "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg",
        instructions: "Cook the pasta following pack instructions. Heat the oil in a non-stick frying pan and cook the onion, garlic and chilli for 3-4 mins to soften. Stir in the tomato purée and cook for 1 min, then add the pilchards with their sauce. Cook, breaking up the fish with a wooden spoon, then add the olives and continue to cook for a few more mins.\r\n\r\nDrain the pasta and add to the pan with 2-3 tbsp of the cooking water. Toss everything together well, then divide between plates and serve, scattered with Parmesan."
    },
    {
        name: "Ribollita",
        area: "Italian",
        category: "Vegetarian",
        thumb:"https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg",
        instructions: "Put 2 tablespoons of the oil in a large pot over medium heat. When it’s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes.\r\nHeat the oven to 500 degrees. Drain the beans; if they’re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes.\r\nFish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan.\r\nPut the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve."
    },
    {
        name: "Salmon Prawn Risotto",
        area: "Italian",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
        instructions: "Melt the butter in a thick-based pan and gently cook the onion without colour until it is soft.\r\nAdd the rice and stir to coat all the grains in the butter\r\nAdd the wine and cook gently stirring until it is absorbed\r\nGradually add the hot stock, stirring until each addition is absorbed. Keep stirring until the rice is tender\r\nSeason with the lemon juice and zest, and pepper to taste. (there will probably be sufficient saltiness from the salmon to not need to add salt) Stir gently to heat through\r\nServe scattered with the Parmesan and seasonal vegetables.\r\nGrill the salmon and gently place onto the risotto with the prawns and asparagus"
    },
    {
        name: "Spaghetti alla Carbonara",
        area: "Italian",
        category: "Pasta",
        thumb: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
        instructions: "Per preparare gli spaghetti alla carbonara cominciate mettendo sul fuoco una pentola con l’acqua salata per cuocere la pasta. Nel frattempo eliminate la cotenna dal guanciale  e tagliatelo prima a fette e poi a striscioline spesse circa 1cm . La cotenna avanzata potrà essere riutilizzata per insaporire altre preparazioni. Versate i pezzetti in una padella antiaderente e rosolate per circa 15 minuti a fiamma media, fate attenzione a non bruciarlo altrimenti rilascerà un aroma troppo forte.\r\n\r\nNel frattempo tuffate gli spaghetti nell’acqua bollente e cuoceteli per il tempo indicato sulla confezione. Intanto versate i tuorli in una ciotola, aggiungete anche la maggior parte del pecorino previsto dalla ricetta la parte restante servirà per guarnire la pasta.\r\n\r\nInsaporite con il pepe nero, amalgamate tutto con una frusta a mano. Aggiungete un cucchiaio di acqua di cottura per diluire il composto e mescolate.\r\n\r\n\r\nIntanto il guanciale sarà giunto a cottura, spegnete il fuoco e tenetelo da parte. Scolate la pasta al dente direttamente nel tegame con il guanciale e saltatela brevemente per insaporirla. Togliete dal fuoco e versate il composto di uova e pecorino nel tegame, saltate la pasta per amalgamare\r\n\r\n\r\ne se dovesse risultare troppo asciutta potete aggiungere poca acqua di cottura. Servite subito gli spaghetti alla carbonara insaporendoli con il pecorino avanzato e il pepe nero macinato."
    },
    {
        name: "Spaghetti Bolognese",
        area: "Italian",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        instructions: "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top."
    },
    {
        name: "Spicy Arrabiata Penne",
        area: "Italian",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        instructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm."
    },
    {
        name: "Spinach & Ricotta Cannelloni",
        area: "Italian",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg",
        instructions: "First make the tomato sauce. Heat the oil in a large pan and fry the garlic for 1 min. Add the sugar, vinegar, tomatoes and some seasoning and simmer for 20 mins, stirring occasionally, until thick. Add the basil and divide the sauce between 2 or more shallow ovenproof dishes (see Tips for freezing, below). Set aside. Make a sauce by beating the mascarpone with the milk until smooth, season, then set aside.\r\n\r\nPut the spinach in a large colander and pour over a kettle of boiling water to wilt it (you may need to do this in batches). When cool enough to handle squeeze out the excess water. Roughly chop the spinach and mix in a large bowl with 100g Parmesan and ricotta. Season well with salt, pepper and the nutmeg.\r\n\r\nHeat oven to 200C/180C fan/gas 6. Using a piping bag or plastic food bag with the corner snipped off, squeeze the filling into the cannelloni tubes. Lay the tubes, side by side, on top of the tomato sauce and spoon over the mascarpone sauce. Top with Parmesan and mozzarella. You can now freeze the cannelloni, uncooked, or you can cook it first and then freeze. Bake for 30-35 mins until golden and bubbling. Remove from oven and let stand for 5 mins before serving."
    },
    {
        name: "Squash linguine",
        area: "Italian",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg",
        instructions: "Heat oven to 200C/180C fan/gas 6. Put the squash and garlic on a baking tray and drizzle with the olive oil. Roast for 35-40 mins until soft. Season.\r\nCook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage."
    },
    {
        name: "Vegan Lasagna",
        area: "Italian",
        category: "Vegan",
        thumb: "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
        instructions: "1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes."
    },
    {
        name: "Venetian Duck Ragu",
        area: "Italian",
        category: "Pasta",
        thumb: "https://www.themealdb.com/images/media/meals/qvrwpt1511181864.jpg",
        instructions: "Heat the oil in a large pan. Add the duck legs and brown on all sides for about 10 mins. Remove to a plate and set aside. Add the onions to the pan and cook for 5 mins until softened. Add the garlic and cook for a further 1 min, then stir in the cinnamon and flour and cook for a further min. Return the duck to the pan, add the wine, tomatoes, stock, herbs, sugar and seasoning. Bring to a simmer, then lower the heat, cover with a lid and cook for 2 hrs, stirring every now and then.\r\nCarefully lift the duck legs out of the sauce and place on a plate – they will be very tender so try not to lose any of the meat. Pull off and discard the fat, then shred the meat with 2 forks and discard the bones. Add the meat back to the sauce with the milk and simmer, uncovered, for a further 10-15 mins while you cook the pasta.\r\nCook the pasta following pack instructions, then drain, reserving a cup of the pasta water, and add the pasta to the ragu. Stir to coat all the pasta in the sauce and cook for 1 min more, adding a splash of cooking liquid if it looks dry. Serve with grated Parmesan, if you like."
    }
];

export default meals;