import React from "react";
import { Star } from "lucide-react";
import { GameScreenProps } from "../types/trivia.types";

/**
 * GameScreen Component - Displays the active game interface
 * Shows current question, options, timer, score, and lives
 */
const GameScreen: React.FC<GameScreenProps> = ({
  selectedCategory,
  currentQuestion,
  gameQuestions,
  score,
  lives,
  timeLeft,
  selectedAnswer,
  showResult,
  onAnswer,
}) => {
  if (!selectedCategory || gameQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando preguntas...</p>
        </div>
      </div>
    );
  }

  const currentQ = gameQuestions[currentQuestion];
  const Icon = selectedCategory.icon;

  /**
   * Determines the button styling based on answer state
   */
  const getButtonClass = (index: number): string => {
    const baseClass =
      "p-4 rounded-xl border-2 text-left font-medium transition-all duration-300 transform hover:scale-105 ";

    if (showResult) {
      if (index === currentQ.correct) {
        return baseClass + "bg-green-500 text-white border-green-500 shadow-lg";
      } else if (index === selectedAnswer) {
        return baseClass + "bg-red-500 text-white border-red-500 shadow-lg";
      } else {
        return baseClass + "bg-gray-100 text-gray-500 border-gray-200";
      }
    } else {
      return (
        baseClass +
        "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800"
      );
    }
  };

  /**
   * Gets the timer styling based on remaining time
   */
  const getTimerClass = (): string => {
    const baseClass =
      "inline-flex items-center justify-center w-16 h-16 rounded-full border-4 text-white text-2xl font-bold";

    if (timeLeft <= 5) {
      return baseClass + " border-red-300 bg-red-500 animate-pulse";
    }
    return baseClass + " border-white/50 bg-white/20";
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${selectedCategory.color} p-4`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header with score and lives */}
        <div className="flex justify-between items-center mb-8 pt-4">
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-2">Trivia Game</h1>
          </div>

          <div className="flex items-center space-x-6">
            {/* Score */}
            <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-bold text-white">{score}</span>
            </div>

            {/* Lives */}
            <div className="flex items-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    i < lives ? "bg-red-500" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-white mb-2">
            <span className="flex items-center space-x-2">
              <Icon className="w-5 h-5" />
              <span>{selectedCategory.name}</span>
            </span>
            <span>
              Pregunta {currentQuestion + 1}/{gameQuestions.length}
            </span>
          </div>

          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${
                  ((currentQuestion + 1) / gameQuestions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Timer */}
        <div className="text-center mb-8">
          <div className={getTimerClass()}>{timeLeft}</div>
          <p className="text-white/80 text-sm mt-2">
            {timeLeft <= 5 ? "¡Tiempo agotándose!" : "Tiempo restante"}
          </p>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Answer options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && onAnswer(index)}
                disabled={showResult}
                className={getButtonClass(index)}
                aria-label={`Opción ${String.fromCharCode(
                  65 + index
                )}: ${option}`}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-sm font-bold flex items-center justify-center mr-3 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Result feedback */}
          {showResult && (
            <div className="mt-6 text-center">
              {selectedAnswer === currentQ.correct ? (
                <div className="text-green-600">
                  <p className="text-lg font-bold">¡Correcto! 🎉</p>
                  <p className="text-sm">
                    +{50 + Math.floor(timeLeft / 2)} puntos
                  </p>
                </div>
              ) : (
                <div className="text-red-600">
                  <p className="text-lg font-bold">Incorrecto 😞</p>
                  <p className="text-sm">
                    La respuesta correcta era:{" "}
                    {currentQ.options[currentQ.correct]}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
