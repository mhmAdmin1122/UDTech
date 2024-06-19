import '@/styles/globals.css'
import '@/styles/button.css'
import '@/styles/register.css'
import '@/styles/Header.css'
import '@/styles/banner.css'
import '@/styles/services.css'
import '@/styles/help.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}
