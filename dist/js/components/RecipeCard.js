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
        index: {
            type: String,
        }
    },

    data() {
        return {

        }
    },
    methods: {
        onClickLike() {
            console.log("like");
            this.$emit('recipelike', this.index);

        },

        onClickUnlike() {
            console.log("unlike");
            this.$emit('recipeunlike', this.index);
        },

        onClickViewRecipe() {
            console.log("view recipe");
      this.$emit('recipedetails', this.index);
           
        }

    },

    template:
        /*html*/
        `<div class="card">
    <img v-bind:src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text fst-italic">{{description}}</p>
      <p class="card-text fw-semibold">{{likes}}</p>
      <button  class="btn btn-primary" v-on:click="onClickViewRecipe()" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >See More</button>
      <div class= "text-end">
      <button  class="btn btn-primary me-2" v-on:click="onClickLike()">❤️</button>
      <button  class="btn btn-primary" v-on:click="onClickUnlike()">💔</button>
      </div>
      
      </div>
    </div>
  </div>`
})