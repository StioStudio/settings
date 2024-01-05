info.language = info.language.cookie
basicSetup()
await lastUpdated({path: "index.html", repo: "settings"})
let options = {
    "language": " ",
    "themes": " "
}
let option = document.querySelectorAll(".options")
// console.log(option)

// console.log(options)
for (let i = 0; i < Object.keys(options).length; i++) {
    let rem = cookie.get(Object.keys(options)[i])
    options[Object.keys(options)[i]] = rem
    // if(rem != null && rem != " ") {
    // }
}

option.forEach(e => {
    // console.log(e.attributes.getNamedItem("name"))
    // console.log(e.value, options[e.attributes.getNamedItem("name").value])
    e.value = options[e.attributes.getNamedItem("name").value]
    e.addEventListener("change", ()=>{
        // console.log(e.attributes.getNamedItem("name").value, e.value)
        info[e.attributes.getNamedItem("name").value] = e.value
        // cookie.set(e.attributes.getNamedItem("name").value, e.value)
        // console.log(cookie.raw)
    })
});

// await translationSetup(true)
