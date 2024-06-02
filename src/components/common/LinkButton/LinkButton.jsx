import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StrBtn } from './LinkButton.styled';

const LinkButton = memo(({ to, label, icon }) => {
  const location = useLocation();

  const isActive = location.pathname === to || (location.pathname === '/' && to === '/trending');

  console.log(`Button ${label} rendered`);
  return (
    <Link to={to}>
      <StrBtn className={isActive ? 'active' : ''}>
        {icon && <img src={icon} alt={`${label} icon`} />} {label}
      </StrBtn>
    </Link>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
