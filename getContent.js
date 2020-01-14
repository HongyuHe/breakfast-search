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

const sections = [
    {
    title: 'announcements',
    articles: [
    '181124_Schedule.html',
    '181117_Schedule.html',
    '181110_Schedule.html',
    '181103_Schedule.html',
    '181027_Schedule.html',
    '181020_Schedule.html',
    '181013_Schedule.html',
    '181007_materials.html',
    '181006_Schedule.html',
    'welcome.html']
    },
    {
    title: 'resources',
    articles: [
        '../announcements/181007_materials.html',
        'links.html',
        'coming_soon.html'
    ]
    },
    {
    title: 'about',
    articles: [
        'about.html',
        'sponsors.html'
    ]
    },
    {
    title: 'contact',
    articles: [
        'contact.html'
    ]
    }
]

function show(target_section, sections) {
        for (section of sections) {
            section.element.classList.add('hidden')
        }
        target_section.element.classList.remove('hidden')
        console.log(target_section)
    
}

for (section of sections) {
    getContent(section)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}

show(sections[0], sections)

for (section of sections) {
    section.link = document.querySelector('#'+section.title+'-link')
}

for (section of sections) {
    section.link.addEventListener('click', 
    ((section,sections) => () => {show(section, sections)})(section, sections))
}


