import React, { useState, useEffect, useRef } from "react";

const PHRASES = ["I'm a Full Stack Developer", "Currently an SDE Intern @Bluestock", "Solved 350+ DSA Problems on LeetCode", "Learning Data Science and AI"];
const TYPING_SPEED = 55; 
const DELETING_SPEED = 32; 
const HOLD_TIME = 1250; 

export function TypewriterSubheading() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false); // New state to delay typing
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Delay the start of typing by 1 second
    const delayTimer = setTimeout(() => setStartTyping(true), 2500);
    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!startTyping) return; // Wait until the delay is over

    const phrase = PHRASES[currentPhrase];

    if (!isDeleting && displayed.length < phrase.length) {
      timer.current = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timer.current = setTimeout(() => {
        setIsDeleting(true);
      }, HOLD_TIME);
    } else if (isDeleting && displayed.length > 0) {
      timer.current = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && displayed.length === 0) {
      timer.current = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % PHRASES.length);
      }, 200);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [displayed, isDeleting, currentPhrase, startTyping]);

  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((v) => !v), 550);
    return () => clearInterval(blink);
  }, []);

  return (
    <span style={{whiteSpace: "pre"}}>
      {displayed}
      <span style={{fontWeight: "bold", opacity: showCursor ? 1 : 0}}>|</span>
    </span>
  );
}