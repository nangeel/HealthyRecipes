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
    `<div class="card border border-0 ">
        <img v-bind:src="image" class="card-img-top" alt="image-recipe">
        <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <button type="button" class="btn btn-primary"
                            style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .7rem;">
                            See More
                        </button>
                        <button type="button" class="btn btn-primary ms-3 " v-on:click="onClickLike()"
                            style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: .2rem; --bs-btn-font-size: .9rem;">
                            ❤️
                        </button>
                        <button type="button" class="btn btn-primary ms-3 " v-on:click="onClickLike()"
                            style="--bs-btn-padding-y: .5rem; --bs-btn-padding-x: .2rem; --bs-btn-font-size: .9rem;">
                            💔
                        </button>
                        <p>{{}}</p>
                        
                        
        </div>
        
    </div>`
})