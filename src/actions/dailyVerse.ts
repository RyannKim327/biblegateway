import axios from "axios";
import * as cheerio from "cheerio";
import { verse_result, version } from "../utils/interfaces";

let search = async (
  ver: version,
  today?: [number?, number?, number?],
): Promise<verse_result[]> => {
  let date = new Date();
  let year: number | undefined = date.getFullYear();
  let month: number | undefined = date.getMonth() + 1;
  let day: number | undefined = date.getDate();
  if (today) {
    if (today.length == 3) {
      year = today[0];
      month = today[1];
      day = today[2];
    }
  }
  let { data } = await axios.get(
    `https://www.biblegateway.com/reading-plans/verse-of-the-day/${year}/${month}/${day}?version=${ver}`,
  );
  let $ = await cheerio.load(data);
  let html = $(".rp-passage");
  let _ = [];
  let book = html.find(".rp-passage-display").text();
  let _verse = html.find(".verse").text();
  let json = {
    book: book,
    verse: _verse,
  };
  _.push(json);
  return _;
};

export default async function daily_verse(
  ver: version,
  today?: [number?, number?, number?],
) {
  // let { data } = await axios.get("https://www.biblegateway.com");
  // let $ = await cheerio.load(data);
  // let html = $(".passage-box");
  // let book = $(html).find(".citation").text();
  let verse = await search(ver, today);
  return verse;
}
