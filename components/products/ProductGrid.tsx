"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Eye, ShoppingCart, Smartphone, Laptop, Headphones } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: "Premium Business Suit",
    category: "apparel",
    price: 899,
    rating: 4.9,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    specs: ["Premium Wool", "Custom Tailoring", "Italian Design", "Professional Fit"],
    badge: "Premium",
    icon: Users,
    condition: "new"
  },
  {
    id: 2,
    name: "Toyota Camry Parts Kit",
    category: "automotive",
    price: 2499,
    rating: 4.8,
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
    specs: ["OEM Quality", "Complete Kit", "2-Year Warranty", "Professional Installation"],
    badge: "Latest",
    icon: Truck,
    condition: "new"
  },
  {
    id: 3,
    name: "CAD Design Software",
    category: "cad",
    price: 1299,
    rating: 4.9,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    specs: ["3D Modeling", "Professional License", "Cloud Storage", "Technical Support"],
    badge: "Professional",
    icon: Cpu,
    condition: "new"
  },
  {
    id: 4,
    name: "Designer Casual Wear",
    category: "apparel",
    price: 299,
    rating: 4.7,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    specs: ["Cotton Blend", "Modern Cut", "Seasonal Collection", "Comfortable Fit"],
    badge: "Bestseller",
    icon: Users,
    condition: "new"
  },
  {
    id: 5,
    name: "Motorcycle Accessories Kit",
    category: "automotive",
    price: 599,
    rating: 4.8,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    specs: ["Safety Gear", "Performance Parts", "Weather Protection", "Universal Fit"],
    badge: "Popular",
    icon: Truck,
    condition: "new"
  },
  {
    id: 6,
    name: "Custom CAD Templates",
    category: "cad",
    price: 199,
    rating: 4.6,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    specs: ["Industry Standard", "Customizable", "Multiple Formats", "Documentation Included"],
    badge: "Digital",
    icon: Cpu,
    condition: "new"
  },
];

interface ProductGridProps {
  searchTerm: string;
  selectedCategory: string;
  priceRange: number[];
}

export function ProductGrid({ searchTerm, selectedCategory, priceRange }: ProductGridProps) {
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.specs.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => {
        const Icon = product.icon;
        return (
          <Card key={product.id} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <CardHeader className="relative">
              <div className="relative h-56 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className={`absolute top-2 right-2 ${getBadgeStyle(product.badge)}`}>
                  {product.badge}
                </Badge>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center space-x-2">
                  <Icon size={18} className="text-blue-400" />
                  <span className="text-lg">{product.name}</span>
                </CardTitle>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-300 text-sm">{product.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <ul className="space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400">${product.price}</span>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function getBadgeStyle(badge: string) {
  switch (badge) {
    case 'Premium': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    case 'Professional': return 'bg-gradient-to-r from-blue-500 to-purple-500';
    case 'Latest': return 'bg-gradient-to-r from-green-500 to-teal-500';
    case 'Popular': return 'bg-gradient-to-r from-pink-500 to-rose-500';
    case 'Refurbished': return 'bg-gradient-to-r from-gray-500 to-slate-500';
    default: return 'bg-gray-600';
  }
}