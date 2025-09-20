// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Landing Page</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Pills Section */}
      <div className="flex space-x-2">
        <Pill title="React" />
        <Pill title="Next.js" />
        <Pill title="Tailwind" />
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <Button title="Small Button" styles="rounded-sm" />
        <Button title="Medium Button" styles="rounded-md" />
        <Button title="Large Button" styles="rounded-lg" />
        <Button title="Large Button" styles="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
