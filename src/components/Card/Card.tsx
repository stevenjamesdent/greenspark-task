import { Colour } from '@/config/colors';
import classNames from 'classnames';
import clsx from 'clsx';
import GreensparkIcon from '@/assets/img/greenspark-full.svg';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import React from 'react';
import styles from './Card.module.scss';

export interface Props {
    background?: Colour,
    className?: string,
    intro: string,
    style?: React.CSSProperties,
    title: string,
}

const lightThemes = ['black', 'blue', 'green'];

const Card = ({
    background = 'green',
    className,
    intro,
    style,
    title
} : Props): React.ReactElement => {
    const conditionalClassNames = classNames(className, {
        [`bg-${background}`]: background,
    });

    const colorModifier = lightThemes.includes(background) ? 'text-white' : 'text-green';
    const wrapperStyle = { "--card-bg": `var(--${background})`, ...style } as React.CSSProperties;

    return (
        <div className={clsx(styles.wrapper, conditionalClassNames, colorModifier)} style={wrapperStyle}>
            <Icon icon={GreensparkIcon} size={50} />
            <div>
                <div data-testid="card-intro">{intro}</div>
                <Heading tag='span' appearance='h5'>{title}</Heading>
            </div>
        </div>
    );
};

export default Card;