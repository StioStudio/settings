let lang = document.querySelector(".language-options")
lang.value = cookie.get("language")
lang.addEventListener("change", ()=>{
    cookie.set("language", lang.value)
})
