"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Smartphone, Laptop, Headphones, Filter } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Products', icon: Filter },
  { id: 'apparel', label: 'Apparel Products', icon: Users },
  { id: 'automotive', label: 'Automotive Equipment', icon: Truck },
  { id: 'cad', label: 'CAD Solutions', icon: Cpu },
];

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: ProductFiltersProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white flex items-center space-x-2">
          <Filter className="w-5 h-5 text-blue-400" />
          <span>Filters</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Category Filters */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => onCategoryChange(category.id)}
                    className={`justify-start space-x-2 ${
                      selectedCategory === category.id 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{category.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </h4>
            <Slider
              value={priceRange}
              onValueChange={onPriceChange}
              max={5000}
              min={0}
              step={50}
              className="mb-4"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$0</span>
              <span>$5,000</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}