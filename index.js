info.language = info.language.cookie
basicSetup()
await lastUpdated({path: "index.html", repo: "settings"})
let options = {
    "language": "en",
    "themes": "dark"
}
let option = document.querySelectorAll(".options")

for (let i = 0; i < Object.keys(options).length; i++) {
    let rem = cookie.get(Object.keys(options)[i])
    if(rem != null) {
        options[Object.keys(options)[i]] = rem
    }
}

option.forEach(e => {
    // console.log(e.attributes.getNamedItem("name"))
    e.value = options[e.attributes.getNamedItem("name").value]
    e.addEventListener("change", ()=>{
        info[e.attributes.getNamedItem("name").value] = e.value
        // cookie.set(e.attributes.getNamedItem("name").value, e.value)
        // console.log(cookie.raw)
    })
});

// await translationSetup(true)
