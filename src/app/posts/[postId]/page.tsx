import type {Metadata} from "next";

interface Post {
    id: number;
    title: string;
    body: string;
}

type Props = {
    params: Promise<{ postId: string }>
}

async function getPost(id: string): Promise<Post> {
try {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
if (!res.ok) throw new Error(`Ощибка ответа сервера: ${res.status}`);
    return await res.json()
} catch (error) {
    console.error(`Не удалось получить данные`,error);
    throw error;
}
}

export const generateMetadata = async ({
                                          params
                                      }: Props): Promise<Metadata> => {
    const {postId} = await params
    const post = await getPost(postId)

    return {
        title: `${post.title} | My Blog`,
        description: post.body.slice(0, 160),
    }
}


export default async function PostPage({params}: Props) {
    const {postId} = await params;
    const post = await getPost(postId)
    return <div>
        <h1 className="text-2x1">{post.title}</h1>
        <p>{post.body}</p>
    </div>
}

// export default async function PostPage({params}: { params: Promise<{ postId: string }> }) {
//     const {postId} = await params;
//     const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
//     return <div>
//         <h1 className="text-2x1">{post.title}</h1>
//         <p>{post.body}</p>
//     </div>
// }