import { DataTable } from "@/src/components/DataTable";
export default function Inventory() {

  const products = [
  {
    id: 1,
    name: "Agua Mineral",
    category: "Agua",
    brand: "Marca A",
    unit: "Pieza",
    unitsPerPackage: 4,
    unitCost: 100,
    currentPrice: 30,
    stock: 12,
    lastPurchase: "2024-06-01",
    active: true,
  },
  {
    id: 2,
    name: "Coca Cola 600ml",
    category: "Refresco",
    brand: "Marca B",
    unit: "Pieza",
    unitsPerPackage: 4,
    unitCost: 100,
    currentPrice: 30,
    stock: 8,
    lastPurchase: "2024-06-01", 
    active: true,
  },
  {
    id: 3,
    name: "Pepsi 600ml",
    category: "Refresco",
    brand: "Marca C",
    unit: "Pieza",
    unitsPerPackage: 4,
    unitCost: 100,
    currentPrice: 30,
    stock: 0,
    lastPurchase: "2024-06-01",
    active: true,
  },
]
  return (
    <div>
      <DataTable data={products} />
    </div>
  );
}