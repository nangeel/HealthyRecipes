app.component('modal-register', {
    props: {
        image: {
            type: String
        },
        name: {
            type: String
        },
        correo: {
            type: String
        },
        contraseña: {
            type: String
        },
        info: {
            type: String,
            default: "Password must have 8 to 16 characters"
        },
    },



    template:
        ` <div class="modal" id="exampleModa2">
    <div class="modal-dialog ">
        <div class="modal-content modal-sm">
            <div class="modal-body">
                <form>
                    <img class="logo-img-modal" v-bind:src="image" alt="">
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">{{name}}</label>
                        <input type="username" class="form-control" id="exampleInputUsername" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">{{correo}}</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword2" class="form-label">{{Contraseña}}</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" />
                    </div>
                    <div id="passwordHelp" class="form-text">
                        <p> {{info}}</p>
                    </div>
                    <button type="submit" class="btn btn-primary my-5">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>`
});