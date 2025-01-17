import React, { useEffect, useState } from "react";

type Props = {};

import { HTML, CSS } from "@contents/Data";
import Link from "next/link";

export default function SearchBox({}: Props) {
  const [searchField, setSearchField] = useState("");
  const [searchContents, setSearchContents] = useState<{ id: number; name: string; link: string }[]>([]);

  useEffect(() => {
    const filteringContents = [...HTML, ...CSS].filter((content) => {
      if (searchField.length == 0) return;

      return content.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    setSearchContents(filteringContents);
  }, [searchField]);

  return (
    <div className="relative hidden md:block">
      <input
        type="text"
        className="px-2 py-1 bg-transparent border rounded-md outline-none border-primary focus:ring-2 ring-primary/50"
        placeholder="search"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      {searchContents.length == 0 ? (
        <div></div>
      ) : (
        <ul className="absolute right-0 w-[300px] translate-y-4 bg-box dark:bg-box-d p-1 rounded-lg flex flex-col max-h-64 overflow-auto">
          {searchContents.map((content) => (
            <Link
              key={content.id}
              href={content.link}
              className="px-2 py-1 rounded-md outline-none hover:bg-white-low-opacity dark:hover:bg-white-low-opacity-d focus:bg-primary focus:text-white"
              onClick={() => setSearchContents([])}>
              {content.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
