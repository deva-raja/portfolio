import stockImg from '../images/stock-card.jpg';
import gotImg from '../images/got-card.jpg';
import doctorImg from '../images/doctor-card.jpg';

const data = [
  {
    img: stockImg,
    title: 'stock app',
    content: 'Stock Market App to look up company stock prices, created using material ui and react-charts',
    site:'https://stock-market-app.pages.dev/',
    git:'https://github.com/deva-raja/stock-market-app'
  },
  {
    img: gotImg,
    title: 'got app',
    content:
      'Game of thrones characters lookup app using custom REST API created using express and mongodb atlas',
    site:'https://game-of-thrones-characters.pages.dev/',
    git:'https://github.com/deva-raja/game-of-thrones-characters'
  },
  {
    img: doctorImg,
    title: 'hospital app',
    content:
      'Hospital App with jwt authentication created using redux, Formik, leaflet and handwoven using sass',
    site:'https://medicity-5b5.pages.dev/',
    git:'https://github.com/deva-raja/medicity-hospital-client'
  },
];

export default data;
