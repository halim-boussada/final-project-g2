import "./posts.css"
import Link from "next/link";

type Post = {
id : number;
  title: string;
  body: string;
};

export default async function Posts() {
  const { posts } = await fetch("https://dummyjson.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div className="posts-list">
      {posts?.map((Post: Post) => {
       return <div  key={Post.id}>
          <h3 >{Post.title}</h3>
          <h3 >{Post.body}</h3>
        <Link href={"/dashboard/posts/" + Post.id} className="Post-link" >Go to details</Link>
        </div>;
      })}
    </div>
  );
}
