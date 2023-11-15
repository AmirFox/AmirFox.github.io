import self from "../../public/profile.png"
import mock1 from "../../public/mock1.png"

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
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
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
            title: "TBD",
            live: "https://github.com/AmirFox", 
            source: "https://github.com/AmirFox", 
            image: mock1
        }
    ]
}
