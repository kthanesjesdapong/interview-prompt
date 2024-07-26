import { ATag } from '@ui/anchor-tag';
import { Header } from '@components/header';

type ProductPageProps = {};

export const ProductPage = ({}: ProductPageProps) => {
  return (
    <>
      {/*Top Nav*/}
      <Header>
        <ATag href='/'>Products</ATag>
      </Header>
    </>
  );
};
