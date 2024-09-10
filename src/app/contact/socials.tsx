import { BiLogoDevTo } from "react-icons/bi";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="flex flex-row gap-4 mt-2 justify-evenly">
      <a
        href="https://github.com/Diorla"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <FaGithub size={24} color="#fafafa" />
      </a>
      <a
        href="https:/dev.to/diorla"
        target="_blank"
        rel="noopener noreferrer"
        title="dev.to"
      >
        <BiLogoDevTo size={24} color="#ffffff" />
      </a>
      <a
        href="https://www.linkedin.com/in/ade-adeola/"
        target="_blank"
        rel="noopener noreferrer"
        title="linkedin"
      >
        <FaLinkedin size={24} color="#0a66c2" />
      </a>
      <a
        href="https://dribbble.com/diorla"
        target="_blank"
        rel="noopener noreferrer"
        title="dribbble"
      >
        <FaDribbble size={24} color="#ea4c89" />
      </a>
    </div>
  );
}
