import React from "react";

import Cards from "../components/Cards";

const projects = [
  {
    id: 1,
    name: "To Cook Or Not To Cook",
    description: "MySql/API ",
    subtitle: "To Cook Or Not To Cook",
    deployedLink: "https://to-cook-or-not-to-cook.herokuapp.com/",
    repoLink: "https://github.com/NilesHachmeister/to-cook-or-not-to-cook-server.",
    image: "./tcontc.jpeg",
  },
  {
    id: 2,
    name: "Employee Management System",
    description: "View add and update different employee roles.",
    subtitle: "MySql",
    deployedLink: "https://github.com/human-exp11/lu12-sql-employee",
    repoLink: "https://github.com/human-exp11/lu12-sql-employee",
    image: "./employee.jpg",
  },
  {
    id: 3,
    name: "Note Taker",
    description: "Utilize Insomnia to create, save, & delete notes.",
    subtitle: "Express",
    deployedLink: "https://lu11-express-note.herokuapp.com/notes",
    repoLink:"https://github.com/human-exp11/lu11-express-note",
    image:  "./notetaker.jpg",
  },
  {
    id: 4,
    name: "Regex Tutorial",
    description: "Create a GitHub Gist",
    subtitle: "Regex",
    deployedLink:  "https://gist.github.com/human-exp11/c80103897c1323932fe5dedd46a691f8#file-lu17-gist-regex",
    repoLink: "https://gist.github.com/human-exp11/c80103897c1323932fe5dedd46a691f8#file-lu17-gist-regex",
    image: "./regex.jpg",
  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "Bootstrap",
    subtitle: "API/Bootstrap",
    deployedLink:  "https://human-exp11.github.io/w6-ssapi-weather/",
    repoLink:"https://github.com/human-exp11/w6-ssapi-weather",
    image: "./weather.png",
  },
  {
    id: 6,
    name: "Code Quiz",
    description: "JavaScript multiple-choice quiz application.",
    subtitle: "Javascript",
    deployedLink: "https://human-exp11.github.io/w4-web-cq/",
    repoLink: "https://github.com/human-exp11/w4-web-cq",
    image:  "./SS.png",
  },
];

export default function Portfolio() {
  return (
    <div className="w-75 mx-auto">
      <h1 className="pb-4 pt-2">Portfolio</h1>
     
      <Cards projects={projects} />
    
    </div>
  );
}
