import classNames from 'classnames';
import IconTick from '@/assets/img/icons/icon-tick.svg';
import React from 'react';
import styles from './Checkbox.module.scss';

export interface Props {
    className?: string,
    defaultChecked: boolean,
    label: string,
    name: string,
    onChange: (active: boolean) => void,
    style?: React.CSSProperties,
}

const Checkbox = ({
    className,
    defaultChecked,
    label,
    name,
    onChange,
    style,
} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={conditionalClassNames} style={style} title={label}>
            <label className={styles.checkbox} htmlFor={name}>
                <input
                    className={styles.checkbox_input}
                    defaultChecked={defaultChecked}
                    id={name}
                    name={name}
                    onChange={(event) => onChange(event.target.checked)}
                    type='checkbox'
                />
                <span className={styles.checkbox_field}>
                    <span className={styles.checkbox_icon}><IconTick /></span>
                </span>
                <span className="sr-only">{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;