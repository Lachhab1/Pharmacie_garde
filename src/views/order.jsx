import React, { useEffect, useState } from 'react'
import QuickView from '../components/shop/quikView'
import Side from '../components/shop/sideShop'
import { UseStateContext } from '../context/ContextProvider'
import axios from '../api/axios'
export default function Order() {
    const [open, setOpen] = useState(false)
    const [products, setProducts] = useState([])
    useEffect(() => {
        // Fetch the data from the API using axios
        axios.get('/stockmedicine')
            .then(response => {
                setProducts(
                    response?.data?.data?.map((row) => {
                        return {
                            id: row.id_m,
                            name: row.name_m,
                            price: row.price,
                            description: row.description_m,
                            quantity: 1,
                            totalquantity: row.stock,
                            imageSrc: `http://localhost:8000/images/${row.path}`,
                            imageAlt: row.path,
                        };
                    }
                    )

                )
                console.log(products)
            }
            )
            .catch(error => console.log(error))
    }, [])


    const [selectedProduct, setSelectedProduct] = useState()
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-semibold mb-4">Medicaments</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products?.map((product, index) => (
                        product?.quantity > 0 &&
                        <div key={index}>
                            <a key={product.id} href={`#`} className="group" >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product?.imageSrc}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        onClick={() => {
                                            setOpen(prev => !prev)
                                            setSelectedProduct(product)
                                        }
                                        }
                                    />
                                </div >
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a >
                            <QuickView open={open} setOpen={setOpen} medecine={selectedProduct} />
                        </div >
                    ))
                    }
                </div >
            </div >
        </div >
    )
}