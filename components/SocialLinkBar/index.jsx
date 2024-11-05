import React from 'react';
import Link from 'next/link';




// React Icons

import {
    TwitterShareButton,
    TwitterIcon,
} from 'next-share';

import {
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';


import {
    FacebookShareButton,
    FacebookIcon,
} from 'next-share';

import {
    PinterestShareButton,
    PinterestIcon,
} from 'next-share'


import {
    RedditShareButton,
    RedditIcon,
} from 'next-share'


import {
    WeiboShareButton,
    WeiboIcon,
} from 'next-share'

import {
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share'



const SocialLinkBar = ({ video_url }) => {
    return (

        <div className='state-card'>
            <p className="mb-20 text-xl text-center text-white">
                <span>🔥 Share Your Creations With the World 🔥 </span>
            </p>
            <ul className="app_social-links">
                <li><TwitterShareButton url={video_url}>
                    <TwitterIcon size={40} round />
                </TwitterShareButton> </li>
                <li><LinkedinShareButton url={video_url}>
                    <LinkedinIcon size={40} round />
                </LinkedinShareButton></li>
                <li><FacebookShareButton url={video_url}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton></li>
                <li> <WeiboShareButton url={video_url}>
                    <WeiboIcon size={40} round />
                </WeiboShareButton></li>

                <li> <RedditShareButton url={video_url}>
                    <RedditIcon size={40} round />
                </RedditShareButton></li>

            </ul>
        </div>
    )
}

export default SocialLinkBar;
