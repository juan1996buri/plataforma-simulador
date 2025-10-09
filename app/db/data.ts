// export interface Option {
//   id: number;
//   description: string;
//   isValid: boolean;
// }

// export interface Answer {
//   id: number;
//   description: string;
//   option: Option[];
// }

// export const answerList: Answer[] = [
//   {
//     id: 1,
//     description: "¿Cuál es la capital de Francia?",
//     option: [
//       { id: 1, description: "Madrid", isValid: false },
//       { id: 2, description: "París", isValid: true },
//       { id: 3, description: "Berlín", isValid: false },
//       { id: 4, description: "Roma", isValid: false },
//     ],
//   },
//   {
//     id: 2,
//     description: "¿Cuál de los siguientes lenguajes es de programación?",
//     option: [
//       { id: 1, description: "HTML", isValid: false },
//       { id: 2, description: "Python", isValid: true },
//       { id: 3, description: "CSS", isValid: false },
//       { id: 4, description: "Photoshop", isValid: false },
//     ],
//   },
//   {
//     id: 3,
//     description: "¿Qué planeta es conocido como el Planeta Rojo?",
//     option: [
//       { id: 1, description: "Venus", isValid: false },
//       { id: 2, description: "Marte", isValid: true },
//       { id: 3, description: "Júpiter", isValid: false },
//       { id: 4, description: "Mercurio", isValid: false },
//     ],
//   },
//   {
//     id: 4,
//     description: "¿Quién escribió 'Cien años de soledad'?",
//     option: [
//       { id: 1, description: "Mario Vargas Llosa", isValid: false },
//       { id: 2, description: "Gabriel García Márquez", isValid: true },
//       { id: 3, description: "Pablo Neruda", isValid: false },
//       { id: 4, description: "Julio Cortázar", isValid: false },
//     ],
//   },
//   {
//     id: 5,
//     description: "¿Cuál es el resultado de 5 x 6?",
//     option: [
//       { id: 1, description: "30", isValid: true },
//       { id: 2, description: "25", isValid: false },
//       { id: 3, description: "35", isValid: false },
//       { id: 4, description: "40", isValid: false },
//     ],
//   },
//   {
//     id: 6,
//     description: "¿Cuál es el océano más grande del mundo?",
//     option: [
//       { id: 1, description: "Atlántico", isValid: false },
//       { id: 2, description: "Pacífico", isValid: true },
//       { id: 3, description: "Índico", isValid: false },
//       { id: 4, description: "Ártico", isValid: false },
//     ],
//   },
//   {
//     id: 7,
//     description: "¿Cuál es el símbolo químico del oro?",
//     option: [
//       { id: 1, description: "Au", isValid: true },
//       { id: 2, description: "Ag", isValid: false },
//       { id: 3, description: "Fe", isValid: false },
//       { id: 4, description: "Pb", isValid: false },
//     ],
//   },
//   {
//     id: 8,
//     description: "¿En qué año llegó el hombre a la Luna?",
//     option: [
//       { id: 1, description: "1965", isValid: false },
//       { id: 2, description: "1969", isValid: true },
//       { id: 3, description: "1972", isValid: false },
//       { id: 4, description: "1959", isValid: false },
//     ],
//   },
//   {
//     id: 9,
//     description: "¿Cuál es el idioma más hablado del mundo?",
//     option: [
//       { id: 1, description: "Inglés", isValid: false },
//       { id: 2, description: "Chino mandarín", isValid: true },
//       { id: 3, description: "Español", isValid: false },
//       { id: 4, description: "Hindi", isValid: false },
//     ],
//   },
//   {
//     id: 10,
//     description: "¿Cuál es la fórmula química del agua?",
//     option: [
//       { id: 1, description: "H2O", isValid: true },
//       { id: 2, description: "CO2", isValid: false },
//       { id: 3, description: "O2", isValid: false },
//       { id: 4, description: "NaCl", isValid: false },
//     ],
//   },
//   {
//     id: 11,
//     description: "¿Cuál es la capital de Japón?",
//     option: [
//       { id: 1, description: "Seúl", isValid: false },
//       { id: 2, description: "Tokio", isValid: true },
//       { id: 3, description: "Beijing", isValid: false },
//       { id: 4, description: "Bangkok", isValid: false },
//     ],
//   },
//   {
//     id: 12,
//     description: "¿Qué gas respiramos principalmente?",
//     option: [
//       { id: 1, description: "Oxígeno", isValid: true },
//       { id: 2, description: "Nitrógeno", isValid: false },
//       { id: 3, description: "Dióxido de carbono", isValid: false },
//       { id: 4, description: "Helio", isValid: false },
//     ],
//   },
//   {
//     id: 13,
//     description: "¿Cuál es el continente más grande?",
//     option: [
//       { id: 1, description: "África", isValid: false },
//       { id: 2, description: "Asia", isValid: true },
//       { id: 3, description: "Europa", isValid: false },
//       { id: 4, description: "América", isValid: false },
//     ],
//   },
//   {
//     id: 14,
//     description: "¿Quién pintó la Mona Lisa?",
//     option: [
//       { id: 1, description: "Vincent Van Gogh", isValid: false },
//       { id: 2, description: "Leonardo da Vinci", isValid: true },
//       { id: 3, description: "Pablo Picasso", isValid: false },
//       { id: 4, description: "Claude Monet", isValid: false },
//     ],
//   },
//   {
//     id: 15,
//     description: "¿Cuál es la moneda de Estados Unidos?",
//     option: [
//       { id: 1, description: "Euro", isValid: false },
//       { id: 2, description: "Dólar", isValid: true },
//       { id: 3, description: "Yen", isValid: false },
//       { id: 4, description: "Libra", isValid: false },
//     ],
//   },
//   {
//     id: 16,
//     description: "¿Cuál es la velocidad de la luz aprox. en el vacío?",
//     option: [
//       { id: 1, description: "300.000 km/s", isValid: true },
//       { id: 2, description: "150.000 km/s", isValid: false },
//       { id: 3, description: "30.000 km/s", isValid: false },
//       { id: 4, description: "3.000 km/s", isValid: false },
//     ],
//   },
//   {
//     id: 17,
//     description: "¿Qué instrumento mide la temperatura?",
//     option: [
//       { id: 1, description: "Barómetro", isValid: false },
//       { id: 2, description: "Termómetro", isValid: true },
//       { id: 3, description: "Higrómetro", isValid: false },
//       { id: 4, description: "Anemómetro", isValid: false },
//     ],
//   },
//   {
//     id: 18,
//     description: "¿Quién escribió 'Romeo y Julieta'?",
//     option: [
//       { id: 1, description: "William Shakespeare", isValid: true },
//       { id: 2, description: "Miguel de Cervantes", isValid: false },
//       { id: 3, description: "Gabriel García Márquez", isValid: false },
//       { id: 4, description: "J.K. Rowling", isValid: false },
//     ],
//   },
//   {
//     id: 19,
//     description: "¿Qué elemento tiene el símbolo 'O'?",
//     option: [
//       { id: 1, description: "Oxígeno", isValid: true },
//       { id: 2, description: "Oro", isValid: false },
//       { id: 3, description: "Plata", isValid: false },
//       { id: 4, description: "Hidrógeno", isValid: false },
//     ],
//   },
//   {
//     id: 20,
//     description: "¿Cuál es el animal terrestre más rápido?",
//     option: [
//       { id: 1, description: "León", isValid: false },
//       { id: 2, description: "Guepardo", isValid: true },
//       { id: 3, description: "Caballo", isValid: false },
//       { id: 4, description: "Elefante", isValid: false },
//     ],
//   },
//   {
//     id: 21,
//     description: "¿Qué país tiene forma de bota?",
//     option: [
//       { id: 1, description: "Italia", isValid: true },
//       { id: 2, description: "España", isValid: false },
//       { id: 3, description: "Grecia", isValid: false },
//       { id: 4, description: "Portugal", isValid: false },
//     ],
//   },
//   {
//     id: 22,
//     description: "¿Quién descubrió la penicilina?",
//     option: [
//       { id: 1, description: "Alexander Fleming", isValid: true },
//       { id: 2, description: "Marie Curie", isValid: false },
//       { id: 3, description: "Louis Pasteur", isValid: false },
//       { id: 4, description: "Isaac Newton", isValid: false },
//     ],
//   },
//   {
//     id: 23,
//     description: "¿Qué aparato se usa para ver objetos muy pequeños?",
//     option: [
//       { id: 1, description: "Telescopio", isValid: false },
//       { id: 2, description: "Microscopio", isValid: true },
//       { id: 3, description: "Binoculares", isValid: false },
//       { id: 4, description: "Lupa", isValid: false },
//     ],
//   },
//   {
//     id: 24,
//     description: "¿Qué continente tiene más países?",
//     option: [
//       { id: 1, description: "África", isValid: true },
//       { id: 2, description: "Asia", isValid: false },
//       { id: 3, description: "Europa", isValid: false },
//       { id: 4, description: "América", isValid: false },
//     ],
//   },
//   {
//     id: 25,
//     description: "¿Cuál es la capital de México?",
//     option: [
//       { id: 1, description: "Guadalajara", isValid: false },
//       { id: 2, description: "Ciudad de México", isValid: true },
//       { id: 3, description: "Monterrey", isValid: false },
//       { id: 4, description: "Cancún", isValid: false },
//     ],
//   },
//   {
//     id: 26,
//     description: "¿Qué planeta tiene anillos?",
//     option: [
//       { id: 1, description: "Saturno", isValid: true },
//       { id: 2, description: "Marte", isValid: false },
//       { id: 3, description: "Júpiter", isValid: false },
//       { id: 4, description: "Venus", isValid: false },
//     ],
//   },
//   {
//     id: 27,
//     description: "¿Cuál es el metal más ligero?",
//     option: [
//       { id: 1, description: "Hierro", isValid: false },
//       { id: 2, description: "Aluminio", isValid: false },
//       { id: 3, description: "Litio", isValid: true },
//       { id: 4, description: "Cobre", isValid: false },
//     ],
//   },
//   {
//     id: 28,
//     description: "¿Qué país es conocido como la tierra del sol naciente?",
//     option: [
//       { id: 1, description: "China", isValid: false },
//       { id: 2, description: "Japón", isValid: true },
//       { id: 3, description: "Corea del Sur", isValid: false },
//       { id: 4, description: "Tailandia", isValid: false },
//     ],
//   },
//   {
//     id: 29,
//     description: "¿Cuál es la montaña más alta del mundo?",
//     option: [
//       { id: 1, description: "K2", isValid: false },
//       { id: 2, description: "Everest", isValid: true },
//       { id: 3, description: "Kangchenjunga", isValid: false },
//       { id: 4, description: "Lhotse", isValid: false },
//     ],
//   },
//   // {
//   //   id: 30,
//   //   description: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?",
//   //   option: [
//   //     { id: 1, description: "Brasil", isValid: false },
//   //     { id: 2, description: "Francia", isValid: true },
//   //     { id: 3, description: "Alemania", isValid: false },
//   //     { id: 4, description: "Argentina", isValid: false },
//   //   ],
//   // },
// ];
