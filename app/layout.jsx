import localFont from 'next/font/local'
import './globals.css'

const expo2 = localFont({ src: '../fonts/Exo2-VariableFont_wght.ttf' })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${expo2.className} antialiased`}>{children}</body>
		</html>
	)
}
