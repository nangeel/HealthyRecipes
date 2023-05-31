app.component('recipe-details', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String
        },
        ingredients: {
            type: String
        },
        instructions: {
            type: String
        },
    },

    methods: {
        
    },
    mounted() {
        this.$test.on('foo', function (data) {
            console.log(data);
        }
        )
    },


    template:
        /*html*/
        `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
             <div class="modal-content">
                  <div class="modal-header">
                    <h2 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <img class="img-fluid" v-bind:src="image"
                    alt="{{ name }}">
                    <p class="text-center fs-6">{{ ingredients }}</p>
                    <p class="fs-5 fst-italic fw-light fs-4">{{ instructions }}</p>
                  </div>
              </div>
          </div>
       </div>`
})