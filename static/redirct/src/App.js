import axios from "axios";
import "./App.css";
import _404 from "./404";
import Loder from "./Loder";

function App() {
  // params
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  const value = urlParam.get("page");
  console.log("value", value);

  if (value) {
    axios
      .post("https://shoetlld.store/findusers", { id: value })
      .then((result) => {
        console.log(result.data.link[0].link);
        return window.location.replace(result.data.link[0].link);
      });
  } else {
    return <_404></_404>;
  }
  return <Loder></Loder>;
}

export default App;
