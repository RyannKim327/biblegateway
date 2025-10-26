import axios from "axios";
import * as cheerio from "cheerio";
import { verse_result, version } from "../utils/interfaces";
import { ENG_KING_JAMES_VERSION } from "./version";
import baybayin from "./baybayin";

let search = async (
  version?: version,
  today?: [number?, number?, number?],
): Promise<verse_result> => {
  if (!version) {
    version = ENG_KING_JAMES_VERSION;
  }

  let isBaybayin = version.startsWith("baybay-");

  if (isBaybayin) {
    version = version.substring("baybay-".length);
  }

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
    // https://www.biblegateway.com/reading-plans/verse-of-the-day/2025/10/27?version=KJV&interface=print
    `https://www.biblegateway.com/reading-plans/verse-of-the-day/${year}/${month}/${day}?version=${version}&interface=print`,
  );

  let $ = await cheerio.load(data);
  let html = $(".rp-passage");
  let book = html.find(".rp-passage-display").text();
  let v = html.find("div.rp-passage-text")[0];
  const spans = $(v).find("p > span");
  const contents: string[] = [];

  spans.each((i: number, c: any) => {
    const text: string = $(c).text();
    if (isBaybayin) {
      contents.push(baybayin(text));
    } else {
      contents.push(text);
    }
  });

  let json = {
    book: book,
    verses: contents,
  };

  return json;
};

export default async function daily_verse(
  version?: version,
  today?: [number?, number?, number?],
) {
  // let { data } = await axios.get("https://www.biblegateway.com");
  // let $ = await cheerio.load(data);
  // let html = $(".passage-box");
  // let book = $(html).find(".citation").text();
  let verse = await search(version, today);
  return verse;
}
