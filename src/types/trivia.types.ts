import { LucideIcon } from 'lucide-react';

// Game state types
export type GameState = 'menu' | 'playing' | 'result' | 'gameOver';

// Question interface
export interface Question {
  question: string;
  options: string[];
  correct: number;
}

// Category interface
export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

// Questions database type
export type QuestionsDatabase = {
  [key: string]: Question[];
};

// Game statistics interface
export interface GameStats {
  score: number;
  lives: number;
  currentQuestion: number;
  timeLeft: number;
}

// Game configuration
export interface GameConfig {
  questionsPerGame: number;
  timePerQuestion: number;
  pointsPerCorrectAnswer: number;
  initialLives: number;
}

// Component props interfaces
export interface MenuScreenProps {
  categories: Category[];
  onCategorySelect: (category: Category) => void;
}

export interface GameScreenProps {
  selectedCategory: Category | null;
  currentQuestion: number;
  gameQuestions: Question[];
  score: number;
  lives: number;
  timeLeft: number;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswer: (answerIndex: number) => void;
}

export interface GameOverScreenProps {
  selectedCategory: Category | null;
  score: number;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

// Hook return types
export interface UseGameLogic {
  gameState: GameState;
  selectedCategory: Category | null;
  currentQuestion: number;
  score: number;
  lives: number;
  selectedAnswer: number | null;
  showResult: boolean;
  timeLeft: number;
  gameQuestions: Question[];
  startGame: (category: Category) => void;
  handleAnswer: (answerIndex: number) => void;
  resetGame: () => void;
}