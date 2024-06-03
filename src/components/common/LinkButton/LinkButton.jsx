import { memo } from 'react';
import { Link } from 'react-router-dom';
import { StrBtn } from './LinkButton.styled';

const LinkButton = memo(({ to, label, icon, className }) => {
  console.log(`Button ${label} rendered`);
  return (
    <Link to={to}>
      <StrBtn className={className}>
        {icon && <img src={icon} alt={`${label} icon`} />} {label}
      </StrBtn>
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;