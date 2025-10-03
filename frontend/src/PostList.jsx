import { useNavigate } from "react-router-dom";

export default function PostList() {
    const navigate = useNavigate();

    const posts = [
        {id: 1, title: "Post #1", message: "This is a test post based on the person #1"},
        {id: 2, title: "Post #2", message: "This is a test post based on the person #2"},
        {id: 3, title: "Post #3", message: "This is a test post based on the person #3"}
    ];

    return (
        <div className="post-container">
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.message}</p>
                        <button onClick={() => navigate(`/posts/${post.id}`)}>Read More</button>
                    </div>
                ))
            }
        </div>
    )
}