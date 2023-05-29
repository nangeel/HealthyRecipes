app.component('recipe-card', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String,
            default: "recipe name"
        },
        description: {
            type: String,
            default: "recipe description"
        },
        likes: {
            type: Number,
            default: 10
        },
    },

    data() {
        return {

        }
    },
    methods: {
        onClickLike() {
            console.log("like");
            this.recipes[index].likes += 1;

        },

        onClickUnlike() {
            console.log("unlike");
            if (this.recipes[index].likes > 0) {
                this.recipes[index].likes -= 1;
            }
        },

        onClickViewRecipe() {
            console.log("view recipe");
            if (this.recipes[index].likes > 0) {
                this.recipes[index].likes -= 1;
            }
        }

    },

    template:
        /*html*/
        `<div class="card" style="width: 18rem;">
    <img v-bind:src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text fst-italic">{{description}}</p>
      <p class="card-text fw-semibold">{{likes}}</p>
      <button  class="btn btn-primary" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >See More</button>
      <div class= "text-end">
      <div>
      <button  class="btn btn-primary me-2" v-on:click="onClickLike()">❤️</button>
      <button  class="btn btn-primary" v-on:click="onClickUnlike()">💔</button>
      </div>
      
      </div>
    </div>
  </div>`
})