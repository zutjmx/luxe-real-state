"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function toggleFeaturedProperty(id: string, is_featured: boolean) {

  console.log("id", id);
  console.log("is_featured", is_featured);

  const { error } = await supabase
    .from("properties")
    .update({ is_featured })
    .eq("id", id);

  if (error) {
    console.error("Error updating property:", error);
    throw new Error("Failed to update property status.");
  }

  // Revalidate both admin page and home page
  revalidatePath("/");
  revalidatePath("/admin/properties");
}
