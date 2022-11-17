import { useState } from "react";
import { LoadImages, SearchImages } from "./components/api";
import Image from "./components/image";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();
  const data = LoadImages();
  const Search = () => {
    setSearch(query);
  };
  const searchData = SearchImages(searchQ);
  console.log(searchData);

  return (
    <div>
      <div className="App">
        <h1> Seacrh images</h1>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
        <button onClick={Search}>Search</button>
      </div>
      <div className="contain">
        {searchQ
          ? searchData.map((img, key) => (
              <Image src={img.urls.thumb} key={key} />
            ))
          : data.map((img, key) => <Image src={img.urls.thumb} key={key} />)}
      </div>
    </div>
  );
};

export default App;
