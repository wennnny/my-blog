const collabItems = [
    "品牌合作與體驗邀約",
    "潛水、旅遊、住宿與行程推廣",
    "咖啡、酒吧、生活風格內容合作",
    "AI 工具、網站建置與內容行銷合作",
    "活動場地租借與互惠曝光",
];

export default function CollabPage() {
    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
            <section className="mx-auto max-w-4xl">
                <p className="mb-3 text-sm tracking-[0.3em] text-stone-500">COLLAB</p>

                <h1 className="mb-6 text-4xl font-bold">合作邀約</h1>

                <p className="mb-8 leading-8 text-stone-600">
                    歡迎與潛水旅遊、住宿、咖啡酒吧、生活風格、AI 工具與內容行銷相關的品牌合作。
                    目前網站仍在初期建置階段，但會持續累積 SEO 內容與社群曝光。
                </p>

                <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
                    <h2 className="mb-5 text-2xl font-bold">合作方向</h2>

                    <ul className="space-y-4">
                        {collabItems.map((item) => (
                            <li key={item} className="rounded-xl bg-stone-50 p-4">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 rounded-xl bg-stone-900 p-5 text-white">
                        <p className="font-medium">聯絡方式</p>
                        <p className="mt-2 text-sm text-stone-300">
                            之後可以放 Email、IG、Threads 或合作表單連結。
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}