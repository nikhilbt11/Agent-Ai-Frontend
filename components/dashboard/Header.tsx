"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [name, setName] =
    useState("");

  useEffect(() => {
    const user =
      localStorage.getItem("user");

    if (user) {
      const parsed =
        JSON.parse(user);

      setName(parsed.name);
    }
  }, []);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h2 className="text-xl font-semibold">
          Welcome, {name}
        </h2>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
        {name?.charAt(0)}
      </div>
    </header>
  );
}