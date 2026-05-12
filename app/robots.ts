export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: "https://my-blog-chi-blue.vercel.app/sitemap.xml",
    };
}