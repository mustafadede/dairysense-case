"use client";

import { useTranslations } from "next-intl";

function SearchInput() {
  const t = useTranslations("HomePage");
  return (
    <label className="input">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        className="grow hidden md:flex"
        placeholder={t("search")}
      />
      <kbd className="kbd hidden md:flex kbd-sm">/</kbd>
    </label>
  );
}

export default SearchInput;
