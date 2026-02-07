"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialTime: number;
}

const CountdownTimer = ({ initialTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100 shadow-sm">
      <span className="text-sm font-bold tracking-widest animate-pulse">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default CountdownTimer;
