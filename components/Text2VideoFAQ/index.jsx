
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "How to make a Text2Video video?",
            content: `Input the prompt (required) and negative prompt (optionally); input the number of video frames (4 frames/second), if you want 4 seconds of video, you should input 16.  then click on "Generate Video" button.`,
        },
        
        {
            title: "How fast the process is?",
            content: `It depends. It might in seconds or couple of minutes If you come in non-peak hour, you may have to wait cold-start of the machine. If that's the case, grab your coffee and wait couple of minutes. It's worthwhile your wait.`,
        },
        {
            title: "How to change the size  of Text2Video video?",
            content: `The default size is 512×512. But you can easily resize by specify the width and height in the url. 
            For example, the original link is https://res.cloudinary.com/*/video/upload/*. Yon can add h_1024,w_1024 in the link
            as  https://res.cloudinary.com/*/video/upload/h_1024,w_1024/*.`,
        },


        {
            title: "How to share to social media?",
            content:
                "You can either download the video or use the video url to share.",
        },
        {
            title: "How long will the video url be valid?",
            content: `The video url will be valid for 30 days. We still strongly recommend you to download the video and save to your local drive. `,
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

export default function TubeFAQ() {

    return (
        <div className="max-w-7xl w-full h-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}
