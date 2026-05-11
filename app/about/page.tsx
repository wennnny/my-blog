export default function AboutPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
            <section className="mx-auto max-w-4xl">
                <p className="mb-3 text-sm tracking-[0.3em] text-stone-500">ABOUT</p>

                <h1 className="mb-6 text-4xl font-bold">關於這個網站</h1>

                <div className="space-y-6 rounded-2xl border border-stone-200 bg-white p-8 leading-8 shadow-sm">
                    <p>
                        這是一個記錄生活、旅行、AI 工具與副業實驗的個人部落格。
                        我希望它不只是單純的文章網站，而是未來可以慢慢變成一個結合內容、工具與合作推廣的平台。
                    </p>

                    <p>
                        這裡會分享潛水旅遊、新竹生活、咖啡酒吧、AI 工具使用心得，
                        也會記錄我如何從零開始建立自己的網站、內容品牌與被動收入系統。
                    </p>

                    <p>
                        未來網站會逐步加入 AI 功能，例如文章摘要、旅遊推薦、行程產生器與互動式問答。
                    </p>
                </div>
            </section>
        </main>
    );
}