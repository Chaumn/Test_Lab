import Navbar from "@/components/Navbar";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = await params; // Fix lại (quan trọng) để lấy đúng id từ params

  const product = await getProduct(id);

  return (
    <div>
      <Navbar />

      <div className="p-6 grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          className="h-96 w-full object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-xl text-green-600 font-bold mb-4">
            ${product.price}
          </p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}