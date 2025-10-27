import React from "react";

export default function SearchBar({ value, onChange, onSubmit, loading }) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
      className="flex gap-2 w-full max-w-xl mx-auto"
    >
      <input
        className="flex-1 p-2 rounded border"
        placeholder="Enter an ingredient (e.g. chicken, tomato)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="ingredient"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-60"
        disabled={loading || !value.trim()}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  );
}
