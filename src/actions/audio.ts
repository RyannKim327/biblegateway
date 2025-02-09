import axios from "axios";
import * as cheerio from "cheerio";

import { audio_result, audio_version } from "./../utils/interfaces";

let detect = (_book: string) => {
  let b = _book.replace(/\s/gi, "").toLowerCase();
  let book = "gen";
  let list = [
    "gen",
    "exod",
    "lev",
    "num",
    "deut",
    "josh",
    "judg",
    "ruth",
    "1sam",
    "2sam",
    "1kgs",
    "2kgs",
    "1chr",
    "2chr",
    "ezra",
    "neh",
    "esth",
    "job",
    "ps",
    "prov",
    "eccl",
    "song",
    "isa",
    "jer",
    "lam",
    "ezek",
    "dan",
    "hos",
    "joel",
    "amos",
    "obad",
    "jonah",
    "mic",
    "nah",
    "hab",
    "zeph",
    "hag",
    "zech",
    "mal",

    "matt",
    "mark",
    "luke",
    "john",
    "acts",
    "rom",
    "1cor",
    "2cor",
    "gal",
    "eph",
    "phil",
    "col",
    "1thess",
    "2thess",
    "1tim",
    "2tim",
    "titus",
    "phlm",
    "heb",
    "jas",
    "1pet",
    "2pet",
    "1john",
    "2john",
    "3john",
    "jude",
    "rev",
  ];
  for (let l in list) {
    if (b.startsWith(list[l])) {
      book = list[l];
      break;
    }
  }
  if (b.startsWith("1king")) {
    book = "1kgs";
  } else if (b.startsWith("2king")) {
    book = "2kgs";
  } else if (b.startsWith("philemon")) {
    book = "phlm";
  } else if (b.startsWith("james")) {
    book = "jas";
  }
  return book;
};

export default async function audio(
  book_and_chapter: string,
  version: audio_version,
): Promise<audio_result> {
  let result: audio_result = {
    result_code: 404,
    mp3: "Undefined audio, please read the documentation.",
  };
  if (version.startsWith("audio")) {
    let vers = version.split(" ")[1];
    let book = detect(book_and_chapter);
    let chapter = book_and_chapter.split(" ")[1];
    if (book_and_chapter.split(" ").length > 2)
      chapter = book_and_chapter.split(" ")[2];
    book_and_chapter = `${book}.${chapter}`;

    let { data } = await axios.get(
      `https://www.biblegateway.com/audio/${vers}/${book_and_chapter}`,
    );
    const $ = (await cheerio.load(data)) ?? "";
    const source = $("#audio-player-element")?.children("source") ?? "";
    const au = source.attr() ?? { src: "" };
    const copy = await $("div[class='copyright-text']")
      .text()
      .replace(/\n/gi, "")
      .replace(/  /gi, "");

    result = {
      result_code: 200,
      mp3: au["src"],
      copyright: copy,
    };
  }
  //console.log(result.data)
  return result;
}
