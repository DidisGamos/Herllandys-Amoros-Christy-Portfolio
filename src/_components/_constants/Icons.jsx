import { FaFacebook, FaGit, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";

export const Call = [
  {
    id: 1,
    icon: <MdEmail size={29.333} className="max-md:w-[25px] max-md:h-[25px]" />,
    name: "Email",
  },
  {
    id: 2,
    icon: <MdPhone size={29.333} className="max-md:w-[25px] max-md:h-[25px]" />,
    name: "Phone",
  },
];

export const Socials = [
  {
    id: 1,
    icon: <FiFacebook size={29.333} className="max-md:w-[25px] max-md:h-[25px]" />,
    name: "Facebook",
  },
  {
    id: 2,
    icon: <FiGithub size={29.333} className="max-md:w-[25px] max-md:h-[25px]" />,
    name: "Git",
  },
  {
    id: 3,
    icon: <FiTwitter size={29.333} className="max-md:w-[25px] max-md:h-[25px]" />,
    name: "Twitter",
  },
  {
    id: 4,
    icon: <FiLinkedin size={29.333} className="max-md:w-[25px] max-md:h-[25px]" />,
  },
];
