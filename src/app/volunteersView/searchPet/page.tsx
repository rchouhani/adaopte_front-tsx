'use client'

import AnimalGrid from "@/app/components/AnimalGrid";
import SearchBar from "@/app/components/SearchBar";


export default function SearchPet() {
  return (
    <>
      <SearchBar />
      <AnimalGrid />
    </>
  );
}