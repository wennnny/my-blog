const aiFeatures = [
    {
        title: "AI 文章摘要",
        description: "讓讀者可以快速看完每篇文章重點。",
    },
    {
        title: "AI 旅遊推薦",
        description: "依照預算、天數、地點與偏好推薦旅遊行程。",
    },
    {
        title: "AI 潛水問答",
        description: "根據網站內容回答新手潛水常見問題。",
    },
    {
        title: "AI 行程產生器",
        description: "輸入目的地與天數，自動產生旅遊規劃。",
    },
];

export default function AIPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
            <section className="mx-auto max-w-6xl">
                <p className="mb-3 text-sm tracking-[0.3em] text-stone-500">
                    AI ROADMAP
                </p>

                <h1 className="mb-6 text-4xl font-bold">未來 AI 功能規劃</h1>

                <p className="mb-10 max-w-2xl leading-8 text-stone-600">
                    這個網站未來不只會是部落格，也會逐步加入 AI 功能，
                    讓旅遊規劃、文章閱讀與內容推薦變得更方便。
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    {aiFeatures.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                        >
                            <h2 className="mb-3 text-xl font-bold">{feature.title}</h2>
                            <p className="text-sm leading-6 text-stone-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}