"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type User = {
  image: string;
  firstName: string;
  lastName: string;
};
export default function UserInfo() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => res.json());
        if (!userData.firstName) {
          router.push("/login");
        }
        setUser(userData);
      } catch (err) {
        router.push("/login");
      }
    }
    getUserData();
  }, []);

  return (
    <div className="user-sidebare-info">
      <div className="user-avatar">
        <img src={user?.image} alt="" />
      </div>
      <div className="user-name">
        <h3>
          {user?.firstName} {user?.lastName}
        </h3>
      </div>
    </div>
  );
}
