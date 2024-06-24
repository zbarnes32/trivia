import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"

class TriviaService {
    async getTrivia() {
        // console.log('getting the trivia!!')
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9&type=boolean')
        console.log('response??', response.data)
        const trivia = response.data.results.map((triviaPOJO) => new Trivia(triviaPOJO))
        AppState.trivia = trivia
        console.log("is triviaPOJO there?", AppState.trivia)

    }

}

export const triviaService = new TriviaService