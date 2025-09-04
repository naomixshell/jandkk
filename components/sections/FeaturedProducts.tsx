"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Star, 
  Search,
  Users,   // ✅ Added
  Cpu,     // ✅ Added
  Truck    // ✅ Added
} from 'lucide-react';
import { Input } from '@/components/ui/input';


const products = [
  {
    id: 1,
    name: "Premium Business Collection",
    category: "Apparel",
    price: "¥89,900",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    specs: ["Premium Wool", "Custom Tailoring", "Italian Design", "Professional Fit"],
    badge: "Premium",
    icon: Users
  },
  {
    id: 2,
    name: "CAD Pro Suite",
    category: "Software",
    price: "¥129,900",
    rating: 4.8,
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    specs: ["3D Modeling", "Professional License", "Cloud Storage", "Technical Support"],
    badge: "Professional",
    icon: Cpu
  },
  {
    id: 3,
    name: "Automotive Parts Kit",
    category: "Automotive",
    price: "¥249,900",
    rating: 4.7,
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg",
    specs: ["OEM Quality", "Complete Kit", "2-Year Warranty", "Professional Installation"],
    badge: "Bestseller",
    icon: Truck
  },
];

export function FeaturedProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover our premium collection of cutting-edge technology products
          </p>
        </div>

        {/* AI-Powered Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="AI-powered search for products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.id} className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <CardHeader className="relative">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className={cn(
                      "absolute top-2 right-2",
                      product.badge === "Premium" && "bg-gradient-to-r from-yellow-500 to-orange-500",
                      product.badge === "Professional" && "bg-gradient-to-r from-blue-500 to-purple-500",
                      product.badge === "Bestseller" && "bg-gradient-to-r from-green-500 to-teal-500"
                    )}>
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center space-x-2">
                      <Icon size={20} className="text-blue-400" />
                      <span>{product.name}</span>
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-400">{product.category}</p>
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
                    <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}