const app = Vue.createApp({
    data() {
        return {
            title: "Healthy Recipes",
            likes: 15,
            recipes: [
                { id: 1, name: "Pizza", image: "https://images.unsplash.com/photo-1581093457331-9f50a1c4b4e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", likes: 15 },
            ],

        }
    },
    mounted: function () {
        console.log(this.recipes);
    },


})


