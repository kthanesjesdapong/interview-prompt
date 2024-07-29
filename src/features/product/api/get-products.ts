import { useQuery } from '@tanstack/react-query';
import { api, TProduct, ProductDataRes } from '@api';

import { API_URL } from '../configs';
import { validateProductsResponse } from '../lib/validate-products-res';

export const getProducts = async () => {
  try {
    const data = await api.get<ProductDataRes>(API_URL);
    return validateProductsResponse(data);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

//Can Move this into it's own file, if you had a query that needed to be re-used across App
//You can create a helper to get you QueryOpts W/ queryOptions({queryKey, queryFn})
export const useGetProducts = (): TProduct[] => {
  const {
    data: productsData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => getProducts(),
  });

  if (
    !productsData ||
    isError ||
    (isSuccess && !isLoading && productsData && !productsData.products)
  ) {
    return [];
  }

  return productsData.products;
};
