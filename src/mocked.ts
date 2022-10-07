import arabe from "./assets/arabe.svg";
import cafeComLeite from "./assets/CafeComLeite.svg";
import capuccino from "./assets/capuccino.svg";
import chocolateQuente from "./assets/chocolateQuente.svg";
import cubano from "./assets/cubano.svg";
import expressoAmericano from "./assets/expressoAmericano.svg";
import expressoCremoso from "./assets/expressoCremoso.svg";
import expressoGelado from "./assets/expressoGelado.svg";
import expressoTradicional from "./assets/expressoTradicional.svg";
import havaiano from "./assets/havaiano.svg";
import irlandes from "./assets/irlandes.svg";
import latte from "./assets/latte.svg";
import macchiato from "./assets/macchiato.svg";
import mocaccino from "./assets/mocaccino.svg";

export const typesOfCoffeeMock = [
  {
    id: 1,
    type: "Tradicional",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: expressoTradicional,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 2,
    type: "Tradicional",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: expressoAmericano,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 3,
    type: "Tradicional",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: expressoCremoso,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 4,
    type: ["Tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: expressoGelado,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 5,
    type: ["Tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: cafeComLeite,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 6,
    type: ["Tradicional", "com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latte,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 7,
    type: ["Tradicional", "com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: capuccino,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 8,
    type: ["Tradicional", "com leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiato,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 9,
    type: ["Tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mocaccino,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 10,
    type: ["Especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: chocolateQuente,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 11,
    type: ["Especial", "Alcoólico", "Gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cubano,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 12,
    type: "Especial",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: havaiano,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 13,
    type: "Especial",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: arabe,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
  {
    id: 14,
    type: ["Especial", "Alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: irlandes,
    price: 9.9,
    initialQuantity: 40,
    actualQuantity: 40,
  },
];
