import { Navbar } from "../../components/Navbar"
import { useCart } from "../../context/cart-context"
import { HorizontalProductCard } from "../../components/HorizontalProductCard"
import { PriceDetails } from "../../components/PriceDetails"

export const Cart = () => {
    const { cart } = useCart()

    return (
        <>

            <Navbar />
            <main>
                <h2 className="text-2xl text-center text-emerald-800 p-5">My Cart</h2>
                <div className="flex justify-center gap-8">
                <div className="">
                    {
                        cart?.length > 0 ? cart.map(product => <HorizontalProductCard key={product.id} product={product} />) : <p>Cart is empty, add product to cart.</p>
                    }
                </div>
                <div className="">
                    {
                        <PriceDetails />
                    }
                </div>
                </div>
            </main>
        </>
    )
}