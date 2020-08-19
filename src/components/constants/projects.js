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
import skillRegistry from '../../images/projects/skillRegistry.jpg';
import interviewDesktop from '../../images/projects/interviewDesktop.jpg';
import interviewMobile from '../../images/projects/interviewMobile.jpg';
import onlineTest from '../../images/projects/onlineTest.jpg';
import weatherExtension from '../../images/projects/weatherExtension.jpg';
import bookStore from '../../images/projects/bookStore.jpg';
import todoList from '../../images/projects/todoList.jpg';
import kataKuti from '../../images/projects/katakuti.jpg';
import covid19 from '../../images/projects/covid19.jpg';
import nodeReactAuth from '../../images/projects/nodeReactAuth.jpg';

export const projects = [
    {
        title: 'WeConnect',
        subtitle: `A texting application where the user can find his friends and connect with them via friend requests. Primary features include - forward, reply, delete messages, sending images and user profile.`,
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
		title: 'Covid Statistics',
		subtitle: 'An overview of the damage caused by Covid-19 in the form of maps and charts.',
		skills: [{
			source: react,
			label: 'React'
		}, {
			source: sass,
			label: 'Sass'
		}],
		links: {
			label: 'Visit Website',
			value: 'https://covid-statistics.netlify.com'
		},
		image: covid19
	},
	{
		title: 'node-react-auth',
		subtitle: 'A helper library to ease jwt authentication for node-react applications. For applications using Node-Express-MongoDB-React, this library would help you create an authentication launchpad with minimum manual configurations.',
		skills: [{
			source: node,
			label: 'NodeJS'
		}, {
			source: mongo,
			label: 'MongoDB'
		}, {
			source: react,
			label: 'React'
		}],
		links: {
			label: 'View Module',
			value: 'https://www.npmjs.com/package/node-react-auth'
		},
		image: nodeReactAuth
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
        }, {
            source: css,
            label: 'CSS-3'
        }],
        links: {
            label: 'Visit Website',
            value: 'https://skill-registry.netlify.com'
        },
        image: skillRegistry
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
        }, {
            source: css,
            label: 'CSS-3'
        }],
        links: {
            label: 'Visit Website',
            value: 'https://interview-feedback.netlify.com'
        },
        image: interviewDesktop
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
        image: interviewMobile
    },
    {
        title: 'Online Test Platform',
        subtitle: 'An online test platform with a candidate portal for attending the exam and an admin portal for monitoring performances of candidates.',
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
        }, {
            source: css,
            label: 'CSS-3'
        }],
        links: {
            label: 'View Project',
            value: 'https://vimeo.com/300708908'
        },
        image: onlineTest
    },
    {
        title: 'Weather App Extension',
        subtitle: 'A weather app to give you real time weather information of any location around the world.',
        skills: [{
            source: react,
            label: 'React'
        }, {
            source: css,
            label: 'CSS-3'
        }],
        links: {
            label: 'View Project',
            value: 'https://github.com/himayand21/weather-extension'
        },
        image: weatherExtension
    },
	{
		title: 'KataKuti',
        subtitle: `The classic game of tic-tac-toe which can be played between two users from the same device. And it also comes with an easy to beat AI.`,
        skills: [{
            source: react,
            label: 'React'
        }, {
            source: js,
            label: 'JavaScript'
        }, {
            source: sass,
            label: 'Sass'
        }, {
            source: html,
            label: 'HTML-5'
        }],
        links: {
            label: 'View Project',
            value: 'https://kata-kuti.netlify.com'
        },
        image: kataKuti
	},
    {
        title: 'Bookstore',
        subtitle: `An e-commerce website for finding one's favorite book using a given keyword. The search results are provided by google books api.`,
        skills: [{
            source: react,
            label: 'React'
        }, {
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
            value: 'https://vimeo.com/300492070'
        },
        image: bookStore
    },
    {
        title: 'To Do List',
        subtitle: 'A simple To-Do list application to store reminders.',
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
            value: 'https://github.com/himayand21/myProjects/blob/master/ToDoList.html'
        },
        image: todoList
    }
]