import Link from "next/link";

export default async function response() {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  const data = await response.json();

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-5 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            Утаснууд
            <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {data.products.length}
            </span>
          </h1>
          <Link
            href={`/`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200"
          >
            ← Нүүр хуудас
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.products.map((phone) => (
            <Link
              key={phone.id}
              href={`/iphones/${phone.id}`}
              className="group border border-slate-200/80 rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-52 mb-4 bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                <img
                  src={phone.thumbnail}
                  alt={phone.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                {phone.brand}
              </span>
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
                {phone.title}
              </h2>

              <div className="mt-auto flex justify-between items-center pt-2"></div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
