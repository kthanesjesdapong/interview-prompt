import type { TProduct } from "@api";

//Filter Arr of Images
export const filterActiveProductImg = (product: TProduct) => product.images.filter(image => image !== product.thumbnail);