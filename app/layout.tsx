import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pause & Retain — Stop Losing Subscribers',
  description: 'Offer pause options instead of cancellations to reduce churn and protect your MRR. Embeddable pause flows for subscription businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bf8d8583-6aee-4936-be0e-cb4f0b452d8e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
