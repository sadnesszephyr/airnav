import classNames from 'classnames/bind'
import styles from './style.module.scss'
import { Portal } from 'react-portal';
import React, { useEffect } from "react";
import Backdrop from '../Backdrop'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { ReactEventHandler } from 'react'

interface ModalProps {
	showModal: boolean,
	handleClose: ReactEventHandler,
	children: any,
	height?: number
}

const modalAnimationVariants: Variants = {
	hidden: {
		y: 200
	},
	visible: {
		y: 0
	}
}

export default function Modal({ showModal, handleClose, children, height }: ModalProps) {
	useEffect(() => {
		if(!showModal) {
			document.body.style.overflow = 'visible'
		}
	}, [])

    return <Portal>
	    <AnimatePresence
		    initial={false}
		    exitBeforeEnter={true}
		    onExitComplete={() => {}}
	    >{ showModal && <Backdrop onClick={handleClose}>
		    <motion.div
			    className={styles.modal}
			    style={{ height: height ?? 'auto' }}
			    onClick={(e) => e.stopPropagation()}
			    variants={modalAnimationVariants}
			    initial='hidden'
			    animate='visible'
			    exit='hidden'
                transition={{
				    type: 'tween',
	                duration: .3
			    }}
		    >
			    {children}
		    </motion.div>
	    </Backdrop>}
	    </AnimatePresence>
	</Portal>
}
