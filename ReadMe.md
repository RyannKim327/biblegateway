# Biblegateway scrape

### MPOP Reverse II

---

> This is just a simple webscrape of biblegateway, since I having some difficulties in finding tagalog bible api. [Full documentation](/DOCS.md)

---

## Text Verse:

### How to install:

```Bash
npm i biblegateway-scrape@latest
```

### How to use (NodeJS): .verse(verse, version)

> Requested verse

```Nodejs
const biblegateway = require("biblegateway-scrape")

let x = async () => {
	let result = await biblegateway.verse("John 3:16", biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905)
	console.log(result)
}

x()
```

### Output (JSON array):

```JSON
[
  {
    "book": "Juan 3:16",
    "verse": "16 Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan. "
  }
]
```

---

### How to use (NodeJS): .daily_verse(version [, [year(int), month(int), date(int)] ])

> Daily verse

```Nodejs
const biblegateway = require("biblegateway-scrape")

let x = async () => {
	let result = await biblegateway.daily_verse(biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905)
	console.log(result)
}

let sampleWithDate = async () => {
  let date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	let result = await biblegateway.daily_verse(biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905, [year, month, day])
	console.log(result)
}

x()
```

---

### Versions:

#### Cebuano

- CEB_ANG_PULONG_SA_DIOS

#### Ilonngo

- ILO_ANG_PULONG_SANG_DIOS_HLGN

#### English

- ENG_KJV_21
- ENG_AMERICAN_STANDARD_VERSION
- ENG_AMPLIFIED_BIBLE
- ENG_AMPLIFIED_BIBLE_CLASSIC
- ENG_BRG_BIBLE
- ENG_CHRISTIAN_STANDARD_BIBLE
- ENG_COMMON_ENLISH_BIBLE
- ENG_COMPLETE_JEWISH_BIBLE
- ENG_CONTEMPORARY_ENGLISH_VERSION
- ENG_DARBY_TRANSLATION
- ENG_DISIPLES_LITERAL_NEW_TESTAMENT
- ENG_DOUAY_RHEIMS_1899
- ENG_EASY_TO_READ_VERSION
- ENG_EVANGELICAL_HERITAGE_VERSION
- ENG_ENLISH_STANDARD_VERSION
- ENG_ENLISH_STANDARD_VERSION_ANGLICISED
- ENG_EXPANDED_BIBLE
- ENG_1599_GENEVA_BIBLE
- ENG_GODS_WORD_TRANSLATION
- ENG_GOOD_NEWS_TRANSLATION
- ENG_HOLMAN_CHRISTIAN_STANDARD_BIBLE
- ENG_INTERNATIONAL_CHILDRENS_BIBLE
- ENG_INTERNATIONAL_STANDARD_VERSION
- ENG_JB_PHILLIPS_NEW_TESTAMENT
- ENG_JUBILEE_BIBLE_2000
- ENG_KING_JAMES_VERSION
- ENG_AUTHORIZED_KING_JAMES_VERSION
- ENG_LEXHAM_ENGLISH_BIBLE
- ENG_LIVING_BIBLE
- ENG_THE_MESSAGE
- ENG_MODERN_ENGLISH_VERSION
- ENG_MOUNCE_REVERSE_INTERLINEAR_NEW_TESTAMENT
- ENG_NAMES_OF_GOD_BIBLE
- ENG_NEW_AMERICAN_BIBLE_REVISED_EDITION
- ENG_NEW_AMERICAN_STANDARD_BIBLE
- ENG_NEW_AMERICAN_STANDARD_BIBLE_1995
- ENG_NEW_CATHOLIC_BIBLE
- ENG_NEW_CENTURY_VERSION
- ENG_NEW_ENGLISH_TRANSLATION
- ENG_NEW_INTERNATIONAL_READERS_VERSION
- ENG_NEW_INTERNATIONAL_VERSION
- ENG_NEW_INTERNATIONAL_VERSION_UK
- ENG_NEW_KING_JAMES_VERSION
- ENG_NEW_LIFE_VERSION
- ENG_NEW_LIVING_TRANSLATION
- ENG_NEW_MATTHEW_BIBLE
- ENG_NEW_REVISED_STANDARD_VERSION_ANGLICISED
- ENG_NEW_REVISED_STANDARD_VERSION_ANGLICISED_CATHOLIC_EDITION

