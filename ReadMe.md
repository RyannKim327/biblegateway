# Bible Gateway Scrape

A simple yet powerful web scraper for BibleGateway.com, providing access to various Bible versions including Tagalog and even Baybayin transliteration.

---

## 🚀 Features

- **Text Verses**: Fetch any verse from Bible Gateway.
- **Daily Verse**: Get the "Verse of the Day".
- **Audio Bible**: Retrieve MP3 links for various audio Bible versions.
- **Baybayin Support**: Transliterated Tagalog bibles into Baybayin script.
- **TypeScript Support**: Fully typed for a better development experience.

---

## 📦 Installation

```bash
npm install biblegateway-scrape@latest
```

---

## 📖 How to Use

### 1. Fetching a Verse

```typescript
const biblegateway = require("biblegateway-scrape");

async function getVerse() {
  const result = await biblegateway.verse("John 3:16", biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905);
  console.log(result);
}

getVerse();
```

**Output:**
```json
{
  "book": "Juan 3:16",
  "verses": [
    "16 Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan, na ibinigay niya ang kaniyang bugtong na Anak, upang ang sinomang sa kaniya'y sumampalataya ay huwag mapahamak, kundi magkaroon ng buhay na walang hanggan. "
  ]
}
```

### 2. Daily Verse

```typescript
const biblegateway = require("biblegateway-scrape");

async function getDaily() {
  // Get today's verse
  const today = await biblegateway.daily_verse(biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905);
  console.log(today);

  // Get verse for a specific date [Year, Month, Day]
  const specificDate = await biblegateway.daily_verse(biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905, [2024, 12, 25]);
  console.log(specificDate);
}

getDaily();
```

### 3. Audio Bible

```typescript
const biblegateway = require("biblegateway-scrape");

async function getAudio() {
  const audio = await biblegateway.audio("John 1", biblegateway.audio_version.KJV_PAUL_MIMS);
  console.log(audio);
}

getAudio();
```

**Output:**
```json
{
  "result_code": 200,
  "mp3": "https://stream.biblegateway.com/bibles/32/kjv-mims/John.1.mp3",
  "copyright": "© 2007 All Rights Reserved The Spoken Word of God."
}
```

---

## 🛠️ Parameters

### Bible Versions (`biblegateway.version`)

