import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView/ListView';
import CardView from './CardView/CardView';

export default function Store({ products }) {
    const [icon, setIcon] = useState('view_list');
    const switchLoad = () =>
      setIcon((prevIcon) =>
        prevIcon === 'view_list' ? 'view_module' : 'view_list'
      );
    return (
      <>
        <div class='switch-icon-container'>
        <IconSwitch icon={icon} onSwitch={switchLoad} />
        </div>
        {icon === 'view_module' ? (
          <ListView items={products} />
        ) : (
          <CardView cards={products} />
        )}
      </>
    );
  }