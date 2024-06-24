import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TriviaController {
    constructor(){
        console.log('From the TC')
        AppState.on('trivia', this.drawTrivia)
        this.getTrivia()

    }

    async getTrivia(){
        try {
            console.log('getting trivia')
        await triviaService.getTrivia()
        } catch (error) {
            Pop.error(error)
        }
    }

    drawTrivia(){
        const trivia = AppState.trivia
        let innerHTMLString = ''
        trivia.forEach(trivia => innerHTMLString += trivia.triviaHTMLTemplate);
        setHTML('trivia-questions', innerHTMLString)

    }
}