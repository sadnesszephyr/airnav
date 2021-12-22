import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import Link from 'next/link'
import Map from '../../public/icons/map.svg'

const cx = classNames.bind(styles)

export default function Navbar() {
	const [selected, setSelected] = useState(0)

	return <nav className={cx('navbar')}>
		<span className={cx('navbar__dot', `navbar__dot_selected_${selected}`)}/>
		<ul className={cx('navbar__list')}>
			{
				[
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M8 2V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M16 6V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>,
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M2 8H18V17C18 18.0609 17.5786 19.0783 16.8284 19.8284C16.0783 20.5786 15.0609 21 14 21H6C4.93913 21 3.92172 20.5786 3.17157 19.8284C2.42143 19.0783 2 18.0609 2 17V8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M6 1V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M10 1V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M14 1V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>,
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 3H3V10H10V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21 3H14V10H21V3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21 14H14V21H21V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M10 14H3V21H10V14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>].map((item, i) =>
					<li
						key={i}
						className={cx('navbar__item', {
							'navbar__item_selected': selected === i
						})}
					><Link href={['/map', '/places', '/menu'][i]}><a onClick={() => setSelected(i)}>{item}</a></Link></li>
				)
			}
		</ul>
	</nav>
}
