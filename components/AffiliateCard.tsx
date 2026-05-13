type AffiliateCardProps = {
    title: string;
    description: string;
    href: string;
    buttonText?: string;
};

export default function AffiliateCard({
    title,
    description,
    href,
    buttonText = "查看推薦",
}: AffiliateCardProps) {
    return (
        <div className="my-8 rounded-3xl border border-stone-200 bg-[#f8f4ee] p-6 shadow-sm">
            <p className="mb-2 text-sm font-medium tracking-[0.2em] text-stone-400">
                RECOMMEND
            </p>

            <h3 className="mb-3 text-2xl font-bold text-stone-900">{title}</h3>

            <p className="mb-5 leading-7 text-stone-600">{description}</p>

            <a
                href={href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white"
            >
                {buttonText}
            </a>
        </div>
    );
}