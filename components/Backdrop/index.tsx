import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { Portal } from 'react-portal';
import React from "react";
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { ReactEventHandler } from 'react'

interface BackdropProps {
    children: any,
    onClick: ReactEventHandler
}

const backdropAnimationVariants: Variants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
}

export default function Backdrop({
    children,
    onClick
}:BackdropProps) {
    return <Portal>
	    <motion.div
			className={styles.backdrop}
			onClick={onClick}
			variants={backdropAnimationVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'
			transition={{
				type: 'tween',
				duration: .2
			}}
	    >
		    {children}
	    </motion.div>
    </Portal>
}