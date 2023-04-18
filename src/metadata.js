import expressoDuplo from './img/expresso/expressoDuplo.png';
import expressoGourmet from './img/expresso/expressoGourmet.jpg';
import expressoItaliano from './img/expresso/expressoItaliano.jpeg';

import frappuccinoDuplo from './img/frappuccino/frappuccinoDuplo.jpg';
import frappuccinoEspecialDaCasa from './img/frappuccino/frappuccinoEspecialDaCasa.png';

import mochaCaramelo from './img/mocha/mochaCaramelo.jpg';
import mochaChantili from './img/mocha/mochaChantili.jpeg';
import mochaChocolateEChantili from './img/mocha/mochaChocolateEChantili.jpeg';
import mochaDuplo from './img/mocha/mochaDuplo.jpeg';
import mochaEspecialDaCasa from './img/mocha/mochaEspecialDaCasa.jpeg';


export function metadataCafe(type) {
const teste = {
  expresso: [{
    image: expressoDuplo,
    description: 'Expresso Duplo',
    preco: '15,99'
  },{
    image: expressoGourmet,
    description: 'Expresso Gourmet',
    preco: '20,99'
  },{
    image: expressoItaliano,
    description: 'Expresso Italiano',
    preco: '25,99'
  }],
  frappuccino: [{
    image: frappuccinoDuplo,
    description: 'Frappuccino Duplo',
    preco: '22,99'
  },{
    image: frappuccinoEspecialDaCasa,
    description: 'Frappuccino Especial da Casa',
    preco: '25,99'
  }],
  mocha: [{
    image: mochaCaramelo,
    description: 'Mocha Caramelo',
    preco: '20,99'
  },{
    image: mochaChantili,
    description: 'Mocha Chantili',
    preco: '20,99'
  },{
    image: mochaChocolateEChantili,
    description: 'Mocha Chocolate com Chantili',
    preco: '20,99'
  },{
    image: mochaDuplo,
    description: 'Mocha Duplo',
    preco: '20,99'
  }, {
    image: mochaCaramelo,
    description: 'mochaDuplo',
    preco: '20,99'
  }, {
    image: mochaEspecialDaCasa,
    description: 'Mocha Especial Da Casa',
    preco: '20,99'
  },]  
}
return teste[type];
}