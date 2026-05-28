import ChartCard from "@/src/components/dashboard/ChartCard";
import StadisticCard from "@/src/components/dashboard/StadisticCard";

export default function DashboardPage() {
  const chartMonthSalesData = [
    // bucle para generar datos de ventas del día 1 al 30
    ...Array.from({ length: 30 }, (_, i) => ({
      day: (i + 1).toString(),
      sales: Math.floor(Math.random() * 50) + 10, // Ventas aleatorias entre 10 y 60
    })),
  ]
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="p-1">
          <StadisticCard
            nombre="Ventas del día"
            valor={25}
          />
        </div>
        <div className="p-1">
                    <StadisticCard
            nombre="Ingresos del día"
            valor={1250}
          />
        </div>
        <div className="p-1">
          <StadisticCard
            nombre="Productos vendidos"
            valor={100}
          />
          </div>
        <div className="p-1">
          <StadisticCard
            nombre="Clientes atendidos"
            valor={20}
          />
        </div>
        <div className="p-1 col-span-1 md:col-span-2 lg:col-span-3 row-span-2 row-start-2">
          <ChartCard
            nombre="Ventas del mes"
            data={chartMonthSalesData}
          />
        </div>
        <div className="p-1 row-start-2">
           <StadisticCard
            nombre="Ingresos del mes"
            valor={25000}
          />
        </div>
        <div className="p-1">
          <StadisticCard
            nombre="Ganancia del mes"
            valor={2000}
          />
        </div>
      </div>
      
    </div>
  )
}