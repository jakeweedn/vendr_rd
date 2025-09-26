import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  snacks = [

    new Snack({

      name: "Doritos",
      price: 3.50,
      imgUrl: "https://m.media-amazon.com/images/I/81fL4IjBtKL._UF894,1000_QL80_.jpg",


    }),

    new Snack({

      name: "Lays",
      price: 2.75,
      imgUrl: "https://m.media-amazon.com/images/I/81Ui6bB1nJL._UF1000,1000_QL80_.jpg",


    }),

    new Snack({

      name: "Fritos",
      price: 4.00,
      imgUrl: "https://www.fritos.com/sites/fritos.com/files//2020-11/fritos%20original.png"


    }),

    // new Snack({

    //   name: 
    //   price: 


    // })

  ]

  money = 0;
}

export const AppState = createObservableProxy(new ObservableAppState())