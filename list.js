function create(p, id) {
    for (i in p) {
        var aEl = document.createElement("a");
        aEl.href = p[i]
        var liEl = document.createElement("li");
        var liTextEl = document.createTextNode(i);
        liEl.appendChild(liTextEl)
        aEl.appendChild(liEl)
        document.getElementById(id).appendChild(aEl);
    }
}