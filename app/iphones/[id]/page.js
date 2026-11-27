import Link from "next/link";

export default async function PhoneDetailPage({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products//${id}`);

  if (!response.ok) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 max-w-md w-full">
          <div className="text-5xl mb-4">😢</div>
          <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
            {id} дугаартай утас олдсонгүй
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Таны хайсан бүтээгдэхүүн устгагдсан эсвэл буруу хаяг байна.
          </p>
          <Link
            href="/phones"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
          >
            ← Утаснууд руу буцах
          </Link>
        </div>
      </main>
    );
  }

  const phone = await response.json();

  return (
    <main className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/iphones"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white text-slate-700 hover:text-indigo-600 rounded-full border border-slate-200/80 shadow-sm hover:shadow transition-all duration-200 font-medium text-sm"
        >
          ← Утаснууд руу буцах
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50/40 rounded-2xl p-8 border border-slate-100/80 group">
            <img
              src={phone.thumbnail}
              alt={phone.title}
              className="max-h-96 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                {phone.brand}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                {phone.title}
              </h1>
            </div>

            <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-100">
              <span className="text-3xl font-black text-slate-900">
                ${phone.price}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200/60 rounded-full text-sm font-semibold">
                ⭐ {phone.rating}
              </span>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              {phone.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
