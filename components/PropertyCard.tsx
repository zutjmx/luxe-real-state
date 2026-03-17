import React from 'react';
import Image from 'next/image';
import { Property } from '@/lib/mockProperties';

interface PropertyCardProps {
  property: Property;
  variant?: 'featured' | 'standard';
}

export default function PropertyCard({ property, variant = 'standard' }: PropertyCardProps) {
  const isFeatured = variant === 'featured';
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const tagColorClass = () => {
    switch (property.tag?.type) {
      case 'exclusive': return 'bg-white/90 dark:bg-black/80 text-[#19322F] dark:text-white';
      case 'new': return 'bg-white/90 dark:bg-black/80 text-[#19322F] dark:text-white';
      case 'rent': return 'bg-[#006655]/90 text-white';
      case 'sale': return 'bg-[#19322F]/90 text-white';
      default: return 'bg-white/90 text-black';
    }
  };

  if (isFeatured) {
    return (
      <div className="group relative rounded-xl overflow-hidden shadow-soft bg-white dark:bg-white/5 cursor-pointer">
        <div className="aspect-[4/3] w-full overflow-hidden relative">
          <Image 
            src={property.imageUrl} 
            alt={property.title} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {property.tag && (
            <div className={`absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${tagColorClass()}`}>
              {property.tag.text}
            </div>
          )}
          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-[#19322F] hover:bg-[#006655] hover:text-white transition-all z-10">
            <span className="material-icons text-xl">favorite_border</span>
          </button>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        </div>
        <div className="p-6 relative">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-medium text-[#19322F] dark:text-white group-hover:text-[#006655] transition-colors">{property.title}</h3>
              <p className="text-[#5C706D] text-sm flex items-center gap-1 mt-1">
                <span className="material-icons text-sm">place</span> {property.location}
              </p>
            </div>
            <span className="text-xl font-semibold text-[#006655] dark:text-[#06f9d0]">
              {formatPrice(property.price)}
              {property.priceLabel && <span className="text-sm font-normal text-[#5C706D]">{property.priceLabel}</span>}
            </span>
          </div>
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-[#19322F]/5 dark:border-white/10">
            <div className="flex items-center gap-2 text-[#5C706D] text-sm">
              <span className="material-icons text-lg">king_bed</span> {property.beds} Beds
            </div>
            <div className="flex items-center gap-2 text-[#5C706D] text-sm">
              <span className="material-icons text-lg">bathtub</span> {property.baths} Baths
            </div>
            <div className="flex items-center gap-2 text-[#5C706D] text-sm">
              <span className="material-icons text-lg">square_foot</span> {property.area.toLocaleString()} m²
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={property.imageUrl} 
          alt={property.title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/50 rounded-full hover:bg-[#006655] hover:text-white transition-colors text-[#19322F] z-10">
          <span className="material-icons text-lg">favorite_border</span>
        </button>
        {property.tag && (
          <div className={`absolute bottom-3 left-3 text-xs font-bold px-2 py-1 rounded ${tagColorClass()}`}>
            {property.tag.text}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-bold text-lg text-[#19322F] dark:text-white">
            {formatPrice(property.price)}
            {property.priceLabel && <span className="text-sm font-normal text-[#5C706D]">{property.priceLabel}</span>}
          </h3>
        </div>
        <h4 className="text-[#19322F] dark:text-gray-200 font-medium truncate mb-1">{property.title}</h4>
        <p className="text-[#5C706D] text-xs mb-4">{property.location}</p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-1 text-[#5C706D] text-xs">
            <span className="material-icons text-sm text-[#006655]/80">king_bed</span> {property.beds}
          </div>
          <div className="flex items-center gap-1 text-[#5C706D] text-xs">
            <span className="material-icons text-sm text-[#006655]/80">bathtub</span> {property.baths}
          </div>
          <div className="flex items-center gap-1 text-[#5C706D] text-xs">
            <span className="material-icons text-sm text-[#006655]/80">square_foot</span> {property.area}m²
          </div>
        </div>
      </div>
    </article>
  );
}
