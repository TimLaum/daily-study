const right = document.getElementById("right");
const left = document.getElementById("left");
const searchBarIn = document.getElementById("search-bar-input")

const urlParams = new URLSearchParams(window.location.search)

class Subject {
    constructor(name) {
        this.name = name
    }

    display(el) {
        const a = document.createElement("a")
        a.setAttribute("href", `./subjects/${this.name.toUpperCase()}/`)
        a.className =  `matiere ${this.name}`
        a.setAttribute("target", "__blank")
        a.id = this.name
        a.innerText = this.name
        el.appendChild(a)
        return this
    }

    addInNav(nav) {
        const a = document.createElement("a")
        a.setAttribute("href", "#" + this.name)
        a.innerHTML = this.name
        nav.appendChild(a)
        return this
    }

}

const m = [
    "NSI", "Maths", "SVT", "Histoire", "Géographie","Français","Latin", "Anglais", "Allemand"
]
m.sort()

function reload(m) {
    m.forEach(a => new Subject(a).display(right).addInNav(left))
}

reload(m)
function search() {
    const query = searchBarIn.value
    urlParams.set("q", query)
    history.pushState(null, null, "?"+urlParams.toString())
    const n = m.filter(a => a.toLowerCase().includes(query.toLowerCase()))
    while (right.firstChild) {
        right.removeChild(right.firstChild)
    }while (left.firstChild) {
        left.removeChild(left.firstChild)
    }
    reload(n)
}

searchBarIn.oninput = search
searchBarIn.value = urlParams.get("q")
search()


