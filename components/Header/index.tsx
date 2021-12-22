import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import Link from 'next/link'
import Map from '../../public/icons/map.svg'

const cx = classNames.bind(styles)

export default function Header({ children }) {
	return <header className={cx('header')}>
		<h1 className={cx('header__title')}>{children}</h1>
	</header>
}
