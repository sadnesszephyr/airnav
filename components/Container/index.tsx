import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { ReactElement, ReactNode, useState } from 'react'
import Link from 'next/link'
import Map from '../../public/icons/map.svg'

const cx = classNames.bind(styles)

export default function Container({ children, bottomSafe }: { children: ReactNode, bottomSafe?: boolean }) {
	return <div className={cx('container', { 'container_bottom-safe': bottomSafe ?? true })}>{children}</div>
}
