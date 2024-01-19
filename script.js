
let form = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
})



async function displayAll() {


    //getting data

    let url = "https://api.thecatapi.com/v1/breeds"
    let data = await fetch(url)
    let dataParsed = await data.json()


    let iteration = 0
    dataParsed.forEach(element => {
        let output = document.getElementById("output")


        //to print the heading
        if (iteration == 0) {
            let dataHead = document.createElement("h3")
            dataHead.innerHTML = `Total Results:67`

            output.appendChild(dataHead)
        }

        iteration += 1


        output.append(`${element.name}`)

        // to print a line break
        let break_= document.createElement("br")
      output.appendChild(break_)




        console.log(element.name)
    });



}