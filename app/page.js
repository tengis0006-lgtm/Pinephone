import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 flex flex-col justify-center items-center px-6 selection:bg-black selection:text-white">
      <div className="max-w-2xl text-center flex flex-col items-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950">
          iPhone Shop
        </h1>

        <p className="text-slate-500 text-base md:text-lg max-w-md font-medium tracking-wide">
          SHINE UTASAA ENDEES SONGO
        </p>

        <div className="pt-4">
          <Link
            href="/iphones"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-sm md:text-base font-semibold rounded-full shadow-lg shadow-black/20 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>UTASNUUD UZEH</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              ➔
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
