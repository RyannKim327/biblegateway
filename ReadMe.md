# Biblegateway scrape
### MPOP Reverse II

---

> This is just a simple webscraoe of biblegateway, since I having osme difficulties in finding tagalog bible api.

### How to install:
```Bash
npm i biblegateway-scrape
```

### How to use (NodeJS):
```Nodejs
const biblegateway = require("biblegateway-scrape")

let x = async () => {
	let result = await biblegateway("John 3:16")
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
> This is just easy to use, maybe one of this days, I'm going to add its daily verses based on their server. Thank you for using, and I hope it helps.