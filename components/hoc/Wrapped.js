import { useEffect, useRef, useState } from "react";

const Wrapped = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      {
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref?.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isVisible ? "animate-fade-in-bottom" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapped;
