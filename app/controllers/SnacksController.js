import { AppState } from "../AppState.js"
import { Snack } from "../models/Snack.js"
import { snacksService } from "../services/SnacksService.js"

export class SnacksController {

    constructor() {
        console.log('🍟')
        this.drawSnacks()
        AppState.on('snacks', this.addQuarter)

    }

    drawSnacks() {
        console.log('drawing snacks')
        let snackCardsElement = document.getElementById('snacks-listing')
        let snacksContent = ''
        AppState.snacks.forEach((snack) => { snacksContent += snack.snackCard })
        snackCardsElement.innerHTML = snacksContent

    }

    addQuarter() {

        snacksService.addQuarter()


    }


}