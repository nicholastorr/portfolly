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
    'I began my journey on the internet when I was in about middle school and wanted to make a custom, "emo" theme for my Myspace page. I would not have considered myself a creative person however the challenge it gave me to make something cool for people to see and use is what drove me to learn about coding. Later on I get to highschool and in my senior year get to take the first Computer Science offered at my school. It was a dumpster fire, going through three different teachers throughout the year I never got a solid foundation but understood the principles. However getting the taste of coding got me hooked, and I ended up majoring in Computer Science at the University of South Florida and got an Associates Degree.',
  paragraphThree:
    'At this point I realized I did all this learning but never tried to make anything truly complex. Starting with simple video games, I built more and more projects until I learned about Web Development. While I still love playing and making video games I found there was a big need for Ecommerce and other various websites. I felt like I was still inexperienced with actual Web Development so I enrolled in Lambda School to try to learn enough to effectively build or manage my own websites.',
  paragraphFour:
    'After all the schooling and self education this was the hardest I was ever tested and I learned at an exponential rate. Completing the bootcamp successfully was a challenge but I was able to end up with a wealth of knowledge that I am constantly expanding. I apply this knowledge and work ethic to anything I do and take pride in anything I make, from the simplest apps to full websites. In any case you will not be dissapointed.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mbs-standoffs.png',
    title: 'HTM MBS',
    info: 'Various major UI and UX improvements as well as greatly improving SEO as Lead Front End Developer.',
    info2: 'Also Developer for MBS-Signsupply and MBS-Hanging Systems',
    url: 'https://mbs-standoffs.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dbp',
    title: 'Dixie Belle Paint',
    info: 'Work on new products and website UI as Junior Developer. Work included improving map to include several different types of retailer. ',
    info2: '',
    url: 'https://dixiebellepaint.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'groovy-dawgs',
    title: 'Groovy Dawgs Street Food and Catering',
    info: 'Simple and fast website for restaurant optimized for SEO ',
    info2: '',
    url: '',
    repo: 'https://github.com/nicholastorr/groovy-dawgs', // if no repo, the button will not show up
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
