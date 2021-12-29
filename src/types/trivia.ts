type IDifficulty = 'easy' | 'medium' | 'hard';
type IType = 'multiple' | 'boolean';

export interface IQuizParams {
  amount: number;
  category?: number;
  difficulty?: IDifficulty;
  type?: IType;
}

export interface IQuizItem {
  category: string;
  correct_answer: string;
  difficulty: IDifficulty;
  incorrect_answers: string[];
  question: string;
  type: IType;
}
