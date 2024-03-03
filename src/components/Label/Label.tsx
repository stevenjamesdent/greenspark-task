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
    tooltip?: TooltipProps,
}

const Label = ({
    className,
    label,
    style,
    tooltip,
} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {});

    return (
        <div className={clsx(styles.wrapper, conditionalClassNames)} style={style}>
            {label}
            {
                tooltip ?
                    <Tooltip {...tooltip}><Icon icon={InfoIcon} size={10} /></Tooltip>
                : null
            }
        </div>
    );
};

export default Label;