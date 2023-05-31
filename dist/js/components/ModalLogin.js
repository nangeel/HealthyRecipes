app.component('moda-login', {
    props: {
        image: {
            type: String
        },
        user: {
            type: String
        },
        contraseña: {
            type: String
        },
    },



    template:
        ` <div class="modal" id="exampleModa2">
        <div class="modal-dialog">
            <div class="modal-content modal-sm">
                <div class="modal-body">
                    <form>
                        <img class="logo-img-modal" v-bind:src="image" alt="">
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">{{user}}</label>
                            <input type="username" class="form-control" id="exampleInputUsername1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">{{password}}</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-secondary my-5">
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>`
});

