const app = Vue.createApp({
    data() {
        return {
            title: "Healthy Recipes",
            logo: "./img/Recurso 2.webp",
            imagePrincipal: "./img/img.inicio.webp",
            likes: 15,
            categories: [

            ],
            all_recipes: [],
            selectedIndex: 0,
            recipes: [


            ],
            recipe: {},
            top: [
                { id: 1, image: "../dist/img/recipestop/beef-and-mustard-pie.jpg", name: "Beef and Mustard Pie", category: "Beef", level: "Easy", likes: 18, ingredients: "Beef - Beef Plain Flour - Plain Flour Rapeseed Oil - Rapeseed Oil Red Wine - Red Wine Beef Stock - Beef Stock Onion - Onion Carrots - Carrots Thyme - Thyme Mustard - Mustard Egg Yolks - Egg Yolks Puff Pastry - Puff Pastry Green Beans - Green Beans Butter - Butter Salt - Salt Pepper - Pepper", instructions: "Preheat the oven to 150C / 300F / Gas 2. Toss the beef and flour together in a bowl with some salt and black pepper.Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.Fry until browned on each side, then remove and set aside.Repeat with the remaining oil and beef.Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.Cover with a lid and place in the oven for two hours.Remove from the oven, check the seasoning and set aside to cool.Remove the thyme.When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6. Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg. Trim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through. For the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender. Drain and toss with the butter, then season with black pepper. To serve, place a large spoonful of pie onto each plate with some green beans alongside." },

                { id: 2, image: "../dist/img/recipestop/lam-tzatziki-burgers.jpg", name: "Lamb Tzatziki Burgers", category: "Lamb", level: "Easy", likes: 18, ingredients: "Bulgur Wheat - Bulgur Wheat Lamb Mince - Lamb Mince Cumin - Cumin Coriander - Coriander Paprika - Paprika Garlic - Garlic Olive Oil - Olive Oil Bun - Bun Cucumber - Cucumber Greek Yogurt - Greek Yogurt Mint - Mint", instructions: "Tip the bulghar into a pan, cover with water and boil for 10 mins. Drain really well in a sieve, pressing out any excess water. To make the tzatziki, squeeze and discard the juice from the cucumber, then mix into the yogurt with the chopped mint and a little salt. Work the bulghar into the lamb with the spices, garlic (if using) and seasoning, then shape into 4 burgers. Brush with a little oil and fry or barbecue for about 5 mins each side until cooked all the way through. Serve in the buns (toasted if you like) with the tzatziki, tomatoes, onion and a few mint leaves." },

                { id: 3, image: "../dist/img/recipestop/toad-in-the-hole.jpg", name: "Toad In The Hole", category: "Pork", level: "Easy", likes: 18, ingredients: "sausages - sausages vegetable oil - vegetable oil plain flour - plain flour eggs - eggs horseradish - horseradish milk - milk cherry tomatoes - cherry tomatoes", instructions: "Preheat the oven to 200°C/fan180°C/gas 6. fry sausages in a non-stick pan until browned. Drizzle vegetable oil in a 30cm x 25cm x 6cm deep roasting tray and heat in the oven for 5 minutes. Put the plain flour in a bowl, crack in the medium free-range eggs, then stir in the grated horseradish. Gradually beat in the semi-skimmed milk. Season. Put the sausages into the hot roasting tray and pour over the batter. Top with cherry tomatoes on the vine and cook for 30 minutes until puffed and golden." },

                { id: 4, image: "../dist/img/recipestop/tamiya.jpg", name: "Tamiya", category: "Vegetarian", level: "Easy", likes: 18, ingredients: "Broad Beans - Broad Beans Spring Onions - Spring Onions Garlic Clove - Garlic Clove Parsley - Parsley Cumin - Cumin Baking Powder - Baking Powder Cayenne Pepper - Cayenne Pepper Flour - Flour Vegetable Oil - Vegetable Oil", instructions: "oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel. Grind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using. Refrigerate for at least 30 minutes. Shape the bean mixture into 1-inch balls.Flatten slightly and coat with flour. Heat at least 1½-inches of oil over medium heat to 365 degrees. Fry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce." },

                { id: 5, image: "../dist/img/recipestop/full-english-breakfast.jpg", name: "Full English Breakfast", category: "Breakfast", level: "Easy", likes: 18, ingredients: "Sausages - Sausages Bacon - Bacon Mushrooms - Mushrooms Tomatoes - Tomatoes Black Pudding - Black Pudding Eggs - Eggs Bread - Bread Baked Beans - Baked Beans", instructions: "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil. Cook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven. Snip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven. For the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy. For the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape. For the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy. For 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice. For the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice. Once all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce." },

                { id: 6, image: "../dist/img/recipestop/battenberg-cake.jpg", name: "Battenberg Cake", category: "Desserts", level: "Easy", likes: 18, ingredients: "1Butter - Butter Caster Sugar - Caster Sugar Self-raising Flour - Self-raising Flour Almonds - Almonds Baking Powder - Baking Powder Eggs - Eggs Vanilla Extract - Vanilla Extract Almond Extract - Almond Extract Butter - Butter Caster Sugar - Caster Sugar Self-raising Flour - Self-raising Flour Almonds - Almonds Baking Powder - Baking Powder Eggs - Eggs Vanilla Extract - Vanilla Extract Almond Extract - Almond Extract Pink Food Colouring - Pink Food Colouring Apricot - Apricot Marzipan - Marzipan Icing Sugar - Icing Sugar", instructions: "Heat oven to 180C/160C fan/gas 4 and line the base and sides of a 20cm square tin with baking parchment (the easiest way is to cross 2 x 20cm-long strips over the base). To make the almond sponge, put the butter, sugar, flour, ground almonds, baking powder, eggs, vanilla and almond extract in a large bowl. Beat with an electric whisk until the mix comes together smoothly. Scrape into the tin, spreading to the corners, and bake for 25-30 mins – when you poke in a skewer, it should come out clean. Cool in the tin for 10 mins, then transfer to a wire rack to finish cooling while you make the second sponge. For the pink sponge, line the tin as above. Mix all the ingredients together as above, but don’t add the almond extract. Fold in some pink food colouring. Then scrape it all into the tin and bake as before. Cool. To assemble, heat the jam in a small pan until runny, then sieve. Barely trim two opposite edges from the almond sponge, then well trim a third edge. Roughly measure the height of the sponge, then cutting from the well-trimmed edge, use a ruler to help you cut 4 slices each the same width as the sponge height. Discard or nibble leftover sponge. Repeat with pink cake. Take 2 x almond slices and 2 x pink slices and trim so they are all the same length. Roll out one marzipan block on a surface lightly dusted with icing sugar to just over 20cm wide, then keep rolling lengthways until the marzipan is roughly 0.5cm thick. Brush with apricot jam, then lay a pink and an almond slice side by side at one end of the marzipan, brushing jam in between to stick sponges, and leaving 4cm clear marzipan at the end. Brush more jam on top of the sponges, then sandwich remaining 2 slices on top, alternating colours to give a checkerboard effect. Trim the marzipan to the length of the cakes. Carefully lift up the marzipan and smooth over the cake with your hands, but leave a small marzipan fold along the bottom edge before you stick it to the first side. Trim opposite side to match size of fold, then crimp edges using fingers and thumb (or, more simply, press with prongs of fork). If you like, mark the 10 slices using the prongs of a fork. Assemble second Battenberg and keep in an airtight box or well wrapped in cling film for up to 3 days. Can be frozen for up to a month." },

                { id: 7, image: "../dist/img/recipestop/general-tso's-chicken.jpg", name: "General Tso's Chicken", category: "Chicken", level: "Easy", likes: 18, ingredients: "Chicken Breast - Chicken Breast Plain Flour - Plain Flour Egg - Egg Starch - Starch Baking Powder - Baking Powder Salt - Salt Onion Salt - Onion Salt Garlic Powder - Garlic Powder Water - Water Chicken Stock - Chicken Stock Duck Sauce - Duck Sauce Soy Sauce - Soy Sauce Honey - Honey Rice Vinegar - Rice Vinegar Sesame Seed Oil - Sesame Seed Oil Gochujang - Gochujang Starch - Starch Garlic - Garlic Spring Onions - Spring Onions Ginger - Ginger", instructions: "DIRECTIONS: STEP 1 - SAUCE In a bowl, add 2 Cups of water, 2 Tablespoon soy sauce, 2 Tablespoon white vinegar, sherry cooking wine, 1/4 Teaspoon white pepper, minced ginger, minced garlic, hot pepper, ketchup, hoisin sauce, and sugar. Mix together well and set aside. STEP 2 - MARINATING THE CHICKEN In a bowl, add the chicken, 1 pinch of salt, 1 pinch of white pepper, 2 egg whites, and 3 Tablespoon of corn starch STEP 3 - DEEP FRY THE CHICKEN Deep fry the chicken at 350 degrees for 3-4 minutes or until it is golden brown and loosen up the chicken so that they don't stick together. Set the chicken aside. STEP 4 - STIR FRY Add the sauce to the wok and then the broccoli and wait until it is boiling. To thicken the sauce, whisk together 2 Tablespoon of cornstarch and 4 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness. Next add in the chicken and stir-fry for a minute and serve on a plate" },

                { id: 8, image: "../dist/img/recipestop/kung-po-prawns.jpg", name: "Kung Po Prawns", category: "Sea Food", level: "Easy", likes: 18, ingredients: "Prawns - Prawns Soy Sauce - Soy Sauce Tomato Puree - Tomato Puree Corn Flour - Corn Flour Caster Sugar - Caster Sugar Sunflower Oil - Sunflower Oil Peanuts - Peanuts Chilli - Chilli Brown Sugar - Brown Sugar Garlic Clove - Garlic Clove Water Chestnut - Water Chestnut Ginger - Ginger", instructions: "Mix the cornflour and 1 tbsp soy sauce, toss in the prawns and set aside for 10 mins. Stir the vinegar, remaining soy sauce, tomato purée, sugar and 2 tbsp water together to make a sauce. When you’re ready to cook, heat a large frying pan or wok until very hot, then add 1 tbsp oil. Fry the prawns until they are golden in places and have opened out– then tip them out of the pan. Heat the remaining oil and add the peanuts, chillies and water chestnuts. Stir-fry for 2 mins or until the peanuts start to colour, then add the ginger and garlic and fry for 1 more min. Tip in the prawns and sauce and simmer for 2 mins until thickened slightly. Serve with rice." },

                { id: 9, image: "../dist/img/recipestop/vegan-chocolate-cake.jpg", name: "Vegan Chocolate Cake", category: "Vegan", level: "Easy", likes: 18, ingredients: "self raising flour - self raising flour coco sugar - coco sugar cacao - cacao baking powder - baking powder flax eggs - flax eggs almond milk - almond milk vanilla - vanilla water - water", instructions: "Simply mix all dry ingredients with wet ingredients and blend altogether. Bake for 45 min on 180 degrees. Decorate with some melted vegan chocolate" },

                { id: 10, image: "../dist/img/recipestop/salmon-avocado-salad.jpg", name: "Salmon Avocado Salad", category: "Sea Food", level: "Easy", likes: 18, ingredients: "Salmon - Salmon Avocado - Avocado Cucumber - Cucumber Spinach - Spinach Mint - Mint Lime - Lime Honey - Honey Olive Oil - Olive Oil", instructions: "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing. Heat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm." }

            ]

        }
    },

    mounted: function () {
        this.all_recipes = this.recipes;
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(
                (response) => {
                    //console.log(response.data.meals);
                    let items = response.data.meals;
                    items.forEach((element, index) => {
                        this.categories.push({
                            id: index, name: element.strCategory
                        });
                    }
                    )
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )

        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
        })
            .then(
                (response) => {
                    console.log(response.data.meals);

                    this.recipes = [];

                    let items = response.data.meals;
                    items.forEach(element => {
                        this.recipes.push({
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                            category: "Beef",
                            likes: 30,
                            level: "Easy",
                            holiday: "Birthday",
                            ingredients: "NA",
                            instructions: "NA"


                        });
                    }
                    )
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )



    },

    methods: {
        onClickUnlike(index) {
            if (this.recipes[index].likes > 0) {
                this.recipes[index].likes -= 1;
            }
        },
        onClickViewRecipe(index) {
            //console.log("INDEX ->" + index);
            this.selectedIndex = index;
        },

        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
        },

        onClickRecipeUnlike(index) {
            if (this.recipes[index].likes > 0) {
                this.recipes[index].likes -= 1;
            }

        },
        onClickRecipeDetails(index) {
            console.log("recipe id ->" + index);
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + index
            })
                .then(
                    (response) => {
                        //  console.log(response.data.meals);
                        let item = response.data.meals;
                        console.log("a" + item);

                        this.recipe.id = item[0].idMeal;
                        this.recipe.image = item[0].strMealThumb;
                        this.recipe.name = item[0].strMeal;
                        this.recipe.category = item[0].strCategory;
                        this.recipe.level = "Easy";
                        this.recipe.likes = 18;
                        this.recipe.instructions = item[0].strInstructions;

                        let ingredientsList = "";
                        for (let i = 1; i <= 20; i++) {
                            if (item[0]["strIngredient" + i] != "" && item[0]["strIngredient" + i] != null) {
                                ingredientsList += item[0]["strIngredient" + i] + " - " + item[0]["strIngredient" + i] + "\n"
                            }
                        }

                        this.recipe.ingredients = ingredientsList;
                    }
                )
                .catch(
                    error => console.log(error)
                )

        },


        onClickSelectedCategory(category) {

            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
            })
                .then(
                    (response) => {
                        console.log(response.data.meals);

                        this.recipes = [];

                        let items = response.data.meals;
                        items.forEach(element => {
                            this.recipes.push({
                                id: element.idMeal,
                                image: element.strMealThumb,
                                name: element.strMeal,
                                category: category,
                                likes: 30,
                                level: "Easy",
                                holiday: "Birthday",
                                ingredients: "NA",
                                instructions: "NA"


                            });
                        }
                        )
                    }
                )
                .catch(
                    error => {
                        console.log(error);
                    }
                )

        },
        onClickRecipeDetailsTop(index) {
            this.selectedIndex = index;
        },



    },
});

const emitter = mitt();
app.config.globalProperties.$test = emitter;