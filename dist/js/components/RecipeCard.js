app.component('recipe-card', {
    props:{
        image:{
            type: String
        },
        name:{
            type: String,
            default: "recipe name"
        },
        likes:{
            type: Number,
            default: 10
        },
    },

data() {
    return {

    }
},

template:
    /*html*/
    `<div class="card border border-0">
        <img v-bind:src="image" class="card-img-top" alt="image-recipe">
        <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        </div>
    </div>`
})