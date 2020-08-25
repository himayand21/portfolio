import React from 'react';

import birthday from '../../images/icons/birthday.svg';
import school from '../../images/icons/school.svg';
import student from '../../images/icons/student.svg';
import wipro from '../../images/icons/wipro.svg';
import snapwiz from '../../images/icons/snapwiz.svg';
 
const getExperience = (firstDate, lastDate) => {
    const joiningDate = new Date(firstDate);
    const today = lastDate ? new Date(lastDate) : new Date();
    const timeDifference = today.getTime() - joiningDate.getTime();
    const noOfMonths = Math.ceil(timeDifference / (1000 * 3600 * 24 * 30));
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
        icon: <img src={birthday} className="icon-img" alt="" />
    },{
        description: [
            {label: "school", value: "Nava Nalanda"},
            {label: "X-th", value: "90.85%"},
            {label: "XII-th", value: "92%"}
        ],
        icon: <img src={school} className="icon-img" alt="" />
    },{
        description: [
            {label: "college", value: "Vellore Institute of Technology"},
            {label: "stream", value: 'EIE'},
            {label: "CGPA", value: "9.04"}
        ],
        icon: <img src={student} className="icon-img" alt="" />
    },{
        description: [
            {label: "work", value: "Wipro Technologies"},
            {label: "designation", value: 'Project Engineer'},
            {label: "experience", value: getExperience('06/27/2018', '04/14/2020')}
        ],
        icon: <img src={wipro} className="icon-img" alt="" />
    },{
        description: [
            {label: "work", value: "Snapwiz Edutec Pvt Ltd"},
            {label: "designation", value: 'Software Engineer'},
            {label: "experience", value: getExperience('04/15/2020')}
        ],
        icon: <img src={snapwiz} className="icon-img" alt="" />
    }
]