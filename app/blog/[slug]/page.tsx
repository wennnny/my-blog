import Link from "next/link";
import Image from "next/image";
import { getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

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

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <main className="min-h-screen bg-[#f8f4ee] px-6 py-12 text-stone-900">
            <article className="mx-auto max-w-3xl">
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

                    <p className="text-lg leading-8 text-stone-600">{post.excerpt}</p>
                </div>

                <div
                    className="
            prose prose-stone max-w-none
            rounded-3xl bg-white px-8 py-10 shadow-sm md:px-12
            prose-headings:font-bold
            prose-h1:text-3xl
            prose-h2:mt-12 prose-h2:text-2xl
            prose-h3:text-xl
            prose-p:leading-8
            prose-li:leading-8
            prose-blockquote:border-l-stone-300
            prose-blockquote:text-stone-600
            prose-hr:hidden
          "
                    dangerouslySetInnerHTML={{
                        __html: post.contentHtml,
                    }}
                />
            </article>
        </main>
    );
}