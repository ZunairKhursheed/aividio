
import Header from "./Header";

import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-black">
      <div className="blur-[106px] h-20 bg-gradient-to-r from-purple-400 to-blue-600 dark:to-indigo-600"></div>
      <div className="blur-[106px] h-20 bg-gradient-to-r from-orange-600 to-purple-400 dark:from-red-700"></div>
      <div className=" absolute right-0 w-full top-0 py-4">
     <Header />
     
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
    </div>
  );
}