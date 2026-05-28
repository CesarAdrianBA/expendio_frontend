interface Props {
  nombre: string
  valor: number
}

export default function StadisticCard({
    nombre,
    valor
}: Props) {
  return (
    <div className="border rounded-xl p-4 shadow flex flex-col items-center justify-around min-h-[250px] bg-white">
      <h2 className="text-lg font-semibold mb-2">{nombre}</h2>
      <p className="text-2xl font-bold">{valor.toFixed(0)}</p>
    </div>
  )
}