import React from "react";
import "../Container.css";




function AboutMe() {

    // returning the about me section
    return (
        <div id="about-me" className="container">
            <img src="./me.jpeg" width="200"alt="outside" class="rounded float-left" />
            <div className="main-content-div">
                <p className="p-for-about-me">My name is Luca and I currently reside in Denver, CO. I have been a pediatric nurse for over 8 years and I currently work at The Childrens Hosptial of Colorado. 
                    <br></br>
                    <br></br>  I recently  made the decision to immerse myself in something that I have always been passionate about: web development. 
                    <br></br>
                    <br></br> I will receive my Full-Stack Web Development Certificate from The University of Denver in June of 2022. I am excited to begin this new chapter!
                </p>
            </div>
        </div>
    )
}

export default AboutMe;


