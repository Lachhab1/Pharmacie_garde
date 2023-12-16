export default function Order() {
    const products = [
        //pahramacy products
        {
            id: 1,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 2,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 3,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 4,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 5,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 6,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 7,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
            imageAlt: 'Paracetamol',
        },
        {
            id: 8,
            name: 'Paracetamol',
            href: '#',
            price: '2000',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
            imageAlt: 'Paracetamol',
        },

    ]
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-semibold mb-4">Medicaments</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}