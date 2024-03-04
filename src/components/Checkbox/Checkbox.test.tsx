import React from 'react';
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';
import { afterEach } from 'node:test';

afterEach(cleanup);

it('Checkbox input switches to checked on parent click and change handler returns boolean value', () => {
    const changeHandler = jest.fn();

    const { baseElement } = render(
        <Checkbox
            defaultChecked={false}
            label='Test Checkbox'
            name='checkbox-test'
            onChange={changeHandler}
        />
    );

    expect(getByTestId(baseElement, 'checkbox-input')).not.toBeChecked();

    fireEvent.click(getByTestId(baseElement, 'checkbox'));

    expect(getByTestId(baseElement, 'checkbox-input')).toBeChecked();

    expect(changeHandler).toHaveBeenCalledWith(true);
});