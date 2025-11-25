'use client';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();

    if (cartItems.length === 0) {
        return <div className="p-8 text-gray-500">Your cart is empty 🛍</div>;
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">🛒 My Cart</h1>

            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-4 border p-4 rounded-lg shadow-sm bg-white"
                    >
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                        <div className="flex-1">
                            <h2 className="font-semibold text-lg">{item.title}</h2>
                            <p className="text-gray-500">₦{item.price} × {item.quantity}</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="font-bold text-black">
                                ₦{(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-sm text-red-500 mt-1"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 border-t pt-4 text-right">
                <p className="text-xl font-semibold">Total: ₦{total.toFixed(2)}</p>
                <button
                    onClick={clearCart}
                    className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
                >
                    Clear Cart
                </button>
            </div>
        </div>
    );
}