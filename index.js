/* 
**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
 */

class Player {
  constructor(name, country) {
    this.name = name
    this.country = country
  }

  gimmeMe() {
    return `${this.name} was born in ${this.country}`
  }
}

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country)
    this.age = age
  }

  informMe() {
    return `${this.name} is ${this.age} old and knows how to play tennis.`
  }
}

const barPlayer = new Player('Messi', 'Argentina')
const tenPlayer = new TennisPlayer('Rafa Nadal', 'Spain', '35')

console.log(barPlayer.gimmeMe())
console.log(tenPlayer.informMe())
