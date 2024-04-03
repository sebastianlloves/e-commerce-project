import Card from "./Card";

export default function CardsList({ products }) {
  return (
    <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 xl:gap-x-8">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
