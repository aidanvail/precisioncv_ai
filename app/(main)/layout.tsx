import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}