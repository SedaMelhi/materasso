// import style from './Home.module.sass';
import Section from './Section/Section';
import Slider from './Slider/Slider';
import SliderLoader from '../Collection/SliderLoader';
import { useEffect, useState } from 'react';

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
    fetch('https://sadogroup.ru/api/collection/')
      .then((res) => res.json())
      .then((data) => {
        setCollections(data.results);
        setLoad(true);
      });
  }, []);

  return (
    <div>
      {load ? <Slider collections={collections} /> : <SliderLoader />}
      <div className="main wrap">
        {collections.map((item) => (
          <Section {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
