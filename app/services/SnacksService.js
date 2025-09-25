import { AppState } from "../AppState.js"



class SnacksService {

    addQuarter() {

        AppState.money += .25

    }

    buySnacks() {


    }



}

export const snacksService = new SnacksService()