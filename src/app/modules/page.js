'use client'
const modules = [
  {
    id: "module-01",
    title: "Introduction to VPS",
    description: "Understand VPS and server fundamentals",
    duration: "25 min",
    notesUrl: "/courses/vps/module-01/notes.pdf",
    filesUrl: "/courses/vps/module-01/files.zip",
  },
  {
    id: "module-02",
    title: "Linux Server Setup",
    description: "Prepare your Linux production environment",
    duration: "40 min",
    notesUrl: "/courses/vps/module-02/notes.pdf",
    filesUrl: "/courses/vps/module-02/files.zip",
  },
  {
    id: "module-03",
    title: "Nginx & Reverse Proxy",
    description: "Configure Nginx for production",
    duration: "35 min",
    notesUrl: "/courses/vps/module-03/notes.pdf",
    filesUrl: "/courses/vps/module-03/files.zip",
  },
  {
    id: "module-04",
    title: "SSL & Cloudflare",
    description: "Secure your application with HTTPS",
    duration: "30 min",
    notesUrl: "/courses/vps/module-04/notes.pdf",
    filesUrl: "/courses/vps/module-04/files.zip",
  },
];

import CourseModules from "../components/module";

export default function Modules(){
    return(
        <CourseModules 
            onReadContent={(module) => {
                console.log("Opening:", module);
            }}
            courseName="VPS Deployment"
            modules={modules}
        />
    )
}