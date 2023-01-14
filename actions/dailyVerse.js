const axios = require("axios")
const cheerio = require("cheerio")

let search = async (verse, ver, today=[]) => {
	let date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth() + 1
	let day = date.getDate()
	if(today.length == 3){
		year = today[0]
		month = today[1]
		day = today[2]
	}
	let { data } = await axios.get(`https://www.biblegateway.com/reading-plans/verse-of-the-day/${year}/${month}/${day}?version=${ver}`)
	let $ = await cheerio.load(data)
	let html = $(".rp-passage")
	let _ = []
	/* html.each((i, e) => {
		let base = $(e).find(`div[class='passage-col passage-col-mobile version-${ver}']`)
		let book = $(base).find(".dropdown-display-text")[0].children[0].data
		let content = $(base).find(".std-text")
		if(content.html() == null)
			content = $(base).find(".verse")
		let verse = ""
		content.each((i, f) => {
			verse += $(f).text() + "\n"
		})
		let json = {
			"book": book,
			"verse": verse
		}
		_.push(json)
	})*/
	let book = html.find(".rp-passage-display").text()
	let _verse = html.find(".verse").text()
	let json = {
		"book": book,
		"verse": _verse
	}
	_.push(json)
	return _
}

module.exports = async (version, today=[]) => {
	let { data } = await axios.get("https://www.biblegateway.com")
	let $ = await cheerio.load(data)
	let html = $(".passage-box")
	let book = $(html).find(".citation").text()
	let verse = await search(book, version, today)
	return verse
}