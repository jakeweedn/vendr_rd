export class Snack {

    constructor(data) {

        this.name = data.name;
        this.price = data.price;
        this.imgUrl = data.imgUrl;
    }

    get snackCard() {
        // return `<p> ${this.name} </p>`
        return /*html*/ `
         <article class="col-md-4">
        <div class="card">

          <div class="card-body">

            <img class ="img-fluid" src="${this.imgUrl}" alt="snack-picture">
             


          </div>

          <div class="card-footer d-flex justify-content-evenly">
            <a> ${this.name}, $ ${this.priceWitheDecimals} </a>

               
            <button onclick = "app.SnacksController.buy('${this.name}')"> Buy Snack </button>

          

        </div>
        
        </article>`
    }

    get priceWitheDecimals() {
        return this.price.toFixed(2)
    }




}