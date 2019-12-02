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

export const projects = [
    {
        title: 'WeConnect',
        subtitle: '',
        skills: [{
            source: react,
            label: 'react'
        }, {
            source: firebase,
            label: 'firebase'
        }, {
            source: sass,
            label: 'sass'
        }],
        links: [{
            label: 'Visit Website',
            value: 'https://we-connect.netlify.com'
        }]
    },
    {
        title: 'create-webpack-react-app',
        subtitle: '',
        skills: [{
            source: node,
            label: 'node'
        }, {
            source: webpack,
            label: 'webpack'
        }, {
            source: react,
            label: 'react'
        }],
        links: [{
            label: 'View Module',
            value: 'https://www.npmjs.com/package/create-webpack-react-app'
        }]
    },
    {
        title: 'Skill Registry',
        subtitle: '',
        skills: [{
            source: node,
            label: 'node'
        }, {
            source: mongo,
            label: 'mongo'
        }, {
            source: react,
            label: 'react'
        }, {
            source: redux,
            label: 'redux'
        }],
        links: [{
            label: 'Visit Website',
            value: 'https://skill-registry.netlify.com'
        }]
    },
    {
        title: 'Interview Feedback',
        subtitle: '',
        skills: [{
            source: node,
            label: 'node'
        }, {
            source: mongo,
            label: 'mongo'
        }, {
            source: react,
            label: 'react'
        }, {
            source: redux,
            label: 'redux'
        }, {
            source: native,
            label: 'native'
        }],
        links: [{
            label: 'Visit Website',
            value: 'https://interview-feedback.netlify.com'
        },
        {
            label: 'View Mobile App',
            value: 'https://expo.io/@himayan/feedback-app'
        }]
    },
    {
        title: 'Online Test Platform',
        subtitle: '',
        skills: [{
            source: node,
            label: 'node'
        }, {
            source: mongo,
            label: 'mongo'
        }, {
            source: react,
            label: 'react'
        }, {
            source: redux,
            label: 'redux'
        }],
        links: [{
            label: 'View Project',
            value: 'https://vimeo.com/300708908'
        }]
    },
    {
        title: 'Weather App Extension',
        subtitle: '',
        skills: [{
            source: react,
            label: 'react'
        }, {
            source: css,
            label: 'css'
        }],
        links: [{
            label: 'View Project',
            link: 'https://github.com/himayand21/weather-extension'
        }]
    },
    {
        title: 'To Do List',
        subtitle: '',
        skills: [{
            source: js,
            label: 'js'
        }, {
            source: css,
            label: 'css'
        }, {
            source: html,
            label: 'html'
        }],
        links: [{
            label: 'View Project',
            link: 'https://github.com/himayand21/myProjects/blob/master/ToDoList.html'
        }]
    }
]