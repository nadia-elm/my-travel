import athensImg from './images/athens.avif'
import romeImg from './images/roma.avif'
import istanbulImg from './images/istanbul.avif'
import maldivesImg from './images/maldives copy.jpg'
import kenyaImg from './images/kenya.avif'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.Linkedin.com', icon: 'fab fa-linkedin' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: athensImg,
    date: 'november 26th, 2023',
    title: 'Athens Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'greece',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: romeImg,
    date: 'october 1th, 2023',
    title: 'best of rome',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'italy',
    duration: 11,
    cost: 1400,
  },
  // {
  //   id: 3,
  //   image: maldivesImg,
  //   date: 'september 15th, 2023',
  //   title: 'unwind in  Maldives',
  //   info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
  //   location: 'maldives',
  //   duration: 8,
  //   cost: 5000,
  // },
  {
    id: 4,
    image: istanbulImg,
    date: 'december 5th, 2023',
    title: 'istanbul highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Turkey',
    duration: 20,
    cost: 3300,
  },
  {
    id: 4,
    image: kenyaImg,
    date: 'december 25th, 2023',
    title: 'discover Kenya',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
]
