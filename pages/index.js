import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  let [repo, setRepo] = useState([]);
  let [loading, setLoading] = useState(true);
  let [dota, setDot] = useState([]);
  let [emojia, setEmoji] = useState([]);

  const url = "https://catfact.ninja/fact";
  // fetch data .
  function getData() {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setRepo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function dot() {
    return dots[Math.floor(Math.random() * dots.length)];
  }
  function emoji() {
    return emojiArray[Math.floor((Math.random() * emoji.length) / 2)];
  }
  // put it inside useEffect hook .
  useEffect(() => {
    let interval = setInterval(() => {
      getData();
      setLoading(!loading);
      setDot(dota);
      setEmoji(emojia);
    }, 5000);

    return () => clearInterval(interval);
  }, [loading]);

  const emojiArray = [
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
  ];
  const dots = ["...", "..", "."];
  return (
    <div data-reactroot='' className={styles.text}>
      <h3 className={styles.h3}>Featched Data {emoji()}</h3>
      <h1>New fact every 5 sec </h1>

      <h4>{!repo.fact ? "loading ..." : repo.fact}</h4>

      <h6 style={{ color: "#F0F8FF", fontSize: "15px" }}>
        {repo.fact ? "Loading new one  " : ""}
        {dot()}
      </h6>
    </div>
  );
}
