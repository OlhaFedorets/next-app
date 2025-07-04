import Link from "next/link";

export default function Home() {

    return (
        <div>
            <h1>Главная страница</h1>
            <nav>
                <h2>Документация</h2>
                <ul>
                    <li>
                        <Link href="/docs">Общий раздел</Link>
                    </li>
                    <li>
                        <Link href="/docs/react">Реакт</Link>
                    </li>
                    <li>
                        <Link href="/docs/react/hooks">Хуки</Link>
                    </li>
                    <li>
                        <Link href="docs/react/hooks/useState">Хук useState</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
