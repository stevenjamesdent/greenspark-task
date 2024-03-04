import classNames from 'classnames';
import React from 'react';
import styles from './Toggle.module.scss';

export interface Props {
    className?: string,
    defaultChecked: boolean,
    label: string,
    name: string,
    onChange: (active: boolean) => void,
    radioGroupName?: string,
    inputRef?: React.RefObject<HTMLInputElement>,
    style?: React.CSSProperties,
}

const Toggle = ({
    className,
    defaultChecked,
    inputRef,
    label,
    name,
    onChange,
    radioGroupName,
    style,
} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={conditionalClassNames} style={style} title={label}>
            <label data-testid="toggle" className={styles.toggle} htmlFor={name}>
                <input
                    className={styles.toggle_input}
                    data-testid="toggle-input"
                    defaultChecked={defaultChecked}
                    id={name}
                    name={radioGroupName || name}
                    onChange={(event) => onChange(event.target.checked)}
                    ref={inputRef}
                    type={radioGroupName ? 'radio' : 'checkbox'}
                />
                <span className={styles.toggle_field} />
                <span className="sr-only">{label}</span>
            </label>
        </div>
    );
};

export default Toggle;