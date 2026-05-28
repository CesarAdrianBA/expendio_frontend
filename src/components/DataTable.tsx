import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {

  Badge,
} from "@/components/ui/badge"

import { 
  Search,
  Eye,
  Pencil,
  Package,
 } from "lucide-react"

type Product = {
  id: number
  name: string
  category: string
  brand: string
  unit: string
  unitsPerPackage: number
  unitCost: number
  currentPrice: number
  stock: number
  lastPurchase: string
  active: boolean
}

interface DataTableProps {
  data: Product[]
}


function getStockStatus(stock: number) {
  if (stock === 0) {
    return {
      label: "Agotado",
      className: "bg-red-500 hover:bg-red-500",
    }
  }

  if (stock <= 10) {
    return {
      label: "Stock Bajo",
      className: "bg-yellow-500 hover:bg-yellow-500",
    }
  }

  return {
    label: "Disponible",
    className: "bg-green-600 hover:bg-green-600",
  }
}

export function DataTable({ data }: DataTableProps) {

    function suggestedPriceOperation(unitsPerPackage: number, unitCost: number) {
    return (unitCost / unitsPerPackage) + (unitCost / unitsPerPackage) * 0.2; // Agrega un margen del 20%
    
  }
  return (
    <div className="space-y-6"> 
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Inventario
          </h1>

          <p className="text-muted-foreground">
            Control y visualización de productos disponibles.
          </p>
        </div>

        <Button>
          <Package className="mr-2 h-4 w-4" />
          Nuevo Producto
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar producto..."
            className="flex-1 rounded-md border border-input bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

        <div className="flex flex-col overflow-x-auto rounded-md border ">
          <Table>
            <TableHeader className="bg-muted text-muted-foreground center border-b">
              <TableRow className="text-center text-sm font-bold">
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                {/* <TableHead>Marca</TableHead> */}
                <TableHead>Unidad</TableHead>
                {/* <TableHead>Unidades por paquete</TableHead> */}
                {/* <TableHead>Costo unitario</TableHead> */}
                {/* <TableHead>Precio sugerido</TableHead> */}
                <TableHead>Precio</TableHead>
                <TableHead>Inventario</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Última Compra</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.length ? (
                data.map((Product) => (
                  <TableRow key={Product.id}>
                    <TableCell>{Product.id}</TableCell>
                    <TableCell>{Product.name}</TableCell>
                    <TableCell>{Product.category}</TableCell>
                    {/* <TableCell>{Product.brand}</TableCell> */}
                    <TableCell>{Product.unit}</TableCell>
                    {/* <TableCell>{Product.unitsPerPackage}</TableCell> */}
                    {/* <TableCell>${Product.unitCost.toFixed(2)}</TableCell> */}
                    {/* <TableCell>${suggestedPriceOperation(Product.unitsPerPackage, Product.unitCost).toFixed(2)}</TableCell> */}
                    <TableCell>${Product.currentPrice.toFixed(2)}</TableCell>
                    <TableCell>{Product.stock}</TableCell>
                    <TableCell>
                      <Badge className={getStockStatus(Product.stock).className}>
                        {getStockStatus(Product.stock).label}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{new Date(Product.lastPurchase).toLocaleDateString()}</TableCell>

                    <TableCell>
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>

                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={11}
                    className="h-24 text-center"
                  >
                    Sin resultados
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
    </div>

  )
}