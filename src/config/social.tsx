import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const SOCIAL = {
  GITHUB_ACCOUNT_URL: "https://github.com/mohamadomran",
  EMAIL: "hello@mohamadomran.dev",
  INSTAGRAM_ACCOUNT_URL: "https://www.instagram.com/mohamadomran_13/",
  TWITTER_ACCOUNT_URL : "https://twitter.com/itsmohamadomran",
};

export const HEADER_SOCIAL_ICONS = [
  { href: SOCIAL.GITHUB_ACCOUNT_URL, "aria-label": "Github Account", icon: <FiGithub />, isExternal: true },
  { href: SOCIAL.TWITTER_ACCOUNT_URL, "aria-label": "Medium Account", icon: <FaTwitter />, isExternal: true },
  { href: SOCIAL.INSTAGRAM_ACCOUNT_URL, "aria-label": "Github Account", icon: <FaInstagram />, isExternal: true },
];
