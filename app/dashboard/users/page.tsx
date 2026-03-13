"use client";

import { useDebounce } from "@/app/hooks/useDebounce";
import Image from "next/image";
import { useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
};

export default function Users() {
  const [usersList, setUsersList] = useState<User[] | null>([]);
  const [quary, setquary] = useState<string>("");
  const debounce = useDebounce(quary , 500)
  useEffect(() => {
    async function getUsers() {
      const { users } = await fetch(
        "https://dummyjson.com/users/search?q=" + debounce,
      ).then((res) => res.json());
      setUsersList(users);
    }
    getUsers();
  }, [debounce]);

  return (
    <div>
      <input
        type="text"
        placeholder="search ... "
        value={quary}
        onChange={(e) => {
          setquary(e.target.value);
        }}
      />

      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {usersList?.map((user) => {
          return (
            <div key={user.id}>
              <Image
                src={user.image}
                alt={user.firstName}
                width={300}
                height={300}
              />
              <h3>
                {user.firstName} {user.lastName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
