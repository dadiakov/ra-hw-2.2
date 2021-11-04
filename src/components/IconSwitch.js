import PropTypes from 'prop-types';
export default function IconSwitch({ icon, onSwitch }) {
    return (
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    );
  }

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
}

IconSwitch.defaultProps = {
  icon: 'view_list',
  onSwitch: () => console.log('Функция кнопки переключения вида не задана'),
}
