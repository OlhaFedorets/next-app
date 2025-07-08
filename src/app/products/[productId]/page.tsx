import type {Metadata} from "next";

type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({
                                           params
}: Props): Promise<Metadata> => {
    const id = (await params).productId

    return {
        title: `Продукт ${id}`,
        description: `Продукт ${id} - хит продаж`,
    }
}

export default async function ProductDetails({params}: Props) {
const productId = (await params).productId
    return <>
        <h1>Product description {productId}</h1>
    </>
}

// export default async function ProductDetails({params}: {params: Promise<{productId: string}>}) {
// const productId = (await params).productId
//     return <>
//         <h1>Product description {productId}</h1>
//     </>
// }