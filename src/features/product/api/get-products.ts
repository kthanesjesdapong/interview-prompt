import { useQuery } from "@tanstack/react-query";
import { api, TProduct, ProductDataRes } from "@api";
import { API_URL } from "../configs";

export const getProducts = async () => {
  try {
    const data = await api.get<ProductDataRes>(API_URL);
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const useGetProducts = (): TProduct[] => {

  const { data: productsData, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['getProducts'],
    queryFn: () => getProducts()
  });

  if (!productsData || isError || isSuccess && !isLoading && productsData && !productsData.products) {
    return [];
  }

  return productsData.products;

};