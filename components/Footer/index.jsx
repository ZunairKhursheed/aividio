import React from 'react';
import Link from 'next/link';


const Footer = () => {
    return (
        <div className="bg-black py-12 px-4">
            <div className="max-w-7xl w-100 m-auto grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-3 place-items-center sm:grid-cols-2">
                <div className="flex flex-col justify-center items-center">

                    <div className="md:mr-30">
                        <Link href="/"><img src="/aividoo_logo.png" alt="aividoo-Logo" className="max-w-2xl w-28 m-0" /></Link>
                    </div>

                   

                    <p className="uppercase tracking-[5px] text-sectiontitle mb-1.5 ">
                  contact
                </p>
                <a
                  href="#"
                  className="text-white dark:text-white font-medium text-itemtitle"
                >
                  support@aividoo.com
                </a>
                <h5 className="text-gray mt-4">
                        &copy; TALKIN AI 2023
                    </h5>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">Join The Community</h2>
                    <ul className="mt-2 text-center md:text-left">
                        <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Youtube">
                            <a target="_blank" href="https://discord.gg/TFPVcDKK9n" rel="noopener noreferrer">

                                Discord
                            </a>
                        </li>
                        <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Twitter">
                            <Link href="https://twitter.com/">

                                Twitter

                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold text-white">Support & Help</h2>
                <ul className="mt-2 text-center md:text-left">
                        <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Youtube">
                            <Link target="_blank" href="/contact" rel="noopener noreferrer">

                                Contact
                            </Link>
                        </li>
                        <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Twitter">
                            <Link target="_blank" href="/about">

                                About

                            </Link>
                        </li>

                        <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Twitter">
                            <Link target="_blank" href="/terms">

                                Terms

                            </Link>
                        </li>
                        <li className="text-gray mb-2 w-max m-auto md:mx-0 hover:text-light-gray" title="Twitter">
                            <Link target="_blank" href="/privacy-policy">

                                Privacy Policy

                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;