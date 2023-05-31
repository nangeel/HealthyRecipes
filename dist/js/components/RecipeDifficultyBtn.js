app.component('recipe-difficulty-btn', {
    props: {
        name: {
            type: String,
        },

    },
    template:
    /*html*/
    `<button class="dropdown-item">{{name}}</button>`
})

