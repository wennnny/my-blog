import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
            <section className="mx-auto max-w-5xl">
                <h1 className="mb-10 text-4xl font-bold">Blog</h1>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                                <p className="mb-2 text-sm text-stone-500">
                                    {post.date}
                                </p>

                                <h2 className="mb-3 text-2xl font-bold">
                                    {post.title}
                                </h2>

                                <p className="text-stone-600">
                                    {post.excerpt}
                                </p>

                                <p className="mt-4 text-sm font-medium text-blue-600">
                                    閱讀更多 →
                                </p>

                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}