const axios = require("axios")
const cheerio = require("cheerio")

let search = async (verse) => {
	let { data } = await axios.get(`https://www.biblegateway.com/passage/?search=${verse}&version=ADB1905`)
	let $ = await cheerio.load(data)
	let html = $(".passage-table")
	let _ = []
	html.each((i, e) => {
		let base = $(e).find("div[class='passage-col passage-col-mobile version-ADB1905']")
		let book = $(e).find(".dropdown-display-text")[0].children[0].data
		let content = $(e).find(".verse").text()
		let json = {
			"book": book,
			"verse": content
		}
		_.push(json)
	})
	return _
}

module.exports = async (verse) => {
	let data = await search(verse)
	return data
}