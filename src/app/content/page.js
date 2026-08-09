'use client'
const content = [
  {
    type: "heading",
    text: "Introduction to VPS",
  },

  {
    type: "text",
    text: "A Virtual Private Server gives you an isolated environment where you can deploy and manage your applications.",
  },

  {
    type: "subheading",
    text: "Update the Server",
  },

  {
    type: "text",
    text: "Before installing new packages, update the package repository.",
  },

  {
    type: "code",
    language: "bash",
    code: `sudo apt update
sudo apt upgrade -y`,
  },

  {
    type: "list",
    items: [
      "Keep your operating system updated.",
      "Use SSH keys for authentication.",
      "Never expose private credentials.",
    ],
  },

  {
    type: "note",
    title: "Important",
    text: "Never share your private SSH key with anyone.",
  },

  {
    type: "code",
    language: "bash",
    code: `node --version
npm --version`,
  },
];
import ReadContent from "../components/contentDisplay";

export default function Content(){
    return(
        <ReadContent
            courseName="VPS deployment"
            moduleName="Nginx & reverse proxy"
            content = {content}
        ></ReadContent>
    )
}