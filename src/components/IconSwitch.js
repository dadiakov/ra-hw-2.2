export default function IconSwitch({ icon, onSwitch }) {
    return (
      <span class="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    );
  }