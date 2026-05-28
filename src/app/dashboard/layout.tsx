import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      
      <aside className="w-64 bg-cyan-500 text-white min-h-screen p-4">
        <h2 className="text-3xl font-bold mb-4">Expendio</h2>
        <nav>
          <ul className="text-xl font-semibold">
            <li className="mb-2">
              <Link href="/dashboard" className="block py-2 px-4 rounded hover:bg-cyan-600">Inicio</Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/products" className="block py-2 px-4 rounded hover:bg-cyan-600">Inventario</Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/orders" className="block py-2 px-4 rounded hover:bg-cyan-600">Compras</Link>
            </li>
            <li className="mb-2">
              <Link href="/dashboard/customers" className="block py-2 px-4 rounded hover:bg-cyan-600">Ventas</Link>
            </li>
            <li className="mb-2 flex self-end">
              <Link href="/dashboard/reports" className="block py-2 px-4 rounded hover:bg-cyan-600">Reportes</Link>
            </li>
          </ul>
        </nav>

      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>

    </div>
  )
}