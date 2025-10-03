import { useParams , useNavigate } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const postDetails = {
        1: {title: "Post #1", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus possimus neque nihil laudantium debitis praesentium, ipsam veniam sint explicabo vitae iure dolorem consequuntur repellat tenetur."},
        2: {title: "Post #2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas iste ipsa corrupti laudantium adipisci deleniti natus officia debitis amet reprehenderit, earum odio, quod perferendis."},
        3: {title: "Post #3", content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maiores ex perspiciatis vitae maxime animi. Vitae cum quos aliquid laboriosam quisquam pariatur earum inventore provident."}
    }

    const post = postDetails[id];

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button onClick={() => navigate("/posts")}>Back to Posts</button>
        </div>
    )
}