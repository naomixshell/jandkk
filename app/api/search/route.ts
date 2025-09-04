import { NextRequest, NextResponse } from 'next/server';

const products = [
  { id: 1, name: "Premium Business Suit", category: "apparel", price: 899, keywords: ["suit", "business", "premium", "wool"] },
  { id: 2, name: "Toyota Parts Kit", category: "automotive", price: 2499, keywords: ["toyota", "parts", "automotive", "oem"] },
  { id: 3, name: "CAD Pro Suite", category: "cad", price: 1299, keywords: ["cad", "3d", "design", "software"] },
  { id: 4, name: "Designer Casual Wear", category: "apparel", price: 299, keywords: ["casual", "designer", "cotton", "modern"] },
  { id: 5, name: "Motorcycle Accessories", category: "automotive", price: 599, keywords: ["motorcycle", "accessories", "safety", "performance"] },
];

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();
    
    if (!query) {
      return NextResponse.json({ suggestions: [] });
    }

    const searchTerms = query.toLowerCase().split(' ');
    const suggestions = products
      .filter(product => 
        searchTerms.some(term => 
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term) ||
          product.keywords.some(keyword => keyword.includes(term))
        )
      )
      .slice(0, 5)
      .map(product => ({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price
      }));

    return NextResponse.json({ suggestions });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}