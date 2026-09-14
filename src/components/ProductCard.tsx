import React from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { MessageSquare, ArrowRight, Eye, ShieldCheck, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setSelectedProduct, setIsQuoteModalOpen, setQuoteTargetProduct, openWhatsApp } = useStore();

  const handleRequestQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuoteTargetProduct(product.name);
    setIsQuoteModalOpen(true);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    openWhatsApp(`Hello Kitchen Engineering, I am interested in ${product.name} (SKU: ${product.sku}). Please share price, specifications and availability.`);
  };

  return (
    <div 
      onClick={() => setSelectedProduct(product)}
      className="group bg-[#F5F1E5] rounded-xl border border-[#DDD4BD] hover:border-[#3E4A2E] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden cursor-pointer relative"
    >
      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#20241E]/90 text-[#ECE5D2] backdrop-blur-xs font-semibold">
          {product.brand}
        </span>
        {product.featured && (
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#3E4A2E] text-[#F5F1E5] font-semibold">
            ENGINEERED PICK
          </span>
        )}
      </div>

      {/* Image Container with subtle sheen */}
      <div className="relative w-full h-56 sm:h-60 bg-[#ECE5D2] overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (product.fallbackImage && target.src !== product.fallbackImage) {
              target.src = product.fallbackImage;
            }
          }}
          className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
        />
        {/* Hover quick view overlay pill */}
        <div className="absolute inset-0 bg-[#20241E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3.5 py-1.5 rounded-full bg-[#20241E]/90 text-[#F5F1E5] text-xs font-mono font-medium flex items-center gap-1.5 shadow-md">
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Technical Specs</span>
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & SKU */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#8E959B] mb-1.5">
            <span className="uppercase text-[#3E4A2E] font-semibold">{product.subcategory}</span>
            <span>SKU: {product.sku}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-base text-[#20241E] group-hover:text-[#3E4A2E] transition-colors leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-[#20241E]/75 line-clamp-2 leading-relaxed mb-4">
            {product.shortDesc}
          </p>

          {/* Technical Specs Snapshot Matrix */}
          <div className="grid grid-cols-2 gap-1.5 p-2.5 rounded-md bg-[#ECE5D2]/70 border border-[#DDD4BD] text-[11px] font-mono mb-4">
            {product.specs.dimensions && (
              <div className="truncate">
                <span className="text-[#8E959B]">DIM:</span> <strong className="text-[#20241E] font-medium">{product.specs.dimensions.split(' ')[0]}...</strong>
              </div>
            )}
            {product.specs.power && (
              <div className="truncate">
                <span className="text-[#8E959B]">PWR:</span> <strong className="text-[#20241E] font-medium">{product.specs.power}</strong>
              </div>
            )}
            {product.specs.fuelType && (
              <div className="truncate">
                <span className="text-[#8E959B]">FUEL:</span> <strong className="text-[#20241E] font-medium">{product.specs.fuelType}</strong>
              </div>
            )}
            {product.specs.material && (
              <div className="truncate">
                <span className="text-[#8E959B]">MAT:</span> <strong className="text-[#20241E] font-medium">{product.specs.material.split(' ')[0]}</strong>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#DDD4BD] flex items-center gap-2">
          <button
            onClick={handleRequestQuote}
            className="flex-1 py-2.5 px-3 rounded-md bg-[#3E4A2E] hover:bg-[#52633C] text-[#F5F1E5] text-xs font-bold font-mono uppercase tracking-wider transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Request Quote</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="py-2.5 px-3 rounded-md bg-[#2C3229] hover:bg-[#20241E] text-[#ECE5D2] hover:text-white transition-colors border border-[#3E4A2E]/50 flex items-center justify-center cursor-pointer"
            title="Ask on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
