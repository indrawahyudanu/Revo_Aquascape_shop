// components/Header.tsx
export default function Header() {
  return (
    <header className="flex items-center gap-6 p-4 border border-gray-700 rounded mb-4">
      <span className="font-bold text-lg">Revo Aquscape Shop</span>
      <nav className="flex gap-4 text-sm text-gray-300">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
      </nav>
    </header>
  );
}