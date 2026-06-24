import React from 'react'
import styles from './Icon.module.scss';
import clsx from 'clsx';
import { Filter as FilterIconSvg } from "~/assets";

function FilterIcon({ isActive, onClick }) {
    return (
        <div className={clsx(styles.FilterWrapper, { [styles.active]: isActive })} onClick={onClick}>
            <span className={clsx(styles.filterTitle, { [styles.activeTitle]: isActive })}>Filters</span>
            <FilterIconSvg
             color={isActive ? "rgba(39, 39, 39, 1)" : "rgba(132, 132, 132, 1)"}
            className={clsx(styles.filterIcon, { [styles.activeIcon]: isActive })}/>
        </div>
    );
}

export default FilterIcon;