export default function Home() {
  return (
    <main className="bg-[#fefdfb] min-h-screen font-sans">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">KurvyLab Wellness</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          Premium herbal solutions for women’s inner beauty, urinary health, and overall wellness.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition">
          Lihat Produk
        </button>
      </section>
    </main>
  );
}