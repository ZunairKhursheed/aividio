
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Instruction (How it works)",
    rows: [
        {
            title: "Sample ChatGPT prompt to generate character and scene description for video generation",
            content: `Please write a fantasy story script in the style of Harry Potter. Begin with a general character description, focusing on age, gender, body type, and appearance. Limit the number of characters to no more than three. Following the character descriptions, provide six scenes with brief settings and a single sentence describing the action, without dialogue. Ensure that each scene description combines the setting and action into one concise sentence.`,
        },
        
        {
            title: "Character description if you don't use reference image",
            content: `Please follow the format:
                       A. Harry a boy,  is dressed in his Hogwarts uniform: a white shirt, black sweater with the Gryffindor crest, black trousers, and a slightly rumpled black robe.
                       B. Anna a woman, black long hair, is wearing a white t-shirt. 
                       C. Tom a man, blond hair, blue eyes, dress in a blak suit.`,
        },
        
        {
            title: "Character description if you use reference image",
            content: `You need to put "img' trigger word follwing the character description, e,g.: 
                       A. Harry a boy img,  is dressed in his Hogwarts uniform: a white shirt, black sweater with the Gryffindor crest, black trousers, and a slightly rumpled black robe.
                       B. Anna a woman img, black long hair, is wearing a white t-shirt. 
                       C. Tom a man img, blond hair, blue eyes, dress in a blak suit.`,
        },
        
        
        {
            title: "Story description",
            content: `One line for each scene with character name you defined in the Character description: 
            Harry sits on a smooth rock by the lake, his expression contemplative. The castle’s spires rise in the distance, silhouetted against the vibrant sky. The sun is setting, casting a warm, golden hue over the serene lake. `,
        },

       

    ],
};

const styles = {
    bgColor: 'black',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'grey',
    arrowColor: "white",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function TubeFAQ() {

    return (
        <div className="max-w-7xl w-full h-auto mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
