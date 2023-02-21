import Logo from "../assets/images/Logo.svg";
import Menu from "../assets/images/menu.svg";

import AppStore from "../assets/images/AppStore.svg";
import Facebook from "../assets/images/Facebook.svg";
import Instagram from "../assets/images/Instagram.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Twitter from "../assets/images/Twitter.svg";
import Location from "../assets/images/Location.svg";

import imageOne from "../assets/images/imageOne.svg";
import imageTwo from "../assets/images/imageTwo.svg";

export const headerData = {
  image: Logo,
  menuIcon: Menu,
  name: "FORALL",
  slug: "We Fill The Gap",
  links: ["Our Services", "About Us", "Join Us"],
};

export const footerData = {
  image: Logo,
  name: "FORALL",
  links: {
    linksTitle: "About Us",
    links: ["Our History", "How we Work", "Resources"],
  },
  socialMediaIcons: [Facebook, Instagram, LinkedIn, Twitter],
  country: "Saudi Arabia",
  address: "Jeddah, Sultan St., Lilyan Tower 2, 11th Floor",
  email: "hello@forall.com",
  mobile: "+00 123 456 789",
  locationIcon: Location,
  stores: [AppStore, AppStore],
};

export const homePageData = {
  firstContentSection: {
    title: "We Fill Your Gap",
    description:
      "We are ready to bring you all your needs anywhere at any time through our useful mobile application. No need to waste time you are one click away.",
    buttonText: "Install Now",
    image: imageOne,
  },
  secondContentSection: {
    title: "What We Offer",
    description:
      "We Offer you different kinds of services that will help you save your time and be more comfortable. ",
    buttonText: "Our Services",
    image: imageTwo,
  },
};

export const providerPageData = {
  firstContentSection: {
    title: "Overview",
    description:
      "Our Leadership Principles aren't just a pretty inspirational wall hanging. These Principles work hard, just like we do. Amazonians use them, every day, whether they're discussing ideas for new projects, deciding on the best solution for a customer's problem, or interviewing candidates. It's just one of the things that makes Amazon peculiar.",
  },
  secondContentSection: {
    title: "Features and Benefits ",
    description:
      "We aim to be Earth’s most customer centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximize their success.",
  },
};
