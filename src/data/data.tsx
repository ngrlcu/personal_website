import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  //OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background Large.jpeg';
import porfolioAmsterdam1 from '../images/portfolio/amsterdam-1 Large.jpeg';
import porfolioAmsterdam2 from '../images/portfolio/amsterdam-2 Large.jpeg';
import porfolioBudapest1 from '../images/portfolio/budapest-1 Large.jpeg';
import porfolioCopenhagen1 from '../images/portfolio/copenhagen-1 Large.jpeg';
import porfolioGermany1 from '../images/portfolio/germania-1 Large.jpeg';
import porfolioGrignetta1 from '../images/portfolio/grignetta-1 Large.jpeg';
import porfolioIndia1 from '../images/portfolio/india-1 Large.jpeg';
import porfolioIndia2 from '../images/portfolio/india-2 Large.jpeg';
import porfolioIndia3 from '../images/portfolio/india-3 Large.jpeg';
import porfolioIndia4 from '../images/portfolio/india-4 Large.jpeg';
import porfolioIndia5 from '../images/portfolio/india-5 Large.jpeg';
import porfolioIndia6 from '../images/portfolio/india-6 Large.jpeg';
import porfolioIndia7 from '../images/portfolio/india-7 Large.jpeg';
import porfolioKjerag1 from '../images/portfolio/kjerag-1 Large.jpeg';
import porfolioLappony1 from '../images/portfolio/lapponia-1 Large.jpeg';
import porfolioNorway1 from '../images/portfolio/norway-1 Large.jpeg';
import porfolioNorway2 from '../images/portfolio/norway-2 Large.jpeg';
import porfolioNorway3 from '../images/portfolio/norway-3 Large.jpeg';
import porfolioNorway4 from '../images/portfolio/norway-4 Large.jpeg';
import porfolioNorway5 from '../images/portfolio/norway-5 Large.jpeg';
import porfolioNorway6 from '../images/portfolio/norway-6 Large.jpeg';
import porfolioPreikestolen1 from '../images/portfolio/preikestolen-1 Large.jpeg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  //TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Luca Nigro Website',
  description: "A personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  //Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `LUCA NIGRO`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Milan based <strong className="text-stone-100">Quantum Physicist</strong>, currently finishing my studies
        at <strong className="text-stone-100">Università degli Studi di Milano</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love travelling around the world and taking pictures of the Earth's beauty.
        I also love music, both to listen and to play
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Milan, IT', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Piano, Saxophone', Icon: SparklesIcon},
    {label: 'Study', text: 'Università degli studi di Milano', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Italian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Coding Languages',
    skills: [
      {
        name: 'C++',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Bash',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia1,
  },
  {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia2,
  },
  {
    title: 'Amsterdam',
    description: '',
    url: "",//'https://timbaker.me',
    image: porfolioAmsterdam1,
  },
  {
    title: 'Amsterdam',
    description: '',
    url: "",//'https://timbaker.me',
    image: porfolioAmsterdam2,
  },
  {
    title: 'Budapest',
    description: '',
    url: "",//'https://timbaker.me',
    image: porfolioBudapest1,
  },
  {
    title: 'Copenhagen',
    description: 'Nyhavn',
    url: "",//'https://timbaker.me',
    image: porfolioCopenhagen1,
  },
  {
    title: 'Neuschwanstein',
    description: '',
    url: "",//'https://timbaker.me',
    image: porfolioGermany1,
  },
  {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia3,
  },
  {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia4,
  },
    {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia5,
  },
  {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia6,
  },
  {
    title: 'India',
    description: 'Andra Pradesh',
    url: "",//'https://timbaker.me',
    image: porfolioIndia7,
  },
  {
    title: 'Norway',
    description: 'Tromsø',
    url: "",// 'https://timbaker.me',
    image: porfolioNorway1,
  },
  {
    title: 'Norway',
    description: 'Trolltunga',
    url: "",// 'https://timbaker.me',
    image: porfolioNorway2,
  },
  {
    title: 'Norway',
    description: 'Trolltunga',
    url: "",// 'https://timbaker.me',
    image: porfolioNorway3,
  },
  {
    title: 'Norway',
    description: 'Trolltunga',
    url: "",// 'https://timbaker.me',
    image: porfolioNorway4,
  },
    {
    title: 'Norway',
    description: 'Oslo',
    url: "",// 'https://timbaker.me',
    image: porfolioNorway5,
  },
  {
    title: 'Norway',
    description: 'Tromsø',
    url: "",// 'https://timbaker.me',
    image: porfolioNorway6,
  },
    {
    title: 'Italy',
    description: 'Grignetta',
    url: "",// 'https://timbaker.me',
    image: porfolioGrignetta1,
  },
    {
    title: 'Norway',
    description: 'Preikestolen',
    url: "",// 'https://timbaker.me',
    image: porfolioPreikestolen1,
  },
  {
    title: 'Norway',
    description: 'Kjeragbolten',
    url: "",// 'https://timbaker.me',
    image: porfolioKjerag1,
  },
  {
    title: 'Finland',
    description: 'Lappony',
    url: "",// 'https://timbaker.me',
    image: porfolioLappony1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2023',
    location: 'Università degli Studi di Milano',
    title: 'Master in Physics',
    content: <p></p>,
  },
  {
    date: 'August 2022 - January 2023',
    location: 'University of Oslo',
    title: 'Erasmus+',
    content: <p></p>,
  },
  {
    date: 'September 2020',
    location: 'Università degli Studi di Milano-Bicocca',
    title: 'Bachelor in Physics',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'August 2018',
    location: 'Allipalli - India',
    title: 'Volounteer',
    content: (
      <p>
        I helped with different things in an orphanage.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: []};
//    {
//      name: 'John Doe',
//      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//    },
//    {
//      name: 'Jane Doe',
//      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//    },
//    {
//      name: 'Someone else',
//      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//    },
//  ],
//};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you would like to get in touch with me, please send me an email.',
  items: [
    {
      type: ContactType.Email,
      text: 'l.nigro1836@gmail.com',
      href: 'mailto:l.nigro1836@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Cinisello Balsamo (MI), Italy',
      href: 'https://goo.gl/maps/5FhzyJWPz3nbsmv9A',
    },
    {
      type: ContactType.Instagram,
      text: '@luca_nigro_ph',
      href: 'https://www.instagram.com/luca_nigro_ph/',
    },
    {
      type: ContactType.Github,
      text: 'ngrlcu',
      href: 'https://github.com/ngrlcu',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ngrlcu'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/luca-nigro-3168a41aa/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/luca_nigro_ph/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
