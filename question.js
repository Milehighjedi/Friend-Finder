class Question{
    constructor(question, a, b, c, d){
        this.question = question;
        this.a = [a,1];
        this.b = [b, 2];
        this.c = [c, 3]
        this.d = [d, 4];
        this.answers = [this.a, this.b, this.c, this.d];
    }

    shuffle(){
        let cIndex = this.answers.length, tValue, rIndex;
        while (cIndex){
            rIndex = Math.floor(Math.random() * cIndex--)
            tValue = this.answers[cIndex];
            this.answers[cIndex] = this.answers[rIndex];
            this.answers[rIndex] = tValue;
        }
        return this.answers;
    }
}



const q1 = new Question("What is the best fruit?", "Apple", "Orange", "Pear", "Peach");

const q2 = new Question("What is the best sport?", "Baseball", "Football", "Soccer", "Boxing");

const q3 = new Question("Best name for an Alien?", "Bob", "The symbol for yield", "Fred", "We don't need no name");

const q4 = new Question("The meaning of life?", "42", "Pizza", "Driving 95 in a 40", "Waterworld");

const q5 = new Question("I wish I had...", "wings", "a cold one", "a cheeseburger", "flippers");

const q6 = new Question("Best Band:", "The Beatles", "Motorhead", "Biggie", "The Who");

const q7 = new Question("Best flavor of ice cream", "Chocolate", "Vanilla", "Coffee", "Rum Raisin");


const Questions = [q1, q2, q3, q4, q5, q6, q7];

Questions.forEach(function(question){
    question.shuffle();
console.log(question.answers);
});

console.log(Questions[1]);
module.exports = Questions;