import Link from "next/link";

export const Header = () => {
  return (
    <header className="inset-0 grid grid-cols-2 -space-x-52  dark:opacity-20 relative">
      <div className="blur-[106px] h-20 bg-gradient-to-r from-yellow-400 to-orange-600 dark:to-indigo-600"></div>
      <div className="blur-[106px] h-20 bg-gradient-to-r from-orange-600 to-red-400 dark:from-red-700"></div>
      <div className="  absolute right-0 w-full top-0 py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link
              className="pointer-events-auto text-white h-[29px] text-opacity-50 hover:text-opacity-100 font-medium"
              href="/"
            >
              <svg
                width="25"
                height="29"
                viewBox="0 0 25 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1784_519)">
                  <path
                    d="M12.3891 28.61L0 21.4568L12.3891 14.3037L24.7781 21.4568L12.3891 28.61Z"
                    fill="white"
                    fill-opacity="0.66"
                  ></path>
                  <path
                    d="M0 7.15157L12.3891 0V28.611L0 21.4578V7.15157Z"
                    fill="white"
                    fill-opacity="0.65"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1784_519">
                    <rect width="25" height="29" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              href="/"
              className="rounded-full bg-white hover:bg-opacity-90 transition-colors text-black px-4 py-2"
            >
              Try Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
