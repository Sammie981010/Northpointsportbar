import '../styles/globals.css'

export const metadata = {
  title: 'North Point Sports Bar',
  description: 'Drinks • Food • Pool • Live Sports',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}