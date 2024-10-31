import React from "react";
import { testimonials } from "../data/testimonialsData";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const TestimonialsPage = () => {
  return (
    <div className="flex bg-water min-h-screen flex-col p-3 md:p-10 w-full">
      <h1 className="text-5xl w-full text-left font-arima font-bold mb-6">
        Testimonials
      </h1>
      <p className="text-lg mb-10">
        Hear from those who have experienced my work firsthand. I am committed
        to delivering high-quality web solutions, with an emphasis on
        functionality, creativity, and client satisfaction. Here's what some of
        my clients and colleagues have to say about working with me:
      </p>

      <div className="h-full py-10 rounded-md flex flex-col bg-transparent items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialsPage;
