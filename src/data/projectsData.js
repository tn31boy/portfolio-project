import one from "../assets/png/images.jpg";
import two from "../assets/png/IPFTF.jpg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Portfolio",
    projectDesc: "This project about to showcase portfolio of a person",
    tags: ["React", "CSS", "emailJS"],
    code: "git@github.com:tn31boy/portfolio-project.git",
    demo: "https://tn31boy.github.io/Portfolio/",
    image: one,
  },
  {
    id: 2,
    projectName: "Transparent Fundraising",
    projectDesc:
      "This project add more transparent and accountability compare to normal fundraising websites using blockchain ",
    tags: ["React", "Tailwind css", "ethereum", "hardhat"],
    code: "https://github.com/tn31boy/IPFSATF.git",
    demo: "",
    image: two,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
