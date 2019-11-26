export const navList = [
    {
        label: "Home",
        link: "home"
    },
    {
        label: "Skills",
        link: "skills"
    },
    {
        label: "About",
        link: 'about'
    },
    {
        label: "Projects",
        link: "projects"
    },
    {
        label: "Contact",
        link: "contact"
    }
];

export const socialMedia = [
    {
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
    }
];

export const navIds = navList.filter(each => each.link).map(each => each.link);