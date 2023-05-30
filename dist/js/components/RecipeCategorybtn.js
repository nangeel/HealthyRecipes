app.component('recipe-category-btn', {
    props: {
        name: {
            type: String,
        },

    },

methods: {
    onClickCategoryButton() {
        console.log(this.name);
       this.$emit('selectedcategory', this.name);

    }

    

},
    template:
    /*html*/
    `<button class="btn btn-secondary" v-on:click="onClickCategoryButton">{{name}}</button>`
})

