const posts = [
    {
        title: "小琉球潛水新手攻略：第一次下水前要知道的事",
        category: "潛水旅遊",
        date: "2026.05.12",
        excerpt: "整理潛水新手需要準備的裝備、預算、季節與注意事項。",
    },
    {
        title: "新竹下班後去哪裡？工程師的微醺生活地圖",
        category: "新竹生活",
        date: "2026.05.12",
        excerpt: "從咖啡、紅白酒到深夜放鬆空間，記錄新竹的生活提案。",
    },
    {
        title: "用 AI 開始副業：從內容網站到分潤部落格",
        category: "AI 工具",
        date: "2026.05.12",
        excerpt: "如何用 AI 協助寫文章、整理 SEO、規劃網站內容。",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
            <section className="mx-auto max-w-6xl">
                <p className="mb-3 text-sm tracking-[0.3em] text-stone-500">BLOG</p>
                <h1 className="mb-6 text-4xl font-bold">文章列表</h1>
                <p className="mb-10 max-w-2xl text-stone-600">
                    這裡會收錄潛水旅行、新竹生活、AI 工具、副業實驗與咖啡酒吧相關文章。
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.title}
                            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                        >
                            <p className="mb-3 text-sm text-stone-500">
                                {post.category} · {post.date}
                            </p>
                            <h2 className="mb-3 text-xl font-bold">{post.title}</h2>
                            <p className="text-sm leading-6 text-stone-600">{post.excerpt}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}