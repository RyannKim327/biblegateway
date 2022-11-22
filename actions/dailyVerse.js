const axios = require("axios")
const cheerio = require("cheerio")

let search = async (verse, ver) => {
	let { data } = await axios.get(`https://www.biblegateway.com/passage/?search=${verse}&version=${ver}`)
	let $ = await cheerio.load(data)
	let html = $(".passage-table")
	let _ = []
	html.each((i, e) => {
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
	})
	return _
}

module.exports = async (version) => {
	let { data } = await axios.get("https://www.biblegateway.com")
	let $ = await cheerio.load(data)
	let html = $(".passage-box")
	let book = $(html).find(".citation").text()
	let verse = await search(book, version)
	return verse
}