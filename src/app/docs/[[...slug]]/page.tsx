export default async function Docs({params}: {params: Promise<{slug: string[]}>}) {

    const {slug} = await params;

if (!slug || !slug.length) {
    return <h1>Главная страница:</h1>
}

if (slug.length===1) {
    return <h1>Раздел {slug[0]}</h1>
}

if (slug.length===2) {
    return <h1>Подраздел {slug[1]} раздела {slug[0]}</h1>
}

if (slug.length===3) {
    return <h1>Категроия {slug[2]} в подразделе {slug[1]} раздела {slug[0]}</h1>
}

    return <h1>Глубока вложенность: {slug.join("/")}</h1>
}