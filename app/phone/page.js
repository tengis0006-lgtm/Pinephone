import Link from "next/link";

export default async function ResponsePage({ params }) {
  const phoneData = await params;
  const id = phoneData?.id || "";
  const response = await fetch(`https://dummyjson.com{id}`);
  const phoneDetails = await response.json();

  // Хэрэв нэг бүтээгдэхүүн ирвэл массив болгож хувиргах (алдаа гарахаас сэргийлнэ)
  const productsList = phoneDetails.products
    ? phoneDetails.products
    : [phoneDetails];

  return (
    <main className="min-h-screen w-full bg-slate-50/70 py-12 px-4 sm:px-6 lg:px-8 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Дээд хэсгийн гарчиг болон буцах товч */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
              Бүх бүтээгдэхүүн
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Нийт {productsList.length} бүтээгдэхүүн олдлоо
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-black bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <span>←</span>
            <span>Нүүр хуудас</span>
          </Link>
        </div>

        {/* Бүтээгдэхүүний жагсаалт (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsList.map((item) => (
            <Link
              key={item.id}
              href={`/iphones/${item.id}`}
              className="group relative bg-white border border-slate-200/80 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Зураг болон Badge-үүд */}
              <div className="relative w-full h-56 mb-4 bg-slate-100/80 rounded-2xl overflow-hidden flex items-center justify-center p-4">
                {/* Хямдралын хувь */}
                {item.discountPercentage > 0 && (
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-500 text-white shadow-sm">
                    -{Math.round(item.discountPercentage)}%
                  </span>
                )}

                {/* Үлдэгдэл бага үед */}
                {item.availabilityStatus === "Low Stock" && (
                  <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    Цөөн үлдсэн
                  </span>
                )}

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Брэнд эсвэл Ангилал */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                  {item.brand || item.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                  <span className="text-amber-400">★</span> {item.rating}
                </span>
              </div>

              {/* Нэр */}
              <h2 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-1">
                {item.title}
              </h2>

              {/* Богино тайлбар */}
              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Доод хэсэг: Үнэ ба Үзэх товч */}
              <div className="mt-auto flex justify-between items-center pt-3.5 border-t border-slate-100">
                <div>
                  <span className="text-xs text-slate-400 block">Үнэ</span>
                  <span className="text-lg font-extrabold text-slate-950">
                    ${item.price}
                  </span>
                </div>

                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-slate-700 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  ➔
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
