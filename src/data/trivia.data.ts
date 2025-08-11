import {
  Brain,
  Globe,
  Palette,
  Music,
  Camera,
  Gamepad2,
  History,
  Lightbulb,
} from 'lucide-react';
import { Category, QuestionsDatabase, GameConfig } from '../types/trivia.types';

// Game configuration constants
export const GAME_CONFIG: GameConfig = {
  questionsPerGame: 8,
  timePerQuestion: 20,
  pointsPerCorrectAnswer: 50,
  initialLives: 3,
};

// Categories data
export const CATEGORIES: Category[] = [
  {
    id: 'ciencia',
    name: 'Ciencia',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
  },
  {
    id: 'geografia',
    name: 'Geografía',
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-100',
  },
  {
    id: 'arte',
    name: 'Arte',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
  },
  {
    id: 'musica',
    name: 'Música',
    icon: Music,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-100',
  },
  {
    id: 'cine',
    name: 'Cine',
    icon: Camera,
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 'deportes',
    name: 'Deportes',
    icon: Gamepad2,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-100',
  },
  {
    id: 'historia',
    name: 'Historia',
    icon: History,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-100',
  },
  {
    id: 'general',
    name: 'Conocimiento General',
    icon: Lightbulb,
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-100',
  },
];

// Questions database
export const QUESTIONS_DATABASE: QuestionsDatabase = {
  ciencia: [
    {
      question: '¿Cuál es el elemento químico más abundante en el universo?',
      options: ['Oxígeno', 'Hidrógeno', 'Carbono', 'Helio'],
      correct: 1,
    },
    {
      question: '¿Cuántos huesos tiene un adulto humano?',
      options: ['156', '206', '256', '306'],
      correct: 1,
    },
    {
      question: '¿Qué planeta es conocido como el "Planeta Rojo"?',
      options: ['Venus', 'Júpiter', 'Marte', 'Saturno'],
      correct: 2,
    },
    {
      question: '¿Cuál es la velocidad de la luz en el vacío?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
      correct: 0,
    },
    {
      question: '¿Qué científico desarrolló la teoría de la evolución?',
      options: ['Newton', 'Einstein', 'Darwin', 'Galileo'],
      correct: 2,
    },
    {
      question: '¿Cuál es la unidad básica de la vida?',
      options: ['Átomo', 'Molécula', 'Célula', 'Tejido'],
      correct: 2,
    },
    {
      question: '¿Qué gas es esencial para la respiración?',
      options: ['Nitrógeno', 'Dióxido de carbono', 'Oxígeno', 'Hidrógeno'],
      correct: 2,
    },
    {
      question: '¿Cuál es la fórmula química del agua?',
      options: ['H2O', 'CO2', 'NaCl', 'CH4'],
      correct: 0,
    },
    {
      question: '¿Cuál es el pH del agua pura?',
      options: ['6', '7', '8', '9'],
      correct: 1,
    },
    {
      question: '¿Cómo se llama el proceso por el cual las plantas producen oxígeno?',
      options: ['Respiración', 'Fotosíntesis', 'Transpiración', 'Metabolismo'],
      correct: 1,
    },
    {
      question: '¿Qué tipo de animal es un murciélago?',
      options: ['Ave', 'Mamífero', 'Reptil', 'Insecto'],
      correct: 1,
    },
    {
      question: '¿Cuál es el metal más ligero?',
      options: ['Aluminio', 'Magnesio', 'Litio', 'Berilio'],
      correct: 2,
    },
    {
      question: '¿Cuántos cromosomas tiene el ser humano?',
      options: ['44', '46', '48', '50'],
      correct: 1,
    },
    {
      question: '¿Qué órgano del cuerpo humano produce la insulina?',
      options: ['Hígado', 'Riñón', 'Páncreas', 'Estómago'],
      correct: 2,
    },
    {
      question: '¿Cuál es la partícula subatómica con carga positiva?',
      options: ['Electrón', 'Neutrón', 'Protón', 'Fotón'],
      correct: 2,
    },
    {
      question: '¿Qué estudia la sismología?',
      options: ['Los volcanes', 'Los terremotos', 'Las rocas', 'El clima'],
      correct: 1,
    },
    {
      question: '¿Cuál es el grupo sanguíneo universal donante?',
      options: ['A+', 'B+', 'AB+', 'O-'],
      correct: 3,
    },
    {
      question: '¿Qué significa ADN?',
      options: ['Ácido Desoxirribonucleico', 'Ácido Ribonucleico', 'Adenina Nucleica', 'Aminoácido Natural'],
      correct: 0,
    },
    {
      question: '¿Cuál es la temperatura de ebullición del agua al nivel del mar?',
      options: ['90°C', '95°C', '100°C', '105°C'],
      correct: 2,
    },
    {
      question: '¿Qué es un año luz?',
      options: ['Unidad de tiempo', 'Unidad de distancia', 'Unidad de velocidad', 'Unidad de masa'],
      correct: 1,
    },
    {
      question: '¿Cuál es el planeta más grande del sistema solar?',
      options: ['Saturno', 'Neptuno', 'Urano', 'Júpiter'],
      correct: 3,
    },
    {
      question: '¿Qué científico propuso la teoría de la relatividad?',
      options: ['Newton', 'Einstein', 'Hawking', 'Planck'],
      correct: 1,
    },
    {
      question: '¿Cuántas cámaras tiene el corazón humano?',
      options: ['2', '3', '4', '5'],
      correct: 2,
    },
    {
      question: '¿Qué elemento químico tiene el símbolo "Au"?',
      options: ['Plata', 'Oro', 'Cobre', 'Hierro'],
      correct: 1,
    },
    {
      question: '¿Cuál es la célula más grande del cuerpo humano?',
      options: ['Neurona', 'Óvulo', 'Espermatozoide', 'Glóbulo rojo'],
      correct: 1,
    },
    {
      question: '¿Qué estudia la botánica?',
      options: ['Los animales', 'Las plantas', 'Los minerales', 'Los océanos'],
      correct: 1,
    },
    {
      question: '¿Cuál es el hueso más largo del cuerpo humano?',
      options: ['Húmero', 'Tibia', 'Fémur', 'Radio'],
      correct: 2,
    },
    {
      question: '¿Qué gas forma aproximadamente el 78% de la atmósfera terrestre?',
      options: ['Oxígeno', 'Dióxido de carbono', 'Nitrógeno', 'Argón'],
      correct: 2,
    },
    {
      question: '¿Cuál es la unidad básica del sistema nervioso?',
      options: ['Célula', 'Neurona', 'Dendrita', 'Axón'],
      correct: 1,
    },
    {
      question: '¿Qué vitamina se produce cuando la piel se expone al sol?',
      options: ['Vitamina A', 'Vitamina C', 'Vitamina D', 'Vitamina E'],
      correct: 2,
    },
    {
      question: '¿Cuál es el hueso más pequeño del cuerpo humano?',
      options: ['Estribo', 'Yunque', 'Martillo', 'Falange'],
      correct: 0,
    },
    {
      question: '¿Cuántas costillas tiene el ser humano?',
      options: ['22', '24', '26', '28'],
      correct: 1,
    },
    {
      question: '¿Cuál es el músculo más grande del cuerpo humano?',
      options: ['Bíceps', 'Cuádriceps', 'Glúteo mayor', 'Dorsal ancho'],
      correct: 2,
    },
    {
      question: '¿Qué hueso forma la frente?',
      options: ['Parietal', 'Temporal', 'Frontal', 'Occipital'],
      correct: 2,
    },
    {
      question: '¿Cuántos músculos tiene aproximadamente el cuerpo humano?',
      options: ['400', '500', '600', '700'],
      correct: 2,
    },
    {
      question: '¿Cómo se llama el hueso de la rodilla?',
      options: ['Fémur', 'Tibia', 'Rótula', 'Peroné'],
      correct: 2,
    },
    {
      question: '¿Cuál es el músculo del corazón?',
      options: ['Músculo liso', 'Músculo esquelético', 'Miocardio', 'Tendón'],
      correct: 2,
    },
    {
      question: '¿Qué huesos forman la caja torácica?',
      options: ['Costillas y esternón', 'Solo costillas', 'Costillas y columna', 'Esternón y columna'],
      correct: 0,
    },
    {
      question: '¿Cuál es el músculo que permite doblar el brazo?',
      options: ['Tríceps', 'Bíceps', 'Deltoides', 'Braquial'],
      correct: 1,
    },
    {
      question: '¿Cuántas vértebras tiene la columna vertebral?',
      options: ['31', '33', '35', '37'],
      correct: 1,
    },
    {
      question: '¿Cómo se llama el hueso del brazo?',
      options: ['Radio', 'Cúbito', 'Húmero', 'Falange'],
      correct: 2,
    },
    {
      question: '¿Qué músculo permite extender la pierna?',
      options: ['Cuádriceps', 'Isquiotibiales', 'Gemelos', 'Sóleo'],
      correct: 0,
    },
    {
      question: '¿Cuál es el hueso más duro del cuerpo?',
      options: ['Fémur', 'Cráneo', 'Esmalte dental', 'Tibia'],
      correct: 2,
    },
    {
      question: '¿Qué tipo de articulación es el hombro?',
      options: ['Bisagra', 'Pivote', 'Esférica', 'Deslizante'],
      correct: 2,
    },
    {
      question: '¿Cuántos huesos tiene el cráneo humano?',
      options: ['6', '8', '10', '12'],
      correct: 1,
    },
    {
      question: '¿Cómo se llama el músculo de la pantorrilla?',
      options: ['Tibial', 'Gemelo', 'Sóleo', 'Gemelo y sóleo'],
      correct: 3,
    },
    {
      question: '¿Qué hueso conecta el brazo con el tronco?',
      options: ['Húmero', 'Clavícula', 'Escápula', 'Esternón'],
      correct: 1,
    },
    {
      question: '¿Cuál es el músculo principal de la respiración?',
      options: ['Intercostales', 'Diafragma', 'Abdominales', 'Pectorales'],
      correct: 1,
    },
    {
      question: '¿Cuántos huesos tiene la mano humana?',
      options: ['25', '27', '29', '31'],
      correct: 1,
    },
    {
      question: '¿Qué músculo permite masticar?',
      options: ['Temporal', 'Masetero', 'Pterigoideo', 'Todos los anteriores'],
      correct: 3,
    },
    {
      question: '¿Cuál es la presión arterial normal en adultos?',
      options: ['120/80 mmHg', '140/90 mmHg', '110/70 mmHg', '130/85 mmHg'],
      correct: 0,
    },
  ],
  geografia: [
    {
      question: '¿Cuál es la capital de Australia?',
      options: ['Sídney', 'Melbourne', 'Canberra', 'Perth'],
      correct: 2,
    },
    {
      question: '¿Cuál es el río más largo del mundo?',
      options: ['Amazonas', 'Nilo', 'Yangtsé', 'Mississippi'],
      correct: 1,
    },
    {
      question: '¿En qué continente se encuentra el desierto del Sahara?',
      options: ['Asia', 'África', 'América', 'Oceanía'],
      correct: 1,
    },
    {
      question: '¿Cuál es la montaña más alta del mundo?',
      options: ['K2', 'Everest', 'Aconcagua', 'Denali'],
      correct: 1,
    },
    {
      question: '¿Cuántos países conforman América del Sur?',
      options: ['10', '12', '14', '16'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Francia?',
      options: ['Londres', 'Berlín', 'París', 'Madrid'],
      correct: 2,
    },
    {
      question: '¿Cuál es el país más grande del mundo?',
      options: ['China', 'Canadá', 'Estados Unidos', 'Rusia'],
      correct: 3,
    },
    {
      question: '¿Cuál es el océano más grande?',
      options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
      correct: 2,
    },
    {
      question: '¿En qué continente está Egipto?',
      options: ['Asia', 'África', 'Europa', 'América'],
      correct: 1,
    },
    {
      question: '¿Cuál es el desierto más grande del mundo?',
      options: ['Sahara', 'Gobi', 'Kalahari', 'Antártida'],
      correct: 3,
    },
    {
      question: '¿Cuál es la capital de Japón?',
      options: ['Osaka', 'Kyoto', 'Tokio', 'Hiroshima'],
      correct: 2,
    },
    {
      question: '¿Cuántos continentes hay?',
      options: ['5', '6', '7', '8'],
      correct: 2,
    },
    {
      question: '¿Cuál es el país más pequeño del mundo?',
      options: ['Mónaco', 'Vaticano', 'San Marino', 'Liechtenstein'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Brasil?',
      options: ['São Paulo', 'Río de Janeiro', 'Brasilia', 'Salvador'],
      correct: 2,
    },
    {
      question: '¿En qué país se encuentra Machu Picchu?',
      options: ['Bolivia', 'Ecuador', 'Perú', 'Colombia'],
      correct: 2,
    },
    {
      question: '¿Cuál es el lago más grande del mundo?',
      options: ['Superior', 'Baikal', 'Caspio', 'Victoria'],
      correct: 2,
    },
    {
      question: '¿Cuál es la capital de Canadá?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
      correct: 3,
    },
    {
      question: '¿En qué país se encuentra el Taj Mahal?',
      options: ['Pakistán', 'India', 'Bangladesh', 'Nepal'],
      correct: 1,
    },
    {
      question: '¿Cuál es la isla más grande del mundo?',
      options: ['Madagascar', 'Groenlandia', 'Nueva Guinea', 'Borneo'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Argentina?',
      options: ['Córdoba', 'Rosario', 'Buenos Aires', 'Mendoza'],
      correct: 2,
    },
    {
      question: '¿En qué país se encuentra la Torre Eiffel?',
      options: ['Italia', 'España', 'Francia', 'Alemania'],
      correct: 2,
    },
    {
      question: '¿Cuál es el punto más bajo de la Tierra?',
      options: ['Valle de la Muerte', 'Mar Muerto', 'Depresión de Qattara', 'Lago Assal'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de México?',
      options: ['Guadalajara', 'Monterrey', 'Ciudad de México', 'Puebla'],
      correct: 2,
    },
    {
      question: '¿En qué continente está Turquía?',
      options: ['Europa', 'Asia', 'Europa y Asia', 'África'],
      correct: 2,
    },
    {
      question: '¿Cuál es el volcán más alto del mundo?',
      options: ['Kilimanjaro', 'Ojos del Salado', 'Aconcagua', 'Chimborazo'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Chile?',
      options: ['Valparaíso', 'Santiago', 'Concepción', 'Antofagasta'],
      correct: 1,
    },
    {
      question: '¿En qué país se encuentra Petra?',
      options: ['Egipto', 'Jordania', 'Israel', 'Siria'],
      correct: 1,
    },
    {
      question: '¿Cuál es el estrecho que separa Europa de África?',
      options: ['Bósforo', 'Gibraltar', 'Dardanelos', 'Ormuz'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Colombia?',
      options: ['Medellín', 'Cali', 'Bogotá', 'Barranquilla'],
      correct: 2,
    },
    {
      question: '¿En qué país se encuentra Angkor Wat?',
      options: ['Tailandia', 'Vietnam', 'Camboya', 'Laos'],
      correct: 2,
    },
    {
      question: '¿Cuál es la cascada más alta del mundo?',
      options: ['Niágara', 'Iguazú', 'Salto Ángel', 'Victoria'],
      correct: 2,
    },
    {
      question: '¿Cuál es la capital de Perú?',
      options: ['Cusco', 'Arequipa', 'Lima', 'Trujillo'],
      correct: 2,
    },
    {
      question: '¿En qué país se encuentra el Monte Fuji?',
      options: ['China', 'Corea del Sur', 'Japón', 'Filipinas'],
      correct: 2,
    },
    {
      question: '¿Cuál es el canal que conecta el Atlántico y el Pacífico?',
      options: ['Suez', 'Panamá', 'Corinto', 'Kiel'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Venezuela?',
      options: ['Maracaibo', 'Valencia', 'Caracas', 'Barquisimeto'],
      correct: 2,
    },
    {
      question: '¿En qué país se encuentra la Gran Muralla?',
      options: ['Mongolia', 'China', 'Corea del Norte', 'Rusia'],
      correct: 1,
    },
    {
      question: '¿Cuál es la península más grande del mundo?',
      options: ['Ibérica', 'Arábiga', 'Indostán', 'Escandinava'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Ecuador?',
      options: ['Guayaquil', 'Quito', 'Cuenca', 'Ambato'],
      correct: 1,
    },
    {
      question: '¿En qué país se encuentra el Kilimanjaro?',
      options: ['Kenia', 'Tanzania', 'Uganda', 'Etiopía'],
      correct: 1,
    },
    {
      question: '¿Cuál es el golfo más grande del mundo?',
      options: ['Pérsico', 'México', 'Bengala', 'Alaska'],
      correct: 2,
    },
    {
      question: '¿Cuál es la capital de Uruguay?',
      options: ['Punta del Este', 'Montevideo', 'Salto', 'Maldonado'],
      correct: 1,
    },
    {
      question: '¿En qué país se encuentra Stonehenge?',
      options: ['Irlanda', 'Escocia', 'Inglaterra', 'Gales'],
      correct: 2,
    },
    {
      question: '¿Cuál es la cordillera más larga del mundo?',
      options: ['Himalaya', 'Andes', 'Rocosas', 'Alpes'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Paraguay?',
      options: ['Ciudad del Este', 'Asunción', 'Encarnación', 'Pedro Juan Caballero'],
      correct: 1,
    },
    {
      question: '¿En qué país se encuentra el Coliseo?',
      options: ['Grecia', 'Italia', 'España', 'Francia'],
      correct: 1,
    },
    {
      question: '¿Cuál es el archipiélago más grande del mundo?',
      options: ['Filipinas', 'Indonesia', 'Japón', 'Grecia'],
      correct: 1,
    },
    {
      question: '¿Cuál es la capital de Bolivia?',
      options: ['La Paz', 'Santa Cruz', 'Sucre', 'Cochabamba'],
      correct: 2,
    },
    {
      question: '¿En qué país se encuentra la Sagrada Familia?',
      options: ['Francia', 'Italia', 'España', 'Portugal'],
      correct: 2,
    },
    {
      question: '¿Cuál es el mar más salado del mundo?',
      options: ['Muerto', 'Rojo', 'Caspio', 'Aral'],
      correct: 0,
    },
    {
      question: '¿Cuál es la capital de Costa Rica?',
      options: ['Cartago', 'San José', 'Alajuela', 'Puntarenas'],
      correct: 1,
    },
    {
      question: '¿En qué país se encuentra Cristo Redentor?',
      options: ['Argentina', 'Brasil', 'Chile', 'Uruguay'],
      correct: 1,
    },
    {
      question: '¿Cuál es la fosa oceánica más profunda?',
      options: ['Puerto Rico', 'Marianas', 'Perú-Chile', 'Japón'],
      correct: 1,
    },
  ],
  deportes: [
    {
      question: '¿Cuántos jugadores hay en un equipo de fútbol?',
      options: ['10', '11', '12', '9'],
      correct: 1,
    },
    {
      question: '¿En qué deporte se usa el término "home run"?',
      options: ['Fútbol americano', 'Béisbol', 'Cricket', 'Tenis'],
      correct: 1,
    },
    {
      question: '¿Cada cuántos años se celebran los Juegos Olímpicos?',
      options: ['2 años', '3 años', '4 años', '5 años'],
      correct: 2,
    },
    {
      question: '¿Cuál es el deporte más popular del mundo?',
      options: ['Básquetbol', 'Fútbol', 'Tenis', 'Cricket'],
      correct: 1,
    },
    {
      question: '¿Cuántos sets se necesitan para ganar en Wimbledon (hombres)?',
      options: ['2', '3', '4', '5'],
      correct: 1,
    },
    {
      question: '¿Cuántos anillos olímpicos hay?',
      options: ['4', '5', '6', '7'],
      correct: 1,
    },
    {
      question: '¿En qué deporte destacó Michael Jordan?',
      options: ['Fútbol', 'Baloncesto', 'Béisbol', 'Tenis'],
      correct: 1,
    },
    {
      question: '¿En qué deporte se utiliza un puck?',
      options: ['Hockey sobre hielo', 'Fútbol', 'Baloncesto', 'Voleibol'],
      correct: 0,
    },
    {
      question: '¿Quién tiene más Balones de Oro?',
      options: ['Cristiano Ronaldo', 'Lionel Messi', 'Pelé', 'Maradona'],
      correct: 1,
    },
    {
      question: '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
      options: ['1894', '1896', '1898', '1900'],
      correct: 1,
    },
    {
      question: '¿Cuál es la distancia de un maratón?',
      options: ['40.195 km', '41.195 km', '42.195 km', '43.195 km'],
      correct: 2,
    },
    {
      question: '¿En qué deporte destacó Serena Williams?',
      options: ['Tenis', 'Atletismo', 'Natación', 'Gimnasia'],
      correct: 0,
    },
    {
      question: '¿Cuántos jugadores hay en un equipo de baloncesto en cancha?',
      options: ['4', '5', '6', '7'],
      correct: 1,
    },
    {
      question: '¿Qué país ha ganado más Copas del Mundo de fútbol?',
      options: ['Argentina', 'Alemania', 'Brasil', 'Italia'],
      correct: 2,
    },
    {
      question: '¿En qué deporte se utiliza una pelota amarilla?',
      options: ['Fútbol', 'Baloncesto', 'Tenis', 'Voleibol'],
      correct: 2,
    },
    {
      question: '¿Cuál es el récord mundial de los 100 metros planos masculinos?',
      options: ['9.58 segundos', '9.63 segundos', '9.69 segundos', '9.72 segundos'],
      correct: 0,
    },
    {
      question: '¿Quién ostenta el récord de los 100 metros planos?',
      options: ['Carl Lewis', 'Usain Bolt', 'Justin Gatlin', 'Tyson Gay'],
      correct: 1,
    },
    {
      question: '¿En qué deporte destacó Tiger Woods?',
      options: ['Tenis', 'Golf', 'Atletismo', 'Natación'],
      correct: 1,
    },
    {
      question: '¿Cuántos Grand Slams ha ganado Rafael Nadal?',
      options: ['20', '21', '22', '23'],
      correct: 2,
    },
    {
      question: '¿En qué superficie es especialista Rafael Nadal?',
      options: ['Hierba', 'Tierra batida', 'Cemento', 'Sintética'],
      correct: 1,
    },
    {
      question: '¿Cuál es el equipo con más Champions League?',
      options: ['Barcelona', 'Real Madrid', 'AC Milan', 'Liverpool'],
      correct: 1,
    },
    {
      question: '¿En qué año ganó España su primera Copa del Mundo?',
      options: ['2008', '2010', '2012', '2014'],
      correct: 1,
    },
    {
      question: '¿Cuántos puntos vale un touchdown en fútbol americano?',
      options: ['5', '6', '7', '8'],
      correct: 1,
    },
    {
      question: '¿En qué deporte destacó Muhammad Ali?',
      options: ['Boxeo', 'Lucha', 'Karate', 'Judo'],
      correct: 0,
    },
    {
      question: '¿Cuál es el torneo de tenis más prestigioso?',
      options: ['US Open', 'Roland Garros', 'Wimbledon', 'Australian Open'],
      correct: 2,
    },
    {
      question: '¿En qué deporte se utiliza un bate?',
      options: ['Fútbol', 'Béisbol', 'Tenis', 'Hockey'],
      correct: 1,
    },
    {
      question: '¿Cuántos jugadores hay en un equipo de voleibol?',
      options: ['5', '6', '7', '8'],
      correct: 1,
    },
    {
      question: '¿Qué selección ganó la Eurocopa 2021?',
      options: ['Francia', 'Inglaterra', 'Italia', 'España'],
      correct: 2,
    },
    {
      question: '¿En qué año se celebraron los Juegos Olímpicos de Barcelona?',
      options: ['1990', '1992', '1994', '1996'],
      correct: 1,
    },
    {
      question: '¿Cuál es el club de fútbol más valioso del mundo?',
      options: ['Real Madrid', 'Barcelona', 'Manchester United', 'Bayern Munich'],
      correct: 0,
    },
    {
      question: '¿En qué deporte destacó Kobe Bryant?',
      options: ['Fútbol', 'Baloncesto', 'Béisbol', 'Tenis'],
      correct: 1,
    },
    {
      question: '¿Cuántos majors de golf existen?',
      options: ['3', '4', '5', '6'],
      correct: 1,
    },
    {
      question: '¿Qué país organizó la Copa del Mundo 2018?',
      options: ['Brasil', 'Rusia', 'Qatar', 'Alemania'],
      correct: 1,
    },
    {
      question: '¿En qué deporte se utiliza una red pero no raquetas?',
      options: ['Tenis', 'Bádminton', 'Voleibol', 'Ping pong'],
      correct: 2,
    },
    {
      question: '¿Cuál es la puntuación máxima en bolos?',
      options: ['200', '250', '300', '350'],
      correct: 2,
    },
    {
      question: '¿En qué deporte destacó Wayne Gretzky?',
      options: ['Hockey sobre hielo', 'Fútbol', 'Baloncesto', 'Béisbol'],
      correct: 0,
    },
    {
      question: '¿Cuántos holes tiene un campo de golf estándar?',
      options: ['16', '17', '18', '19'],
      correct: 2,
    },
    {
      question: '¿Qué equipo de la NBA tiene más campeonatos?',
      options: ['Lakers', 'Celtics', 'Bulls', 'Warriors'],
      correct: 1,
    },
    {
      question: '¿En qué año se fundó la FIFA?',
      options: ['1902', '1904', '1906', '1908'],
      correct: 1,
    },
    {
      question: '¿Cuál es el estadio de fútbol más grande del mundo?',
      options: ['Camp Nou', 'Maracaná', 'Rungrado 1st of May Stadium', 'Wembley'],
      correct: 2,
    },
    {
      question: '¿En qué deporte se utiliza un shuttlecock?',
      options: ['Tenis', 'Bádminton', 'Squash', 'Ping pong'],
      correct: 1,
    },
    {
      question: '¿Cuántos minutos dura un partido de fútbol?',
      options: ['80', '85', '90', '95'],
      correct: 2,
    },
    {
      question: '¿Qué país ha ganado más medallas olímpicas en total?',
      options: ['Rusia', 'China', 'Estados Unidos', 'Alemania'],
      correct: 2,
    },
    {
      question: '¿En qué deporte destacó Pelé?',
      options: ['Baloncesto', 'Fútbol', 'Tenis', 'Atletismo'],
      correct: 1,
    },
    {
      question: '¿Cuál es la carrera de Fórmula 1 más prestigiosa?',
      options: ['Gran Premio de España', 'Gran Premio de Mónaco', 'Gran Premio de Italia', 'Gran Premio de Brasil'],
      correct: 1,
    },
    {
      question: '¿En qué año se celebraron los primeros Juegos Olímpicos de invierno?',
      options: ['1920', '1922', '1924', '1926'],
      correct: 2,
    },
    {
      question: '¿Cuántos sets se juegan en voleibol?',
      options: ['Al mejor de 3', 'Al mejor de 5', 'Al mejor de 7', 'Siempre 5'],
      correct: 1,
    },
    {
      question: '¿Qué jugador tiene más goles en la historia del fútbol?',
      options: ['Pelé', 'Cristiano Ronaldo', 'Lionel Messi', 'Romário'],
      correct: 1,
    },
    {
      question: '¿En qué deporte se utiliza una canasta?',
      options: ['Fútbol', 'Baloncesto', 'Voleibol', 'Balonmano'],
      correct: 1,
    },
    {
      question: '¿Cuál es el torneo de golf más antiguo?',
      options: ['Masters', 'US Open', 'The Open Championship', 'PGA Championship'],
      correct: 2,
    },
  ],
  general: [
    {
      question: '¿Cuál es el libro más vendido de la historia?',
      options: ['El Quijote', 'La Biblia', 'Harry Potter', 'El Principito'],
      correct: 1,
    },
    {
      question: '¿Cuántos minutos tiene un día?',
      options: ['1440', '1340', '1240', '1540'],
      correct: 0,
    },
    {
      question: '¿Cuál es el idioma más hablado del mundo?',
      options: ['Inglés', 'Español', 'Chino mandarín', 'Hindi'],
      correct: 2,
    },
    {
      question: '¿Cuántos continentes hay?',
      options: ['5', '6', '7', '8'],
      correct: 2,
    },
    {
      question: '¿Cuál es la moneda de Japón?',
      options: ['Won', 'Yuan', 'Yen', 'Dong'],
      correct: 2,
    },
    {
      question: '¿Cuál es el animal más grande del mundo?',
      options: ['Elefante africano', 'Ballena azul', 'Jirafa', 'Tiburón ballena'],
      correct: 1,
    },
    {
      question: '¿Cuántos días tiene un año bisiesto?',
      options: ['365', '366', '367', '364'],
      correct: 1,
    },
    {
      question: '¿Cuál es el metal más valioso?',
      options: ['Oro', 'Platino', 'Rodio', 'Paladio'],
      correct: 2,
    },
    {
      question: '¿Cuántos lados tiene un hexágono?',
      options: ['5', '6', '7', '8'],
      correct: 1,
    },
    {
      question: '¿Cuál es la religión más practicada del mundo?',
      options: ['Islam', 'Cristianismo', 'Hinduismo', 'Budismo'],
      correct: 1,
    },
    {
      question: '¿Cuántos segundos tiene una hora?',
      options: ['3600', '3500', '3700', '3800'],
      correct: 0,
    },
    {
      question: '¿Cuál es el color que se obtiene mezclando rojo y azul?',
      options: ['Verde', 'Amarillo', 'Morado', 'Naranja'],
      correct: 2,
    },
    {
      question: '¿Cuántos meses tienen 31 días?',
      options: ['6', '7', '8', '5'],
      correct: 1,
    },
    {
      question: '¿Cuál es el símbolo químico del oro?',
      options: ['Go', 'Au', 'Or', 'Ag'],
      correct: 1,
    },
    {
      question: '¿Cuántos grados tiene un círculo completo?',
      options: ['180', '270', '360', '450'],
      correct: 2,
    },
    {
      question: '¿Cuál es el planeta más cercano al Sol?',
      options: ['Venus', 'Mercurio', 'Tierra', 'Marte'],
      correct: 1,
    },
    {
      question: '¿Cuántas patas tiene una araña?',
      options: ['6', '8', '10', '12'],
      correct: 1,
    },
    {
      question: '¿Cuál es el número primo más pequeño?',
      options: ['1', '2', '3', '5'],
      correct: 1,
    },
    {
      question: '¿Cuántos colores tiene el arcoíris?',
      options: ['5', '6', '7', '8'],
      correct: 2,
    },
    {
      question: '¿Cuál es la capital mundial de la moda?',
      options: ['Nueva York', 'París', 'Milán', 'Londres'],
      correct: 1,
    },
    {
      question: '¿Cuántos huesos tiene un bebé al nacer?',
      options: ['206', '270', '300', '350'],
      correct: 2,
    },
    {
      question: '¿Cuál es el instrumento musical más antiguo?',
      options: ['Flauta', 'Tambor', 'Arpa', 'Voz humana'],
      correct: 3,
    },
    {
      question: '¿Cuántos dientes tiene un adulto?',
      options: ['28', '30', '32', '34'],
      correct: 2,
    },
    {
      question: '¿Cuál es el sentido más desarrollado en los murciélagos?',
      options: ['Vista', 'Oído', 'Olfato', 'Tacto'],
      correct: 1,
    },
    {
      question: '¿Cuántos lados tiene un triángulo?',
      options: ['2', '3', '4', '5'],
      correct: 1,
    },
    {
      question: '¿Cuál es el órgano más grande del cuerpo humano?',
      options: ['Hígado', 'Cerebro', 'Piel', 'Pulmones'],
      correct: 2,
    },
    {
      question: '¿Cuántos minutos tiene una hora?',
      options: ['50', '60', '70', '80'],
      correct: 1,
    },
    {
      question: '¿Cuál es el animal más rápido del mundo?',
      options: ['Guepardo', 'Halcón peregrino', 'Antílope', 'Caballo'],
      correct: 1,
    },
    {
      question: '¿Cuántas semanas tiene un año?',
      options: ['50', '51', '52', '53'],
      correct: 2,
    },
    {
      question: '¿Cuál es el gas más abundante en la atmósfera?',
      options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Argón'],
      correct: 1,
    },
    {
      question: '¿Cuántos centímetros tiene un metro?',
      options: ['10', '100', '1000', '10000'],
      correct: 1,
    },
    {
      question: '¿Cuál es el mamífero que pone huevos?',
      options: ['Ornitorrinco', 'Murciélago', 'Ballena', 'Delfín'],
      correct: 0,
    },
    {
      question: '¿Cuántos años tiene un siglo?',
      options: ['50', '100', '150', '200'],
      correct: 1,
    },
    {
      question: '¿Cuál es el metal más ligero?',
      options: ['Aluminio', 'Litio', 'Magnesio', 'Titanio'],
      correct: 1,
    },
    {
      question: '¿Cuántos ojos tiene una abeja?',
      options: ['2', '3', '4', '5'],
      correct: 3,
    },
    {
      question: '¿Cuál es la unidad de medida de la temperatura?',
      options: ['Metro', 'Kilogramo', 'Grado', 'Litro'],
      correct: 2,
    },
    {
      question: '¿Cuántos dedos tiene una mano normal?',
      options: ['4', '5', '6', '10'],
      correct: 1,
    },
    {
      question: '¿Cuál es el ave que no puede volar?',
      options: ['Águila', 'Pingüino', 'Paloma', 'Canario'],
      correct: 1,
    },
    {
      question: '¿Cuántas horas tiene un día?',
      options: ['20', '22', '24', '26'],
      correct: 2,
    },
    {
      question: '¿Cuál es el único mamífero capaz de volar?',
      options: ['Ardilla voladora', 'Murciélago', 'Pez volador', 'Colibrí'],
      correct: 1,
    },
    {
      question: '¿Cuántos milímetros tiene un centímetro?',
      options: ['5', '10', '15', '20'],
      correct: 1,
    },
    {
      question: '¿Cuál es el color primario que falta: rojo, azul y...?',
      options: ['Verde', 'Amarillo', 'Morado', 'Naranja'],
      correct: 1,
    },
    {
      question: '¿Cuántos estómagos tiene una vaca?',
      options: ['1', '2', '3', '4'],
      correct: 3,
    },
    {
      question: '¿Cuál es el único continente sin desiertos?',
      options: ['Asia', 'Europa', 'Oceanía', 'Antártida'],
      correct: 1,
    },
    {
      question: '¿Cuántos gramos tiene un kilogramo?',
      options: ['100', '500', '1000', '1500'],
      correct: 2,
    },
    {
      question: '¿Cuál es el animal que nunca duerme?',
      options: ['Delfín', 'Tiburón', 'Hormiga', 'Ninguno existe'],
      correct: 3,
    },
    {
      question: '¿Cuántos planetas hay en el sistema solar?',
      options: ['7', '8', '9', '10'],
      correct: 1,
    },
    {
      question: '¿Cuál es la profesión de alguien que estudia los insectos?',
      options: ['Biólogo', 'Entomólogo', 'Zoólogo', 'Botánico'],
      correct: 1,
    },
    {
      question: '¿Cuántos litros tiene un metro cúbico?',
      options: ['100', '500', '1000', '1500'],
      correct: 2,
    },
    {
      question: '¿Cuál es el único metal que es líquido a temperatura ambiente?',
      options: ['Plomo', 'Mercurio', 'Estaño', 'Zinc'],
      correct: 1,
    },
    {
      question: '¿Cuántos corazones tiene un pulpo?',
      options: ['1', '2', '3', '4'],
      correct: 2,
    },
  ],
  arte: [
    {
      question: '¿Quién pintó "La Mona Lisa"?',
      options: ['Van Gogh', 'Picasso', 'Leonardo da Vinci', 'Monet'],
      correct: 2,
    },
    {
      question: '¿En qué museo se encuentra "La Noche Estrellada"?',
      options: ['Louvre', 'MoMA', 'Prado', 'Uffizi'],
      correct: 1,
    },
    {
      question: '¿Cuál es el movimiento artístico de Pablo Picasso?',
      options: ['Impresionismo', 'Cubismo', 'Surrealismo', 'Expresionismo'],
      correct: 1,
    },
  ],
  musica: [
    {
      question: '¿Cuántas cuerdas tiene un violín?',
      options: ['3', '4', '5', '6'],
      correct: 1,
    },
    {
      question: '¿Quién compuso "Las Cuatro Estaciones"?',
      options: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'],
      correct: 2,
    },
    {
      question: '¿Quién es conocido como el "Rey del Reggaeton"?',
      options: ['Daddy Yankee', 'Don Omar', 'Wisin & Yandel', 'Tego Calderón'],
      correct: 0,
    },
    {
      question: '¿De qué país es originario Bad Bunny?',
      options: ['Colombia', 'Puerto Rico', 'República Dominicana', 'México'],
      correct: 1,
    },
    {
      question: '¿Cuál es el nombre real de J Balvin?',
      options: ['José Álvaro Osorio Balvín', 'Juan Luis Londoño', 'Benito Antonio Martínez', 'Ramón Luis Ayala'],
      correct: 0,
    },
    {
      question: '¿Qué canción de Luis Fonsi ft. Daddy Yankee fue un éxito mundial en 2017?',
      options: ['Gasolina', 'Despacito', 'Con Altura', 'Dákiti'],
      correct: 1,
    },
    {
      question: '¿Cuál es el nombre artístico de Benito Antonio Martínez Ocasio?',
      options: ['Ozuna', 'Bad Bunny', 'Anuel AA', 'Farruko'],
      correct: 1,
    },
    {
      question: '¿De qué país es Karol G?',
      options: ['Venezuela', 'Colombia', 'Perú', 'México'],
      correct: 1,
    },
    {
      question: '¿Quién canta "Tusa" junto a Karol G?',
      options: ['Nicki Minaj', 'Cardi B', 'Becky G', 'Anitta'],
      correct: 0,
    },
    {
      question: '¿Cuál es el nombre real de Ozuna?',
      options: ['Juan Carlos Ozuna Rosado', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Ramón Luis Ayala'],
      correct: 0,
    },
    {
      question: '¿Qué artista puertorriqueño es conocido por "Baila Baila Baila"?',
      options: ['Ozuna', 'Bad Bunny', 'Daddy Yankee', 'Don Omar'],
      correct: 0,
    },
    {
      question: '¿De qué país es Maluma?',
      options: ['Colombia', 'Venezuela', 'Panamá', 'Costa Rica'],
      correct: 0,
    },
    {
      question: '¿Cuál es el nombre real de Anuel AA?',
      options: ['Emmanuel Gazmey Santiago', 'Carlos Efrén Reyes', 'Juan Carlos Ozuna', 'José Álvaro Osorio'],
      correct: 0,
    },
    {
      question: '¿Qué canción de Rosalía y J Balvin fue un hit en 2019?',
      options: ['Con Altura', 'Yo x Ti, Tu x Mi', 'La Canción', 'TKN'],
      correct: 0,
    },
    {
      question: '¿Cuál es el álbum más exitoso de Bad Bunny hasta 2023?',
      options: ['X 100PRE', 'YHLQMDLG', 'El Último Tour Del Mundo', 'Un Verano Sin Ti'],
      correct: 3,
    },
    {
      question: '¿De qué país es Nicky Jam?',
      options: ['Puerto Rico', 'Estados Unidos', 'Colombia', 'República Dominicana'],
      correct: 1,
    },
    {
      question: '¿Quién canta "Hawái" que fue un gran éxito en 2020?',
      options: ['Bad Bunny', 'Maluma', 'J Balvin', 'Ozuna'],
      correct: 1,
    },
    {
      question: '¿Cuál es el nombre real de Farruko?',
      options: ['Carlos Efrén Reyes Rosado', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna', 'Ramón Luis Ayala'],
      correct: 0,
    },
    {
      question: '¿Qué canción de Daddy Yankee es considerada un clásico del reggaeton?',
      options: ['Gasolina', 'Limbo', 'Shaky Shaky', 'Con Calma'],
      correct: 0,
    },
    {
      question: '¿De qué país es Becky G?',
      options: ['México', 'Estados Unidos', 'Puerto Rico', 'Colombia'],
      correct: 1,
    },
    {
      question: '¿Quién es conocido como "El Conejo Malo"?',
      options: ['J Balvin', 'Bad Bunny', 'Ozuna', 'Anuel AA'],
      correct: 1,
    },
    {
      question: '¿Cuál fue el primer gran hit de Ozuna?',
      options: ['La Modelo', 'Si No Te Quiere', 'Dile Que Tu Me Quieres', 'Te Vas'],
      correct: 1,
    },
    {
      question: '¿De qué país es Myke Towers?',
      options: ['Puerto Rico', 'República Dominicana', 'Colombia', 'Venezuela'],
      correct: 0,
    },
    {
      question: '¿Quién canta "Safaera" junto a Bad Bunny?',
      options: ['Jowell & Randy', 'Ñengo Flow', 'Jowell & Randy y Ñengo Flow', 'Daddy Yankee'],
      correct: 2,
    },
    {
      question: '¿Cuál es el nombre real de Sech?',
      options: ['Carlos Isaías Morales Williams', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna', 'José Álvaro Osorio'],
      correct: 0,
    },
    {
      question: '¿De qué país es Sech?',
      options: ['Colombia', 'Panamá', 'Costa Rica', 'Venezuela'],
      correct: 1,
    },
    {
      question: '¿Qué canción de Rauw Alejandro fue un hit en 2021?',
      options: ['Todo De Ti', 'Tattoo', 'Fantasías', 'Enchule'],
      correct: 0,
    },
    {
      question: '¿De qué país es Rauw Alejandro?',
      options: ['Puerto Rico', 'República Dominicana', 'Colombia', 'Venezuela'],
      correct: 0,
    },
    {
      question: '¿Quién es conocido como "El Alfa"?',
      options: ['Emanuel Herrera Batista', 'Carlos Efrén Reyes', 'Juan Carlos Ozuna', 'Emmanuel Gazmey Santiago'],
      correct: 0,
    },
    {
      question: '¿De qué país es El Alfa?',
      options: ['Puerto Rico', 'República Dominicana', 'Colombia', 'Venezuela'],
      correct: 1,
    },
    {
      question: '¿Cuál es el nombre real de Jhay Cortez?',
      options: ['Jesús Manuel Nieves Cortez', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna'],
      correct: 0,
    },
    {
      question: '¿Qué canción de Karol G y Nicki Minaj fue un éxito mundial?',
      options: ['Tusa', 'Bichota', 'Mamiii', 'Provenza'],
      correct: 0,
    },
    {
      question: '¿De qué país es Anitta?',
      options: ['Colombia', 'Brasil', 'Argentina', 'Venezuela'],
      correct: 1,
    },
    {
      question: '¿Quién canta "Envolver" que fue viral en TikTok?',
      options: ['Karol G', 'Anitta', 'Becky G', 'Natti Natasha'],
      correct: 1,
    },
    {
      question: '¿Cuál es el nombre real de Arcángel?',
      options: ['Austin Agustín Santos', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna'],
      correct: 0,
    },
    {
      question: '¿De qué país es Arcángel?',
      options: ['Puerto Rico', 'Estados Unidos', 'República Dominicana', 'Colombia'],
      correct: 1,
    },
    {
      question: '¿Qué canción de Feid fue un gran éxito en 2022?',
      options: ['Porfa', 'Feliz Cumpleaños Ferxxo', 'Normal', 'Pepas'],
      correct: 0,
    },
    {
      question: '¿De qué país es Feid?',
      options: ['Colombia', 'Venezuela', 'Perú', 'Ecuador'],
      correct: 0,
    },
    {
      question: '¿Quién es conocido como "Ferxxo"?',
      options: ['Feid', 'Maluma', 'J Balvin', 'Ryan Castro'],
      correct: 0,
    },
    {
      question: '¿Cuál es el nombre real de Peso Pluma?',
      options: ['Hassan Emilio Kabande Laija', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna'],
      correct: 0,
    },
    {
      question: '¿De qué país es Peso Pluma?',
      options: ['Colombia', 'México', 'Puerto Rico', 'Venezuela'],
      correct: 1,
    },
    {
      question: '¿Qué género musical fusiona Peso Pluma con el reggaeton?',
      options: ['Salsa', 'Corridos Tumbados', 'Bachata', 'Merengue'],
      correct: 1,
    },
    {
      question: '¿Quién canta "La Botella" junto a Christan Nodal?',
      options: ['Gera MX', 'Peso Pluma', 'Natanael Cano', 'Junior H'],
      correct: 1,
    },
    {
      question: '¿Cuál es el nombre real de Ryan Castro?',
      options: ['Bryan Stiven Castro Herrera', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna'],
      correct: 0,
    },
    {
      question: '¿De qué país es Ryan Castro?',
      options: ['Colombia', 'Venezuela', 'Perú', 'Ecuador'],
      correct: 0,
    },
    {
      question: '¿Qué canción de Ryan Castro fue viral en 2022?',
      options: ['Mujeriego', 'Jordan', 'Monastery', 'Ghetto Star'],
      correct: 0,
    },
    {
      question: '¿Cuál es el nombre real de Quevedo?',
      options: ['José Manuel Carbajal Zaldivar', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna'],
      correct: 0,
    },
    {
      question: '¿De qué país es Quevedo?',
      options: ['Colombia', 'España', 'Argentina', 'México'],
      correct: 1,
    },
    {
      question: '¿Qué canción de Quevedo y Bizarrap fue un éxito mundial?',
      options: ['Bzrp Music Sessions #52', 'Cayó la Noche', 'Quédate', 'Columbia'],
      correct: 0,
    },
    {
      question: '¿Cuál es el nombre real de Bizarrap?',
      options: ['Gonzalo Julián Conde', 'Carlos Efrén Reyes', 'Emmanuel Gazmey Santiago', 'Juan Carlos Ozuna'],
      correct: 0,
    },
    {
      question: '¿De qué país es Bizarrap?',
      options: ['Colombia', 'Argentina', 'Chile', 'Uruguay'],
      correct: 1,
    },
  ],
  cine: [
    {
      question: '¿Qué película ganó el Oscar a Mejor Película en 2020?',
      options: ['Parasite', '1917', 'Joker', 'Once Upon a Time in Hollywood'],
      correct: 0,
    },
    {
      question: '¿Quién dirigió "Pulp Fiction"?',
      options: ['Martin Scorsese', 'Quentin Tarantino', 'Steven Spielberg', 'Christopher Nolan'],
      correct: 1,
    },
    {
      question: '¿En qué año se estrenó "Titanic"?',
      options: ['1995', '1996', '1997', '1998'],
      correct: 2,
    },
    {
      question: '¿Quién interpretó a Jack Sparrow en "Piratas del Caribe"?',
      options: ['Johnny Depp', 'Orlando Bloom', 'Keira Knightley', 'Geoffrey Rush'],
      correct: 0,
    },
    {
      question: '¿Cuál es la película más taquillera de todos los tiempos?',
      options: ['Titanic', 'Avatar', 'Avengers: Endgame', 'Star Wars: El despertar de la fuerza'],
      correct: 2,
    },
    {
      question: '¿Quién dirigió "El Padrino"?',
      options: ['Martin Scorsese', 'Francis Ford Coppola', 'Steven Spielberg', 'George Lucas'],
      correct: 1,
    },
    {
      question: '¿En qué película aparece la frase "Que la fuerza te acompañe"?',
      options: ['Star Trek', 'Star Wars', 'Guardianes de la Galaxia', 'Blade Runner'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Forrest Gump?',
      options: ['Tom Hanks', 'Brad Pitt', 'Leonardo DiCaprio', 'Matt Damon'],
      correct: 0,
    },
    {
      question: '¿Cuál es la primera película de Marvel Cinematic Universe?',
      options: ['Thor', 'Iron Man', 'Hulk', 'Capitán América'],
      correct: 1,
    },
    {
      question: '¿Quién dirigió "Inception"?',
      options: ['Christopher Nolan', 'Denis Villeneuve', 'Ridley Scott', 'David Fincher'],
      correct: 0,
    },
    {
      question: '¿En qué año se estrenó "Jurassic Park"?',
      options: ['1992', '1993', '1994', '1995'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Neo en "The Matrix"?',
      options: ['Keanu Reeves', 'Will Smith', 'Brad Pitt', 'Tom Cruise'],
      correct: 0,
    },
    {
      question: '¿Cuál es la película animada más taquillera de Disney?',
      options: ['El Rey León', 'Frozen', 'Frozen II', 'Moana'],
      correct: 2,
    },
    {
      question: '¿Quién dirigió "Jaws" (Tiburón)?',
      options: ['George Lucas', 'Steven Spielberg', 'Martin Scorsese', 'Francis Ford Coppola'],
      correct: 1,
    },
    {
      question: '¿En qué película aparece el personaje Hannibal Lecter?',
      options: ['Seven', 'El Silencio de los Corderos', 'Zodiac', 'Shutter Island'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Wolverine en las películas de X-Men?',
      options: ['Hugh Jackman', 'Ryan Reynolds', 'Patrick Stewart', 'Ian McKellen'],
      correct: 0,
    },
    {
      question: '¿Cuál es la primera película de la saga "Fast & Furious"?',
      options: ['2 Fast 2 Furious', 'The Fast and the Furious', 'Fast & Furious', 'Fast Five'],
      correct: 1,
    },
    {
      question: '¿Quién dirigió "Goodfellas"?',
      options: ['Francis Ford Coppola', 'Martin Scorsese', 'Brian De Palma', 'Michael Mann'],
      correct: 1,
    },
    {
      question: '¿En qué año se estrenó "Back to the Future"?',
      options: ['1984', '1985', '1986', '1987'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Hermione Granger en Harry Potter?',
      options: ['Emma Watson', 'Emma Stone', 'Saoirse Ronan', 'Anya Taylor-Joy'],
      correct: 0,
    },
    {
      question: '¿Cuál es la película más larga jamás hecha?',
      options: ['Gone with the Wind', 'Lawrence of Arabia', 'Logistics', 'The Cure for Insomnia'],
      correct: 2,
    },
    {
      question: '¿Quién dirigió "Casablanca"?',
      options: ['Michael Curtiz', 'Billy Wilder', 'John Huston', 'Howard Hawks'],
      correct: 0,
    },
    {
      question: '¿En qué película aparece la frase "Frankly, my dear, I don\'t give a damn"?',
      options: ['Casablanca', 'Gone with the Wind', 'Citizen Kane', 'The Maltese Falcon'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Rocky Balboa?',
      options: ['Sylvester Stallone', 'Arnold Schwarzenegger', 'Bruce Willis', 'Jean-Claude Van Damme'],
      correct: 0,
    },
    {
      question: '¿Cuál es la primera película de Pixar?',
      options: ['A Bug\'s Life', 'Toy Story', 'Monsters, Inc.', 'Finding Nemo'],
      correct: 1,
    },
    {
      question: '¿Quién dirigió "Alien"?',
      options: ['James Cameron', 'Ridley Scott', 'David Fincher', 'Jean-Pierre Jeunet'],
      correct: 1,
    },
    {
      question: '¿En qué año se estrenó "The Shawshank Redemption"?',
      options: ['1993', '1994', '1995', '1996'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Vito Corleone en "El Padrino"?',
      options: ['Al Pacino', 'Robert De Niro', 'Marlon Brando', 'James Caan'],
      correct: 2,
    },
    {
      question: '¿Cuál es la película de terror más taquillera?',
      options: ['The Exorcist', 'It', 'Halloween', 'A Quiet Place'],
      correct: 1,
    },
    {
      question: '¿Quién dirigió "2001: A Space Odyssey"?',
      options: ['Stanley Kubrick', 'Ridley Scott', 'George Lucas', 'Steven Spielberg'],
      correct: 0,
    },
    {
      question: '¿En qué película aparece el personaje Ellen Ripley?',
      options: ['Blade Runner', 'Alien', 'Terminator', 'Predator'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Michael Myers en "Halloween" (1978)?',
      options: ['Tony Moran', 'Nick Castle', 'Will Sandin', 'Tommy Lee Wallace'],
      correct: 1,
    },
    {
      question: '¿Cuál es la primera película de James Bond?',
      options: ['Goldfinger', 'From Russia with Love', 'Dr. No', 'Thunderball'],
      correct: 2,
    },
    {
      question: '¿Quién dirigió "Vertigo"?',
      options: ['Alfred Hitchcock', 'Billy Wilder', 'John Ford', 'Howard Hawks'],
      correct: 0,
    },
    {
      question: '¿En qué año se estrenó "E.T. the Extra-Terrestrial"?',
      options: ['1981', '1982', '1983', '1984'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Travis Bickle en "Taxi Driver"?',
      options: ['Robert De Niro', 'Al Pacino', 'Dustin Hoffman', 'Jack Nicholson'],
      correct: 0,
    },
    {
      question: '¿Cuál es la película más cara jamás hecha?',
      options: ['Avengers: Endgame', 'Pirates of the Caribbean: On Stranger Tides', 'Avengers: Age of Ultron', 'Justice League'],
      correct: 1,
    },
    {
      question: '¿Quién dirigió "Apocalypse Now"?',
      options: ['Martin Scorsese', 'Francis Ford Coppola', 'Michael Cimino', 'William Friedkin'],
      correct: 1,
    },
    {
      question: '¿En qué película aparece la frase "Here\'s looking at you, kid"?',
      options: ['Gone with the Wind', 'Casablanca', 'The Maltese Falcon', 'To Have and Have Not'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Sarah Connor en "Terminator"?',
      options: ['Sigourney Weaver', 'Linda Hamilton', 'Jamie Lee Curtis', 'Meryl Streep'],
      correct: 1,
    },
    {
      question: '¿Cuál es la primera película de la saga "Indiana Jones"?',
      options: ['Temple of Doom', 'Raiders of the Lost Ark', 'Last Crusade', 'Kingdom of the Crystal Skull'],
      correct: 1,
    },
    {
      question: '¿Quién dirigió "The Dark Knight"?',
      options: ['Tim Burton', 'Christopher Nolan', 'Zack Snyder', 'Matt Reeves'],
      correct: 1,
    },
    {
      question: '¿En qué año se estrenó "Star Wars: Episode IV - A New Hope"?',
      options: ['1976', '1977', '1978', '1979'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Scarlett O\'Hara en "Gone with the Wind"?',
      options: ['Vivien Leigh', 'Katharine Hepburn', 'Bette Davis', 'Joan Crawford'],
      correct: 0,
    },
    {
      question: '¿Cuál es la película animada más premiada en los Oscar?',
      options: ['Beauty and the Beast', 'The Lion King', 'Spirited Away', 'Coco'],
      correct: 2,
    },
    {
      question: '¿Quién dirigió "Citizen Kane"?',
      options: ['John Ford', 'Orson Welles', 'Billy Wilder', 'Frank Capra'],
      correct: 1,
    },
    {
      question: '¿En qué película aparece el personaje Darth Vader?',
      options: ['Star Trek', 'Star Wars', 'Battlestar Galactica', 'Dune'],
      correct: 1,
    },
    {
      question: '¿Quién interpretó a Clarice Starling en "El Silencio de los Corderos"?',
      options: ['Jodie Foster', 'Glenn Close', 'Meryl Streep', 'Jessica Lange'],
      correct: 0,
    },
    {
      question: '¿Cuál es la primera película en ganar el Oscar a Mejor Película?',
      options: ['Wings', 'Sunrise', 'The Jazz Singer', 'All Quiet on the Western Front'],
      correct: 0,
    },
    {
      question: '¿Quién dirigió "Schindler\'s List"?',
      options: ['Martin Scorsese', 'Steven Spielberg', 'Francis Ford Coppola', 'George Lucas'],
      correct: 1,
    },
    {
      question: '¿En qué año se estrenó "The Godfather"?',
      options: ['1971', '1972', '1973', '1974'],
      correct: 1,
    },
  ],
  historia: [
    {
      question: '¿En qué año comenzó la Segunda Guerra Mundial?',
      options: ['1938', '1939', '1940', '1941'],
      correct: 1,
    },
    {
      question: '¿Quién fue el primer emperador romano?',
      options: ['Julio César', 'Augusto', 'Nerón', 'Trajano'],
      correct: 1,
    },
    {
      question: '¿Quién fue el primer presidente de Estados Unidos?',
      options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'Benjamin Franklin'],
      correct: 2,
    },
    {
      question: '¿En qué año cayó el Muro de Berlín?',
      options: ['1987', '1988', '1989', '1990'],
      correct: 2,
    },
    {
      question: '¿Quién fue el líder de la Revolución Rusa?',
      options: ['Stalin', 'Lenin', 'Trotsky', 'Kerensky'],
      correct: 1,
    },
    {
      question: '¿En qué año llegó Cristóbal Colón a América?',
      options: ['1490', '1491', '1492', '1493'],
      correct: 2,
    },
    {
      question: '¿Cuál fue la primera civilización en desarrollar la escritura?',
      options: ['Egipcia', 'Sumeria', 'China', 'Maya'],
      correct: 1,
    },
    {
      question: '¿En qué año terminó la Primera Guerra Mundial?',
      options: ['1917', '1918', '1919', '1920'],
      correct: 1,
    },
    {
      question: '¿Quién fue el emperador romano que legalizó el cristianismo?',
      options: ['Nerón', 'Constantino', 'Augusto', 'Trajano'],
      correct: 1,
    },
    {
      question: '¿En qué año se independizó México?',
      options: ['1810', '1821', '1824', '1836'],
      correct: 1,
    },
    {
      question: '¿Quién escribió "El Manifiesto Comunista"?',
      options: ['Lenin', 'Marx y Engels', 'Stalin', 'Mao'],
      correct: 1,
    },
    {
      question: '¿En qué batalla fue derrotado Napoleón definitivamente?',
      options: ['Austerlitz', 'Waterloo', 'Leipzig', 'Borodino'],
      correct: 1,
    },
    {
      question: '¿Cuál fue la capital del Imperio Bizantino?',
      options: ['Roma', 'Atenas', 'Constantinopla', 'Alejandría'],
      correct: 2,
    },
    {
      question: '¿En qué año se fundó la ONU?',
      options: ['1944', '1945', '1946', '1947'],
      correct: 1,
    },
    {
      question: '¿Quién fue el faraón que construyó la Gran Pirámide?',
      options: ['Keops', 'Kefrén', 'Micerinos', 'Tutankamón'],
      correct: 0,
    },
    {
      question: '¿En qué siglo vivió Leonardo da Vinci?',
      options: ['XIV', 'XV', 'XVI', 'XVII'],
      correct: 2,
    },
    {
      question: '¿Cuál fue la primera universidad del mundo?',
      options: ['Oxford', 'Sorbona', 'Bolonia', 'Al-Azhar'],
      correct: 3,
    },
    {
      question: '¿En qué año se abolió la esclavitud en Estados Unidos?',
      options: ['1863', '1865', '1867', '1870'],
      correct: 1,
    },
    {
      question: '¿Quién fue el primer hombre en pisar la Luna?',
      options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
      correct: 1,
    },
    {
      question: '¿En qué año se produjo la Revolución Francesa?',
      options: ['1789', '1790', '1791', '1792'],
      correct: 0,
    },
    {
      question: '¿Cuál fue el imperio más extenso de la historia?',
      options: ['Romano', 'Británico', 'Mongol', 'Español'],
      correct: 2,
    },
    {
      question: '¿En qué año se hundió el Titanic?',
      options: ['1910', '1911', '1912', '1913'],
      correct: 2,
    },
    {
      question: '¿Quién fue el último emperador de Roma?',
      options: ['Rómulo Augústulo', 'Constantino XI', 'Justiniano', 'Teodosio'],
      correct: 0,
    },
    {
      question: '¿En qué año se descubrió América?',
      options: ['1490', '1491', '1492', '1493'],
      correct: 2,
    },
    {
      question: '¿Cuál fue la causa principal de la Primera Guerra Mundial?',
      options: ['Imperialismo', 'Asesinato del Archiduque Francisco Fernando', 'Crisis económica', 'Revolución Rusa'],
      correct: 1,
    },
    {
      question: '¿En qué año se firmó la Declaración de Independencia de Estados Unidos?',
      options: ['1774', '1775', '1776', '1777'],
      correct: 2,
    },
    {
      question: '¿Quién fue el líder de la Alemania Nazi?',
      options: ['Heinrich Himmler', 'Adolf Hitler', 'Joseph Goebbels', 'Hermann Göring'],
      correct: 1,
    },
    {
      question: '¿En qué año se produjo la caída del Imperio Romano de Occidente?',
      options: ['476', '480', '486', '490'],
      correct: 0,
    },
    {
      question: '¿Cuál fue la primera capital de Brasil?',
      options: ['Río de Janeiro', 'Salvador', 'São Paulo', 'Brasilia'],
      correct: 1,
    },
    {
      question: '¿En qué año se produjo la Revolución Industrial?',
      options: ['Siglo XVII', 'Siglo XVIII', 'Siglo XIX', 'Siglo XX'],
      correct: 1,
    },
    {
      question: '¿Quién fue el conquistador del Imperio Inca?',
      options: ['Hernán Cortés', 'Francisco Pizarro', 'Diego de Almagro', 'Vasco Núñez de Balboa'],
      correct: 1,
    },
    {
      question: '¿En qué año se creó el Estado de Israel?',
      options: ['1946', '1947', '1948', '1949'],
      correct: 2,
    },
    {
      question: '¿Cuál fue la dinastía china más larga?',
      options: ['Ming', 'Qing', 'Zhou', 'Han'],
      correct: 2,
    },
    {
      question: '¿En qué año se produjo la Crisis de los Misiles en Cuba?',
      options: ['1960', '1961', '1962', '1963'],
      correct: 2,
    },
    {
      question: '¿Quién fue el primer emperador de China?',
      options: ['Qin Shi Huang', 'Wu Zetian', 'Kangxi', 'Yongzheng'],
      correct: 0,
    },
    {
      question: '¿En qué año se produjo la Revolución de Octubre en Rusia?',
      options: ['1916', '1917', '1918', '1919'],
      correct: 1,
    },
    {
      question: '¿Cuál fue la primera bomba atómica lanzada?',
      options: ['Fat Man', 'Little Boy', 'Trinity', 'Gadget'],
      correct: 1,
    },
    {
      question: '¿En qué año se firmó el Tratado de Versalles?',
      options: ['1918', '1919', '1920', '1921'],
      correct: 1,
    },
    {
      question: '¿Quién fue el líder de la independencia de India?',
      options: ['Nehru', 'Gandhi', 'Jinnah', 'Patel'],
      correct: 1,
    },
    {
      question: '¿En qué año se construyó el Muro de Berlín?',
      options: ['1959', '1960', '1961', '1962'],
      correct: 2,
    },
    {
      question: '¿Cuál fue la civilización precolombina más avanzada?',
      options: ['Azteca', 'Maya', 'Inca', 'Olmeca'],
      correct: 1,
    },
    {
      question: '¿En qué año se produjo la Guerra de los Cien Años?',
      options: ['1337-1453', '1340-1460', '1350-1470', '1360-1480'],
      correct: 0,
    },
    {
      question: '¿Quién fue el primer presidente de la República de Weimar?',
      options: ['Friedrich Ebert', 'Paul von Hindenburg', 'Gustav Stresemann', 'Heinrich Brüning'],
      correct: 0,
    },
    {
      question: '¿En qué año se produjo la Batalla de Hastings?',
      options: ['1064', '1065', '1066', '1067'],
      correct: 2,
    },
    {
      question: '¿Cuál fue el primer país en abolir la esclavitud?',
      options: ['Francia', 'Inglaterra', 'Haití', 'Dinamarca'],
      correct: 2,
    },
    {
      question: '¿En qué año se produjo la Peste Negra en Europa?',
      options: ['1347-1351', '1350-1354', '1345-1349', '1348-1352'],
      correct: 0,
    },
    {
      question: '¿Quién fue el fundador del Imperio Mongol?',
      options: ['Kublai Khan', 'Genghis Khan', 'Ögedei Khan', 'Möngke Khan'],
      correct: 1,
    },
    {
      question: '¿En qué año se produjo la Revolución Mexicana?',
      options: ['1910', '1911', '1912', '1913'],
      correct: 0,
    },
    {
      question: '¿Cuál fue la primera guerra mundial en la que participó Estados Unidos?',
      options: ['Guerra Civil', 'Primera Guerra Mundial', 'Guerra Hispano-Americana', 'Segunda Guerra Mundial'],
      correct: 2,
    },
    {
      question: '¿En qué año se fundó Roma?',
      options: ['753 a.C.', '750 a.C.', '755 a.C.', '760 a.C.'],
      correct: 0,
    },
    {
      question: '¿Quién fue el último zar de Rusia?',
      options: ['Alejandro III', 'Nicolás II', 'Alejandro II', 'Pablo I'],
      correct: 1,
    },
  ],
};