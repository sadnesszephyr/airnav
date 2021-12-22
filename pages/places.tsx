import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Container from "../components/Container";
import styles from "../styles/pages/places.module.scss"
import classNames from 'classnames/bind'
import React from 'react'

const cx = classNames.bind(styles)

export default function Home() {
  return (
    <>
        <Header>Места</Header>
        <Container bottomSafe>
            <div style={{
                display: 'flex',
                gap: '1.5rem',
                overflowX: 'scroll',
                width: 'calc(100% + 3rem)',
                marginLeft: '-1.5rem',
                padding: '0 1.5rem',
            }}>
	            <ActionCard
		            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		            <path d="M12 2.69L17.66 8.35C18.7794 9.46861 19.5418 10.8941 19.8509 12.4461C20.16 13.998 20.0019 15.6069 19.3965 17.069C18.7912 18.5311 17.7658 19.7808 16.4501 20.6601C15.1344 21.5394 13.5875 22.0087 12.005 22.0087C10.4225 22.0087 8.87561 21.5394 7.5599 20.6601C6.24419 19.7808 5.21882 18.5311 4.61347 17.069C4.00812 15.6069 3.85 13.998 4.15911 12.4461C4.46822 10.8941 5.23066 9.46861 6.35001 8.35L12 2.69Z" stroke="#E4E4E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	            </svg>}
		            title="Ближайшая уборная"
	            />
	            <ActionCard
		            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			            <path d="M12 2.69L17.66 8.35C18.7794 9.46861 19.5418 10.8941 19.8509 12.4461C20.16 13.998 20.0019 15.6069 19.3965 17.069C18.7912 18.5311 17.7658 19.7808 16.4501 20.6601C15.1344 21.5394 13.5875 22.0087 12.005 22.0087C10.4225 22.0087 8.87561 21.5394 7.5599 20.6601C6.24419 19.7808 5.21882 18.5311 4.61347 17.069C4.00812 15.6069 3.85 13.998 4.15911 12.4461C4.46822 10.8941 5.23066 9.46861 6.35001 8.35L12 2.69Z" stroke="#E4E4E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		            </svg>}
		            title="Ближайшая уборная"
	            />
	            <ActionCard
		            icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			            <path d="M12 2.69L17.66 8.35C18.7794 9.46861 19.5418 10.8941 19.8509 12.4461C20.16 13.998 20.0019 15.6069 19.3965 17.069C18.7912 18.5311 17.7658 19.7808 16.4501 20.6601C15.1344 21.5394 13.5875 22.0087 12.005 22.0087C10.4225 22.0087 8.87561 21.5394 7.5599 20.6601C6.24419 19.7808 5.21882 18.5311 4.61347 17.069C4.00812 15.6069 3.85 13.998 4.15911 12.4461C4.46822 10.8941 5.23066 9.46861 6.35001 8.35L12 2.69Z" stroke="#E4E4E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		            </svg>}
		            title="Ближайшая уборная"
	            />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                gap: '1rem',
                background: 'var(--background)',
                boxShadow: '0px 4px 24px rgba(27, 27, 27, 0.08)',
                borderRadius: '2rem',
	            width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'var(--background)',
                    gap: '1rem',
                    alignItems: 'center',
                }}>
                    <img src="https://i.imgur.com/EVQ57H2.png" alt="logo" width={64}/>
                    <h4>Шоколадница</h4>
                </div>
                Отличные завтраки целый день ждут вас в «Шоколаднице». Сырники, нежный омлет, завтраки от шефа — оцените новое меню прямо сейчас.
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                gap: '1rem',
                background: 'var(--background)',
                boxShadow: '0px 4px 24px rgba(27, 27, 27, 0.08)',
                borderRadius: '2rem',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'var(--background)',
                    gap: '1rem',
                    alignItems: 'center',
                }}>
                    <img src="https://i.imgur.com/EVQ57H2.png" alt="logo" width={64}/>
                    <h4>Шоколадница</h4>
                </div>
                Отличные завтраки целый день ждут вас в «Шоколаднице». Сырники, нежный омлет, завтраки от шефа — оцените новое меню прямо сейчас.
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                gap: '1rem',
                background: 'var(--background)',
                boxShadow: '0px 4px 24px rgba(27, 27, 27, 0.08)',
                borderRadius: '2rem',
	            width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: 'var(--background)',
                    gap: '1rem',
                    alignItems: 'center',
                }}>
                    <img src="https://i.imgur.com/EVQ57H2.png" alt="logo" width={64}/>
                    <h4>Шоколадница</h4>
                </div>
                Отличные завтраки целый день ждут вас в «Шоколаднице». Сырники, нежный омлет, завтраки от шефа — оцените новое меню прямо сейчас.
            </div>
        </Container>
    </>
  )
}

const ActionCard = ({ icon, title, ...props }: {
	icon: React.ReactNode,
	title: string
}) => {
	return <div className={cx('action-box')}
		// width: 'calc((100% - 1.5rem) / 2 + 1.5rem)',
		// height: 112,
		// borderRadius: 16,
		// background: 'var(--foreground)',
		// flexShrink: 0,
		// color: 'var(--background)'
	>
		{icon}
		<h5>{title}</h5>
	</div>
}
