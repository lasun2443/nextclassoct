'use client';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function CartIcon() {
    const { cartItems } = useCart();
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Link href="/admin/cart" className="relative inline-block">
            🛒
            {count > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {count}
                </span>
            )}
        </Link>
    );
}