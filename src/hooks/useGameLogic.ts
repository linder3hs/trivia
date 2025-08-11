import { useState, useEffect, useCallback } from 'react';
import { GameState, Category, Question, UseGameLogic } from '../types/trivia.types';
import { QUESTIONS_DATABASE, GAME_CONFIG } from '../data/trivia.data';

/**
 * Custom hook that manages all the game logic for the trivia game
 * Handles state management, timer, scoring, and game flow
 */
export const useGameLogic = (): UseGameLogic => {
  // Game state management
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(GAME_CONFIG.initialLives);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(GAME_CONFIG.timePerQuestion);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);

  /**
   * Shuffles an array using Fisher-Yates algorithm
   */
  const shuffleArray = useCallback(<T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  /**
   * Starts a new game with the selected category
   */
  const startGame = useCallback((category: Category) => {
    const categoryQuestions = QUESTIONS_DATABASE[category.id] || [];
    const shuffledQuestions = shuffleArray(categoryQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, GAME_CONFIG.questionsPerGame);

    setSelectedCategory(category);
    setGameQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setLives(GAME_CONFIG.initialLives);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(GAME_CONFIG.timePerQuestion);
    setGameState('playing');
  }, [shuffleArray]);

  /**
   * Handles answer selection and scoring logic
   */
  const handleAnswer = useCallback((answerIndex: number) => {
    if (showResult || gameQuestions.length === 0) return;

    const currentQ = gameQuestions[currentQuestion];
    const isCorrect = answerIndex === currentQ.correct;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (isCorrect) {
      // Calculate bonus points based on remaining time
      const timeBonus = Math.floor(timeLeft / 2);
      const totalPoints = GAME_CONFIG.pointsPerCorrectAnswer + timeBonus;
      setScore(prev => prev + totalPoints);
    } else {
      setLives(prev => prev - 1);
    }

    // Move to next question or end game after delay
    setTimeout(() => {
      if (isCorrect || lives > 1) {
        if (currentQuestion + 1 >= gameQuestions.length) {
          setGameState('gameOver');
        } else {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setShowResult(false);
          setTimeLeft(GAME_CONFIG.timePerQuestion);
        }
      } else {
        setGameState('gameOver');
      }
    }, 2000);
  }, [showResult, gameQuestions, currentQuestion, timeLeft, lives]);

  /**
   * Resets the game to initial state
   */
  const resetGame = useCallback(() => {
    setGameState('menu');
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setLives(GAME_CONFIG.initialLives);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(GAME_CONFIG.timePerQuestion);
    setGameQuestions([]);
  }, []);

  /**
   * Timer effect - counts down during gameplay
   */
  useEffect(() => {
    if (gameState !== 'playing' || showResult || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Time's up - treat as wrong answer
          handleAnswer(-1); // Invalid answer index
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, showResult, timeLeft, handleAnswer]);

  return {
    gameState,
    selectedCategory,
    currentQuestion,
    score,
    lives,
    selectedAnswer,
    showResult,
    timeLeft,
    gameQuestions,
    startGame,
    handleAnswer,
    resetGame,
  };
};