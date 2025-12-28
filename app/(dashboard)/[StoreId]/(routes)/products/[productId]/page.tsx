import prisma from "@/prisma/client";
import { ProductForm } from "./components/product-form";

const ProductIdPage = async ({
  params,
}: {
  params: { productId: string; StoreId: string };
}) => {
  const product = await prisma.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const sizes = await prisma.size.findMany({
    where: {
      StoreId: params.StoreId,
    },
  });
  const categories = await prisma.category.findMany({
    where: {
      StoreId: params.StoreId,
    },
  });
  const colors = await prisma.color.findMany({
    where: {
      StoreId: params.StoreId,
    },
  });
  return (
    <div className="flex flex-col ">
      <div className="flex-1 px-8 py-6">
        <ProductForm
          initialData={product}
          colors={colors}
          sizes={sizes}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default ProductIdPage;
