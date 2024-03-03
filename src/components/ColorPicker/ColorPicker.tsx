import { Colour, availableColors } from '@/config/colors';
import classNames from 'classnames';
import clsx from 'clsx';
import React from 'react';
import styles from './ColorPicker.module.scss';

export interface ColorProps {
    className?: string,
    colorName: Colour,
    defaultChecked: boolean,
    groupName?: string,
    onChange: (active: boolean) => void,
    style?: React.CSSProperties,
}

export interface ColorPickerProps {
    className?: string,
    defaultValue: Colour,
    name: string,
    onChange: (color: Colour) => void,
    style?: React.CSSProperties,
}

const Color = ({
    className,
    colorName,
    defaultChecked,
    groupName,
    onChange,
    style,
} : ColorProps): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});
    const prettyName = colorName.charAt(0).toUpperCase() + colorName.slice(1);
    const colorValueStyle = { '--color-hex': availableColors[colorName] } as React.CSSProperties;

    return (
        <div className={conditionalClassNames} style={style} title={prettyName}>
            <label className={styles.color} htmlFor={`${groupName}-${colorName}`} style={colorValueStyle}>
                <input
                    className={styles.color_input}
                    id={`${groupName}-${colorName}`}
                    name={groupName}
                    onChange={(event) => onChange(event.target.checked)}
                    type='radio'
                    defaultChecked={defaultChecked}
                />
                <span className={styles.color_field} />
                <span className="sr-only">{prettyName}</span>
            </label>
        </div>
    );
};

const ColorPicker = ({className, style, name, onChange, defaultValue} : ColorPickerProps): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={clsx('flex gap-1', conditionalClassNames)} style={style}>
            {
                Object.keys(availableColors).map((color) => {

                    return (
                        <Color
                            key={`color-option-${color}`}
                            colorName={color as keyof typeof availableColors}
                            defaultChecked={color === defaultValue}
                            groupName={name}
                            onChange={(active) => active && onChange(color as Colour)}
                        />
                    );
                })
            }
        </div>
    );
};

ColorPicker.Color = Color;

export default ColorPicker;