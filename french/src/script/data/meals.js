const meals = [
    {
        name: "Beef Bourguignon",
        area: "French",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        instructions: "Heat a large casserole pan and add 1 tbsp goose fat. Season the beef and fry until golden brown, about 3-5 mins, then turn over and fry the other side until the meat is browned all over, adding more fat if necessary. Do this in 2-3 batches, transferring the meat to a colander set over a bowl when browned.\r\nIn the same pan, fry the bacon, shallots or pearl onions, mushrooms, garlic and bouquet garni until lightly browned. Mix in the tomato purée and cook for a few mins, stirring into the mixture. This enriches the bourguignon and makes a great base for the stew. Then return the beef and any drained juices to the pan and stir through.\r\nPour over the wine and about 100ml water so the meat bobs up from the liquid, but isn’t completely covered. Bring to the boil and use a spoon to scrape the caramelised cooking juices from the bottom of the pan – this will give the stew more flavour.\r\nHeat oven to 150C/fan 130C/gas 2. Make a cartouche: tear off a square of foil slightly larger than the casserole, arrange it in the pan so it covers the top of the stew and trim away any excess foil. Then cook for 3 hrs. If the sauce looks watery, remove the beef and veg with a slotted spoon, and set aside. Cook the sauce over a high heat for a few mins until the sauce has thickened a little, then return the beef and vegetables to the pan.\r\nTo make the celeriac mash, peel the celeriac and cut into cubes. Heat the olive oil in a large frying pan. Tip in the celeriac and fry for 5 mins until it turns golden. Season well with salt and pepper. Stir in the rosemary, thyme, bay and cardamom pods, then pour over 200ml water, enough to nearly cover the celeriac. Turn the heat to low, partially cover the pan and leave to simmer for 25-30 mins.\r\nAfter 25-30 mins, the celeriac should be soft and most of the water will have evaporated. Drain away any remaining water, then remove the herb sprigs, bay and cardamom pods. Lightly crush with a potato masher, then finish with a glug of olive oil and season to taste. Spoon the beef bourguignon into serving bowls and place a large spoonful of the celeriac mash on top. Garnish with one of the bay leaves, if you like."
    },
    {
        name: "Boulangère Potatoes",
        area: "French",
        category: "Side",
        thumb: "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",
        instructions: "Heat oven to 200C/fan 180C/gas 6. Fry the onions and thyme sprigs in the oil until softened and lightly coloured (about 5 mins).\r\nSpread a layer of potatoes over the base of a 1.5-litre oiled gratin dish. Sprinkle over a few onions (see picture, above) and continue layering, finishing with a layer of potatoes. Pour over the stock and bake for 50-60 mins until the potatoes are cooked and the top is golden and crisp."
    },
    {
        name: "Brie Wrapped in Prosciutto & Brioche",
        area: "French",
        category: "Side",
        thumb: "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
        instructions: "Mix the flour, 1 tsp salt, caster sugar, yeast, milk and eggs together in a mixer using the dough attachment for 5 mins until the dough is smooth. Add the butter and mix for a further 4 mins on medium speed. Scrape the dough bowl and mix again for 1 min. Place the dough in a container, cover with cling film and leave in the fridge for at least 6 hrs before using.\r\nWrap the Brie in the prosciutto and set aside. Turn out the dough onto a lightly floured surface. Roll into a 25cm circle. Place the wrapped Brie in the middle of the circle and fold the edges in neatly. Put the parcel onto a baking tray lined with baking parchment and brush with beaten egg. Chill in the fridge for 30 mins, then brush again with beaten egg and chill for a further 30 mins. Leave to rise for 1 hr at room temperature. Heat oven to 200C/180C fan/gas 6, then bake for 22 mins. Serve warm."
    },
    {
        name: "Chicken Basquaise",
        area: "French",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
        instructions: "Preheat the oven to 180°C/Gas mark 4. Have the chicken joints ready to cook. Heat the butter and 3 tbsp olive oil in a flameproof casserole or large frying pan. Brown the chicken pieces in batches on both sides, seasoning them with salt and pepper as you go. Don't crowd the pan - fry the chicken in small batches, removing the pieces to kitchen paper as they are done.\r\n\r\nAdd a little more olive oil to the casserole and fry the onions over a medium heat for 10 minutes, stirring frequently, until softened but not browned. Add the rest of the oil, then the peppers and cook for another 5 minutes.\r\n\r\nAdd the chorizo, sun-dried tomatoes and garlic and cook for 2-3 minutes. Add the rice, stirring to ensure it is well coated in the oil. Stir in the tomato paste, paprika, bay leaves and chopped thyme. Pour in the stock and wine. When the liquid starts to bubble, turn the heat down to a gentle simmer. Press the rice down into the liquid if it isn't already submerged and place the chicken on top. Add the lemon wedges and olives around the chicken.\r\n\r\nCover and cook in the oven for 50 minutes. The rice should be cooked but still have some bite, and the chicken should have juices that run clear when pierced in the thickest part with a knife. If not, cook for another 5 minutes and check again."
    },
    {
        name: "Chicken Marengo",
        area: "French",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
        instructions: "Heat the oil in a large flameproof casserole dish and stir-fry the mushrooms until they start to soften. Add the chicken legs and cook briefly on each side to colour them a little.\r\nPour in the passata, crumble in the stock cube and stir in the olives. Season with black pepper – you shouldn’t need salt. Cover and simmer for 40 mins until the chicken is tender. Sprinkle with parsley and serve with pasta and a salad, or mash and green veg, if you like."
    },
    {
        name: "Chicken Parmentier",
        area: "French",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg",
        instructions: "For the topping, boil the potatoes in salted water until tender. Drain and push through a potato ricer, or mash thoroughly. Stir in the butter, cream and egg yolks. Season and set aside.\r\nFor the filling, melt the butter in a large pan. Add the shallots, carrots and celery and gently fry until soft, then add the garlic. Pour in the wine and cook for 1 minute. Stir in the tomato purée, chopped tomatoes and stock and cook for 10–15 minutes, until thickened. Add the shredded chicken, olives and parsley. Season to taste with salt and pepper.\r\nPreheat the oven to 180C/160C Fan/Gas 4.\r\nPut the filling in a 20x30cm/8x12in ovenproof dish and top with the mashed potato. Grate over the Gruyère. Bake for 30–35 minutes, until piping hot and the potato is golden-brown."
    },
    {
        name: "Chinon Apple Tarts",
        area: "French",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg",
        instructions: "To make the red wine jelly, put the red wine, jam sugar, star anise, clove, cinnamon stick, allspice, split vanilla pod and seeds in a medium saucepan. Stir together, then heat gently to dissolve the sugar. Turn up the heat and boil for 20 mins until reduced and syrupy. Strain into a small, sterilised jam jar and leave to cool completely. Will keep in the fridge for up to 1 month.\r\n\r\nTake the pastry out of the fridge and leave at room temperature for 10 mins, then unroll. Heat the grill to high and heat the oven to 180C/160C fan/gas 4. Cut out 2 x 13cm circles of pastry, using a plate as a guide, and place on a non-stick baking sheet. Sprinkle each circle with 1 tbsp sugar and grill for 5 mins to caramelise, watching carefully so that the sugar doesn’t burn. Remove from the grill. Can be done a few hours ahead, and left, covered, out of the fridge.\r\n\r\nPeel, quarter and core the apples, cut into 2mm-thin slices and arrange on top of the pastry. Sprinkle over the remaining sugar and pop in the oven for 20-25 mins until the pastry is cooked through and golden, and the apples are softened. Remove and allow to cool slightly. Warm 3 tbsp of the red wine jelly in a small pan over a low heat with 1 tsp water to make it a little more runny, then brush over the top of the tarts.\r\n\r\nTip the crème fraîche into a bowl, sift over the icing sugar and cardamom, and mix together. Carefully lift the warm tarts onto serving plates and serve with the cardamom crème fraîche."
    },
    {
        name: "Chocolate Gateau",
        area: "French",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
        instructions: "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely."
    },
    {
        name: "Chocolate Souffle",
        area: "French",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
        instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf. For the sauce, heat the cream and sugar until boiling. Remove from the heat, stir in the chocolate and butter until melted, then keep warm.\r\nBrush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess. Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks. Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency. Mix a spoonful into the chocolate, then gently fold in the rest.\r\nWorking quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges. Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble. Don’t open the oven door too early as this may make them collapse.\r\nOnce the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce. Replace the lids and serve straight away."
    },
    {
        name: "Coq au vin",
        area: "French",
        category: "Chicken",
        thumb: "https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg",
        instructions: "Heat 1 tbsp of the oil in a large, heavy-based saucepan or flameproof dish. Tip in the bacon and fry until crisp. Remove and drain on kitchen paper. Add the shallots to the pan and fry, stirring or shaking the pan often, for 5-8 mins until well browned all over. Remove and set aside with the bacon.\r\nPat the chicken pieces dry with kitchen paper. Pour the remaining oil into the pan, then fry half the chicken pieces, turning regularly, for 5-8 mins until well browned. Remove, then repeat with the remaining chicken. Remove and set aside.\r\nScatter in the garlic and fry briefly, then, with the heat medium-high, pour in the brandy or Cognac, stirring the bottom of the pan to deglaze. The alcohol should sizzle and start to evaporate so there is not much left.\r\nReturn the chicken legs and thighs to the pan along with any juices, then pour in a little of the wine, stirring the bottom of the pan again. Stir in the rest of the wine, the stock and tomato purée, drop in the bouquet garni, season with pepper and a pinch of salt, then return the bacon and shallots to the pan. Cover, lower the heat to a gentle simmer, add the chicken breasts and cook for 50 mins-1hr.\r\nJust before ready to serve, heat the oil for the mushrooms in a large non-stick frying pan. Add the mushrooms and fry over a high heat for a few mins until golden. Remove and keep warm.\r\nLift the chicken, shallots and bacon from the pan and transfer to a warmed serving dish. Remove the bouquet garni. To make the thickener, mix the flour, olive oil and butter in a small bowl using the back of a teaspoon. Bring the wine mixture to a gentle boil, then gradually drop in small pieces of the thickener, whisking each piece in using a wire whisk. Simmer for 1-2 mins. Scatter the mushrooms over the chicken, then pour over the wine sauce. Garnish with chopped parsley."
    },
    {
        name: "Duck Confit",
        area: "French",
        category: "Miscellaneous",
        thumb: "https://www.themealdb.com/images/media/meals/wvpvsu1511786158.jpg",
        instructions: "The day before you want to make the dish, scatter half the salt, half the garlic and half of the herbs over the base of a small shallow dish. Lay the duck legs, skin-side up, on top, then scatter over the remaining salt, garlic and herbs. Cover the duck and refrigerate overnight. This can be done up to 2 days ahead.\r\nPour the wine into a saucepan that will snugly fit the duck legs in a single layer. Brush the salt off the duck legs and place them, skin-side down, in the wine. Cover the pan with a lid and place over a medium heat. As soon as the wine starts to bubble, turn the heat down to the lowest setting and cook for 2 hours, checking occasionally that the liquid is just barely simmering. (If you own a heat diffuser, it would be good to use it here.) After 2 hours, the duck legs should be submerged in their own fat and the meat should feel incredibly tender when prodded. Leave to cool.\r\nThe duck legs are now cooked and can be eaten immediately – or you can follow the next step if you like them crisp. If you are preparing ahead, pack the duck legs tightly into a plastic container or jar and pour over the fat, but not the liquid at the bottom of the pan. Cover and leave in the fridge for up to a month, or freeze for up to 3 months. The liquid you are left with makes a tasty gravy, which can be chilled or frozen until needed.\r\nTo reheat and crisp up the duck legs, heat oven to 220C/fan 200C/gas 7. Remove the legs from the fat and place them, skin-side down, in an ovenproof frying pan. Roast for 30-40 mins, turning halfway through, until brown and crisp. Serve with the reheated gravy, a crisp salad and some crisp golden ptoatoes."
    },
    {
        name: "Fennel Dauphinoise",
        area: "French",
        category: "Side",
        thumb: "https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
        instructions: "Heat oven to 180C/160C fan/gas 4. Put potatoes, fennel, and garlic in a medium non-stick pan. Pour in milk and double cream, season well and simmer gently, covered, for 10 mins, stirring halfway through, until potatoes are just tender.\r\nDivide the mixture between 2 small (about 150ml) buttered ramekins and scatter with Parmesan. Bake for 40 mins until the potatoes are golden and tender when pierced with a knife. Snip the reserved fennel fronds over before serving."
    },
    {
        name: "Fish Stew with Rouille",
        area: "French",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
        instructions: "Twist the heads from the prawns, then peel away the legs and shells, but leave the tails intact. Devein each prawn. Fry the shells in 1 tbsp oil for 5 mins, until dark pink and golden in patches. Add the wine, boil down by two thirds, then pour in the stock. Strain into a jug, discarding the shells.\r\nHeat the rest of the oil in a deep frying pan or casserole. Add the fennel, onion and garlic, season, then cover and gently cook for 10 mins until softened. Meanwhile, peel the potato and cut into 2cm-ish chunks. Put into a pan of cold water, bring to the boil and cook for 5 mins until almost tender. Drain in a colander.\r\nPeel a strip of zest from the orange. Put the zest, star anise, bay and ½ tsp harissa into the pan. Fry gently, uncovered, for 5-10 mins, until the vegetables are soft, sweet and golden.\r\nStir in the tomato purée, cook for 2 mins, then add the tomatoes and stock. Simmer for 10 mins until the sauce thickens slightly. Season to taste. The sauce can be made ahead, then reheated later in the day. Meantime, scrub the mussels or clams and pull away any stringy beards. Any that are open should be tapped sharply on the worktop – if they don’t close after a few seconds, discard them.\r\nReheat the sauce if necessary, then stir the potato, chunks of fish and prawns very gently into the stew. Bring back to the boil, then cover and gently simmer for 3 mins. Scatter the mussels or clams over the stew, then cover and cook for 2 mins more or until the shells have opened wide. Discard any that remain closed. The chunks of fish should flake easily and the prawns should be pink through. Scatter with the thyme leaves.\r\nTo make the quick rouille, stir the rest of the harissa through the mayonnaise. Serve the stew in bowls, topped with spoonfuls of rouille, which will melt into the sauce and enrich it. Have some good bread ready, as you’ll definitely want to mop up the juices."
    },
    {
        name: "Flamiche",
        area: "French",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
        instructions: "For the pastry, sift the flour and salt into the bowl of a food processor, add the butter and lard, then whizz together briefly until the mixture looks like fine breadcrumbs. Tip the mixture into a bowl, then stir in the cheese and enough of the water for the mixture to come together. Tip out onto a lightly floured surface and knead briefly until smooth. Roll out thinly and line a 23cm x 4cm loose-?bottomed fluted flan tin. Prick the base with a fork. Chill for 20 minutes.\r\n02.Melt the 75g butter in a saucepan over a low heat, then add the leeks and the salt. Cover and cook for ?10 minutes until soft. Uncover the pan, increase the heat and cook ?for 2 minutes, stirring occasionally, until the liquid has evaporated. Spoon onto a plate and leave to cool.\r\n03.Preheat the oven to 200°C/fan180°C/gas 6. Line the pastry case with baking paper and baking beans or rice and blind bake for 15-20 minutes until the edges are biscuit-coloured. Remove the paper and beans/rice and return the case to the oven for 7-10 minutes until the base is crisp and lightly golden. Remove and set aside. Reduce the oven temperature to 190°C/fan170°C/gas 5.\r\n04.Put the crème fraîche into a bowl with the whole egg, egg yolks and nutmeg. Lightly beat together, then season. Stir in the leeks. Spoon ?the mixture into the tart case and bake for 35-40 minutes until set ?and lightly golden. Remove from ?the oven and leave for 10 minutes. Take out of the tin and serve."
    },
    {
        name: "French Lentils With Garlic and Thyme",
        area: "French",
        category: "Miscellaneous",
        thumb: "https://www.themealdb.com/images/media/meals/vwwspt1487394060.jpg",
        instructions: "Place a large saucepan over medium heat and add oil. When hot, add chopped vegetables and sauté until softened, 5 to 10 minutes.\r\nAdd 6 cups water, lentils, thyme, bay leaves and salt. Bring to a boil, then reduce to a fast simmer.\r\nSimmer lentils until they are tender and have absorbed most of the water, 20 to 25 minutes. If necessary, drain any excess water after lentils have cooked. Serve immediately, or allow them to cool and reheat later.\r\nFor a fuller taste, use some chicken stock and reduce the water by the same amount."
    },
    {
        name: "French Omelette",
        area: "French",
        category: "Miscellaneous",
        thumb: "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
        instructions: "Get everything ready. Warm a 20cm (measured across the top) non-stick frying pan on a medium heat. Crack the eggs into a bowl and beat them with a fork so they break up and mix, but not as completely as you would for scrambled egg. With the heat on medium-hot, drop one knob of butter into the pan. It should bubble and sizzle, but not brown. Season the eggs with the Parmesan and a little salt and pepper, and pour into the pan.\r\nLet the eggs bubble slightly for a couple of seconds, then take a wooden fork or spatula and gently draw the mixture in from the sides of the pan a few times, so it gathers in folds in the centre. Leave for a few seconds, then stir again to lightly combine uncooked egg with cooked. Leave briefly again, and when partly cooked, stir a bit faster, stopping while there’s some barely cooked egg left. With the pan flat on the heat, shake it back and forth a few times to settle the mixture. It should slide easily in the pan and look soft and moist on top. A quick burst of heat will brown the underside.\r\nGrip the handle underneath. Tilt the pan down away from you and let the omelette fall to the edge. Fold the side nearest to you over by a third with your fork, and keep it rolling over, so the omelette tips onto a plate – or fold it in half, if that’s easier. For a neat finish, cover the omelette with a piece of kitchen paper and plump it up a bit with your fingers. Rub the other knob of butter over to glaze. Serve immediately."
    },
    {
        name: "French Onion Soup",
        area: "French",
        category: "Side",
        thumb: "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
        instructions: "Melt the butter with the oil in a large heavy-based pan. Add the onions and fry with the lid on for 10 mins until soft. Sprinkle in the sugar and cook for 20 mins more, stirring frequently, until caramelised. The onions should be really golden, full of flavour and soft when pinched between your fingers. Take care towards the end to ensure that they don’t burn.\r\nAdd the garlic for the final few mins of the onions’ cooking time, then sprinkle in the flour and stir well. Increase the heat and keep stirring as you gradually add the wine, followed by the hot stock. Cover and simmer for 15-20 mins.\r\nTo serve, turn on the grill, and toast the bread. Ladle the soup into heatproof bowls. Put a slice or two of toast on top of the bowls of soup, and pile on the cheese. Grill until melted. Alternatively, you can complete the toasts under the grill, then serve them on top."
    },
    {
        name: "Pear Tarte Tatin",
        area: "French",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg",
        instructions: "Core the pears, then peel as neatly as possible and halve. If you like, they can be prepared up to a day ahead and kept in the fridge, uncovered, so that they dry out.\r\nTip the sugar, butter, star anise, cardamom and cinnamon into an ovenproof frying pan, about 20cm wide, and place over a high heat until bubbling. Shake the pan and stir the buttery sauce until it separates and the sugar caramelises to a toffee colour.\r\nLay the pears in the pan, then cook in the sauce for 10-12 mins, tossing occasionally, until completely caramelised. Don’t worry about them burning – they won’t – but you want to caramelise them as much as possible. Splash in the brandy and let it flambé, then set the pears aside.\r\nHeat oven to 200C/fan 180C/gas 6. Roll the pastry out to the thickness of a £1 coin. Using a plate slightly larger than the top of the pan, cut out a circle, then press the edges of the circle of pastry to thin them out.\r\nWhen the pears have cooled slightly, arrange them in the pan, cut side up, in a floral shape, with the pears around the edge pointing inwards. Rest the cinnamon stick on the top in the centre, with the cardamom pods scattered around.\r\nDrape the pastry over the pears, then tuck the edges down the pan sides and under the fruit (see Gordon’s guide). Pierce the pastry a few times, then bake for 15 mins. If a lot of juice bubbles up the side of the pan, pour it off at this stage (see guide). Reduce oven to 180C/fan 160C/gas 4 and bake for 15 mins more until the pastry is golden. Leave the tart to stand for 10 mins, then invert it carefully onto a serving dish."
    },
    {
        name: "Pork Cassoulet",
        area: "French",
        category: "Pork",
        thumb: "https://www.themealdb.com/images/media/meals/wxuvuv1511299147.jpg",
        instructions: "Heat oven to 140C/120C fan/gas 1. Put a large ovenproof pan (with a tight-fitting lid) on a high heat. Add your fat and diced meat, cook for a few mins to seal the edges, giving it a quick stir to cook evenly. Reduce the heat to low, add the sliced onion, whole garlic cloves, carrot and fennel seeds, and cook gently to soften the veg for a few mins.\r\nPour over the red wine vinegar, scraping any meaty bits off the bottom of the pan. Add the stock, tomato purée, and half the rosemary and parsley. Bring to the boil and simmer for 10 mins, then season, cover with a lid and put into the oven for 2 hrs, removing the lid for the final hour of cooking. Stir occasionally and add the beans with 30 mins to go.\r\nRemove the pan from the oven and heat the grill. Scatter the top with the remaining herbs and breadcrumbs, drizzle a little oil over the top, and return to the oven for 5-10 mins, until the breadcrumbs are golden. Serve with crusty bread and green veg."
    },
    {
        name: "Prawn & Fennel Bisque",
        area: "French",
        category: "Side",
        thumb: "https://www.themealdb.com/images/media/meals/rtwwvv1511799504.jpg",
        instructions: "Shell the prawns, then fry the shells in the oil in a large pan for about 5 mins. Add the onion, fennel and carrots and cook for about 10 mins until the veg start to soften. Pour in the wine and brandy, bubble hard for about 1 min to drive off the alcohol, then add the tomatoes, stock and paprika. Cover and simmer for 30 mins. Meanwhile, chop the prawns.\r\nBlitz the soup as finely as you can with a stick blender or food processor, then press through a sieve into a bowl. Spend a bit of time really working the mixture through the sieve as this will give the soup its velvety texture.\r\nTip back into a clean pan, add the prawns and cook for 10 mins, then blitz again until smooth. You can make and chill this a day ahead or freeze it for 1 month. Thaw ovenight in the fridge. To serve, gently reheat in a pan with the cream. If garnishing, cook the 8 prawns in a little butter. Spoon into small bowls and top with the prawns and snipped fennel fronds."
    },
    {
        name: "Provençal Omelette Cake",
        area: "French",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
        instructions: "Break the eggs into two bowls, five in each. Whisk lightly and season with salt and pepper. Heat the oil in a pan, add the courgettes and spring onions, then fry gently for about 10 mins until softened. Cool, then stir into one bowl of eggs with a little salt and pepper. Add the roasted peppers to the other bowl of eggs with the garlic, chilli, salt and pepper.\r\nHeat a little oil in a 20-23cm frying pan, preferably non-stick. Pour the eggs with courgette into a measuring jug, then pourabout one-third of the mixture into the pan, swirling it to cover the base of the pan. Cook until the egg is set and lightly browned underneath, then cover the pan with a plate and invert the omelette onto it. Slide it back into the pan to cook the other side. Repeat with the remaining mix to make two more omelettes, adding a little oil to the pan each time. Stack the omelettes onto a plate. Make three omelettes in the same way with the red pepper mixture, then stack them on a separate plate.\r\nNow make the filling. Beat the cheese to soften it, then beat in the milk to make a spreadable consistency. Stir in the herbs, salt and pepper. Line a deep, 20-23cm round cake tin with cling film (use a tin the same size as the frying pan). Select the best red pepper omelette and place in the tin, prettiest side down. Spread with a thin layer of cheese filling, then cover with a courgette omelette. Repeat, alternating the layers, until all the omelettes and filling are in the tin, finishing with an omelette. Flip the cling film over the omelette, then chill for up to 24 hrs.\r\nTo serve, invert the omelette cake onto a serving plate and peel off the cling film. Pile rocket on the top and scatter over the cheese, a drizzle of olive oil and a little freshly ground black pepper. Serve cut into wedges."
    },
    {
        name: "Ratatouille",
        area: "French",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg",
        instructions: "Cut the aubergines in half lengthways. Place them on the board, cut side down, slice in half lengthways again and then across into 1.5cm chunks. Cut off the courgettes ends, then across into 1.5cm slices. Peel the peppers from stalk to bottom. Hold upright, cut around the stalk, then cut into 3 pieces. Cut away any membrane, then chop into bite-size chunks.\r\nScore a small cross on the base of each tomato, then put them into a heatproof bowl. Pour boiling water over the tomatoes, leave for 20 secs, then remove. Pour the water away, replace the tomatoes and cover with cold water. Leave to cool, then peel the skin away. Quarter the tomatoes, scrape away the seeds with a spoon, then roughly chop the flesh.\r\nSet a sauté pan over medium heat and when hot, pour in 2 tbsp olive oil. Brown the aubergines for 5 mins on each side until the pieces are soft. Set them aside and fry the courgettes in another tbsp oil for 5 mins, until golden on both sides. Repeat with the peppers. Don’t overcook the vegetables at this stage, as they have some more cooking left in the next step.\r\nTear up the basil leaves and set aside. Cook the onion in the pan for 5 mins. Add the garlic and fry for a further min. Stir in the vinegar and sugar, then tip in the tomatoes and half the basil. Return the vegetables to the pan with some salt and pepper and cook for 5 mins. Serve with basil."
    },
    {
        name: "Steak Diane",
        area: "French",
        category: "Beef",
        thumb: "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
        instructions: "Heat oil in a 12\" skillet over medium-high heat. Season steaks with salt and pepper, and add to skillet; cook, turning once, until browned on both sides and cooked to desired doneness, about 4 to 5 minutes for medium-rare. Transfer steaks to a plate, and set aside.\r\nReturn skillet to high heat, and add stock; cook until reduced until to 1⁄2 cup, about 10 minutes. Pour into a bowl, and set aside. Return skillet to heat, and add butter; add garlic and shallots, and cook, stirring, until soft, about 2 minutes. Add mushrooms, and cook, stirring, until they release any liquid and it evaporates and mushrooms begin to brown, about 2 minutes. Add cognac, and light with a match to flambée; cook until flame dies down. Stir in reserved stock, cream, Dijon, Worcestershire, and hot sauce, and then return steaks to skillet; cook, turning in sauce, until warmed through and sauce is thickened, about 4 minutes. Transfer steak to serving plates and stir parsley and chives into sauce; pour sauce over steaks to serve."
    },
    {
        name: "Summer Pistou",
        area: "French",
        category: "Vegetarian",
        thumb: "https://www.themealdb.com/images/media/meals/rqtxvr1511792990.jpg",
        instructions: "Heat the oil in a large pan and fry the leeks and courgette for 5 mins to soften. Pour in the stock, add three-quarters of the haricot beans with the green beans, half the tomatoes, and simmer for 5-8 mins until the vegetables are tender.\r\nMeanwhile, blitz the remaining beans and tomatoes, the garlic and basil in a food processor (or in a bowl with a stick blender) until smooth, then stir in the Parmesan. Stir the sauce into the soup, cook for 1 min, then ladle half into bowls or pour into a flask for a packed lunch. Chill the remainder. Will keep for a couple of days."
    },
    {
        name: "Tarte Tatin",
        area: "French",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/ryspuw1511786688.jpg",
        instructions: "Roll the pastry to a 3mm-thick round on a lightly floured surface and cut a 24cm circle, using a plate as a guide. Lightly prick all over with a fork, wrap in cling film on a baking sheet and freeze while preparing the apples.\r\nHeat oven to 180C/160C fan/gas 4. Peel, quarter and core the apples. Put the sugar in a flameproof 20cm ceramic Tatin dish or a 20cm ovenproof heavy-based frying pan and place over a medium-high heat. Cook the sugar for 5-7 mins to a dark amber caramel syrup that’s starting to smoke, then turn off the heat and stir in the 60g diced chilled butter.\r\nTo assemble the Tarte Tatin, arrange the apple quarters very tightly in a circle around the edge of the dish first, rounded-side down, then fill in the middle in a similar fashion. Gently press with your hands to ensure there are no gaps. Brush the fruit with the melted butter.\r\nBake in the oven for 30 mins, then remove and place the disc of frozen puff pastry on top – it will quickly defrost. Tuck the edges down the inside of the dish and, with a knife, prick a few holes in the pastry to allow steam to escape. Bake for a further 40-45 mins until the pastry is golden brown and crisp.\r\nAllow to cool to room temperature for 1 hr before running a knife around the edge of the dish and inverting it onto a large serving plate that is deep enough to contain the juices. Serve with crème fraîche or vanilla ice cream."
    },
    {
        name: "Three-cheese souffles",
        area: "French",
        category: "Miscellaneous",
        thumb: "https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg",
        instructions: "Heat oven to 200C/180C fan/ gas 6 and butter 4 small (about 200ml) ramekins. Sprinkle the Parmesan into the ramekins, turning until all sides are covered. Place the milk and bay leaves in a large saucepan over a gentle heat and bring to the boil. Turn off the heat and leave to infuse for 15 mins.\r\nDiscard the bay leaves, add the butter and flour, and return to a low heat. Very gently simmer, stirring continuously with a balloon whisk, for about 6 mins until you get a smooth, thick white sauce. Make sure that you get right into the corners of the pan to stop the sauce from catching or becoming lumpy.\r\nOnce thickened, transfer the sauce to a large bowl and stir in the mustard powder, cayenne pepper, Gruyère and egg yolks until fully combined.\r\nIn a spotlessly clean bowl and with a clean whisk, beat the egg whites just until peaks begin to form.\r\nCarefully fold the egg whites into the cheese sauce in three stages making sure you fold, rather than stir, to keep the egg whites light and airy. Fill the prepared ramekins with the soufflé mix.\r\nTop each soufflé with a slice of goat’s cheese, then place on a baking tray. Bake for 20-25 mins or until springy and well risen but cooked through.\r\nLeave to cool, then run a knife around the edge of each dish and remove the soufflés. If preparing in advance, place soufflés upside down (for neat presentation), on a tray. Cover tray in cling film. Chill for a few days or freeze for up to 1 month.\r\nWhen ready to re-bake, heat oven to 200C/180C fan/gas 6. Place the upside-down soufflés in a shallow baking dish, top with the remaining goat’s cheese slices and pour over the cream (this stops them from drying out when baked for the second time). Cook for 8-10 mins until golden. Serve immediately alongside some simply dressed salad."
    },
    {
        name: "Tuna Nicoise",
        area: "French",
        category: "Seafood",
        thumb: "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
        instructions: "Heat oven to 200C/fan 180C/gas 6. Toss the potatoes with 2 tsp oil and some seasoning. Tip onto a large baking tray, then roast for 20 mins, stirring halfway, until crisp, golden and cooked through.\r\nMeanwhile, put eggs in a small pan of water, bring to the boil, then simmer for 8-10 mins, depending on how you like them cooked. Plunge into a bowl of cold water to cool for a few mins. Peel away the shells, then cut into halves.\r\nIn a large salad bowl, whisk together the remaining oil, red wine vinegar, capers and chopped tomatoes. Season, tip in the onion, spinach, tuna and potatoes, then gently toss together. Top with the eggs, then serve straight away."
    },
    {
        name: "White chocolate creme brulee",
        area: "French",
        category: "Dessert",
        thumb: "https://www.themealdb.com/images/media/meals/uryqru1511798039.jpg",
        instructions: "Heat the cream, chocolate and vanilla pod in a pan until the chocolate has melted. Take off the heat and allow to infuse for 10 mins, scraping the pod seeds into the cream. If using the vanilla extract, add straight away. Heat oven to 160C/fan 140C/gas 3.\r\nBeat yolks and sugar until pale. stir in the chocolate cream. Strain into a jug and pour into ramekins. Place in a deep roasting tray and pour boiling water halfway up the sides. Bake for 15-20 mins until just set with a wobbly centre. Chill in the fridge for at least 4 hrs.\r\nTo serve, sprinkle some sugar on top of the brûlées and caramelise with a blowtorch or briefly under a hot grill. Leave caramel to harden, then serve."
    }
];

export default meals;