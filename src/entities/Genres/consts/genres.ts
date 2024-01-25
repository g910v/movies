import comedy from '../assets/comedy.jpg';
import horror from '../assets/horror.jpg';
import fant from '../assets/fantastika.jpg';
import trillers from '../assets/triller.jpeg';
import action from '../assets/action.jpg';
import mystery from '../assets/detective.jpg';
import romance from '../assets/romance.jpg';
import drama from '../assets/drama.png';
import adv from '../assets/adv.jpg';

const genres = [
  {
    name: 'Комедии',
    short: 'comedy',
    img: comedy,
    id: 13,
  },
  {
    name: 'Ужасы',
    short: 'horror',
    img: horror,
    id: 17,
  },
  {
    name: 'Фантастика',
    short: 'sci-fi',
    img: fant,
    id: 6,
  },
  {
    name: 'Триллеры',
    short: 'thriller',
    img: trillers,
    id: 1,
  },
  {
    name: 'Боевики',
    short: 'action',
    img: action,
    id: 11,
  },
  {
    name: 'Мелодрамы',
    short: 'romance',
    img: romance,
    id: 4,
  },
  {
    name: 'Драма',
    short: 'drama',
    img: drama,
    id: 2,
  },
  {
    name: 'Детективы',
    short: 'mystery',
    img: mystery,
    id: 5,
  },
  {
    name: 'Приключения',
    short: 'adventure',
    img: adv,
    id: 7,
  },
  // {
  //   name: 'Фентези',
  //   short: 'fantasy',
  //   img: trillers,
  // },
  // {
  //   name: 'Документальные',
  //   short: 'documentary',
  //   img: trillers,
  // },
  // {
  //   name: 'Военные',
  //   short: 'war',
  //   img: trillers,
  // },
  // {
  //   name: 'Исторические',
  //   short: 'history',
  //   img: trillers,
  // },
  // {
  //   name: 'Биографии',
  //   short: 'biography',
  //   img: trillers,
  // },
];

export default genres;
