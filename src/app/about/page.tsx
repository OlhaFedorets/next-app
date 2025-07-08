import Link from "next/link";

export const metadata = {
    title: "Страница о компани",
    description: "Информация о нашей компании",
}

export default function AboutPage() {
    return (
        <>
            <h1>Страница о нашей компании</h1>
            <Link href="/">На главную</Link>
        </>
    )
}