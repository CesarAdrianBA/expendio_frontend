interface Props {
  nombre: string
  precio: number
}

export default function ProductCard({
  nombre,
  precio
}: Props) {
  return (
    <div className="border rounded-xl p-4">
      <h2>{nombre}</h2>
      <p>${precio}</p>
    </div>
  )
}