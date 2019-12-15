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

export const navIds = navList.filter(each => each.link).map(each => each.link);