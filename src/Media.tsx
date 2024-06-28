import gitImg from "./assets/github.png";
import linImg from "./assets/Black LinkedIn Icon.jpg"
import resImg from "./assets/—Pngtree—vector resume icon_4231969.png";
import resume from "./assets/Resume - Software Dev.pdf";

function Media() {
    return (
        <div className={"flex flex-row justify-evenly w-1/4 h-fit"}>

            <MediaButton img={linImg} alt={"Linked-In logo button"} link={"https://www.linkedin.com/in/david-sedarous/"}/>
            <MediaButton img={gitImg} alt={"Github logo button"} link={"https://github.com/SekuOnline"} />
            <MediaButton img={resImg} alt={"Resume image button"} link={resume}/>
            
        </div>
    )
}

interface mediaButtonProps{
    img:string;
    alt:string;
    link:string;

}

function MediaButton({img,alt, link}: mediaButtonProps) {
    return(
    <div className={"hover:scale-125"}>
        <a href={link}>
            <img className={"w-10 h-auto rounded-lg"} src={img} alt={alt}></img>
        </a>
    </div>
    )
}

export default Media;
