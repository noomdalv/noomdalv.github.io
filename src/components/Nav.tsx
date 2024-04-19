import { useEffect } from "react";
import "./styles.css";

function Nav2() {
  useEffect(() => {
    // Get the navbar element
    const navbar = document.querySelector<HTMLElement>(".navbar");
    if (navbar) {
      // Define the mousemove event handler
      const handleMouseMove = (event: MouseEvent) => {
        navbar.style.setProperty("--mouse-x", `${event.clientX}px`);
        navbar.style.setProperty("--mouse-y", `${event.clientY}px`);
      };

      // Attach the event listener
      navbar.addEventListener("mousemove", handleMouseMove);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        navbar.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []); // Empty dependency array to run the effect only once
  return (
    <nav className="navbar">
      <ul>
        <li className="z-10">
          <a href="#root">Hello</a>
        </li>
        <li className="z-10">
          <a href="#projects">Projects</a>
        </li>
        <li className="z-10">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav2;
