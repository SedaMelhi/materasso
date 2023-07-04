// import style from './Home.module.sass';
import Section from './Section/Section';
import Slider from './Slider/Slider';
import { useEffect, useState } from 'react';

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(false);
    fetch('https://sadogroup.ru/api/collection/')
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setLoad(true);
      });
  }, []);

  return (
    <div>
      <Slider collections={collections} load={load} />
      <div className="main wrap">
        {load ? (
          collections.map((item, i) => <Section {...item} key={item.id} load={load} step={i} />)
        ) : (
          <>
            <Section load={load} />
            <Section load={load} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
