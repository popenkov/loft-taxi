import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: 'Логин',
    href: '/login',
  },
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
          <button to={link.href} key={link.href}>
            {link.name}
          </button>
        );
      })}
    </nav>
  );
};
