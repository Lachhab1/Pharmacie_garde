import DataTable from "react-data-table-component"
import { CircularPagination } from "../components/pagination";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { UseStateContext } from "../context/ContextProvider";
import { TableMed } from "../components/tables/classic";


export default function Pharmacy() {
    const tableHead = [
        'Code',
        'Nom',
        'Adresse',
        'Téléphone',
        'Heure d\'ouverture',
        'Heure de fermeture',
        'Actions'
    ]

    // eslint-disable-line react-hooks/exhaustive-deps

    const data = [
        {
            code: '1',
            name: 'Pharmacie 1',
            address: 'Boulevard de la liberté',
            phone: '0123456789',
            opening_time: '08:00',
            closing_time: '20:00',
        },
        {
            code: '2',
            name: 'Pharmacie 2',
            address: 'Boulevard de la liberté',
            phone: '0123456789',
            opening_time: '08:00',
            closing_time: '20:00',
        },
        {
            code: '3',
            name: 'Pharmacie 3',
            address: 'Boulevard de la liberté',
            phone: '0123456789',
            opening_time: '08:00',
            closing_time: '20:00',
        },
        {
            code: '4',
            name: 'Pharmacie 4',
            address: 'Boulevard de la liberté',
            phone: '0123456789',
            opening_time: '08:00',
            closing_time: '20:00',
        },
        {
            code: '5',
            name: 'Pharmacie 5',
            address: 'Boulevard de la liberté',
            phone: '0123456789',
            opening_time: '08:00',
            closing_time: '20:00',
        },
    ]
    const table_rows = data.map((row) => {
        row.action = (
            <>
                <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2">
                    <Link to={`/pharmacy/${row.code}`}>
                        <PencilSquareIcon className="h-5 w-5" />
                    </Link>
                </button>
                <button className="bg-red-500 rounded-md text-white font-bold px-3 py-2 m-2">
                    <TrashIcon className="h-5 w-5" />
                </button>
            </>
        );
        return row;
    });


    return (
        <>
            <div className="">
                <div className="flex justify-start my-4">
                    <input type="text" className="border-2 rounded-md p-2 m-2" placeholder="Rechercher" />
                    <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2" >
                        <Link to={`/pharmacy/new`}>
                            Ajouter
                        </Link>
                    </button>
                </div>
                <TableMed table_head={tableHead} table_rows={table_rows} />
            </div>
            <div className="flex justify-center p-2">
                <CircularPagination />
            </div>
        </>
    )
}