import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

type Post = {
id : number;
  title: string;
  body: string;
};

// generate 10 pages
export async function generateStaticParams(){
    const { posts } = await fetch("https://dummyjson.com/posts?limit=10").then(
    (res) => res.json(),
  );
  return posts.map((post : Post )=>{
    return post.id.toString()
  })
}

export default async function postDetails({ params }: Props) {
  const { id } = await params;
  const post = await fetch("https://dummyjson.com/posts/" + id).then(
    (res) => res.json(),
  );
  return (
    <div className="post-card">
      <h3 className="post-name">{post.title}</h3>
      <h3 className="post-price">{post.body}</h3>
      <Link href={"/dashboard/posts"} className="post-link" >Go to all posts</Link>
    </div>
  );
}
