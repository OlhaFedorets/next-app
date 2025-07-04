import CommentSelector from "@/app/posts/[postId]/comments/_components/CommentSelector";

export default async function CommentPage({
                                              params
                                          }: {
    params: Promise<{ postId: string; commentId: string }>
}) {
    const {postId, commentId} = await params;
    const comment = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${commentId}?postId=${postId}`
    ).then(res => res.json());
    return (
        <div>
            <h1 className="text-2x1">Comment # {comment.id}</h1>
            <p>{comment.body}</p>
            <p className="text-amber-600">Author: {comment.email}</p>
            <CommentSelector/>
        </div>
    )
}