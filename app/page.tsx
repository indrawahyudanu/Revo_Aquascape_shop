
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Product } from "../types/product";
import { Card, PageSection, Modal } from "../components/pageSection";


const products: Product[] = [
  { id: 1, name: "Laptop Stand", price: 250000, in_stock: true },
  { id: 2, name: "Keyboard", price: 450000, in_stock: false },
  { id: 3, name: "Mouse", price: 150000, in_stock: true },
];

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const metadata = {
  title: 'Home — AquascapeShop',
  description: 'Welcome to Aquascape shop, your one-stop online store.',
};

export default function Page() {
    
  return (
    <div>
      <Header />
        <div className="p-4 flex gap-4 flex-wrap">
         {products.map((p) => (
      <ProductCard key={p.id} product={p} />
        ))}
       </div>

      <PageSection title="Products">
        <div className="flex gap-4">
          <Card>Laptop Stand</Card>
          <Card>Keyboard</Card>
        </div>
      </PageSection>

      {/* <Modal header="Confirm order">
        Proceed to checkout?
      </Modal> */}
      <div> <h1 className="text-xl font-bold mb-4">RevoShop Dashboard</h1>
          <p>API Base URL: {baseUrl}</p>
      </div>
       
      <Footer />
    </div>
  );
}




