import React, { useEffect, useState } from 'react'
import QuickView from '../components/shop/quikView'
import Side from '../components/shop/sideShop'
import { UseStateContext } from '../context/ContextProvider'
export default function Order() {
    const [open, setOpen] = useState(false)
    const medecine = {
        name: 'Zip Tote Basket',
        price: '$220',
        href: '#',
        description:
            'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg',
        imageAlt: 'Back angled view with bag open and handles to the side.',
    }
    const products = [
        //pahramacy products
        {
            id: 1,
            name: 'Doliprane',
            quantity: 9,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Paracetamol',
            description: 'Medecine for headache and fever not requested by kids'
        },
        {
            id: 2,
            name: 'Paracetamol',
            quantity: 2,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Paracetamol',
            description: "Medecine for headache and fever not requested by kids"
        },
        {
            id: 3,
            name: 'Pomada Safra',
            quantity: 6,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Paracetamol',
            description: "Medecine for headache and fever not requested by kids"
        },
        {
            id: 4,
            name: 'Aspirine',
            quantity: 2,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 5,
            name: 'Paracetamol',
            quantity: 2,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
            imageAlt: 'Paracetamol',
            description: "Medecine for headache and fever not requested by kids"
        },
        {
            id: 6,
            name: 'Ryomidol',
            quantity: 2,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
            imageAlt: 'Paracetamol',
            description: "Medecine for headache and fever not requested by kids"
        },
        {
            id: 7,
            name: 'Juvamine',
            href: '#',
            price: '2000',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
            imageAlt: 'Paracetamol',
            description: "Medecine for headache and fever not requested by kids"
        },
        {
            id: 8,
            name: 'Lumirelax',
            quantity: 1,
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
            imageAlt: 'Paracetamol',
            description: "Medecine for headache and fever not requested by kids"
        },

    ]
    const [selectedProduct, setSelectedProduct] = useState(products[0])
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-semibold mb-4">Medicaments</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product, index) => (
                        product.quantity > 0 &&
                        <div key={index}>
                            <a key={product.id} href={product.href} className="group" >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        onClick={() => {
                                            setOpen(prev => !prev)
                                            setSelectedProduct(product)
                                        }}
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                            <QuickView open={open} setOpen={setOpen} medecine={selectedProduct} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}