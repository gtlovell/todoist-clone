import React from 'react';
import { FaPizzaSlice, FaStarHalfAlt } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <FaPizzaSlice />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaStarHalfAlt />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
