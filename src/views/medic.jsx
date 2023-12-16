import DataTable from "react-data-table-component"
import { CircularPagination } from "../components/pagination";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { UseStateContext } from "../context/ContextProvider";
import { TableMed } from "../components/tables/classic";


export default function Medic() {
    const [medicaments, setMedicaments] = useState([]);
    const tableHead = [
        'Code',
        'Nom',
        'Quantité',
        'Prix',
        'Date de fabrication',
        'Date d\'expiration',
        'Actions'
    ]

    // eslint-disable-line react-hooks/exhaustive-deps

    const data = [
        {
            code: '1',
            name: 'Paracetamol',
            quantity: '20',
            price: '2000',
            date_fabrication: '12/12/2020',
            date_expiration: '12/12/2021',
        },
        {
            code: '2',
            name: 'Paracetamol',
            quantity: '20',
            price: '2000',
            date_fabrication: '12/12/2020',
            date_expiration: '12/12/2021',
        },
        {
            code: '3',
            name: 'Paracetamol',
            quantity: '20',
            price: '2000',
            date_fabrication: '12/12/2020',
            date_expiration: '12/12/2021',
        },
        {
            code: '4',
            name: 'Paracetamol',
            quantity: '20',
            price: '2000',
            date_fabrication: '12/12/2020',
            date_expiration: '12/12/2021',
        },
        {
            code: '5',
            name: 'Paracetamol',
            quantity: '20',
            price: '2000',
            date_fabrication: '12/12/2020',
            date_expiration: '12/12/2021',
        },
    ];



    return (
        <>
            <div className="">
                <div className="flex justify-start my-4">
                    <input type="text" className="border-2 rounded-md p-2 m-2" placeholder="Rechercher" />
                    <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2" >
                        <Link to={`/medic/new`}>
                            Ajouter
                        </Link>
                    </button>
                </div>
                <TableMed table_head={tableHead} table_rows={data} />
            </div>
            <div className="flex justify-center p-2">
                <CircularPagination />
            </div>
        </>
    )
}