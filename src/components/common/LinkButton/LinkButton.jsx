import { memo } from 'react';
import { Link } from 'react-router-dom';

const LinkButton = memo(({ to, label, icon }) => {
  console.log(`Button ${label} rendered`);
  return (
    <Link to={to}>
      <button>
        {icon && <img src={icon} alt={`${label} icon`} />} {label}
      </button>
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
