import Link from "next/link";

export default async function response({ params }) {
  const phoneData = await params;
  const id = phoneData.id;
  const response = await fetch("https://dummyjson.com/products/" + id);
  const phoneDetails = await response.json();

  return (
    <main className="min-h-screen w-full bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phoneDetails.products?.map((phoneData) => (
          <Link
            key={phoneData.id}
            href={`/iphones/${phoneData.id}`}
            className="group border border-slate-200/80 rounded-2xl p-4 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-52 mb-4 bg-slate-100/70 rounded-xl overflow-hidden flex items-center justify-center p-3">
              <img
                src={phoneData.thumbnail}
                alt={phoneData.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-500 mb-1">
              {phoneData.brand}
            </span>

            <h2 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-3">
              {phoneData.title}
            </h2>

            <div className="mt-auto flex justify-between items-center pt-3 border-t border-slate-100">
              <span className="text-lg font-extrabold text-slate-900">
                ${phoneData.price}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
                ⭐ {phoneData.rating}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
