
let form = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
})






// ----------------------------------------------------------------------

async function displayAll() {
    let output = document.getElementById("output")
    output.innerHTML = ""


    //getting data

    let url = "https://api.thecatapi.com/v1/breeds"
    let data = await fetch(url)
    let dataParsed = await data.json()


    let iteration = 0
    dataParsed.forEach(element => {


        //to print the heading
        if (iteration == 0) {
            let dataHead = document.createElement("h3")
            dataHead.innerHTML = `Total Results:67`

            output.appendChild(dataHead)
            iteration += 1

        }



        output.append(`${element.name}`)

        // to print a line break
        let break_ = document.createElement("br")
        output.appendChild(break_)
    });



}







// ----------------------------------------------------------------------


async function displayHealthIssues() {

    let input = document.getElementById("healthIssue").value

    let output = document.getElementById("output")
    output.innerHTML = ""

    if (input == "") {

        output.append("⚠️Enter Valid Data")
        return
    }





    //getting data

    let url = "https://api.thecatapi.com/v1/breeds"
    let data = await fetch(url)
    let dataParsed = await data.json()


    let iteration = 0

    //printing total Health results data
    let totalResults = 0


    dataParsed.forEach(element => {



        //to print the heading
        if (iteration == 0) {
            let dataHead = document.createElement("h3")
            dataHead.innerHTML = `Health Issues For :${input}`
            output.appendChild(dataHead)
            iteration += 1

        }






        if (element.health_issues == input) {
            output.append(`${element.name}`)


            // to print a line break
            let break_ = document.createElement("br")
            output.appendChild(break_)
            totalResults += 1



        }
        else {
            return
        }


    });



    let dataTotal = document.createElement("h4")
    if (totalResults == 0) {
        dataTotal.innerHTML = "No Matching Result Found"
        output.appendChild(dataTotal)

        return
    }
    dataTotal.innerHTML = `Total Results :${totalResults}`
    output.appendChild(dataTotal)

    console.log(totalResults)
}


// -----------------------------------------------------------------------


async function displayWeight() {
    let output = document.getElementById("output")
    output.innerHTML = ""

    //getting values of radio buttons
    let imperial = document.getElementById("imperial").checked
    let metric = document.getElementById("metric").checked


    //checking which of the two button is checked
    let currentSelection = ""


    if (imperial) {
        currentSelection = "imperial"
    }
    if (metric) {
        currentSelection = "metric"
    }

    //getting data

    let url = "https://api.thecatapi.com/v1/breeds"
    let data = await fetch(url)
    let dataParsed = await data.json()


    let iteration = 0
    dataParsed.forEach(element => {

        console.log(element)

        //to print the heading
        if (iteration == 0) {
            let dataHead = document.createElement("h3")
            dataHead.innerHTML = `Weights in ${currentSelection}:`

            output.appendChild(dataHead)
            iteration += 1

        }


        if(currentSelection=="imperial"){
            output.append(`${element.weight.imperial}`)

        }
        else{
        output.append(`${element.weight.metric}`)

        }


        // to print a line break
        let break_ = document.createElement("br")
        output.appendChild(break_)
    });



}
