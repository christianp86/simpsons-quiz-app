export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Player {
  name: string;
  score: number;
  fiftyFiftyJoker: boolean;
  correctAnswerJoker: boolean;
}