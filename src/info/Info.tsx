import self from "../../public/profile.png"
import underConstruction from "../../public/under-construction.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Amir",
    lastName: "Fox",
    initials: "af",
    byline: "and I build cool stuff!",
    position: "Frontend Developer",
    selfPortrait: self, // don't change
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '👨‍💻',
            text: 'Frontend Engineer'
        },
        {
            emoji: '🗾',
            text: 'Based in the Japan'
        },
        {
            emoji: "💼",
            text: "Working @ Woven by Toyota"
        },
    ],
    socials: [
        {
            link: "https://github.com/AmirFox",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/amirfox",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://instagram.com/mr_a_fox",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
    ],
    bio: "Hello! I'm Amir, and I'm leading a team buliding awesome frontend applications at \"Woven by Toyota\". My passion is bringing people's ideas to life - from intuitive UI tools, to sleek dashboards and complex 3D applications.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'three.js', 'git', 'github'],
            exposedTo: ['C# .NET', 'Unity3D', 'Blender']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'judo',
            emoji: '🥋'
        },
        {
            label: 'reading',
            emoji: '📖'
        }
    ],
    portfolio: [ 
        {
            title: "Under Contruction ⚒️",
            live: "", 
            source: "", 
            image: underConstruction
        }
    ]
}
