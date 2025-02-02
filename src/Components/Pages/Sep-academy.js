import React from 'react';
import Card from './Card';
import  '../../css/Card.css';


function Sepacademy() {
  return (
    <div className="about-sep">
        <h1 className="about-sep"id="h1sep">  Computers are changing everything </h1>
        <p> From cell phones, GPS navigation systems, satellites, movies, to our SMART 
            home systems ("Hey, Alexa, turn the light off please!"), our lives are 
            changing in the speed of light. As so, technology affects every career 
            field! We believe that every 21st century student should have a chance 
            to learn about algorithms, how to make apps, and how the internet works, 
            just like they learn about photosynthesis, the digestive system, or electricity.
        </p>
        <br></br>
        <p> In the SEP Pathway you will learn popular coding languages like Python, HTML, CSS 
            and Javascript among others. You also have an opportunity to earn college credit 
            through AP Computer Science Principles! In addittion to this, students will learn 
            about soft skills to be the best candidate for any job, have CTE endorsement on their 
            diploma and gain insight to how the real world operates by going on field trips and 
            participating in internships.
        </p>
        <br></br>
        <h2 className="about-sep" id="h2sep">Software Engineering Pathway Course Sequence</h2>
        <p id="p3">Take a look at our course sequence below to see what you will be learning about in each grade!</p>
        <div className="card-bigcontainer">
        <Card
            imageUrl='https://snap.berkeley.edu/img/snap-byob.png' 
            title= '9th grade: TEALS Intro to Computer Science'
            body='Students learn basic concepts of computer science through SNAP!, 
            an online-based programming language made by University of Berkeley and MIT. 
            The curriculum incorporates game design and development as culminating projects.'            
        />

        <Card
            imageUrl='data:image/jpeg;base64,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'
            title= '10th grade: Exploring Computer Science'
            body='Students learn the most popular coding language, Python, through 
            Amazon-sponsored platform called Project Stem and Edhesive. Students will 
            also able to be eligible to take PCEP – Certified  Entry-Level Python 
            Programmer exam from Python Institute.'
        />

        <Card
            imageUrl='https://www.zend.com/sites/default/files/image/2019-09/plugin-aws.jpg' 
            title= '11th grade: Cloud Foundations with AWS'
            body='Students will prepare to take a class focused on Cloud Foundations in partnership with Amazon.'
        />

        <Card
            imageUrl='https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0c51d2c2e5f85fe45126eb818f748267/google-cloud-shell.png' 
            title= '12th grade: Computer Science and the City'
            body='In CS and the City, a course designed by CS4ALL, students will learn 
            basic web design skills and learn to use and analyze the NYC open data 
            portal. Students in this course developed THIS website using the 
            knoweldge gained from CS & the City! '
        /> 
        </div>
     </div>
    );
}

export default Sepacademy;
