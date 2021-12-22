import classNames from 'classnames/bind'
import styles from './style.module.scss'
import React from "react";
import { useField } from 'formik'

const cx = classNames.bind(styles)

const Input: any = {}

interface TextInputProps {
	id: string
	value?: string
	placeholder?: string
	message: string
	label?: string
}

function TextInput({ id, value, placeholder, message, label, ...props }: TextInputProps) {
    return <div className={cx('wrapper')}>
	    {(label || message)
	        && <div className={cx('input-info')}>
		    <label className={cx('input-label')} htmlFor={id}>{label}</label>
		    <span className={cx('input-message')}>
			    {message}
			</span>
	    </div>
		}
	    <input
		    id={id}
		    type='text'
		    className={cx('input')}
		    placeholder={placeholder}
		    {...props}
	    />
    </div>
}

Input.Text = TextInput

export default Input
