console.log("Hello World")

const btn2 = document.querySelector('#resBtn')

function btnClick(evt){
    evt.preventDefault()

    console.log("Button clicked")

    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then(response => {
        let peeps = response.data.results[0].residents
        console.log(peeps)
        for(let i = 0; i < peeps.length; i++) {
            axios.get(peeps[i]).then(response => {
                // console.log(response.data.name)
                let nameList = document.createElement('h2')
                nameList.textContent = response.data.name
                document.querySelector('body').appendChild(nameList)
            })
        }
    })
}

btn2.addEventListener("click", btnClick);