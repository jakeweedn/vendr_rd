import { AppState } from "../AppState.js"



class SnacksService {

    addQuarter() {

        AppState.money += .25

    }



}

export const snacksService = new SnacksService()