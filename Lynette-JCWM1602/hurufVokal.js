function hitungVokal(string){

    let output= 0
    let input = string.toLowerCase()
    let vowels = "aiueo"
    let vowels1 = vowels.toLowerCase()

    for(let i=0; i<input.length; i++){     
        if(vowels1.includes(input[i])){
            output ++

        }
    }
        console.log(`Jumlah huruf vokal ada ${output}`)
}
    

hitungVokal("haloooo")




function hurufVokal(string){

    let output= []
    let input = string.toLowerCase()

    for(let i=0; i<input.length; i++){
        if(input[i] == "a" || input[i] == "i" ||input[i] == "u" ||input[i] == "e" ||input[i] == "o"){
            output.push(input[i])
            
        }
    }console.log(output)
}
    
hurufVokal("aaabbggghgha")



function tanpaVokal(string){

    let output= " "
    let vowels = "aiueo"
    let vowels1 = vowels.toLowerCase()
    let input = string.toLowerCase()

    for (let i = 0; i < input.length; i++){
        if(vowels1.includes(input[i]) == false){
            output += input[i]
        }
    }
    console.log(output)
}
tanpaVokal("AABASCHaaaeeeooADI")