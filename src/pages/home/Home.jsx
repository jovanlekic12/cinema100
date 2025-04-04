import { useState } from "react";
import SearchSection from "./SearchSection/Index";
import TrendingSection from "./TrendingSection/Index";
import VideosSection from "./VideosSection/Index";
function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  return (
    <main className="main__container">
      <TrendingSection />
      <SearchSection
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        category={category}
      ></SearchSection>
      <VideosSection searchTerm={searchTerm} category={category} />
    </main>
  );
}

export default Home;
