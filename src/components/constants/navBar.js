export const navList = {
    home: {
        label: "Home",
        link: "home"
    },
    skills: {
        label: "Skills",
        link: "skills"
    },
    about: {
        label: "About",
        link: 'about'
    },
    projects: {
        label: "Projects",
        link: "projects"
    },
    contact: {
        label: "Contact",
        link: "contact"
    },
    socialMedia: [{
            name: 'fab fa-linkedin icons',
            link: ''
        },{
            name: 'fab fa-facebook-square icons',
            link: ''
        },{
            name: 'fab fa-instagram icons',
            link: ''
        },{
            name: 'fas fa-envelope icons',
            link: ''
        }]
}

const navListValues = Object.values(navList);
export const navIds = navListValues.filter(each => each.link).map(each => each.link);