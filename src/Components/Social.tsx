import { socialLinks } from "./User"

const Social = () => {
    // const socialLinks = [
    //     {
    //         name: "GitHub",
    //         icon: IconBrandGithub,
    //         link: "https://github.com/shubhamkrsingh565"
    //     },
    //     {
    //         name: "LinkedIn",
    //         icon: IconBrandLinkedin,
    //         link: "https://linkedin.com/in/shubhamkrsingh565"
    //     },
    //     {
    //         name: "Instagram",
    //         icon: IconBrandInstagram,
    //         link: "https://instagram.com/shubhamkrsingh_"
    //     },
    //     {
    //         name: "Twitter",
    //         icon: IconBrandTwitter,
    //         link: "https://twitter.com/shubhamksingh56"
    //     },
    //     {
    //         name: "YouTube",
    //         icon: IconBrandYoutube,
    //         link: "https://www.youtube.com/@codewithme__"
    //     }
    // ];

    const socialIcons = socialLinks.map((socialLink, idx) => {
        return <a key={idx} href={`${socialLink.link}`} target="_blank" className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
        <div data-aos="fade-up-left"  data-aos-duration="800"><socialLink.icon stroke={1.5} className="-rotate-90" size={25} /></div>
    </a>
    }) 

  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-32 -left-48 rotate-90">
        {socialIcons}
        <hr className="border w-40 rounded-full  bg-textColor border-textColor" />
    </div>
  )
}

export default Social