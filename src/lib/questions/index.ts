import { characterQuestions } from './categories/characters';
import { locationQuestions } from './categories/locations';
import { episodeQuestions } from './categories/episodes';
import { cultureQuestions } from './categories/culture';
import { catchphraseQuestions } from './categories/catchphrases';
import { triviaQuestions } from './categories/trivia';
import { foodQuestions } from './categories/food';
import { workQuestions } from './categories/work';
import { familyQuestions } from './categories/family';
import { petQuestions } from './categories/pets';
import type { Question } from '../types';

// Combine all questions and shuffle them
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Combine all questions from different categories
const allQuestions: Question[] = [
  ...characterQuestions,
  ...locationQuestions,
  ...episodeQuestions,
  ...cultureQuestions,
  ...catchphraseQuestions,
  ...triviaQuestions,
  ...foodQuestions,
  ...workQuestions,
  ...familyQuestions,
  ...petQuestions
].map((q, index) => ({ ...q, id: index + 1 }));

// Export shuffled questions
export const questions = shuffleArray(allQuestions);