import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";
import AffiliateCard from "@/components/AffiliateCard";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <main className="min-h-screen bg-[#f8f4ee] px-6 py-12 text-stone-900">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[220px_1fr_320px]">

                {/* 左側浮動目錄 */}
                <aside className="hidden lg:block">
                    <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-3xl bg-white p-5 shadow-sm">
                        <p className="mb-4 text-sm tracking-[0.2em] text-stone-400">
                            CONTENTS
                        </p>

                        <nav className="space-y-3 text-sm text-stone-600">
                            {post.toc?.map((item: any) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block transition hover:text-stone-900"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* 中間文章內容 */}
                <article>
                    <Link
                        href="/blog"
                        className="mb-8 inline-block text-sm text-stone-500 hover:text-stone-900"
                    >
                        ← 回到文章列表
                    </Link>

                    <div className="mb-10 rounded-3xl bg-white px-8 py-10 shadow-sm md:px-12">
                        <p className="mb-4 text-sm tracking-[0.25em] text-stone-400">
                            DIVING · TRAVEL · JOURNAL
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                            {post.title}
                        </h1>

                        {post.coverImage && (
                            <div className="relative mb-10 h-[420px] overflow-hidden rounded-3xl shadow-sm">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <p className="mb-6 text-sm text-stone-400">{post.date}</p>

                        <p className="text-lg leading-8 text-stone-600">
                            {post.excerpt}
                        </p>
                    </div>

                    <div
                        className="
                prose prose-stone max-w-none
                rounded-3xl bg-white px-8 py-10 shadow-sm md:px-12
                prose-headings:font-bold
                prose-h1:text-3xl
                prose-h2:mt-12 prose-h2:text-2xl
                prose-h3:text-xl
                prose-h2:scroll-mt-24
                prose-h3:scroll-mt-24
                prose-p:leading-8
                prose-li:leading-8
                prose-blockquote:border-l-stone-300
                prose-blockquote:text-stone-600
                prose-hr:hidden
                prose-img:my-10
                prose-img:w-full
                prose-img:rounded-3xl
                prose-img:object-cover
                prose-img:shadow-md
            "
                        dangerouslySetInnerHTML={{
                            __html: post.contentHtml,
                        }}
                    />
                </article>

                {/* 右側推薦欄 */}
                <aside className="space-y-6">
                    <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto space-y-6">
                        <div className="rounded-3xl bg-white p-6 shadow-sm">
                            <p className="mb-2 text-sm tracking-[0.2em] text-stone-400">
                                ABOUT
                            </p>

                            <h3 className="mb-3 text-xl font-bold">關於這個網站</h3>

                            <p className="text-sm leading-7 text-stone-600">
                                記錄潛水旅行、新竹生活、AI 工具與副業實驗，
                                分享海島旅遊與內容變現的實作紀錄。
                            </p>

                            {post.affiliate?.map((item: any) => (
                                <AffiliateCard
                                    key={item.title}
                                    title={item.title}
                                    description={item.description}
                                    href={item.href}
                                    buttonText={item.buttonText}
                                />
                            ))}

                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}