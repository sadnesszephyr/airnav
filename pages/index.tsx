import styles from '../styles/pages/index.module.scss'
import Container from '../components/Container'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import Modal from '../components/Modal'
import Input from '../components/Input'
import { Field, Formik } from 'formik'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function Home() {
	const [searchModalOpened, setSearchModalOpened] = useState(false)
	const [groupModalOpened, setGroupModalOpened] = useState(false)
	const [scheduleData, setScheduleData] = useState([])

	return (
		<>
			<Container bottomSafe={false}>
				<div className={cx('hero')}>
					<img src="/images/Wave.png" alt="Wave" width={120}/>
					<h1>Добро пожаловать!</h1>
					<p>С помощью этого приложения вы сможете легко ориентироваться в аэропорту. Просто выберите свой
					   рейс, или присоединитесь к группе:</p>
				</div>
				<div className={cx('actions')}>
					<ActionCard
						icon="compass"
						title="Найти рейс"
						onClick={() => setSearchModalOpened(true)}
					/>
					<ActionCard
						icon="user"
						title="Присоединиться к группе"
						onClick={() => setGroupModalOpened(true)}
					/>
				</div>
			</Container>
			<Modal
				showModal={searchModalOpened}
				handleClose={() => setSearchModalOpened(false)}
				height={512 + 128}
			>
				<h5>Поиск рейса</h5>
				<Formik
					initialValues={{ code: '1' }}
					onSubmit={async (values) => {
						console.log(values)
					}}
				>
					{props => {
						const {
							values,
							dirty,
							isSubmitting,
							handleChange,
							handleBlur,
							handleSubmit,
							handleReset
						} = props
						return <form onSubmit={handleSubmit}>
							<Field
								component={Input.Text}
								placeholder="SU1504"
								name="code"
								value={values.code}
								onChange={async (event) => {
									handleChange(event)
									let value = event.currentTarget.value
									const rawScheduleData = await(await fetch(
										`https://aero-nav.vercel.app/api/search/${value}`,
									)).json()
									const list = rawScheduleData.schedule.filter((item) =>
										value && (
										item.thread.title.toLowerCase().includes(value.toLowerCase()) ||
										item.thread.number.replace(' ', '').includes(value.replace(' ', '').replace('-', '').toUpperCase())
											)
									).map(item => ({
										code: item.thread.number,
										from: item.thread.title.split(' ')[0],
										to: item.thread.title.split(' ')[2]
									}))
									setScheduleData(list as any)
								}}
								label="Введите номер рейса"
							/>
						</form>
					}}
				</Formik>
				{scheduleData.map(item => <ScheduleCard code={item.code} from={item.from} to={item.to}/>)}
			</Modal>
			<Modal
				showModal={groupModalOpened}
				handleClose={() => setGroupModalOpened(false)}
			>
				Hi2
			</Modal>
		</>
	)
}

const ActionCard = ({ icon, title, onClick, ...props }: {
	icon: string,
	title: string,
	onClick?: () => any
}) => {
	return <div className={cx('action-box')} onClick={onClick}>
		<img src={`/icons/${icon}.svg`} alt="icon"/>
		<h5>{title}</h5>
	</div>
}

const ScheduleCard = ({ code, from, to, ...props }: {
	code: string,
	from: string,
	to: string
}) => {
	return <Link href="/map/">
		<div className={cx('schedule-card')}>
		<img src={`https://i.imgur.com/nRaWiGv.png`} className={cx('schedule-card__logo')} alt="icon"/>
		<div className={cx('schedule-card__info')}>
			<h4>{code}</h4>
			<span className={cx('schedule-card__cities')}>{from} › {to}</span>
		</div>
	</div>
	</Link>
}

interface CodeInput {
	code: string
}
