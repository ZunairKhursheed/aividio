
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How to make a talking avatar?",
            content: `Upload your character image, type in the text or use GPT2Speech module to create what you want your avatar to say, then either select voice or upload custom voice to clone, click on "Generate Talking Avatar" button.`,
        },

        {
            title: "Any avatar image requirements?",
            content: `The avatar image file should be a jpg/jpeg file. Make sure the head is almost in the middle (check existing examples on the website for a reference).`,
        },

        {
            title: "Any custom audio requirements?",
            content: `The custom audio file should be a wav/mp3 file, optimally 10-15 seconds.`,
        },

        {
            title: "How long does it take to make the video?",
            content: `It depends. It might in seconds or couple of minutes If you come in non-peak hour, you may have to wait cold-start of the machine. If that's the case, grab your coffee and wait couple of minutes. It's worthwhile your wait.`,
        },

        {
            title: "How to change the size  of talking avatar video?",
            content: `The default size is 256×256. But you can easily resize by specify the width and height in the url. 
            For example, the original link is https://res.cloudinary.com/*/video/upload/*. Yon can add h_512,w_512 in the link
            as  https://res.cloudinary.com/*/video/upload/h_512,w_512/*.`,
        },

        {
            title: "How to share to social media?",
            content:
                "You can either download the video or use the video url to share.",
        },
        {
            title: "How long will the video url be valid?",
            content: `The video url will be valid for 30 days. We still strongly recommend you to download the video and save to your local drive immediately after the creation. `,
        },

        {
            title: "How to contact us with further questions?",
            content: `You may go to Chat page and leave us a review. Please be as specific as possible. `,
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

export default function AvatarFAQ() {

    return (
        <div className='faq-card'>

            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
