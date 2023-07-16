const axios = require("axios")
const cheerio = require("cheerio")
const baybayin = require("./baybayin")

let search = async (verse, ver = "") => {
	let isBaybayin = ver.startsWith("baybay-")
	let version = ver
	if(isBaybayin){
		version = ver.replace("baybay-", "")
	}
	let { data } = await axios.get(`https://www.biblegateway.com/passage/?search=${verse}&version=${version}`)
	let $ = await cheerio.load(data)
	let html = $(".passage-table")
	let _ = []
	html.each((i, e) => {
		let base = $(e).find(`div[class='passage-col passage-col-mobile version-${version}']`)
		let book = $(base).find(".dropdown-display-text")[0].children[0].data
		let content = $(base).find(".std-text")
		if(content.html() == null){
			content = $(base).find(".verse")
		}
		if(content.html() == null){
			content = $(base).find(".woj")
		}
		if(content.html() == null){
			content = $(base).find(".text")
		}
		if(content.html() == null){
			base = $(e).find(`div[class='version-${version} result-text-style-normal text-html']`)
			content = base
		}
		let verse = ""
		content.each((i, f) => {
			if(isBaybayin){
				verse += baybayin.toBaybayin($(f).text()) + "\n"
			}else{
				verse += $(f).text() + "\n"
			}
		})
		// if(verse == ""){
		// 	base = $(e).find(`div[class='version-${ver} result-text-style-normal text-html']`)
		// 	content = $(base).find(".woj")
			
		// 	console.log("test ")
		// 	verse = ""
		// }
		// content.each((i, f) => {
		// 	verse += $(f).text() + "\n"
		// })
		// if(verse == ""){
		// 	base = $(e).find(`div[class='version-${ver} result-text-style-normal text-html']`)
		// 	content = $(base).find(".text")
		// 	verse = ""
		// }
		// content.each((i, f) => {
		// 	verse += $(f).text() + "\n"
		// })
		// if(verse == ""){
		// 	base = $(e).find(`div[class='version-${ver} result-text-style-normal text-html']`)
		// 	content = base
		// 	verse = ""
		// }
		// content.each((i, f) => {
		// 	verse += $(f).text() + "\n"
		// })
		let json = {
			"book": book,
			"verse": verse.replace(/\\x00/, "")
		}
		_.push(json)
	})
	return _
}

module.exports = async (verse, version) => {
	let data = await search(verse, version)
	return data
}