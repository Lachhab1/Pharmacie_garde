import DataTable from "react-data-table-component"
import { CircularPagination } from "../components/pagination";
export default function Medic() {
    const tableCustomStyles = {
        headCells: {
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                paddingLeft: '0 8px',
                justifyContent: 'center',
                backgroundColor: 'transparent',

            },
        },
        cells: {
            style: {
                fontSize: '18px',
                paddingLeft: '0 8px',
                justifyContent: 'center',
            },
        },

    };
    return (
        <>
            <div className="">
                <div className="flex justify-start my-4">
                    <input type="text" className="border-2 rounded-md p-2 m-2" placeholder="Rechercher" />
                    <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2">
                        Ajouter
                    </button>
                </div>
                <DataTable customStyles={tableCustomStyles} columns={[
                    {
                        name: 'Nom',
                        selector: 'name',
                        sortable: true,
                    },
                    {
                        name: 'Quantité',
                        selector: 'quantity',
                        sortable: true,
                    },
                    {
                        name: 'Prix',
                        selector: 'price',
                        sortable: true,
                    },
                    {
                        name: 'Date de fabrication',
                        selector: 'date',
                        sortable: true,
                    },
                    {
                        name: 'Date d\'expiration',
                        selector: 'expiration',
                        sortable: true,
                    },
                ]}
                    data={
                        [
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                            {
                                name: "Paracetamol",
                                quantity: 20,
                                price: 200,
                                date: "12/12/2020",
                                expiration: "12/12/2021"
                            },
                        ]
                    }
                />
            </div>
            <div className="flex justify-center p-2">
                <CircularPagination />
            </div>
        </>
    )
}