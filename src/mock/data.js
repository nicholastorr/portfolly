import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicholas Torres', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Developer website and portfolio for Nicholas Torres', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nicholas Torres.',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'C6AB8A21-D6F5-4B44-B1FB-63F42052D6CC copy.png',
  paragraphOne:
    'Hello, my name is Nicholas Esquilo Torres. I currently freelance and work as the Front End Developer for a large manufactoring company.',
  paragraphTwo:
    'I began my journey on the internet when I was in about middle school and wanted to make a theme for my Myspace page. Little did I know this would be my first introduction into HTML and I fell in love with the process of having an idea and slowly building it up into what I imagined. I decided to take the plunge and started my journey as a web developer. My first introduction to actual coding was taking an AP Computer Science course offered at my high school; the first time they ever offered it. In this class is where I learned the fundamentals and how to truly problem solve with a computer. I went on to major in Computer Science at the University of South Florida and have had various developer jobs since.',
  paragraphThree:
    'At this point I realized I did all this learning but never tried to make anything truly complex. Starting with simple video games, I built more and more projects until I learned about Web Development. While I still love playing and making video games I found there was a big need for Ecommerce and other various websites. I felt like I was still inexperienced with actual Web Development so I enrolled in Lambda School to try to learn enough to effectively build or manage my own websites.',
  paragraphFour:
    'After all the schooling and self education this was the hardest I was ever tested and I learned at an exponential rate. Completing the bootcamp successfully was a challenge but I was able to end up with a wealth of knowledge that I am constantly expanding. I apply this knowledge and work ethic to anything I do and take pride in anything I make, from the simplest apps to full websites.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mbs-standoffs.png',
    title: 'HTM MBS',
    info: 'Lead Developer for 4 E-commerce sites with over 70k products and 200k customers averaging over 1 million in sales per month',
    info2: 'Ongoing work includes adding new features, products, and improving existing functionality',
    url: 'https://mbs-standoffs.com/',
    repo: '', // if no repo, the button will not show up
    img2: 'mbs-standoffs.png',
  },
  {
    id: nanoid(),
    img: 'dbp',
    title: 'Scribble Stadium',
    info: 'Non-Profit game developed to make kids interested in reading by creating fanfiction/spinoff stories and drawings that they vote on and earn points to try win prizes',
    info2: '',
    url: 'https://dixiebellepaint.com/',
    repo: '', // if no repo, the button will not show up
    img2: 'dbp.png',
  },
  {
    id: nanoid(),
    img: 'groovy-dawgs',
    title: 'Groovy Dawgs Street Food and Catering',
    info: 'Simple and fast website for restaurant optimized for SEO ',
    info2: '',
    url: '',
    repo: 'https://github.com/nicholastorr/groovy-dawgs', // if no repo, the button will not show up
    img2: 'groovy-dawgs.png',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nick.torres213@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/nicholastorr',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicholas-torres-918b921b6/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nicholastorr',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
