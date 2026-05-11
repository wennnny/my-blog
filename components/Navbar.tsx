import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-stone-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                <Link href="/" className="text-xl font-bold">
                    Wen Blog
                </Link>

                <div className="flex gap-6 text-sm">
                    <Link href="/blog">部落格 Blog</Link>
                    <Link href="/about">關於我 About</Link>
                    <Link href="/collab">合作 Collab</Link>
                    <Link href="/ai">旅遊代理 AI</Link>
                </div>

            </div>
        </nav>
    );
}