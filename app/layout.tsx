import '@/app/globals.css'
import Heading from './_components/Heading'
import Navbar from './_components/Navbar'

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
        <Heading />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
