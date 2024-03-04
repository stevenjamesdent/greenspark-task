import React from 'react';
import { cleanup, getByTestId, render } from '@testing-library/react';
import Card, { Props } from './Card';
import { afterEach } from 'node:test';

afterEach(cleanup);

let test_props: Props = {
    intro: 'This is the card intro',
    title: 'This is the card title',
};

it('Card renders with text matching given props', () => {
    const { baseElement } = render(<Card {...test_props} />);

    expect(getByTestId(baseElement, 'card-intro').textContent).toBe(test_props.intro);
    expect(getByTestId(baseElement, 'heading').textContent).toBe(test_props.title);
});