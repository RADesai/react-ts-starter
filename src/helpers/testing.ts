import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

export const matchSnapshot = (component: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => {
    const tree = renderer
        .create(component)
        .toJSON();
    expect(tree).toMatchSnapshot();
}

export const hasText = (text: string) => {
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
}
