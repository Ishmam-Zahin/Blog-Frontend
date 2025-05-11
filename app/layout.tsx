import '@/app/globals.css'
import Heading from './_components/Heading'
import Navbar from './_components/Navbar'
import StoreProvider from '@/app/_components/StoreProvider'
import QueryProvider from '@/app/_components/QueryProvider'

export default function layout(
  {
    children,
  }:{
    children: React.ReactNode
  }
) {
  return (
    <html>
      <body>
        <StoreProvider>
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
