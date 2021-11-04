import { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardView from './CardView';
import PropTypes from 'prop-types';

export default function Store({ products }) {
    const [icon, setIcon] = useState('view_list');
    const switchLoad = () =>
      setIcon((prevIcon) =>
        prevIcon === 'view_list' ? 'view_module' : 'view_list'
      );
    return (
      <>
        <div className='switch-icon-container'>
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

Store.propTypes = {
  products: PropTypes.array.isRequired,
}