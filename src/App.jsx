import Card from './components/Card/Card';
import Cards from './components/cards/Cards';

const App = () => {
  return (
    <>
      <h1>Curso de React</h1>
      <Cards>
        <Card
          image='/assets/images/icon-sedans.svg'
          title='SEDANS'
          text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
          color='orange'
          position='first'
        />
        <Card
          image='/assets/images/icon-suvs.svg'
          title='SUBS'
          text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
          color='blue'
        />
        <Card
          image='/assets/images/icon-luxury.svg'
          title='LUXURY'
          text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
          color='green'
          position='last'
        />
      </Cards>
    </>
  );
};

export default App;
