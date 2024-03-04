import React from 'react';
import { cleanup, getByTestId, render } from '@testing-library/react';
import Heading, { Props } from './Heading';
import { afterEach } from 'node:test';

afterEach(cleanup);

const headingText = 'Lorem ipsum dolor sit amet';
const headingTag = 'h2';

it('Heading uses the tag passed by props and renders the child text', () => {
    const { baseElement } = render(<Heading tag={headingTag}>{headingText}</Heading>);

    expect(getByTestId(baseElement, 'heading').textContent).toBe(headingText);
    expect(getByTestId(baseElement, 'heading').tagName).toBe(headingTag.toUpperCase());
});