'use client'
import { DataTable } from "@/src/components/DataTable";
import { useEffect, useState } from "react";


export async function getProducts() {
  const response = await fetch("http://localhost:3000/api/v1/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }
  return response.json();
}

export default function Inventory() {

  // const products = [
  // {
  //   id: 1,
  //   name: "Agua Mineral",
  //   category: "Agua",
  //   brand: "Marca A",
  //   unit: "Pieza",
  //   unitsPerPackage: 4,
  //   unitCost: 100,
  //   currentPrice: 30,
  //   stock: 12,
  //   lastPurchase: "2024-06-01",
  //   active: true,
  // },
  // {
  //   id: 2,
  //   name: "Coca Cola 600ml",
  //   category: "Refresco",
  //   brand: "Marca B",
  //   unit: "Pieza",
  //   unitsPerPackage: 4,
  //   unitCost: 100,
  //   currentPrice: 30,
  //   stock: 8,
  //   lastPurchase: "2024-06-01", 
  //   active: true,
  // },
  // {
  //   id: 3,
  //   name: "Pepsi 600ml",
  //   category: "Refresco",
  //   brand: "Marca C",
  //   unit: "Pieza",
  //   unitsPerPackage: 4,
  //   unitCost: 100,
  //   currentPrice: 30,
  //   stock: 0,
  //   lastPurchase: "2024-06-01",
  //   active: true,
  // },
  // ]


const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getProducts();
      setProducts(response.data.map((product: any) => ({
        id: product.id_producto,
        name: product.nombre,
        category: product.categoria.nombre,
        brand: product.marca.nombre,
        currentPrice: product.precio_actual,
        stock: product.stock_actual,
        lastPurchase: product.ultima_compra,
        active: product.active
      })));
    };

    loadProducts();
}, []);

  return (
    <div>
      <DataTable data={products} />
    </div>
  );
}