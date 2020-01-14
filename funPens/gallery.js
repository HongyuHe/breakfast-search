function getContent(section) {
    section.element = document.querySelector('#'+section.title)
    for (articleTitle of section.articles) {
        let content = document.createElement('article')
        section.element.appendChild(content);
        fetch(section.title+'/'+articleTitle)
            .then(response => response.text())
            .then(text => content.innerHTML = text)
    }

}

const photos = [
    
]

function show(target_section, sections) {
        for (section of sections) {
            section.element.classList.add('hidden')
        }
        target_section.element.classList.remove('hidden')
        console.log(target_section)
    
}

show(sections[0], sections)

for (section of sections) {
    section.link = document.querySelector('#'+section.title+'-link')
}

for (section of sections) {
    section.link.addEventListener('click', 
    ((section,sections) => () => {show(section, sections)})(section, sections))
}


