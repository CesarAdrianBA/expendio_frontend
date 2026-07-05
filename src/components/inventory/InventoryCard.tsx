// Carta para mostrar detalle de un producto en el inventario enviado desde el padre InventoryList
import Image from "next/image";
import { useEffect, useState } from "react";

interface InventoryCardProps {
    product: {
        id: number;
    };
}

type ProductDetails = {
    id_producto: number;
    nombre: string;
    unidad: string;
    unidades_por_paquete: number;
    costo_unitario: number;
    precio_sugerido: number;
    precio_actual: number;
    active: boolean;
}

export async function getProductDetails(productId: number) {
  const response = await fetch(`http://localhost:3000/api/v1/product/${productId}`);
    if (!response.ok) {
        throw new Error("Error al obtener detalles del producto");
    }
    return response.json();
}


export default function InventoryCard({ product }: InventoryCardProps) {

    const [details, setDetails] = useState<ProductDetails | null>(null);

    useEffect(() => {
        getProductDetails(product.id)
            .then(details => {
                setDetails(details?.data);
            })
            .catch(error => {
                console.error("Error al obtener detalles del producto:", error);
            });
    }, [product.id]);

    return (
        <div className="bg-white rounded-lg shadow-md p-4 width-full flex gap-4 height-full">
            {details && (
                <div className="flex-1 flex flex-col gap-1 justify-top">
                    <h2 className="text-lg font-semibold">Nombre: {details.nombre}</h2>
                    <p className="text-sm text-gray-600">ID: {details.id_producto}</p>
                    <p className="text-sm text-gray-600">Unidad: {details.unidad}</p>
                    <p className="text-sm text-gray-600">Unidades por paquete: {details.unidades_por_paquete}</p>
                    <p className="text-sm text-gray-600">Costo unitario: ${details.costo_unitario}</p>
                </div>
            )}
        </div>
    );
}