| Language | Version Name | Constant Name |
| :--- | :--- | :--- |
| **English** | 21st Century King James Version | `ENG_KJV_21` |
| | American Standard Version | `ENG_AMERICAN_STANDARD_VERSION` |
| | Amplified Bible | `ENG_AMPLIFIED_BIBLE` |
| | Amplified Bible, Classic Edition | `ENG_AMPLIFIED_BIBLE_CLASSIC` |
| | BRG Bible | `ENG_BRG_BIBLE` |
| | Christian Standard Bible | `ENG_CHRISTIAN_STANDARD_BIBLE` |
| | Common English Bible | `ENG_COMMON_ENLISH_BIBLE` |
| | Complete Jewish Bible | `ENG_COMPLETE_JEWISH_BIBLE` |
| | Contemporary English Version | `ENG_CONTEMPORARY_ENGLISH_VERSION` |
| | Darby Translation | `ENG_DARBY_TRANSLATION` |
| | Disciples’ Literal New Testament | `ENG_DISIPLES_LITERAL_NEW_TESTAMENT` |
| | Douay-Rheims 1899 American Edition | `ENG_DOUAY_RHEIMS_1899` |
| | Easy-to-Read Version | `ENG_EASY_TO_READ_VERSION` |
| | Evangelical Heritage Version | `ENG_EVANGELICAL_HERITAGE_VERSION` |
| | English Standard Version | `ENG_ENLISH_STANDARD_VERSION` |
| | English Standard Version Anglicised | `ENG_ENLISH_STANDARD_VERSION_ANGLICISED` |
| | Expanded Bible | `ENG_EXPANDED_BIBLE` |
| | 1599 Geneva Bible | `ENG_1599_GENEVA_BIBLE` |
| | GOD’S WORD Translation | `ENG_GODS_WORD_TRANSLATION` |
| | Good News Translation | `ENG_GOOD_NEWS_TRANSLATION` |
| | Holman Christian Standard Bible | `ENG_HOLMAN_CHRISTIAN_STANDARD_BIBLE` |
| | International Children’s Bible | `ENG_INTERNATIONAL_CHILDRENS_BIBLE` |
| | International Standard Version | `ENG_INTERNATIONAL_STANDARD_VERSION` |
| | J.B. Phillips New Testament | `ENG_JB_PHILLIPS_NEW_TESTAMENT` |
| | Jubilee Bible 2000 | `ENG_JUBILEE_BIBLE_2000` |
| | King James Version | `ENG_KING_JAMES_VERSION` |
| | Authorized King James Version | `ENG_AUTHORIZED_KING_JAMES_VERSION` |
| | Lexham English Bible | `ENG_LEXHAM_ENGLISH_BIBLE` |
| | Living Bible | `ENG_LIVING_BIBLE` |
| | The Message | `ENG_THE_MESSAGE` |
| | Modern English Version | `ENG_MODERN_ENGLISH_VERSION` |
| | Mounce Reverse-Interlinear New Testament | `ENG_MOUNCE_REVERSE_INTERLINEAR_NEW_TESTAMENT` |
| | Names of God Bible | `ENG_NAMES_OF_GOD_BIBLE` |
| | New American Bible (Revised Edition) | `ENG_NEW_AMERICAN_BIBLE_REVISED_EDITION` |
| | New American Standard Bible | `ENG_NEW_AMERICAN_STANDARD_BIBLE` |
| | New American Standard Bible 1995 | `ENG_NEW_AMERICAN_STANDARD_BIBLE_1995` |
| | New Catholic Bible | `ENG_NEW_CATHOLIC_BIBLE` |
| | New Century Version | `ENG_NEW_CENTURY_VERSION` |
| | New English Translation | `ENG_NEW_ENGLISH_TRANSLATION` |
| | New International Reader's Version | `ENG_NEW_INTERNATIONAL_READERS_VERSION` |
| | New International Version | `ENG_NEW_INTERNATIONAL_VERSION` |
| | New International Version UK | `ENG_NEW_INTERNATIONAL_VERSION_UK` |
| | New King James Version | `ENG_NEW_KING_JAMES_VERSION` |
| | New Life Version | `ENG_NEW_LIFE_VERSION` |
| | New Living Translation | `ENG_NEW_LIVING_TRANSLATION` |
| | New Matthew Bible | `ENG_NEW_MATTHEW_BIBLE` |
| | New Revised Standard Version Anglicised | `ENG_NEW_REVISED_STANDARD_VERSION_ANGLICISED` |
| | NRSV Anglicised Catholic Edition | `ENG_NEW_REVISED_STANDARD_VERSION_ANGLICISED_CATHOLIC_EDITION` |
| **Tagalog** | Ang Bagong Tipan | `TAG_ANG_BAGONG_TIPAN` |
| | Ang Biblia (1978) | `TAG_ANG_BIBLIA_1978` |
| | Ang Biblia (2001) | `TAG_ANG_BIBLIA_2001` |
| | Ang Dating Biblia (1905) | `TAG_ANG_DATING_BIBLIYA_1905` |
| | Ang Salita ng Diyos (TCB) | `TAG_ANG_SALITA_NG_DIYOS_TCB` |
| | Ang Salita ng Diyos | `TAG_ANG_SALITA_NG_DIYOS` |
| | Magandang Balita Biblia | `TAG_MAGANDANG_BALITA` |
| | Magandang Balita Biblia (with Deuterocanon) | `TAG_MAGANDANG_BALITA_DC` |
| **Baybayin** | Ang Bagong Tipan (Baybayin) | `BAYBAYIN_ANG_BAGONG_TIPAN` |
| | Ang Biblia 1978 (Baybayin) | `BAYBAYIN_ANG_BIBLIA_1978` |
| | Ang Biblia 2001 (Baybayin) | `BAYBAYIN_ANG_BIBLIA_2001` |
| | Ang Dating Biblia 1905 (Baybayin) | `BAYBAYIN_ANG_DATING_BIBLIYA_1905` |
| | Ang Salita ng Diyos TCB (Baybayin) | `BAYBAYIN_ANG_SALITA_NG_DIYOS_TCB` |
| | Ang Salita ng Diyos (Baybayin) | `BAYBAYIN_ANG_SALITA_NG_DIYOS` |
| | Magandang Balita (Baybayin) | `BAYBAYIN_MAGANDANG_BALITA` |
| | Magandang Balita DC (Baybayin) | `BAYBAYIN_MAGANDANG_BALITA_DC` |
| **Cebuano** | Ang Pulong Sa Dios | `CEB_ANG_PULONG_SA_DIOS` |
| **Ilonggo** | Ang Pulong Sang Dios | `ILO_ANG_PULONG_SANG_DIOS_HLGN` |

