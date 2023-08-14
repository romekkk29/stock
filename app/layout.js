import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'
import Providers from './store/provider'

export const metadata = {
  title: 'Stock',
  description: 'Stock movement for an interview',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body>

          <nav className={styles.nav} >
            <Link href="/"> STOCK
            </Link>
            <Link href="/movement">MOVEMENT STOCK
            </Link>
          </nav>
          {children}
      </body>
      </Providers>
    </html>
  )
}
