import React from 'react';
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toggle from './Toggle';
import { afterEach } from 'node:test';

afterEach(cleanup);

it('Toggle input switches to checked on parent click and change handler returns boolean value', () => {
    const changeHandler = jest.fn();

    const { baseElement } = render(
        <Toggle
            defaultChecked={false}
            label='Test Toggle'
            name='toggle-test'
            onChange={changeHandler}
        />
    );

    expect(getByTestId(baseElement, 'toggle-input')).not.toBeChecked();

    fireEvent.click(getByTestId(baseElement, 'toggle'));

    expect(getByTestId(baseElement, 'toggle-input')).toBeChecked();

    expect(changeHandler).toHaveBeenCalledWith(true);
});