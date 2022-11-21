# Biblegateway scrape
### MPOP Reverse II

---

> This is just a simple webscraoe of biblegateway, since I having osme difficulties in finding tagalog bible api.

### How to install:
```Bash
npm i biblegateway-scrape
```

### How to use (NodeJS):
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
    "book": 'Juan 3:16',
    "verse": "16 Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan. "
  }
]
```
---
### How to use (NodeJS):
> Daily verse
```Nodejs
const biblegateway = require("biblegateway-scrape")

let x = async () => {
	let result = await biblegateway.dailyVerse(biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905)
	console.log(result)
}

x()
```
---

### Versions:
#### Cebuano
* CEB_ANG_PULONG_SA_DIOS

#### English
* ENG_KJV_21
* ENG_AMERICAN_STANDARD_VERSION
* ENG_AMPLIFIED_BIBLE
* ENG_AMPLIFIED_BIBLE_CLASSIC
* ENG_BRG_BIBLE
* ENG_CHRISTIAN_STANDARD_BIBLE
* ENG_COMMON_ENLISH_BIBLE
* ENG_COMPLETE_JEWISH_BIBLE
* ENG_CONTEMPORARY_ENGLISH_VERSION
* ENG_DARBY_TRANSLATION
* ENG_DISIPLES_LITERAL_NEW_TESTAMENT
* ENG_DOUAY_RHEIMS_1899
* ENG_EASY_TO_READ_VERSION
* ENG_EVANGELICAL_HERITAGE_VERSION
* ENG_ENLISH_STANDARD_VERSION
* ENG_ENLISH_STANDARD_VERSION_ANGLICISED
* ENG_EXPANDED_BIBLE
* ENG_1599_GENEVA_BIBLE
* ENG_GODS_WORD_TRANSLATION
* ENG_GOOD_NEWS_TRANSLATION
* ENG_HOLMAN_CHRISTIAN_STANDARD_BIBLE
* ENG_INTERNATIONAL_CHILDRENS_BIBLE
* ENG_INTERNATIONAL_STANDARD_VERSION
* ENG_JB_PHILLIPS_NEW_TESTAMENT
* ENG_JUBILEE_BIBLE_2000
* ENG_KING_JAMES_VERSION
* ENG_AUTHORIZED_KING_JAMES_VERSION
* ENG_LEXHAM_ENGLISH_BIBLE
* ENG_LIVING_BIBLE
* ENG_THE_MESSAGE
* ENG_MODERN_ENGLISH_VERSION
* ENG_MOUNCE_REVERSE_INTERLINEAR_NEW_TESTAMENT
* ENG_NAMES_OF_GOD_BIBLE
* ENG_NEW_AMERICAN_BIBLE_REVISED_EDITION
* ENG_NEW_AMERICAN_STANDARD_BIBLE
* ENG_NEW_AMERICAN_STANDARD_BIBLE_1995
* ENG_NEW_CATHOLIC_BIBLE
* ENG_NEW_CENTURY_VERSION
* ENG_NEW_ENGLISH_TRANSLATION
* ENG_NEW_INTERNATIONAL_READERS_VERSION
* ENG_NEW_INTERNATIONAL_VERSION
* ENG_NEW_INTERNATIONAL_VERSION_UK
* ENG_NEW_KING_JAMES_VERSION
* ENG_NEW_LIFE_VERSION
* ENG_NEW_LIVING_TRANSLATION
* ENG_NEW_MATTHEW_BIBLE
* ENG_NEW_REVISED_STANDARD_VERSION_ANGLICISED
* ENG_NEW_REVISED_STANDARD_VERSION_ANGLICISED_CATHOLIC_EDITION

#### Tagalog
* TAG_ANG_BAGONG_TIPAN
* TAG_ANG_BIBLIIA_1978
* TAG_ANG_BIBLIIA_2001
* TAG_ANG_DATING_BIBLIYA_1905
* TAG_ANG_SALITA_NG_DIYOS_TCB
* TAG_ANG_SALITA_NG_DIYOS
* TAG_MAGANDANG_BALITA
* TAG_MAGANDANG_BALITA_DC
---
### Note:
> Some errors regarding to translations may have, I still trying to fix this kind of error, that maybe on my next version, this error will be fixed. If you found an error, you may send me the version thru  my [email](mailto:werysesw19@gmail.com), or thru my (Facebook page)[https://web.facebook.com/NOOBgrammer2001], or send a report thru my repository on github.

### Final speech
> This is just easy to use, maybe one of this days, I'm going to add its daily verses based on their server. Thank you for using, and I hope it helps.