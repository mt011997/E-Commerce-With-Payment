import { Product } from "@prisma/client";

export interface iProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (product: Product): iProductWithTotalPrice =>{
  if(product.discountPercentage === 0){
    return {
      ...product,
      totalPrice: Number(product.basePrice)
    }
  }

  const discount = Number(product.basePrice) * (product.discountPercentage / 100) 
  const totalPrice = Number(product.basePrice) - discount
  return {
    ...product,
    totalPrice,
  }
}