import React from 'react';
import { cleanup, getByTestId, render } from '@testing-library/react';
import Label from './Label';
import { afterEach } from 'node:test';

afterEach(cleanup);

const labelText = 'Lorem ipsum dolor';
const labelTag = 'label';

it('Label uses the tag passed by props and renders the child text', () => {
    const { baseElement } = render(<Label tag={labelTag} label={labelText} />);

    expect(getByTestId(baseElement, 'label').textContent).toBe(labelText);
    expect(getByTestId(baseElement, 'label').tagName).toBe(labelTag.toUpperCase());
});