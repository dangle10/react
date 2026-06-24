import React from 'react'
import styles from './Icon.module.scss';
import clsx from 'clsx';
import { Down } from "~/assets";

function SortIcon({ isActive, onClick }) {
    return (
        <div className={clsx(styles.SortWrapper, { [styles.active]: isActive })} onClick={onClick}>
            <span className={clsx(styles.SortTitle, { [styles.activeTitle]: isActive })}>Sort By</span>
            <Down className={clsx(styles.SortIcon, { [styles.activeIcon]: isActive })}/>
        </div>
    );
}

export default SortIcon;