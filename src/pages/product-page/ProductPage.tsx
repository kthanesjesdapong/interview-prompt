import { useState } from 'react';
import type { TProduct } from '@api';
import { ATag } from '@ui/anchor-tag';
import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';
import {
  useGetProducts,
  ProductList,
  ProductContextProvider,
  Product,
} from '@features/product';

type ProductPageProps = {};

export const ProductPage = ({}: ProductPageProps) => {
  const productList = useGetProducts();
  const [activeProduct, setActiveProduct] = useState<TProduct>();

  return (
    <ProductContextProvider
      activeProduct={activeProduct}
      setActiveProduct={setActiveProduct}>
      <div className='p-0'>
        {/*Top Nav*/}
        <Header>
          <ATag href='/'>Products</ATag>
        </Header>
        <main className='pt-[45px] flex'>
          <Sidebar>
            <ProductList productList={productList} />
          </Sidebar>
          {activeProduct && <Product product={activeProduct} />}
        </main>
      </div>
    </ProductContextProvider>
  );
};
