import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Web Designer.", "Web Developer."],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        smartBackspace: true,
        loop: true,
        showCursor: false,
        cursorChar: "|",
      });

      return () => typed.destroy();
    }
  }, []);

  return <span ref={typedRef} className="text-8xl text-accent-content font-black"></span>;
};

export default TypedText;
