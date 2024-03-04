import '@testing-library/jest-dom';
import { afterEach } from 'node:test';
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react';
import { widgets } from '@/config/widgets';
import React from 'react';
import Widget from './Widget';

afterEach(cleanup);

const data = widgets[0];

it('Widget renders with correct initial values extracted from the data prop', () => {
    const changeHandler = jest.fn();

    const { baseElement } = render(
        <Widget
            active={data.active}
            data={data}
            onChange={changeHandler}
        />
    );

    const widgetElement = getByTestId(baseElement, 'widget');

    expect(getByTestId(widgetElement, 'heading').textContent).toBe(`${data.amount} ${data.type}`);

    if (data.linked) {
        expect(getByTestId(widgetElement, 'checkbox-input')).toBeChecked();
    } else {
        expect(getByTestId(widgetElement, 'checkbox-input')).not.toBeChecked();
    }

    if (data.active) {
        expect(getByTestId(widgetElement, 'toggle-input')).toBeChecked();
    } else {
        expect(getByTestId(widgetElement, 'toggle-input')).not.toBeChecked();
    }

    expect(getByTestId(widgetElement, `input-color-${data.selectedColor}`)).toBeChecked();
});