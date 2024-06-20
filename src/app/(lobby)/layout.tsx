import { getProductCategories } from '@/actions/category'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'

export default async function LobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getProductCategories()
  
  return (
    <div>
      <Navbar categories={categories} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
