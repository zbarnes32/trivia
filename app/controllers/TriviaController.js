import { triviaService } from "../services/TriviaService.js"

export class TriviaController {
    constructor(){
        console.log('From the TC')
        this.getTrivia()

    }

    getTrivia(){
        console.log('getting trivia')
        triviaService.getTrivia()
    }
}