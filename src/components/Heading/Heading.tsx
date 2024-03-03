import classNames from 'classnames';
import clsx from 'clsx';
import React from 'react';
import styles from './Heading.module.scss';

export interface Props {
    appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    children?: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
}

const Heading = ({
    appearance,
    children,
    className,
    style,
    tag = 'h2',
}: Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {
        [styles['heading_' + tag]]: !appearance,
        [styles['heading_' + appearance]]: appearance,
    });

    const Tag = tag;

    return (
        <Tag className={clsx(styles.heading, conditionalClassNames)} style={style}>
            <div className={className}>
                {children}
            </div>
        </Tag>
    );
};

export default Heading;