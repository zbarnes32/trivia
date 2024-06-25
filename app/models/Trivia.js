export class Trivia {
    constructor(data){
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers

    }

    get triviaHTMLTemplate(){
        return `
        <div>
            <div class="questions shadow">
              <div class="">
                <p class="fs-1 fw-bold">${this.question}</p>
                <div class="d-flex justify-content-around">
                  <button>True</button>
                  <button>False</button>
                </div>
              </div>
            </div>
          </div>
        `
    }
}

