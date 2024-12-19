import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "What's the name of Homer's favorite beer?",
    options: ["Duff", "Buzz Cola", "Flaming Moe's", "Squishee"],
    correctAnswer: "Duff"
  },
  {
    id: 2,
    text: "What's the name of the family's cat?",
    options: ["Snowball II", "Santa's Little Helper", "Scratchy", "Itchy"],
    correctAnswer: "Snowball II"
  },
  {
    id: 3,
    text: "Where does Homer work?",
    options: ["Springfield Nuclear Power Plant", "Kwik-E-Mart", "Moe's Tavern", "Springfield Elementary"],
    correctAnswer: "Springfield Nuclear Power Plant"
  },
  {
    id: 4,
    text: "What's Bart's catchphrase?",
    options: ["Eat my shorts!", "D'oh!", "Excellent", "Ha-ha!"],
    correctAnswer: "Eat my shorts!"
  },
  {
    id: 5,
    text: "What instrument does Lisa play?",
    options: ["Saxophone", "Guitar", "Drums", "Piano"],
    correctAnswer: "Saxophone"
  }
];