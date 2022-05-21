import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palatte' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
  </div>
);

export default SpecialMenu;
