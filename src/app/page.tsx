import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-center">
          Bienvenido a <span className="text-cyan-500">Expendio</span>
        </h1>
        <p className="mt-4 text-2xl text-center text-gray-600 dark:text-gray-300">
          Tu sistema de gestión de inventario y ventas para tiendas de abarrotes.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg text-lg font-semibold hover:bg-cyan-600 transition"
          >
            Ir al Dashboard
          </a>
          <a
            href="#features"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
          >
            Ver Características
          </a>
        </div>
      </main>
    </div>
  );
}
