'use client'

import { Widget } from '@/config/widgets';
import Card from '../Card/Card';
import Checkbox from '../Checkbox/Checkbox';
import classNames from 'classnames';
import clsx from 'clsx';
import ColorPicker from '../ColorPicker/ColorPicker';
import Label from '../Label/Label';
import React from 'react';
import styles from './Widget.module.scss';
import Toggle from '../Toggle/Toggle';

export interface Props {
    active: boolean,
    className?: string,
    data: Widget,
    onChange: (data: Widget, id: number) => void,
    style?: React.CSSProperties,
}

const Widget = ({
    active,
    className,
    data,
    onChange,
    style,
} : Props): React.ReactElement => {
    const [badgeColor, setBadgeColor] = React.useState(data.selectedColor);
    const [badgeLinked, setBadgeLinked] = React.useState(data.linked);
    const statusToggleRef = React.useRef<HTMLInputElement>(null);

    const conditionalClassNames = classNames(className, {});

    React.useEffect(() => {
        if (!active && statusToggleRef.current) {
            statusToggleRef.current.checked = false;
        }
    }, [active, statusToggleRef]);

    React.useEffect(() => {
        onChange({
            ...data,
            active: active,
            linked: badgeLinked,
            selectedColor: badgeColor,
        }, data.id);
    }, [badgeColor, badgeLinked]);

    const handleStatusChange = (status: boolean) => {
        onChange({
            ...data,
            active: status,
        }, data.id);
    }

    return (
        <div data-testid="widget" className={clsx(styles.wrapper, conditionalClassNames)} style={style}>
            <Card
                background={badgeColor}
                intro={`This product ${data.action}`}
                title={`${data.amount} ${data.type}`}
            />

            <div className='flex justify-between mt-5'>
                <Label
                    className='desktop:mr-20'
                    label='Link to public profile'
                    tooltip={{
                        text: 'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.',
                        link: { url: 'https://www.linkedin.com/in/stevenjdent/', target: '_blank', title: 'View Public Profile' }
                    }}
                />
                <Checkbox
                    className='text-sm'
                    defaultChecked={badgeLinked}
                    label='Link to public profile'
                    name={`public-profile-widget-${data.id}`}
                    onChange={setBadgeLinked}
                />
            </div>

            <div className='flex justify-between mt-5'>
                <Label className='desktop:mr-20' label='Badge colour' />
                <ColorPicker
                    className='text-sm'
                    defaultValue={badgeColor}
                    name={`badge-colour-widget-${data.id}`}
                    onChange={(color) => setBadgeColor(color)}
                />
            </div>
            
            <div className='flex justify-between mt-5'>
                <Label className='desktop:mr-20' label='Activate badge' />
                <Toggle
                    defaultChecked={active}
                    label='Activate badge'
                    name={`badge-status-widget-${data.id}`}
                    onChange={handleStatusChange}
                    inputRef={statusToggleRef}
                />
            </div>
        </div>
    );
};

export default Widget;