"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Welcome() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-11-02T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <main className="flex flex-col w-full h-screen">
      <div id="content" className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
        <div className="lg:w-3/5 h-64 lg:h-full relative">
          <Image
            src="/left_image_1.webp"
            alt="Wedding Couple"
            layout="fill"
            objectFit="cover"
            //className="w-full h-full transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="lg:w-2/5 h-full flex flex-col items-center justify-center bg-gray-50 overflow-y-auto relative z-10">
          <section className="w-full max-w-2xl">
            <p className="h-25"></p>
            <div className="relative bg-white h-screen rounded-lg shadow-md animate-slideIn">
              <Image
                src="/righ_image_1.jpg" // Replace with your background image path
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-screen rounded-lg"
              />
              <div className="relative flex flex-col items-center justify-center h-full z-20 p-6 bg-white bg-opacity-75 rounded-lg">
                <p className="h-40"></p>
                <p className="text-lg font-semibold mb-2">
                  Saturday, November 2, 2024
                </p>
                <p className="text-lg text-gray-600 mb-2">Việt Nam</p>
                <p className="text-lg text-gray-600 mb-4">
                  {timeLeft.days} days {timeLeft.hours} hrs {timeLeft.minutes} mins {timeLeft.seconds} secs
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  RSVP
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-slideIn">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                We met five years ago and have been inseparable ever since. Our
                journey together has been filled with love, laughter, and
                countless memories. We can't wait to start this new chapter of
                our lives with all of you by our side.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideIn">
              <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
              <p className="text-gray-700 mb-2">
                <strong>Date:</strong> June 1, 2022
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Time:</strong> 4:00 PM
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> Venue Name, 123 Main St, City, State
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Dress Code:</strong> Formal
              </p>
            </div>
          </section>
          <footer className="w-full text-center mt-8">
            <p>© 2024 Our Wedding. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
