import React from 'react';
import { Trophy, Star, RotateCcw, Home } from 'lucide-react';
import { GameOverScreenProps } from '../types/trivia.types';

/**
 * GameOverScreen Component - Displays the final score and game completion screen
 * Shows different achievements based on score and provides options to play again or return to menu
 */
const GameOverScreen: React.FC<GameOverScreenProps> = ({
  selectedCategory,
  score,
  onPlayAgain,
  onBackToMenu,
}) => {
  /**
   * Determines the achievement level based on score
   */
  const getAchievement = () => {
    if (score >= 400) {
      return {
        icon: Trophy,
        title: '¡Excelente!',
        message: '¡Eres un verdadero experto!',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-100',
      };
    } else if (score >= 200) {
      return {
        icon: Star,
        title: '¡Bien hecho!',
        message: '¡Buen trabajo, sigue así!',
        color: 'text-blue-500',
        bgColor: 'bg-blue-100',
      };
    } else {
      return {
        icon: null,
        title: '¡Sigue practicando!',
        message: 'La práctica hace al maestro',
        color: 'text-gray-500',
        bgColor: 'bg-gray-100',
        emoji: '😊',
      };
    }
  };

  /**
   * Gets performance message based on score
   */
  const getPerformanceMessage = (): string => {
    if (score >= 400) return 'Puntuación perfecta';
    if (score >= 300) return 'Excelente desempeño';
    if (score >= 200) return 'Buen desempeño';
    if (score >= 100) return 'Desempeño regular';
    return 'Hay espacio para mejorar';
  };

  const achievement = getAchievement();
  const AchievementIcon = achievement.icon;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${
        selectedCategory?.color || 'from-purple-600 to-blue-600'
      } p-4 flex items-center justify-center`}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-md w-full transform animate-in slide-in-from-bottom-4 duration-500">
        {/* Achievement Icon/Emoji */}
        <div className="mb-6">
          {AchievementIcon ? (
            <div className={`w-20 h-20 ${achievement.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center`}>
              <AchievementIcon className={`w-12 h-12 ${achievement.color}`} />
            </div>
          ) : (
            <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">{achievement.emoji}</span>
            </div>
          )}

          {/* Achievement Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {achievement.title}
          </h2>
          
          {/* Achievement Message */}
          <p className="text-gray-600 mb-2">{achievement.message}</p>
          
          {/* Performance Message */}
          <p className="text-sm text-gray-500 mb-4">{getPerformanceMessage()}</p>
        </div>

        {/* Score Display */}
        <div className="mb-8">
          <p className="text-gray-600 mb-2">Tu puntuación final:</p>
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {score}
          </div>
          <p className="text-sm text-gray-500">puntos</p>
        </div>

        {/* Score Breakdown */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Desglose de puntuación</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Respuestas correctas:</span>
              <span>{Math.floor(score / 50)} preguntas</span>
            </div>
            <div className="flex justify-between">
              <span>Bonificación por tiempo:</span>
              <span>{score % 50} puntos</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={onPlayAgain}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Jugar de nuevo</span>
          </button>

          <button
            onClick={onBackToMenu}
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Volver al menú</span>
          </button>
        </div>

        {/* Category Info */}
        {selectedCategory && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Categoría: <span className="font-medium">{selectedCategory.name}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameOverScreen;