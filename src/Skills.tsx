export default Skills

function Skills(){
    return(
        <div className="flex flex-row space-evenly w-full h-1/2 justify-evenly">
            {/*Education*/}
            <List title={"Classes"} items={["OOP", "TDD"]}/>

            {/*Tech Stack*/}
            <List title={"Skills"} items={["C++", "Java", "Python", "React"]}/>
        </div>
    )
}

interface listProps{
    title:string;
    items:Array<string>;
}

function List({title, items} : listProps){
    return(
    <div className={"flex flex-col space-evenly w-fit h-fit justify-center"}>
        <h1 className={"text-Primary text-3xl border-b-2 border-Primary"}>{title}</h1>
        {items.map((item) => (<p className={"text-white text-xl"}>{item}</p>))}
    </div>
    )
}