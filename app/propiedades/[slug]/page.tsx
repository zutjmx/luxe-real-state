import { supabase, DbProperty } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Metadata } from 'next';
import Map from '@/components/MapWrapper';

export const revalidate = 60; // Incremental Static Regeneration every 60s

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const { data } = await supabase
    .from('properties')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!data) {
    return {
      title: 'Property Not Found | LuxeEstate',
    };
  }

  const property = data as DbProperty;
  
  return {
    title: `${property.title} | LuxeEstate`,
    description: `Stunning property in ${property.location} available now for ${formatPrice(property.price)}.`,
    openGraph: {
      images: [property.image_url],
    },
  };
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
};

export default async function PropertyDetailsPage({ params }: Props) {
  const { slug } = await params;

  // Exact Query according to best practices
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    notFound();
  }

  const property = data as DbProperty;
  
  // Combine single image and multiple images for the gallery
  const galleryImages = [property.image_url, ...(property.images || [])];
  // Ensure we have at least 4 images to make the UI look good (fallback to main if empty)
  while (galleryImages.length < 4) {
    galleryImages.push(property.image_url);
  }

  return (
    <div className="bg-[#EEF6F6] text-[#19322F] selection:bg-[#006655]/20 min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column - Gallery */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm group">
              <Image 
                src={galleryImages[0]} 
                alt={property.title}
                fill
                priority // LCP priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {property.is_featured && (
                  <span className="bg-[#006655] text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Premium</span>
                )}
                {property.tag_text && (
                  <span className="bg-white/90 backdrop-blur text-[#19322F] text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">{property.tag_text}</span>
                )}
              </div>
              <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#19322F] px-4 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur transition-all flex items-center gap-2">
                <span className="material-icons text-sm">grid_view</span>
                View All Photos
              </button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x">
              {galleryImages.slice(1, 5).map((img, idx) => (
                <div key={idx} className={`flex-none w-48 aspect-[4/3] rounded-lg overflow-hidden cursor-pointer snap-start transition-opacity ${idx === 0 ? 'ring-2 ring-[#006655] ring-offset-2 ring-offset-[#EEF6F6] opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                  <div className="relative w-full h-full">
                    <Image src={img} alt={`${property.title} thumbnail ${idx + 1}`} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info Card */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#006655]/5">
                <div className="mb-4">
                  <h1 className="text-4xl font-display font-light text-[#19322F] mb-2">
                    {formatPrice(property.price)}
                    {property.price_label && <span className="text-xl text-[#19322F]/60 ml-1">{property.price_label}</span>}
                  </h1>
                  <p className="text-[#19322F]/60 font-medium flex items-center gap-1">
                    <span className="material-icons text-[#006655] text-sm">location_on</span>
                    {property.location}
                  </p>
                </div>
                
                <div className="h-px bg-slate-100 my-6"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4TxUmdQRb2VMjuaNxLEwLorv_dgHzoET2_wL5toSvew6nhtziaR3DX-U69DBN7J74yO6oKokpw8tqEFutJf13MeXghCy7FwZuAxnoJel6FYcKeCRUVinpZtrNnkZvXd-MY5_2MAtRD7JP5BieHixfCaeAPW04jm-y-nvF3HIrwcZ_HRDk_MrNP5WiPV3u9zNrEgM-SQoWGh4xLVSV444aZAbVl03mjjsW5WBpIeodCyqJxprTDp6Q157D06VxcdUSCf-l9UKQT-w" alt="Sarah Jenkins" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#19322F]">Sarah Jenkins</h3>
                    <div className="flex items-center gap-1 text-xs text-[#006655] font-medium">
                      <span className="material-icons text-[14px]">star</span>
                      <span>Top Rated Agent</span>
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="p-2 rounded-full bg-[#006655]/10 text-[#006655] hover:bg-[#006655] hover:text-white transition-colors">
                      <span className="material-icons text-sm">chat</span>
                    </button>
                    <button className="p-2 rounded-full bg-[#006655]/10 text-[#006655] hover:bg-[#006655] hover:text-white transition-colors">
                      <span className="material-icons text-sm">call</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-[#006655] hover:bg-[#005544] text-white py-4 px-6 rounded-lg font-medium transition-all shadow-lg shadow-[#006655]/20 flex items-center justify-center gap-2 group">
                    <span className="material-icons text-xl group-hover:scale-110 transition-transform">calendar_today</span>
                    Schedule Visit
                  </button>
                  <button className="w-full bg-transparent border border-[#19322F]/10 hover:border-[#006655] text-[#19322F]/80 hover:text-[#006655] py-4 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                    <span className="material-icons text-xl">mail_outline</span>
                    Contact Agent
                  </button>
                </div>
              </div>

              {/* Map Widget */}
              <div className="bg-white p-2 rounded-xl shadow-sm border border-[#006655]/5">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 z-0">
                  <Map locationString={property.location} />
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(property.location)}`} target="_blank" rel="noreferrer" className="absolute bottom-2 right-2 bg-white/90 text-xs font-medium px-2 py-1 rounded shadow-sm text-[#19322F] hover:text-[#006655] z-[1000] backdrop-blur">
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#006655]/5">
              <h2 className="text-lg font-semibold mb-6 text-[#19322F]">Property Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                  <span className="material-icons text-[#006655] text-2xl mb-2">square_foot</span>
                  <span className="text-xl font-bold text-[#19322F]">{property.area}</span>
                  <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Square Meters</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                  <span className="material-icons text-[#006655] text-2xl mb-2">bed</span>
                  <span className="text-xl font-bold text-[#19322F]">{property.beds}</span>
                  <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                  <span className="material-icons text-[#006655] text-2xl mb-2">shower</span>
                  <span className="text-xl font-bold text-[#19322F]">{property.baths}</span>
                  <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-[#006655]/5 rounded-lg border border-[#006655]/10">
                  <span className="material-icons text-[#006655] text-2xl mb-2">directions_car</span>
                  <span className="text-xl font-bold text-[#19322F]">2</span>
                  <span className="text-xs uppercase tracking-wider text-[#19322F]/50">Garage</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#006655]/5">
              <h2 className="text-lg font-semibold mb-4 text-[#19322F]">About this home</h2>
              <div className="prose prose-slate max-w-none text-[#19322F]/70 leading-relaxed">
                <p className="mb-4">
                  Experience modern luxury in {property.title} located in the heart of {property.location}. Designed with an emphasis on indoor-outdoor living, the residence features floor-to-ceiling glass walls that flood the interiors with natural light.
                </p>
                <p>
                  The open-concept kitchen is equipped with top-of-the-line appliances and custom cabinetry, perfect for culinary enthusiasts. Retreat to the primary suite, a sanctuary of relaxation with a spa-inspired bath and private balcony.
                </p>
              </div>
              <button className="mt-4 text-[#006655] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Read more
                <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#006655]/5">
              <h2 className="text-lg font-semibold mb-6 text-[#19322F]">Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  'Smart Home System',
                  'Swimming Pool',
                  'Central Heating & Cooling',
                  'Electric Vehicle Charging',
                  'Private Gym',
                  'Wine Cellar'
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#19322F]/70">
                    <span className="material-icons text-[#006655]/60 text-sm">check_circle</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#006655]/5 p-6 rounded-xl border border-[#006655]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-[#006655] shadow-sm">
                  <span className="material-icons">calculate</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#19322F]">Estimated Payment</h3>
                  <p className="text-sm text-[#19322F]/60">Starting from <strong className="text-[#006655]">{formatPrice(property.price * 0.005)}/mo</strong> with 20% down</p>
                </div>
              </div>
              <button className="whitespace-nowrap px-4 py-2 bg-white border border-[#19322F]/10 rounded-lg text-sm font-semibold hover:border-[#006655] transition-colors text-[#19322F]">
                Calculate Mortgage
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-[#19322F]/50">
             © 2026 LuxeEstate Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
