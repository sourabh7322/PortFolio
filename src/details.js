import LMS from './media/LMS.png'


import BeyondBoundaries from './media/BeyondBoundaries.png'
import Tanishque from './media/Tanishque.png'


export const details={
    firstname:"Sourabh",
    lastname:"",
    // navList:["Home","About","Skills","Work","Contact"],
    navList:[{
        val1:"Home",
        val2:"nav-link home"
      },{
        val1:"About",
        val2:"nav-link about"
      },{
        val1:"Skills",
        val2:"nav-link skills"
      },{
        val1:"Project",
        val2:"nav-link projects"
      },{
        val1:"Contact",
        val2:"nav-link contact"
      }],
    scrollPosition:[0,545,1070,1730,3400],
    className:["introDiv","about section","skillContainer","workDiv","contactDiv"],
    // className:["nav-link home","nav-link about","nav-link skills","nav-link projects"],
    linkedInLink:"https://www.linkedin.com/in/sourabh-rawat-123a81194/",
    githubLink:"https://github.com/sourabh7322",
    phone: '8006673927',
    mailLink:'sourabhrawat77200@gmail.com',
    techStack:[
            {
                name:"HTML",
                img:"https://img.icons8.com/color/512/html-5--v1.png"
            },
            {
                name:"CSS",
                img:"https://img.icons8.com/fluency/512/css3.png"
            },
            {
                name:"JavaScript",
                img:"https://img.icons8.com/color/512/javascript.png"
            },
            {
                name:"Java",
                img:"https://img.icons8.com/?size=512&id=Pd2x9GWu9ovX&format=png"
            },
            {
                name:"React",
                img:"https://img.icons8.com/office/512/react.png"
            },
           
            {
                name:"Chakra UI",
                img:"https://img.icons8.com/color/512/chakra-ui.png"
            },
            {
                name:"Node JS",
                img:"https://img.icons8.com/fluency/512/node-js.png"
            },
            {
                name:"BootStrap",
                img:"https://img.icons8.com/color/512/bootstrap.png",

            },
            {
                name:"Github",
                img:"https://img.icons8.com/glyph-neue/512/github.png"
            },
            {
                name:"Express JS",
                img:"https://img.icons8.com/ios/512/express-js.png"
            },
            {
                name:"Mongo DB",
                img:"https://img.icons8.com/color/512/mongodb.png"
            },
            {
                name:"Redux",
                img:"https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
            },
            {
                name:"MongoDb",
                img:"https://picjj.com/images/2024/07/24/W0Bl8q.png"
            }

    ],
    projects:[

        {
            name:"Learning Management System",
            github:"https://github.com/kPratik07/LG-Legends_053-NEM104-",
            live:"lg-legends-053-nem-104.vercel.app",
            type:"Colaborative",
            tech:["React","Redux","Chakra UI","Node JS","Express JS","MongoDb"],
            img: LMS,
            description:"About Knowledge Knook is a robust edu-tech platform designed to empower users in creating, consuming, and rating educational content. It offers a comprehensive ecosystem where learners can explore diverse educational resources, collaborate with peers, and contribute to the community's knowledge base.Whether you're a student, educator, or lifelong learner."
        },
        
        {
            name:"Beyond Boundaries",
            github:"https://github.com/adithyasudev/Gomti-Script-021",
            live:"https://6645cad5f9b1737972e5748c--glistening-pithivier-5a324a.netlify.app/",
            type:"Collaborative",
            tech:["React","Redux","Chakra UI"],
            img: BeyondBoundaries,
            description:"We have created a project website which out sources services and gives businesses end-to-end solutions. the overall aim of this project was to test our coding skills as well as our team-building skills."
        },
    
        {
            name:"Gold_Hub",
            github:"https://github.com/shivanijpatil/Pixel-Prerana-2345",
            live:"https://pixel-prerana.vercel.app/Frontend/home.html",
            type:"Collaborative",
            tech:["HTML","CSS","JavaScript","BootStrap"],
            img: Tanishque,
            description:"This project is a clone of the Tanishq, a popular retail store which gives accessories and Jewellery. The goal of this project is to recreate the visual layout."
        },

    ]

}