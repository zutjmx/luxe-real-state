import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import FeaturedToggle from "@/components/FeaturedToggle";

export const dynamic = "force-dynamic";

export default async function AdminPropertiesPage() {
  const { data: properties, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching properties:", error);
    return <div>Error loading properties.</div>;
  }

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-[#19322F] dark:text-white">Properties Administration</h1>
          <p className="text-[#5C706D] mt-2">Manage your properties and highlight featured collections.</p>
        </div>

        <div className="bg-white dark:bg-[#19322F]/10 rounded-xl shadow-soft border border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
                  <th className="px-6 py-4 text-sm font-medium text-[#5C706D]">Property</th>
                  <th className="px-6 py-4 text-sm font-medium text-[#5C706D]">Location</th>
                  <th className="px-6 py-4 text-sm font-medium text-[#5C706D]">Price</th>
                  <th className="px-6 py-4 text-sm font-medium text-[#5C706D]">Status</th>
                  <th className="px-6 py-4 text-sm font-medium text-[#5C706D] text-right">Featured</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {properties?.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 min-w-[300px]">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          {property.image_url ? (
                            <img src={property.image_url} alt={property.title} className="h-full w-full object-cover" />
                          ) : (
                            <span className="material-icons text-gray-400 place-self-center mt-3">image</span>
                          )}
                        </div>
                        <div className="truncate">
                          <p className="font-medium text-[#19322F] dark:text-white truncate">{property.title}</p>
                          <p className="text-sm text-[#5C706D] truncate">{property.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#5C706D] text-sm truncate max-w-[200px]">
                      {property.location}
                    </td>
                    <td className="px-6 py-4 text-[#19322F] dark:text-white font-medium">
                      ${property.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      {property.tag_text ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#006655]/10 text-[#006655]">
                          {property.tag_text}
                        </span>
                      ) : (
                        <span className="text-gray-400 text-sm">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <FeaturedToggle id={property.id} initialFeatured={property.is_featured} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
