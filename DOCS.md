# BibleGateway Scrape

[![npm version](https://badge.fury.io/js/biblegateway-scrape.svg)](https://badge.fury.io/js/biblegateway-scrape)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Node.js package for scraping Bible verses, daily verses, and audio content from BibleGateway.com. This package provides easy access to multiple Bible translations including English, Tagalog, Cebuano, Ilonggo, and even Baybayin script versions.

## 🚀 Installation

```bash
npm install biblegateway-scrape
```

## 📖 Features

- **Verse Lookup**: Get specific Bible verses in multiple translations
- **Daily Verse**: Retrieve daily verses for any date
- **Audio Bible**: Access audio recordings of Bible chapters
- **Multiple Languages**: Support for English, Tagalog, Cebuano, Ilonggo
- **Baybayin Script**: Special support for ancient Filipino script
- **TypeScript Support**: Full TypeScript definitions included

## 🔧 Quick Start

### CommonJS (Node.js)
```javascript
const biblegateway = require('biblegateway-scrape');

// Get a verse
biblegateway.verse('John 3:16', biblegateway.version.ENG_KING_JAMES_VERSION)
  .then(result => console.log(result));
```

### ES Modules / TypeScript
```typescript
import { verse, version, daily_verse, audio, audio_version } from 'biblegateway-scrape';

// Get a verse
const result = await verse('John 3:16', version.ENG_KING_JAMES_VERSION);
console.log(result);
```

## 📚 API Reference

### `verse(passage, version)`

Retrieves specific Bible verses.

**Parameters:**
- `passage` (string): Bible reference (e.g., "John 3:16", "Genesis 1:1-3", "Psalm 23")
- `version` (string): Bible version constant from the version object

**Returns:** Promise<verse_result>

```typescript
interface verse_result {
  book: string;      // Book name and chapter
  verses: string[];  // Array of verse texts
}
```

**Example:**
```javascript
const result = await verse('John 3:16', version.TAG_ANG_DATING_BIBLIYA_1905);
console.log(result);
// Output:
// {
//   book: "Juan 3:16",
//   verses: ["Sapagka't gayon na lamang ang pagsinta ng Dios sa sanglibutan..."]
// }
```

### `daily_verse(version, [date])`

Retrieves the daily verse for a specific date.

**Parameters:**
- `version` (string): Bible version constant
- `date` (optional): Array of [year, month, day]. Defaults to current date

**Returns:** Promise<verse_result[]>

**Example:**
```javascript
// Get today's daily verse
const todayVerse = await daily_verse(version.ENG_KING_JAMES_VERSION);

// Get daily verse for specific date
const specificDate = await daily_verse(
  version.TAG_ANG_BIBLIA_2001, 
  [2024, 12, 25]
);
```

### `audio(book_and_chapter, audio_version)`

Retrieves audio recording of a Bible chapter.

**Parameters:**
- `book_and_chapter` (string): Book and chapter (e.g., "James 1", "Genesis 1")
- `audio_version` (string): Audio version constant from audio_version object

**Returns:** Promise<audio_result>

```typescript
interface audio_result {
  result_code: number;  // HTTP status code
  mp3: string;         // URL to MP3 file
  copyright?: string;  // Copyright information
}
```

**Example:**
```javascript
const audioResult = await audio('James 1', audio_version.KJV_PAUL_MIMS);
console.log(audioResult);
// Output:
// {
//   result_code: 200,
//   mp3: "https://stream.biblegateway.com/bibles/32/kjv-mims/Jas.1.bb77ae331a4eedfd200164ac42783056.mp3",
//   copyright: "© 2007 All Rights Reserved The Spoken Word of God."
// }
```

## 📋 Available Bible Versions

### English Versions
```javascript
version.ENG_KING_JAMES_VERSION
version.ENG_NEW_INTERNATIONAL_VERSION
version.ENG_ENGLISH_STANDARD_VERSION
version.ENG_NEW_LIVING_TRANSLATION
version.ENG_AMPLIFIED_BIBLE
version.ENG_THE_MESSAGE
// ... and many more
```

### Tagalog Versions
```javascript
version.TAG_ANG_DATING_BIBLIYA_1905
version.TAG_ANG_BIBLIA_1978
version.TAG_ANG_BIBLIA_2001
version.TAG_ANG_SALITA_NG_DIYOS
version.TAG_MAGANDANG_BALITA
```

### Baybayin Versions
```javascript
version.BAYBAYIN_ANG_DATING_BIBLIYA_1905
version.BAYBAYIN_ANG_BIBLIA_1978
version.BAYBAYIN_ANG_BIBLIA_2001
version.BAYBAYIN_ANG_SALITA_NG_DIYOS
```

### Other Languages
```javascript
version.CEB_ANG_PULONG_SA_DIOS        // Cebuano
version.ILO_ANG_PULONG_SANG_DIOS_HLGN // Ilonggo
```

## 🎵 Available Audio Versions

```javascript
audio_version.KJV_PAUL_MIMS
audio_version.NIV_MAX_MCLEAN
audio_version.ESV_MAX_MCLEAN
audio_version.KJV_DRAMATIZED
audio_version.NIV_DRAMATIZED
audio_version.NLT_BREATHE
// ... and more
```

## 💡 Usage Examples

### Basic Verse Lookup
```javascript
const biblegateway = require('biblegateway-scrape');

async function getVerse() {
  try {
    const result = await biblegateway.verse(
      'Philippians 4:13', 
      biblegateway.version.ENG_NEW_INTERNATIONAL_VERSION
    );
    
    console.log(`${result.book}:`);
    result.verses.forEach(verse => console.log(verse));
  } catch (error) {
    console.error('Error fetching verse:', error);
  }
}

getVerse();
```

### Multiple Verses
```javascript
async function getChapter() {
  const result = await biblegateway.verse(
    'John 3:1-5', 
    biblegateway.version.ENG_KING_JAMES_VERSION
  );
  
  console.log(`${result.book}:`);
  result.verses.forEach((verse, index) => {
    console.log(`${index + 1}. ${verse}`);
  });
}
```

### Tagalog Bible
```javascript
async function getTagalogVerse() {
  const result = await biblegateway.verse(
    'Juan 3:16', 
    biblegateway.version.TAG_ANG_DATING_BIBLIYA_1905
  );
  
  console.log(result);
}
```

### Daily Verse with Date
```javascript
async function getDailyVerse() {
  const today = new Date();
  const result = await biblegateway.daily_verse(
    biblegateway.version.ENG_NEW_INTERNATIONAL_VERSION,
    [today.getFullYear(), today.getMonth() + 1, today.getDate()]
  );
  
  console.log('Today\'s verse:', result[0]);
}
```

### Audio Bible
```javascript
async function getAudio() {
  const audio = await biblegateway.audio(
    'Psalm 23', 
    biblegateway.audio_version.KJV_PAUL_MIMS
  );
  
  if (audio.result_code === 200) {
    console.log('Audio URL:', audio.mp3);
    console.log('Copyright:', audio.copyright);
  }
}
```

## 🔍 Error Handling

The package handles various error scenarios:

```javascript
async function safeVerseLookup(passage, version) {
  try {
    const result = await biblegateway.verse(passage, version);
    
    if (result.book === 'No results found') {
      console.log('Verse not found. Please check your reference.');
      return null;
    }
    
    return result;
  } catch (error) {
    console.error('Network or parsing error:', error.message);
    return null;
  }
}
```

## 📝 TypeScript Support

This package includes full TypeScript definitions:

```typescript
import { verse, version, verse_result } from 'biblegateway-scrape';

async function typedExample(): Promise<verse_result> {
  const result: verse_result = await verse(
    'Romans 8:28', 
    version.ENG_ENGLISH_STANDARD_VERSION
  );
  
  return result;
}
```

## ⚠️ Important Notes

1. **Rate Limiting**: Be respectful of BibleGateway's servers. Avoid making too many rapid requests.

2. **Copyright**: When using this package, please respect BibleGateway's terms of service and include appropriate copyright notices for the Bible translations you use.

3. **Error Handling**: Always implement proper error handling as network requests can fail.

4. **Version Accuracy**: Some translations may have formatting differences. Test thoroughly with your chosen versions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Credits

- **BibleGateway.com** - Source of all Bible content
- **Author**: RyannKim327
- **Inspirations**: Salvador, John Jeremy Antiguo, Callback Developers, Earl Shine Sawir, John Paul Caigas, Lester Navarra, Mark Kevin Manalo, Rovie Francisco, Jerson Carin, Mart Anthony Salazar, John Roy Lapida Calimlim

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/RyannKim327/biblegateway/issues)
- **Email**: werysesw19@gmail.com
- **Facebook**: [MPOP.2016](https://web.facebook.com/MPOP.2016)

---

**Disclaimer**: This package is not officially affiliated with BibleGateway.com. It's a third-party tool that scrapes publicly available content. Please use responsibly and in accordance with BibleGateway's terms of service.
