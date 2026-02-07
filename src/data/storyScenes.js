import nittClockTower from '../assets/nitt_clock_tower.png';

// Story scenes data
const storyScenes = [
    {
        text: "It began during my internship at NITT.",
        props: [
            {
                src: nittClockTower,
                alt: "NITT Clock Tower",
                position: { center: true, bottom: "0" },
                size: { height: "85%" },
                style: { opacity: 0.6, mixBlendMode: "screen" }
            }
        ],
        avatars: [
            { type: "him", position: { left: "10%" }, animation: "idle" }
        ]
    },
    {
        text: "Days moved quietly there — work, routines, familiar faces passing by.",
        props: [
            {
                src: nittClockTower,
                alt: "NITT Clock Tower",
                position: { right: "-10%", bottom: "0" },
                size: { height: "85%" },
                style: { opacity: 0.6, mixBlendMode: "screen" }
            }
        ],
        avatars: [
            { type: "him", position: { left: "10%" }, animation: "walking" }
        ]
    },
    {
        text: "Somewhere in between, our paths crossed.",
        props: [
            {
                src: nittClockTower,
                alt: "NITT Clock Tower",
                position: { center: true, bottom: "0" },
                size: { height: "85%" },
                style: { opacity: 0.6, mixBlendMode: "screen" }
            }
        ],
        avatars: [
            { type: "him", position: { left: "10%" }, animation: "idle" },
            { type: "her", position: { right: "10%" }, animation: "idle" }
        ]
    },
    {
        text: "Conversations became easier. Longer. Without either of us noticing.",
        props: [
            {
                src: nittClockTower,
                alt: "NITT Clock Tower",
                position: { center: true, bottom: "0" },
                size: { height: "85%" },
                style: { opacity: 0.6, mixBlendMode: "screen" }
            }
        ],
        avatars: [
            { type: "him", position: { left: "15%" }, animation: "talking" },
            { type: "her", position: { right: "15%" }, animation: "talking" }
        ]
    },
    {
        text: "Then there was Thanjavur Periya Kovil.",
        props: [],
        avatars: []
    },
    {
        text: "Stone older than time. Silence that makes you think.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "idle" }
        ]
    },
    {
        text: "Somewhere inside all that stillness, my face changed.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "idle" }
        ]
    },
    {
        text: "You noticed. You asked me, 'Is everything okay?'",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "idle" },
            { type: "him", position: { left: "20%" }, animation: "walking" }
        ]
    },
    {
        text: "Later, in Tiruchendur, I was walking through the streets while you spoke.",
        props: [],
        avatars: [
            { type: "him", position: { left: "25%" }, animation: "walking" },
            { type: "her", position: { right: "25%" }, animation: "walking" }
        ]
    },
    {
        text: "You spoke about your past. And something settled into me.",
        props: [],
        avatars: [
            { type: "him", position: { left: "25%" }, animation: "idle" },
            { type: "her", position: { right: "25%" }, animation: "talking" }
        ]
    },
    {
        text: "I remember thinking — I should never let this girl feel this way again.",
        props: [],
        avatars: [
            { type: "him", position: { center: true }, animation: "idle" }
        ]
    },
    {
        text: "That's when I knew. I fell for you 💖",
        props: [],
        avatars: [
            { type: "him", position: { left: "30%" }, animation: "idle" },
            { type: "her", position: { right: "30%" }, animation: "idle" }
        ]
    },
    {
        text: "You are beautifully chaotic.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "talking" }
        ]
    },
    {
        text: "You sleep through alarms like they personally offended you.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "idle" }
        ]
    },
    {
        text: "Stubborn about the smallest things. Confused when life gets heavy.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "idle" }
        ]
    },
    {
        text: "Yet somehow, you are always the one who shows up.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "talking" }
        ]
    },
    {
        text: "And when you get excited…",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "jumping" }
        ]
    },
    {
        text: "That baby voice of yours fades every worry and stress away.",
        props: [],
        avatars: [
            { type: "her", position: { center: true }, animation: "talking" }
        ]
    },
    {
        text: "So I have one more question.",
        props: [],
        avatars: []
    }
];

export default storyScenes;
