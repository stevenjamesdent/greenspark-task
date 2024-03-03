import classNames from 'classnames';
import clsx from 'clsx';
import React from 'react';
import styles from './Icon.module.scss';

export interface Props {
    className?: string,
    icon: any,
    size: number,
    style?: React.CSSProperties,
}

const Icon = ({
    className,
    icon,
    size = 20,
    style,
} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});
    
    const IconSvg = icon;

    return (
        <div className={clsx(styles.wrapper, conditionalClassNames)} style={style}>
            <IconSvg width={size} height={size} />
        </div>
    );
};

export default Icon;