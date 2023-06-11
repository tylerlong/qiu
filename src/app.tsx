import React from 'react';
import { Space, Typography } from 'antd';
import one from './assets/1.jpeg';
import two from './assets/2.jpeg';
import three from './assets/3.jpeg';
import four from './assets/4.jpeg';
import five from './assets/5.jpeg';
import six from './assets/6.jpeg';
import seven from './assets/7.jpeg';
import eight from './assets/8.jpeg';
import nine from './assets/9.jpeg';
import ten from './assets/10.jpeg';
import eleven from './assets/11.jpeg';

const { Title } = Typography;

const App = () => {
  return (
    <>
      <Title>谭景秋病历</Title>
      <div>
        <Title level={2}>1</Title>
        <img src={one} className="rotate-image" />
        <Title level={2}>2</Title>
        <img src={two} className="rotate-image" />
        <Title level={2}>3</Title>
        <img src={three} className="rotate-image" />
        <Title level={2}>4</Title>
        <img src={four} className="rotate-image" />
        <Title level={2}>5</Title>
        <img src={five} className="rotate-image" />
        <Title level={2}>6</Title>
        <img src={six} className="rotate-image" />
        <Title level={2}>7</Title>
        <img src={seven} className="rotate-image" />
        <Title level={2}>8</Title>
        <img src={eight} className="rotate-image" />
        <Title level={2}>9</Title>
        <img src={nine} />
        <Title level={2}>10</Title>
        <img src={ten} />
        <Title level={2}>11</Title>
        <img src={eleven} />
      </div>
    </>
  );
};

export default App;
