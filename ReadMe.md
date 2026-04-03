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

| Language | Constant Name |
| :--- | :--- |
| **Tagalog** | `TAG_ANG_DATING_BIBLIYA_1905`, `TAG_ANG_BIBLIA_1978`, `TAG_ANG_BIBLIA_2001`, `TAG_ANG_BAGONG_TIPAN`, `TAG_ANG_SALITA_NG_DIYOS`, `TAG_MAGANDANG_BALITA` |
| **Baybayin** | `BAYBAYIN_ANG_DATING_BIBLIYA_1905`, `BAYBAYIN_ANG_BIBLIA_1978`, `BAYBAYIN_MAGANDANG_BALITA` (and others with `BAYBAYIN_` prefix) |
| **English** | `ENG_KING_JAMES_VERSION`, `ENG_NEW_INTERNATIONAL_VERSION`, `ENG_STANDARD_VERSION`, `ENG_AMPLIFIED_BIBLE`, `ENG_MESSAGE`, `ENG_NEW_LIVING_TRANSLATION` |
| **Cebuano** | `CEB_ANG_PULONG_SA_DIOS` |
| **Ilonggo** | `ILO_ANG_PULONG_SANG_DIOS_HLGN` |

*(Refer to `src/actions/version.ts` for the full list of over 50+ supported versions.)*

### Audio Versions (`biblegateway.audio_version`)

- `KJV_PAUL_MIMS`
- `KJV_MAX_MCLEAN`
- `KJV_DRAMATIZED`
- `NIV_MAX_MCLEAN`
- `NIV_DRAMATIZED`
- `NLT_BREATHE`
- `ESV_MAX_MCLEAN`
- `MSG_KELLY_RYAN_DOLAN`
- ...and more.

---

## 📜 Changelog

### v0.1.1 (2026-04-03)
- Updated README with comprehensive "How to", parameter lists, and detailed changelog.
- Bumped version for new documentation release.

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
