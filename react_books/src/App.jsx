import {Booklist} from "./components/Booklist";
// ルートのライブラリをインストールする
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  // 関数を追加
  const getDataFromAPI = async (keyword) => {
    const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };
  const languages = ["react", "Vue", "Angular"];
  return (
    // BrowserRouter, Routes, Routeで囲む
    <BrowserRouter>
    <h1>react app</h1>
    <ul>
      <li>
        <Link to="/react">React</Link>
      </li>
      <li>
        <Link to="/vue">vue</Link>
      </li>
      <li>
        <Link to="/angular">angular</Link>
      </li>
    </ul>
    <Routes>
       {/* コンポーネントは同じのでも呼び出せる */}
      <Route path="/react" element={<Booklist languages={languages[0]} getData={getDataFromAPI} />} />
      <Route path="/vue" element={<Booklist languages={languages[1]} getData={getDataFromAPI} />} />
      <Route path="/angular" element={<Booklist languages={languages[2]} getData={getDataFromAPI} />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
