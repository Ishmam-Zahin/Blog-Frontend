import '@/app/globals.css'
import Heading from './_components/Heading'
import Navbar from './_components/Navbar'
import StoreProvider from '@/app/_components/StoreProvider'
import QueryProvider from '@/app/_components/QueryProvider'
import { cookies } from 'next/headers';

export default async function layout(
  {
    children,
  }:{
    children: React.ReactNode
  }
) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  return (
    <html>
      <body>
        <StoreProvider token={token?.value}>
          <QueryProvider>
            <Heading/>
            <Navbar />
            <main>{children}</main>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
