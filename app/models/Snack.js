export class Snack {

    constructor(data) {

        this.name = data.name;
        this.price = data.price;
        this.imgUrl = data.imgUrl;
    }

    get snackCard() {
        // return `<p> ${this.name} </p>`
        return `
         <article class="col-md-4">
        <div class="card">

          <div class="card-body">

            <img class ="img-fluid" src="${this.imgUrl}" alt="snack-picture">
             


          </div>

          <div class="card-footer">
          ${this.name}, ${this.price}

               
            <button> Buy Snack </button>

          </div>

        </div>
        
        </article>`
    }




}