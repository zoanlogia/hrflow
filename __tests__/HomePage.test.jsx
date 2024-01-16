import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/HomePage';


describe('HomePage', () => {
  test('affiche le texte de bienvenue', () => {
    render(<HomePage />);
    const headingElement = screen.getByText("Bienvenue sur HRFlow Test");
  });
});
