import { AppState } from "../AppState.js"
import { Snack } from "../models/Snack.js"
import { snacksService } from "../services/SnacksService.js"

export class SnacksController {

    constructor() {
        console.log('🍟')
        this.drawSnacks()
        this.drawMoney()
        AppState.on('snacks', this.addQuarter)
        AppState.on('money', this.drawMoney)

        // both a this and an observer because we want both to see the money amount when the page loads
        // AND for that amount to change when the money value in the appstate changes...

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

    drawMoney() {

        console.log('💰')
        let moneyAmountElement = document.getElementById('money-amount')


        moneyAmountElement.innerHTML = `${AppState.money}`

    }

    buySnacks() {

        console.log('🍟')
        snacksService.buySnacks()
    }

}