import React from 'react';

import NavLink from '../NavLink/NavLink';

const links = [
  {
    name: 'Карта',
    href: '/map',
  },
  {
    name: 'Профиль',
    href: '/profile',
  },
];

export const Navigation = () => {
  return (
    <nav>
      {links.map((link) => {
        return (
          <NavLink {...link} key={link.name}>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