### Audio Versions (`biblegateway.audio_version`)

| Version | Narrator | Constant Name |
| :--- | :--- | :--- |
| **CSB** | Jon Mohr | `CSB_JON_MOHR` |
| **ESV** | Max McLean | `ESV_MAX_MCLEAN` |
| **ESV** | Marquis Laughlin | `ESV_MARQUIS_LAUGHLIN` |
| **GNV** | Steve Cook | `GNV_STEVE_COOK` |
| **HCSB** | Dale McConachie | `HCSB_DALE_MCCONACHIE` |
| **KJV** | Max McLean | `KJV_MAX_MCLEAN` |
| **KJV** | Paul Mims | `KJV_PAUL_MIMS` |
| **KJV** | Dramatized | `KJV_DRAMATIZED` |
| **LEB** | Logos | `LEB_LOGOS` |
| **MSG** | Kelly Ryan Dolan | `MSG_KELLY_RYAN_DOLAN` |
| **NASB** | Dale McConachie | `NASB_DALE_MCCONACHIE` |
| **NASB 1995** | Dale McConachie | `NASB1995_DALE_MCCONACHIE` |
| **NIV** | Max McLean | `NIV_MAX_MCLEAN` |
| **NIV** | Dramatized | `NIV_DRAMATIZED` |
| **NIV** | George W. Sarris | `NIV_GEORGE_W_SARRIS` |
| **NIVUK** | David Suchet | `NIVUK_DAVID_SUCHET` |
| **NKJV** | Simon Bubb | `NKJV_SIMON_BUBB` |
| **NKJV** | Tinasha LaRayé | `NKJV_TINASHA_LARAYE` |
| **NLT** | Breathe | `NLT_BREATHE` |

---

## 📜 Changelog

### v0.1.2 (2026-04-03)
- Updated README with a comprehensive, categorized list of all 19 supported audio versions.
- Added detailed parameter tables for easier reference.
- Bumped version for documentation parity.

### v0.1.0 (2025-10-26)
- Fixed bugs in version 0.0.9.
- Fixed `daily_verse` fetching issues.
- Improved overall stability.

### v0.0.9 (2025-10-26)
- Cleaned up Baybayin transliteration logic.
- Initial TypeScript implementation and structure.

### v0.0.1 - v0.0.8
- Initial web scraping implementation for BibleGateway.
- Basic support for Tagalog and English versions.
- Added audio support (MP3).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Credits & Acknowledgements

- **Bible Gateway**: For providing the amazing resource this scraper uses.
- **Contributors**: RyannKim327, Salvador, John Jeremy Antiguo, and many others.
- **NodeJS Community**: For the tools and libraries that made this possible.

---

> **Note**: This is a web-scraping project. Please use it responsibly and respect Bible Gateway's terms of service. Always provide credit and copyright information when using their resources.
