import DataTable from "react-data-table-component"
import { CircularPagination } from "../components/pagination";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { UseStateContext } from "../context/ContextProvider";
import { TableMed } from "../components/tables/classic";
import axios from "../api/axios";
import ReactPaginate from 'react-paginate';

export default function Medic() {
    const [medicaments, setMedicaments] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage] = useState(5); // Number of items per page
    const [searchQuery, setSearchQuery] = useState('');

    const tableHead = [
        'Code',
        'Nom',
        'Prix',
        'Description',
        'Actions'
    ]

    useEffect(() => {
        axios.get('/medicine').then((res) => {
            if (res.data.success) {
                setMedicaments(
                    res.data.data.map((row) => {
                        return {
                            id_m: row.id_m,
                            name: row.name_m,
                            price: row.price,
                            description: row.description_m,
                        };
                    }
                    )
                )
            }
        }
        ).catch((err) => {
            console.log(err);
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleDeleteMedicine = (id) => {
        axios.delete(`/medicine/${id}`).then((res) => {
            if (res.data.success) {
                // Remove the deleted medicine from the list
                setMedicaments(medicaments.filter((medicine) => medicine.id_m !== id));
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = medicaments.filter((medicine) => {
        const { id_m, name_m, price, descriptio_m } = medicine;
        const query = searchQuery.toLowerCase();
        return (
            String(id_m).toLowerCase().includes(query) ||
            String(name_m).toLowerCase().includes(query) ||
            String(price).toLowerCase().includes(query) ||
            String(descriptio_m).toLowerCase().includes(query)
        );
    });

    const offset = currentPage * perPage;
    const paginatedData = filteredData.slice(offset, offset + perPage);

    const table_rows = paginatedData.map((row) => {
        row.action = (
            <>
                <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2">
                    <Link to={`/medic/${row.id_m}`}>
                        <PencilSquareIcon className="h-5 w-5" />
                    </Link>
                </button>
                <button className="bg-red-500 rounded-md text-white font-bold px-3 py-2 m-2" onClick={() => handleDeleteMedicine(row.id_m)}>
                    <TrashIcon className="h-5 w-5" />
                </button>
            </>
        );
        return row;
    });

    const pageCount = Math.ceil(filteredData.length / perPage);

    return (
        <>
            <div className="">
                <div className="flex justify-start my-4">
                    <input type="text" className="border-2 rounded-md p-2 m-2" placeholder="Rechercher" value={searchQuery} onChange={handleSearch} />
                    <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2" >
                        <Link to={`/medic/new`}>
                            Ajouter
                        </Link>
                    </button>
                </div>
                <TableMed table_head={tableHead} table_rows={table_rows} />
            </div>
            <div className="flex justify-center p-2">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={"flex justify-center w-full"}
                    previousLinkClassName={"text-green-600 border-primary border-0 rounded-md shadow-md mx-2 px-2 py-1 hover:bg-white hover:text-gray-800"}
                    nextLinkClassName={"text-green-600 border-primary border-0 rounded-md shadow-md mx-2 px-2 py-1 hover:bg-white hover:text-gray-800"}
                    disabledClassName={""}
                    pageLinkClassName="text-gray-300 px-3 py-2 rounded-md shadow-lg border-2 m-2 bg-primary hover:bg-white hover:text-primary"
                    activeClassName={"text-black"}
                    activeLinkClassName="bg-white rounded-md text-green-600 px-3 py-2 shadow-md border-2 m-2 text-primary"
                />
            </div>
        </>
    )
}