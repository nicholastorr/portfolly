import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicholas Torres | Full Stack Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Developer website and portfolio for Nicholas Torres', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nick.',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'C6AB8A21-D6F5-4B44-B1FB-63F42052D6CC copy.png',
  paragraphOne:
    'Hi there, my name is Nicholas Esquilo Torres. I currently freelance and am the Chief Technical Officer for a CPA referral company and education platform called The Walters Institute™',
  paragraphTwo:
    'I began my journey on the internet when I was in middle school and wanted to make a theme for my Myspace page. Little did I know this would be my first introduction into HTML and it was the first time I actually felt creative. I picked up some Javascript books and fell in love with finding creative solutions to problems. 10 years later I am still learning and growing as a developer.',
  paragraphThree:
    'On a professional level, I graduated from University of South Florida with a Bachelors in Computer Science and attended Bloom Institute of Tech; a 2 year Full Stack Web Development bootcamp. Languages I have professionally used include Javascript, Python, PHP, and C++ as well as a variety of technologies and frameworks. I have worked with React, Angular, Vue, Node, Express, MongoDB, MySQL, and many more. I am always looking to learn new technologies and improve my skills.',
  paragraphFour:
    '',
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
    img: 'scribble-stadium2.png',
    title: 'Scribble Stadium',
    info: 'Non-Profit game developed to make kids interested in reading by creating fanfiction/spinoff stories and drawings that they vote on and earn points to try win prizes',
    info2: '',
    url: 'https://www.storysquad.education/',
    repo: '', // if no repo, the button will not show up
    img2: 'scribble-stadium2.png',
  },
  {
    id: nanoid(),
    img: 'groovy-dawgs',
    title: 'Groovy Dawgs Street Food and Catering',
    info: 'Simple and fast website for a small restaurant optimized for SEO and speed',
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
