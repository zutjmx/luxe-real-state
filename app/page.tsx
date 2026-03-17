import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import { featuredProperties, newProperties } from "@/lib/mockProperties";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#19322F] dark:text-white leading-tight">
              Find your <span className="relative inline-block">
                <span className="relative z-10 font-medium">sanctuary</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#006655]/20 -rotate-1 z-0"></span>
              </span>.
            </h1>
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-icons text-[#5C706D] text-2xl group-focus-within:text-[#006655] transition-colors">search</span>
              </div>
              <input 
                className="block w-full pl-12 pr-28 py-4 rounded-xl border-none bg-white dark:bg-white/5 text-[#19322F] dark:text-white shadow-soft placeholder:text-[#5C706D]/60 focus:ring-2 focus:ring-[#006655] focus:bg-white dark:focus:bg-white/10 transition-all text-lg outline-none" 
                placeholder="Search by city, neighborhood, or address..." 
                type="text" 
              />
              <button className="absolute inset-y-2 right-2 px-6 bg-[#006655] hover:bg-[#006655]/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-[#006655]/20">
                Search
              </button>
            </div>
            
            {/* Filters */}
            <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
              <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#19322F] text-white text-sm font-medium shadow-lg shadow-[#19322F]/10 transition-transform hover:-translate-y-0.5">
                All
              </button>
              {['House', 'Apartment', 'Villa', 'Penthouse'].map(type => (
                <button key={type} className="whitespace-nowrap px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-[#19322F]/5 text-[#5C706D] hover:text-[#19322F] hover:border-[#006655]/50 text-sm font-medium transition-all hover:bg-[#006655]/5">
                  {type}
                </button>
              ))}
              <div className="w-px h-6 bg-[#19322F]/10 mx-2"></div>
              <button className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-[#19322F] font-medium text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <span className="material-icons text-base">tune</span> Filters
              </button>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-[#19322F] dark:text-white">Featured Collections</h2>
              <p className="text-[#5C706D] mt-1 text-sm">Curated properties for the discerning eye.</p>
            </div>
            <a className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#006655] hover:opacity-70 transition-opacity" href="#">
              View all <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} variant="featured" />
            ))}
          </div>
        </section>

        {/* New in Market */}
        <section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-light text-[#19322F] dark:text-white">New in Market</h2>
              <p className="text-[#5C706D] mt-1 text-sm">Fresh opportunities added this week.</p>
            </div>
            <div className="hidden md:flex bg-white dark:bg-white/5 p-1 rounded-lg">
              <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-[#19322F] text-white shadow-sm">All</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#5C706D] hover:text-[#19322F] dark:hover:text-white">Buy</button>
              <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#5C706D] hover:text-[#19322F] dark:hover:text-white">Rent</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProperties.map(property => (
              <PropertyCard key={property.id} property={property} variant="standard" />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white dark:bg-white/5 border border-[#19322F]/10 dark:border-white/10 hover:border-[#006655] hover:text-[#006655] text-[#19322F] dark:text-white font-medium rounded-lg transition-all hover:shadow-md">
              Load more properties
            </button>
          </div>
        </section>

      </main>
    </>
  );
}
