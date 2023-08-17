const baybay_consonants = [
	5898, 5891, 5895,
	5892, 5905, 5902,
	5899, 5896,
	5897, 5904, 5894,
	5903, 5900
]

const baybayin_ng = 5893

const baybay_vowels = [
	5906, 5907, 5908
]

const baybayin_i_vowels = [
	5888, 5889, 5890
]

const consonants = [
	"b", "k", "d",
	"g", "h", "l",
	"m", "n",
	"p", "s", "t",
	"w", "y"
]

const vowels = [
	"a", "e", "o"
]

module.exports = (data) => {
	let result = ""
	let original = data
	data = data.toLowerCase().replace(/juan/gi, "huwan").replace(/jesus/gi, "hesus").replace(/josue/gi, "hoswe").replace(/mateo/gi, "mateyo").replace(/timoteo/gi, "timoteyo").replace(/ezekiel/gi, "ezekiyel")
	data = data.replace(/i/gi, "e").replace(/u/gi, "o").replace(/r/gi, "d").replace(/mga/gi, "manga").replace(/f/gi, "p").replace(/c|q/gi, "k").replace(/v/gi, "b").replace(/x|z/gi, "s").replace(/j/gi, "dy").replace(/\sng\s/gi, " nang ").replace(/\.|\?|!/gi, String.fromCharCode(5942)).replace(/,/gi, String.fromCharCode(5941))
	
	for(let i = 0; i < data.length; i++){
		if(consonants.includes(data[i])){
			if(data[i] == "n" && data[i + 1] == "g"){
				result += String.fromCharCode(baybayin_ng)
				i++
			}else{
				for(let j in consonants){
					if(consonants[j] == data[i]){
						result += String.fromCharCode(baybay_consonants[j])
					}
				}
			}
			if(data[i + 1] == "e"){
				result += String.fromCharCode(baybay_vowels[0])
			}else if(data[i + 1] == "o"){
				result += String.fromCharCode(baybay_vowels[1])
			}else if(data[i + 1] != "a"){
				result += String.fromCharCode(baybay_vowels[2])
				i--
			}
			i++
		}else if(vowels.includes(data[i])){
			console.log(data[i])
			for(let j in vowels){
				if(data[i] == vowels[j]){
					result += String.fromCharCode(baybayin_i_vowels[j])
				}
			}
		}else{
			result += data[i]
		}
	}

	return result
}