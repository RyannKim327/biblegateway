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

  // TODO: Data filtering
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

  // INFO: Start
  // let content = $(base).find(".std-text");
  // if (content.html() == null) {
  //   content = $(base).find(".verse");
  // }
  // if (content.html() == null) {
  //   content = $(base).find(".woj");
  // }
  // if (content.html() == null) {
  //   content = $(base).find(".text");
  // }
  // if (content.html() == null) {
  //   base = $(e).find(
  //     `div[class='version-${version} result-text-style-normal text-html']`,
  //   );
  //   const std = base(e).find("div[class='std-text]");
  //   const p = std(e).findAll("p");
  //   content = p;
  //   console.log(p);
  // }

  // let verse = "";
  //
  // contents.map((i: number, f: unknown) => {
  //   if (isBaybayin) {
  //     verse += baybayin($(f).text()) + "\n";
  //   } else {
  //     verse += $(f).text() + "\n";
  //   }
  // });

  // TODO: End

  // if(verse == ""){
  // 	base = $(e).find(`div[class='version-${ver} result-text-style-normal text-html']`)
  // 	content = $(base).find(".woj")

  // 	console.log("test ")
  // 	verse = ""
  // }
  // content.each((i, f) => {
  // 	verse += $(f).text() + "\n"
  // })
  // if(verse == ""){
  // 	base = $(e).find(`div[class='version-${ver} result-text-style-normal text-html']`)
  // 	content = $(base).find(".text")
  // 	verse = ""
  // }
  // content.each((i, f) => {
  // 	verse += $(f).text() + "\n"
  // })
  // if(verse == ""){
  // 	base = $(e).find(`div[class='version-${ver} result-text-style-normal text-html']`)
  // 	content = base
  // 	verse = ""
  // }

  // contents.each((i, f) => {
  //	verse += $(f).text() + "\n"
  // })

  let json: verse_result = {
    book: book,
    verses: contents, // verse.replace(/\\x00/, ""),
  };
  return json;
};

export default async function verse(
  passage: string,
  ver: version,
): Promise<verse_result> {
  let data: verse_result = await search(passage, ver);
  return data;
}
