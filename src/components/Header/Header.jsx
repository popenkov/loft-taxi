import React from 'react';
import { Navigation } from './navigation/Navigation';

const links = [
  {
    name: 'Логин',
    href: 'login',
  },
  {
    name: 'Карта',
    href: 'map',
  },
  {
    name: 'Профиль',
    href: 'profile',
  },
];

export const Header = ({ handleChangePage }) => {
  const handleNavigationClick = (page) => {
    handleChangePage(page);
  };

  return (
    <div>
      {/* TODO temporaly commented. Implementation with router dom */}
      {/* <Navigation /> */}
      <nav>
        {links.map((link) => {
          return (
            <button
              key={link.name}
              onClick={() => handleNavigationClick(link.href)}
            >
              {link.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
