import html from '../../images/skills/html.png';
import css from '../../images/skills/css.png';
import js from '../../images/skills/js2.png';
import webpack from '../../images/skills/webpack.png';
import react from '../../images/skills/react.png';
import redux from '../../images/skills/redux.png';
import native from '../../images/skills/native.png';
import mongo from '../../images/skills/mongo.png';
import node from '../../images/skills/node.png';
import sass from '../../images/skills/sass.png';
import firebase from '../../images/skills/firebase.png';

import weconnect from '../../images/projects/weconnect.jpg';
import createWebpack from '../../images/projects/createWebpack.jpg';

export const projects = [
    {
        title: 'WeConnect',
        subtitle: 'A texting application where the user can connect with his friends and manage his public profile.',
        skills: [{
            source: react,
            label: 'React'
        }, {
            source: firebase,
            label: 'Firebase'
        }, {
            source: sass,
            label: 'Sass'
        }],
        links: {
            label: 'Visit Website',
            value: 'https://we-connect.netlify.com'
        },
        image: weconnect
    },
    {
        title: 'create-webpack-react-app',
        subtitle: 'A command line interface to generate a boilerplate for a React application along with necessary webpack and babel configurations.',
        skills: [{
            source: node,
            label: 'NodeJS'
        }, {
            source: webpack,
            label: 'Webpack'
        }, {
            source: react,
            label: 'React'
        }],
        links: {
            label: 'View Module',
            value: 'https://www.npmjs.com/package/create-webpack-react-app'
        },
        image: createWebpack
    },
    {
        title: 'Skill Registry',
        subtitle: 'A web application that stores information about employees and helps them find each other based on different criteria (skills, current project and name).',
        skills: [{
            source: node,
            label: 'NodeJS'
        }, {
            source: mongo,
            label: 'MongoDB'
        }, {
            source: react,
            label: 'React'
        }, {
            source: redux,
            label: 'Redux'
        }],
        links: {
            label: 'Visit Website',
            value: 'https://skill-registry.netlify.com'
        },
        image: weconnect
    },
    {
        title: 'Interview Feedback - Web App',
        subtitle: 'A web application to store feedback about candidates applying for a position after an interview.',
        skills: [{
            source: node,
            label: 'NodeJS'
        }, {
            source: mongo,
            label: 'MongoDB'
        }, {
            source: react,
            label: 'React'
        }, {
            source: redux,
            label: 'Redux'
        }],
        links: {
            label: 'Visit Website',
            value: 'https://interview-feedback.netlify.com'
        },
        image: weconnect
    },
    {
        title: 'Interview Feedback - Mobile App',
        subtitle: 'A mobile application to store feedback about candidates applying for a position after an interview.',
        skills: [{
            source: node,
            label: 'NodeJS'
        }, {
            source: mongo,
            label: 'MongoDB'
        }, {
            source: redux,
            label: 'Redux'
        }, {
            source: native,
            label: 'React Native'
        }],
        links: {
            label: 'View Mobile App',
            value: 'https://expo.io/@himayan/feedback-app'
        },
        image: weconnect
    },
    {
        title: 'Online Test Platform',
        subtitle: 'An online test platform with a candidate porrtal for attending the exam and an admin portal for monitoring performances of candidates.',
        skills: [{
            source: node,
            label: 'NodeJS'
        }, {
            source: mongo,
            label: 'MongoDB'
        }, {
            source: react,
            label: 'React'
        }, {
            source: redux,
            label: 'Redux'
        }],
        links: {
            label: 'View Project',
            value: 'https://vimeo.com/300708908'
        },
        image: weconnect
    },
    {
        title: 'Weather App Extension',
        subtitle: 'A weather app to give you real time weather information of any location around the world.',
        skills: [{
            source: react,
            label: 'React'
        }, {
            source: css,
            label: 'Css-3'
        }],
        links: {
            label: 'View Project',
            link: 'https://github.com/himayand21/weather-extension'
        },
        image: weconnect
    },
    {
        title: 'To Do List',
        subtitle: 'A simple To-Do list application to store reminders',
        skills: [{
            source: js,
            label: 'JavaScript'
        }, {
            source: css,
            label: 'CSS-3'
        }, {
            source: html,
            label: 'HTML-5'
        }],
        links: {
            label: 'View Project',
            link: 'https://github.com/himayand21/myProjects/blob/master/ToDoList.html'
        },
        image: weconnect
    }
]