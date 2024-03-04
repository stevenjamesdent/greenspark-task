import classNames from 'classnames';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import InfoIcon from '@/assets/img/icons/icon-info.svg';
import React from 'react';
import styles from './Label.module.scss';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';

export interface Props {
    className?: string,
    label: string,
    style?: React.CSSProperties,
    tag?: 'label' | 'div' | 'span',
    tooltip?: TooltipProps,
}

const Label = ({
    className,
    label,
    style,
    tag,
    tooltip,
    ...props
} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    const Tag = tag ?? 'div';

    return (
        <Tag data-testid="label" className={clsx(styles.wrapper, conditionalClassNames)} style={style} {...props}>
            {label}
            {
                tooltip ?
                    <Tooltip {...tooltip}><Icon icon={InfoIcon} size={10} /></Tooltip>
                : null
            }
        </Tag>
    );
};

export default Label;