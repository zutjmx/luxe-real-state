"use client";

import { useTransition, useState } from "react";
import { toggleFeaturedProperty } from "@/app/actions/property";

export default function FeaturedToggle({
  id,
  initialFeatured
}: {
  id: string;
  initialFeatured: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [isFeatured, setIsFeatured] = useState(initialFeatured);

  const handleToggle = () => {

    console.log("id", id);
    console.log("isFeatured", isFeatured);

    console.log("Se dispara evento click en el toggle");

    const newValue = !isFeatured;
    setIsFeatured(newValue); // Optimistic UI update

    startTransition(async () => {
      try {
        console.log("Se dispara la funcion toggleFeaturedProperty");
        await toggleFeaturedProperty(id, newValue);
        console.log("Se ejecuta la funcion toggleFeaturedProperty");
      } catch (error) {
        setIsFeatured(!newValue); // Revert on failure
        console.error(error);
        alert("Failed to update property.");
      }
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#006655] focus:ring-offset-2 disabled:opacity-50 ${isFeatured ? "bg-[#006655]" : "bg-gray-200 dark:bg-gray-700"
        }`}
      aria-label="Toggle Featured Status"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isFeatured ? "translate-x-6" : "translate-x-1"
          }`}
      />
    </button>
  );
}
