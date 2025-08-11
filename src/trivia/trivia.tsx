import React from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import { CATEGORIES } from '../data/trivia.data';
import MenuScreen from '../components/MenuScreen';
import GameScreen from '../components/GameScreen';
import GameOverScreen from '../components/GameOverScreen';

/**
 * TriviaGame - Main component that orchestrates the trivia game
 * 
 * This component follows the Container/Presentational pattern:
 * - Acts as a container component managing state and logic through custom hooks
 * - Delegates rendering to specialized presentational components
 * - Maintains clean separation of concerns
 * 
 * Architecture:
 * - useGameLogic: Custom hook handling all game state and logic
 * - MenuScreen: Presentational component for category selection
 * - GameScreen: Presentational component for active gameplay
 * - GameOverScreen: Presentational component for game completion
 */
const TriviaGame: React.FC = () => {
  // Extract all game logic and state from custom hook
  const {
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
  } = useGameLogic();

  /**
   * Handles play again functionality
   * Restarts the game with the same category
   */
  const handlePlayAgain = () => {
    if (selectedCategory) {
      startGame(selectedCategory);
    }
  };

  /**
   * Renders the appropriate screen based on current game state
   */
  const renderCurrentScreen = () => {
    switch (gameState) {
      case 'menu':
        return (
          <MenuScreen 
            categories={CATEGORIES} 
            onCategorySelect={startGame} 
          />
        );
      
      case 'playing':
        return (
          <GameScreen
            selectedCategory={selectedCategory}
            currentQuestion={currentQuestion}
            gameQuestions={gameQuestions}
            score={score}
            lives={lives}
            timeLeft={timeLeft}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onAnswer={handleAnswer}
          />
        );
      
      case 'gameOver':
        return (
          <GameOverScreen
            selectedCategory={selectedCategory}
            score={score}
            onPlayAgain={handlePlayAgain}
            onBackToMenu={resetGame}
          />
        );
      
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="font-sans antialiased">
      {renderCurrentScreen()}
    </div>
  );
};

export default TriviaGame;
