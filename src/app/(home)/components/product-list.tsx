import ProductItem from "@/components/ui/product-item"
import { computeProductTotalPrice } from "@/helpers/product"
import { Product } from "@prisma/client"

interface iProductListProps {
  products: Product[]
}

const ProductList = ({products}: iProductListProps) =>{
  return(
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
    </div>
  )
}

export default ProductList