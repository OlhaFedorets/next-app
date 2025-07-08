import Link from "next/link";

export default async function NewsArticle({
                                        params,
                                        searchParams
                                    }: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ language?: "ru" | "en" | "fr" | "de" | undefined }>;
}) {
const {articleId} = await params;
const {language = "ru"} = await searchParams;

return (
    <div>
        <h1>News: {articleId}</h1>
        <p>Language: {language}</p>
        <div>
            <Link href={`/articles/${articleId}?language=ru`}>Читать по-русски</Link>
            <br/>
            <Link href={`/articles/${articleId}?language=en`}>Читать по-английски</Link>
            <br/>
            <Link href={`/articles/${articleId}?language=fr`}>Читать по-французски</Link>
            <br/>
            <Link href={`/articles/${articleId}?language=de`}>Читать по-немецки</Link>
        </div>
    </div>

)
}