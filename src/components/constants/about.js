import React from 'react';

import {Birthday, School, Student, Employee} from '../icons';
 
const getExperience = () => {
    const joiningDate = new Date('06/27/2018');
    const today = new Date();
    const timeDifference = today.getTime() - joiningDate.getTime();
    const noOfMonths = Math.floor(timeDifference / (1000 * 3600 * 24 * 30));
    const noOfYears = Math.floor(noOfMonths / 12);
    const yearString = `year${noOfYears === 1 ? '' : 's'}`;
    const monthString = `month${noOfMonths === 1 ? '' : 's'}`;
    if (!noOfYears) return `${noOfMonths} ${monthString}`;
    if (!(noOfMonths - (noOfYears * 12))) return `${noOfYears} ${yearString}`;
    return `${noOfYears} ${yearString} ${noOfMonths - (noOfYears * 12)} months`
}

export const aboutConstants = [
    {
        description: [
            {label: "date of birth", value: "21st September, 1996"},
            {label: "home", value: "Kolkata, West Bengal"},
            {label: "languages", value: "Bengali, English and Hindi"}
        ],
        icon: <Birthday />
    },{
        description: [
            {label: "school", value: "Nava Nalanda"},
            {label: "X-th", value: "90.85%"},
            {label: "XII-th", value: "92%"}
        ],
        icon: <School />
    },{
        description: [
            {label: "college", value: "Vellore Institute of Technology"},
            {label: "stream", value: 'EIE'},
            {label: "CGPA", value: "9.04"}
        ],
        icon: <Student />
    },{
        description: [
            {label: "work", value: "Wipro Technologies"},
            {label: "designation", value: 'Project Engineer'},
            {label: "experience", value: getExperience()}
        ],
        icon: <Employee />
    }
]