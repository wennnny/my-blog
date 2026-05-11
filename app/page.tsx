// src/app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm tracking-[0.3em] text-stone-500">
          LIFE · TRAVEL · AI
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          一個關於海、城市、AI 與副業實驗的生活筆記
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-stone-600">
          記錄潛水旅行、新竹生活、AI 工具、副業實驗與個人成長。
          未來這裡也會導入 AI 旅遊推薦、文章摘要與行程產生器。
        </p>

        <div className="flex gap-4">
          <Link href="/blog" className="rounded-full bg-stone-900 px-6 py-3 text-white">
            查看文章
          </Link>
          <Link href="/about" className="rounded-full border border-stone-300 px-6 py-3">
            關於我
          </Link>
        </div>
      </section>
    </main>
  );
}