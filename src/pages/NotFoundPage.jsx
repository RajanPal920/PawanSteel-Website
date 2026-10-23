import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F3F7FB] px-4 py-20">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-premium text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-50 text-[#D71932] flex items-center justify-center mx-auto border border-red-100">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl font-extrabold text-[#123467] block font-mono">404</span>
          <h1 className="text-xl sm:text-2xl font-bold text-[#123467] mt-1">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            The page you requested could not be found or has been moved. You can return to our homepage or browse our complete product catalogue.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#D71932] hover:bg-[#B51226] text-white text-xs font-bold rounded-md shadow transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#123467] hover:bg-[#1B478A] text-white text-xs font-bold rounded-md shadow transition"
          >
            <span>View All Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

