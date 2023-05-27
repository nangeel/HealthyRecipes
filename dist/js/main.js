const app = Vue.createApp({
    data() {
        return {
            title: "Healthy Recipes",
            logo: "./img/Recurso 2.webp",
            image: "./img/img.inicio.webp",
            likes: 15,
            tittleCategories: "Categories",
            tittleMenu: "Menu",
            categories: [
                { id: 1, name:"All"},
                { id: 2, name:"Breakfast"},
                { id: 3, name:"Entrees"},
                { id: 4, name:"Lunch"},
                { id: 5, name:"Soups"},
                { id: 6, name:"Desserts"},
                { id: 7, name:"Drinks"},
                
            ],
            difficulty: [
                { id: 10, name: "Easy" },
                { id: 20, name: "Medium" },
                { id: 30, name: "Hard" },
            ],
            holidays: [
                { id: 100, name: "All" },
                { id: 200, name: "Birthday" },
                { id: 300, name: "Father's day" },
                { id: 400, name: "Mother's day" },
                { id: 500, name: "Children's day" },
                { id: 600, name: "Christmas" },
                { id: 700, name: "Summer" },
            ],
            recipes: [
                { id: 101, name: "Toast", image: "./img/breakfast/toast.webp", likes: 15 },
                { id: 102, name: "Toast", image: "./img/breakfast/toast.webp", likes: 16 },
                { id: 103, name: "Toast", image: "./img/breakfast/toast.webp", likes: 17 },
                { id: 104, name: "Toast", image: "./img/breakfast/toast.webp", likes: 18 }
            ],

        }
    },

    methods: {
        onClickCategory(category) {
            console.log("category ->" + category);
        }

    }




})


