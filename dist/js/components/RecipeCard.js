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

    template:
        /*html*/
        `<div class="card" style="width: 18rem;">
    <img v-bind:src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text fst-italic">{{description}}</p>
      <p class="card-text fw-semibold">{{likes}}</p>
      <button  class="btn btn-primary">See More</button>
      <div class= "text-end">
      <div>
      <button  class="btn btn-primary me-2">❤️</button>
      <button  class="btn btn-primary">💔</button>
      </div>
      
      </div>
    </div>
  </div>`
})