import Link from "next/link";
import UserInfo from "./UserInfo";


export default function Sidebare() {
  return (
    <div className="sidebare">
     <UserInfo />
      <div className="sidebare-links">
        <Link href={"/dashboard/posts"} className="sidebare-link">
          Posts
        </Link>
        <Link href={"/dashboard/products"} className="sidebare-link">
          Products
        </Link>
        <Link href={"/dashboard/users"} className="sidebare-link">
          Users
        </Link>
      </div>
    </div>
  );
}
