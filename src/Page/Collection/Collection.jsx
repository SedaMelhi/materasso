import Path from './../../components/Path/Path';
import style from './Collection.module.sass';
import Section from './../Home/Section/Section';
import { useEffect, useState } from 'react';

const Collection = () => {
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
    <div className="wrap">
      <Path
        path={[
          { text: 'Главная', link: '../' },
          { text: 'Коллекции', link: '/collection' },
        ]}
      />
      <h2 className={style.title}>Коллекции</h2>
      {load ? (
        collections.map((item, i) => <Section {...item} step={i} key={item.id} load={load} />)
      ) : (
        <>
          <Section load={load} />
          <Section load={load} />
        </>
      )}
    </div>
  );
};

export default Collection;
