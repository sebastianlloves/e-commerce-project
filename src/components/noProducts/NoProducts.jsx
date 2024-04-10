

export default function NoProducts({onlyOneProduct}) {
  const text = onlyOneProduct
    ? "No se ha podido cargar el producto seleccionado"
    : "No se han podido cargar los productos";
  return (
    <div className="flex h-[80vh] w-full items-center justify-center bg-transparent">
      <h1 className="text-center text-4xl font-bold text-gray-950">{text}</h1>
    </div>
  );
}
