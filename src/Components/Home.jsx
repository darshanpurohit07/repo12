// import React from "react";

export default function Home(){
    const words = ["Discover", "Craft", "Savor"];
let index = 0;


setInterval(() => {
    const wordElement = document.getElementById("word");
    index = (index + 1) % words.length;
    wordElement.style.animation = 'none';
    wordElement.textContent = words[index];
    wordElement.offsetHeight;
    wordElement.style.animation = 'slide 2s infinite';
}, 2000);


    return(<>
    <section className="hero-section">
        <div className="hero-text">
            <div className="word-slider">
                <span id="word">Discover</span>
            </div>
            <p className=" text-3xl mt-8">Cooking Made Easy: Explore, <span className="text-[orange]">Create</span>, Enjoy!</p>
        </div>
    </section>
   
   
   
    </>);
}