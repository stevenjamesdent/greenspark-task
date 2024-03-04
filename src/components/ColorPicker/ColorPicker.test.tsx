import React from 'react';
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import ColorPicker from './ColorPicker';
import { afterEach } from 'node:test';

afterEach(cleanup);

it('ColorPicker returns color name on click', () => {
    const defaultColor = 'blue';
    const testColor = 'black';

    const changeHandler = jest.fn();

    const { baseElement } = render(
        <ColorPicker
            defaultValue={defaultColor}
            name='colors'
            onChange={changeHandler}
        />
    );

    fireEvent.click(getByTestId(baseElement, `input-color-${testColor}`));

    expect(changeHandler).toHaveBeenCalledWith(testColor);
});