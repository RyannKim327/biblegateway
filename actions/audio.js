const axios = require("axios")
const cheerio = require("cheerio")

let detect = (_book) => {
	let b = _book.replace(/\s/gi, "").toLowerCase()
	let book = "gen"
	let list = [
		"gen", "exod", "lev", "num", "deut",
		"josh", "judg", "ruth", "1sam", "2sam",
		"1kgs", "2kgs", "1chr", "2chr", "ezra",
		"neh", "esth", "job", "ps", "prov",
		"eccl", "song", "isa", "jer", "lam",
		"ezek", "dan", "hos", "joel", "amos",
		"obad", "jonah", "mic", "nah", "hab",
		"zeph", "hag", "zech", "mal",

		"matt", "mark", "luke", "john", "acts",
		"rom", "1cor", "2cor", "gal", "eph",
		"phil", "col", "1thess", "2thess", "1tim",
		"2tim", "titus", "phlm", "heb", "jas",
		"1pet", "2pet", "1john", "2john", "3john",
		"jude", "rev"
	]
	for(let l in list){
		if(b.startsWith(l)){
			book = l
			break
		}
	}
	if(b.startsWith("1king")){
		book = "1kgs"
	}else if(b.startsWith("2king")){
		book = "2kgs"
	}else if(b.startsWith("philemon")){
		book = "phlm"
	}else if(b.startsWith("james")){
		book = "jas"
	}
	return book
}


module.exports = async (verse, version) => {
	let result = {
		resultCode: 404,
		mp3: "Undefined audio, please read the documentation.",
		ogg: "Undefined audio, please read the documentation."
	}
	if(version.startsWith("audio")){
		let vers = version.split(" ")[1]
		let book = detect(verse)
		let chapter = verse.split(" ")[1]
		if(verse.split(" ").length > 2)
			chapter = verse.split(" ")[2]
		verse = `${book}.${chapter}`

		let { data } = await axios.get(`https://www.biblegateway.com/audio/${vers}/${verse}`)
		let $ = await cheerio.load(data)
		let au = $("#audio-player-element").children("source")[0].attribs.src
		let dio = $("#audio-player-element").children("source")[1].attribs.src
		// https://www.biblegateway.com/audio/dramatized/niv/Ps.119
		result = {
			resultCode: 200,
			mp3: au,
			ogg: dio
		}
	}
	//console.log(result.data)
	return result
}