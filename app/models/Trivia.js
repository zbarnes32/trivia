export class Trivia {
    constructor(data){
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers

    }

    get triviaHTMLTemplate(){
        return `
        <div>
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">${this.question}</h5>
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

