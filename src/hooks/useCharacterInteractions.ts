"use client";

import { useState, useEffect, useCallback } from "react";

export type CharacterMood = "idle" | "curious" | "celebrating" | "squish" | "focused";

export interface CharacterInteractionsState {
  isBlinking: boolean;
  mood: CharacterMood;
  statusMessage: string;
  triggerSquish: () => void;
  setMood: (mood: CharacterMood) => void;
}

export function useCharacterInteractions(activeSection: string): CharacterInteractionsState {
  const [isBlinking, setIsBlinking] = useState(false);
  const [mood, setMood] = useState<CharacterMood>("idle");

  // Autonomous natural blinking cadence
  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;
    let nextBlinkTimeout: NodeJS.Timeout;

    const scheduleNextBlink = () => {
      // Random interval between 3.5s and 7s
      const delay = Math.random() * 3500 + 3500;
      nextBlinkTimeout = setTimeout(() => {
        setIsBlinking(true);
        blinkTimeout = setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink();
        }, 160); // Eyelid closure duration
      }, delay);
    };

    scheduleNextBlink();

    return () => {
      clearTimeout(blinkTimeout);
      clearTimeout(nextBlinkTimeout);
    };
  }, []);

  // Update contextual reaction when scrolling sections
  useEffect(() => {
    if (mood === "squish") return;

    if (activeSection === "work") {
      setMood("focused");
    } else if (activeSection === "contact") {
      setMood("celebrating");
    } else if (activeSection === "skills" || activeSection === "about") {
      setMood("curious");
    } else {
      setMood("idle");
    }
  }, [activeSection, mood]);

  const triggerSquish = useCallback(() => {
    setMood("squish");
    setTimeout(() => {
      setMood("idle");
    }, 450);
  }, []);

  // Contextual status pill text
  let statusMessage = "Online · Tracking Cursor";
  if (mood === "squish") statusMessage = "Hello! 👋";
  else if (activeSection === "about") statusMessage = "Reviewing Background";
  else if (activeSection === "skills") statusMessage = "Inspecting Tech Stack";
  else if (activeSection === "work") statusMessage = "Exploring Showcase";
  else if (activeSection === "experience") statusMessage = "Reading Journey";
  else if (activeSection === "contact") statusMessage = "Let's Collaborate";

  return {
    isBlinking,
    mood,
    statusMessage,
    triggerSquish,
    setMood,
  };
}
