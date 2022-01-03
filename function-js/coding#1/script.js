'use strict';

const poll = {
    question: "What is your favourite programming language?", 
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section! 
    answers: new Array(4).fill(0),
    registerNewAnswer () {
        //Get answer
        const answer=Number(prompt( `${this.question}\n${poll.options.join('\n')}\n(Write option number)`))
        
        console.log(answer);
        //Register answer
        typeof answer==='number'&& answer <this.answers.length && this.answers[answer]++;
  this.displayResults();
  this.displayResults('string');
    },
    displayResults(type='array')
    {
        if (type==='array'){
        console.log(this.answers);
        }
        else if (type==='string')
        {
            console.log(`poll results are ${this.answers.join(', ')}`)
        }

    }
    };
let anspoll = document.querySelector('.poll');
// let alerts = poll.registerNewAnswer();
anspoll.addEventListener("click",poll.registerNewAnswer.bind(poll));
// poll.registerNewArray();
poll.displayResults.call({answers: [5,2,3]});
poll.displayResults.call({answers: [5,2,3]},'string');
poll.displayResults.call({answers: [1,5,3,9,6,1]});
poll.displayResults.call({answers: [1,5,3,9,6,1]},'string');