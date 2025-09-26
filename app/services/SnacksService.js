import { AppState } from "../AppState.js"



class SnacksService {

    addQuarter() {


        AppState.money += .25

    }

    buy(snackName) {

        const snacktoBuy = AppState.snacks.find((snack) => snack.name == snackName)

        if (AppState.money >= snacktoBuy.price) {

            AppState.money -= snacktoBuy.price
        }

        else {
            alert("Not enough 💸")
        }
        //Need more logic to prevent negative numbers...













    }



}

export const snacksService = new SnacksService()