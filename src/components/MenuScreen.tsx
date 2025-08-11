import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MenuScreenProps } from '../types/trivia.types';

/**
 * MenuScreen Component - Displays the category selection screen
 * Follows the Container/Presentational pattern for clean separation of concerns
 */
const MenuScreen: React.FC<MenuScreenProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🧠 Trivia Game
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Pon a prueba tus conocimientos en diferentes categorías.
            ¡Responde correctamente y acumula puntos!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category)}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Icon container */}
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  
                  {/* Category name */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  
                  {/* Arrow icon */}
                  <div className="flex items-center justify-center text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span className="text-sm mr-1">Jugar</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            Selecciona una categoría para comenzar tu aventura de conocimiento
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;