#### Tagalog

- TAG_ANG_BAGONG_TIPAN
- TAG_ANG_BIBLIA_1978
- TAG_ANG_BIBLIA_2001
- TAG_ANG_DATING_BIBLIYA_1905
- TAG_ANG_SALITA_NG_DIYOS_TCB
- TAG_ANG_SALITA_NG_DIYOS
- TAG_MAGANDANG_BALITA
- TAG_MAGANDANG_BALITA_DC

#### Baybayin

- BAYBAYIN_ANG_BAGONG_TIPAN
- BAYBAYIN_ANG_BIBLIA_1978
- BAYBAYIN_ANG_BIBLIA_2001
- BAYBAYIN_ANG_DATING_BIBLIYA_1905
- BAYBAYIN_ANG_SALITA_NG_DIYOS_TCB
- BAYBAYIN_ANG_SALITA_NG_DIYOS
- BAYBAYIN_MAGANDANG_BALITA
- BAYBAYIN_MAGANDANG_BALITA_DC

---

## Audio:

### How to use (NodeJS): .audio(book_and_chapter, version)

```Nodejs
const biblegateway = require("biblegateway-scrape")

let x = async () => {
	let audio = await a.audio("James 1", a.audio_version.KJV_PAUL_MIMS)
	console.log(audio)
}

x()
```

### Result (JSON):

```JSON
{
	"resultCode": 200,
	"mp3": "https://stream.biblegateway.com/bibles/32/kjv-mims/Jas.1.bb77ae331a4eedfd200164ac42783056.mp3",
	"copyright": "© 2007 All Rights Reserved The Spoken Word of God."
}
```

---

### Versions:

- CSB_JON_MOHR
- ESV_MAX_MCLEAN
- ESV_MARQUIS_LAUGHLIN
- GNV_STEVE_COOK
- HCSB_DALE_MCCONACHIE
- KJV_MAX_MCLEAN
- KJV_PAUL_MIMS
- KJV_DRAMATIZED
- LEB_LOGOS
- MSG_KELLY_RYAN_DOLAN
- NASB_DALE_MCCONACHIE
- NASB1995_DALE_MCCONACHIE
- NIV_MAX_MCLEAN
- NIV_DRAMATIZED
- NIV_GEORGE_W_SARRIS
- NIVUK_DAVID_SUCHET
- NKJV_SIMON_BUBB
- NKJV_TINASHA_LARAYE
- NLT_BREATHE

### Note:

> Some errors regarding to translations may have, I still trying to fix this kind of error, that maybe on my next version, this error will be fixed. If you found an error, you may send me the version thru my [email](mailto:werysesw19@gmail.com), or thru my [facebook page](https://web.facebook.com/NOOBgrammer2001), or create an issue thru my repository on github.

### Final speech

> The program is still in development, as of now, I'm looking for some errors, specially to the others translations. If ever that you've found a version with error, kindly message my facebook page, which is mentioned above. Thank you for using, and I hope it helps. I also added baybayin scripting, but the baybayin script version has bugs still.

---

### Changes

> The project was changed from its last update, I've found some errors regarding to the other translations, or maybe one of the errors having is thru the update of the platfrorm. Another one is the ogg file was removed, so that we may only use the mp3 file format. If ever that you want to use this project, kindly give credits to the biblegateway, I'm just a way to create a better package for you to use their service. And kindly add the copyright, for you to have the permission to use their resources.

---

### Credits

> Facebook Bot

- Salvador
- John Jeremy Antiguo
- Callback Developers
- Earl Shine Sawir
- John Pau; Caigas
- Lester Navarra
- Mark Kevin Manalo
- Rovie Francisco
- Jerson Carin

> NodeJS exploration

- Mart Anthony Salazar
- John Roy Lapida Calimlim

> NPMJS Package Related

- John Paul Caigas
- Lester Navarra

> Website

- Bible Gateway
- NPMJS
- Replit
- Github
- Stackoverflow
- Facebook
- GeeksforGeeks
