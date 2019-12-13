export const navList = [
    {
        label: "Skills",
        link: "skills"
    },
    {
        label: "Projects",
        link: "projects"
    },
    {
        label: "About",
        link: 'about'
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