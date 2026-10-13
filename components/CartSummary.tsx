"use client";

import type { CartItem } from "../types/product";

interface CartSummaryProps {
  cart: CartItem[];
}


export default function CartSummary({ cart }: CartSummaryProps) {
  // total = jumlah dari (harga × quantity) tiap item
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // jumlah barang = jumlah semua quantity (bukan cuma cart.length)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="border-t border-gray-700 mt-6 pt-3 flex justify-between">
      <div>
        <p className="text-xs text-gray-400">Items in cart</p>
        <p className="font-bold">{totalItems}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-gray-400">Total</p>
        <p className="font-bold">Rp {total.toLocaleString("id-ID")}</p>
      </div>
    </div>
  );
}
