import Button from "@/components/Button";
import Link from "next/link";


const AboutPage = () => {
    console.log("Мы создаем серверный компонент")
    const lastUpdated = new Date().toISOString();
    return (<div className="p-8">
        <h1 className="text-2x1 font-bold">О нашей компании</h1>
        <p className="mt-4">Эта страница полностью отображаеся на сервере. Для этого компонента JavaScript не отпвляется в браузер</p>
        <div>
            <p>Последнее обновление: {lastUpdated}</p>
            <Button/>
        </div>
        <Link className="text-cyan-400" href="/">На главную</Link>
    </div>)
}

export default AboutPage