import React from 'react';
import SplitScreen from './SplitScreen';
import LargeProductList from './products/LargeProductLIst';
import { Modal } from './Modal';

const RightHandComponent = ({name}) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const LeftHandComponent = ({fine}) => {
  return <h1 style={{ backgroundColor: 'red' }}>{fine}!</h1>;
};

const Products = [{
  name: 'Flat-Screen TV',
  price: 500,
  description: 'A TV that is flat',
  rating: 4.5,
}]

function App() {
  return (
    <>
      <Modal>
        <LargeProductList product={Products[0]}/>
      </Modal>
    </>


    // <SplitScreen leftWeight={1} rightWeight={3}>
    //   <LeftHandComponent fine="lakdilu"/>
    //   <RightHandComponent name="bitch"/>
    // </SplitScreen>
  );
}

export default App;
