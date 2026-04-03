import { verse_result, version } from "../utils/interfaces";
import { ENG_KING_JAMES_VERSION } from "./version";

import axios from "axios";
import * as cheerio from "cheerio";
import baybayin from "./baybayin";

let search = async (
  passage: string,
  version?: version,
): Promise<verse_result> => {
  // TODO: Setting up as default version

  if (!version) {
    version = ENG_KING_JAMES_VERSION;
  }

  let isBaybayin = version.startsWith("baybay-");

  if (isBaybayin) {
    version = version.substring("baybay-".length);
  }

  let { data } = await axios.get(
    `https://www.biblegateway.com/passage/?search=${passage}&version=${version}&interface=print`,
  );

  let $ = await cheerio.load(data);

  if (
    $.text().trim().includes("No Results Found.") ||
    $.text()
      .trim()
      .includes(
        "No valid results were found for your search. Try refining your search using the form above.",
      )
  ) {
    return {
      book: "No results found",
      verses: [],
    };
  }

  let html = $(".passage-table")[0];

  const contents: string[] = [];
  let base = $(html).find(
    `div[class='passage-col passage-col-mobile version-${version}']`,
  );

  let book: string = $(base)
    .find(".dropdown-display-text")
    .first()
    .text()
    .trim();

  if (isBaybayin) {
    book = baybayin(book);
  }

  const v = $(base).find("div.passage-text");
  const p = $(v).find("p > span.text");

  p.each((i: number, c: any) => {
    const text: string = $(c).text();
    if (isBaybayin) {
      contents.push(baybayin(text));
    } else {
      contents.push(text);
    }
  });

  let json: verse_result = {
    book: book,
    verses: contents,
  };
  return json;
};

export default async function verse(
  passage: string,
  version?: version,
): Promise<verse_result> {
  let data: verse_result = await search(passage, version);
  return data;
}
