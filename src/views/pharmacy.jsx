import DataTable from "react-data-table-component";
import { CircularPagination } from "../components/pagination";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { UseStateContext } from "../context/ContextProvider";
import { TableMed } from "../components/tables/classic";
import axios from "../api/axios";
import ReactPaginate from 'react-paginate';

export default function Pharmacy() {
    const tableHead = [
        'Code',
        'Nom',
        'Adresse',
        'Téléphone',
        'Actions'
    ];

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("/pharmacy");
            setData(
                response?.data?.data?.map((row) => {
                    return {
                        code: row.id_p,
                        name: row.name_p,
                        address: row.address_u,
                        phone: row.phone_p,
                    };
                }
                )
            )
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRow = async (code) => {
        try {
            await axios.delete(`/pharmacy/${code}`);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    const table_rows = data?.filter((row) => {
        if (searchTerm === '') {
            return true;
        } else {
            return (
                String(row.code).toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(row.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(row.address).toLowerCase().includes(searchTerm.toLowerCase()) ||
                String(row.phone).toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    }).map((row) => {
        row.action = (
            <>
                <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2">
                    <Link to={`/pharmacy/${row?.code}`}>
                        <PencilSquareIcon className="h-5 w-5" />
                    </Link>
                </button>
                <button className="bg-red-500 rounded-md text-white font-bold px-3 py-2 m-2" onClick={() => deleteRow(row?.code)}>
                    <TrashIcon className="h-5 w-5" />
                </button>
            </>
        );
        return row;
    });

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const itemsPerPage = 5; // Set the limit per page to 5
    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(table_rows?.length / itemsPerPage);
    const paginatedData = table_rows?.slice(offset, offset + itemsPerPage);

    return (
        <>
            <div className="">
                <div className="flex justify-start my-4">
                    <input type="text" className="border-2 rounded-md p-2 m-2" placeholder="Rechercher" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2" >
                        <Link to={`/pharmacy/new`}>
                            Ajouter
                        </Link>
                    </button>
                </div>
                <TableMed table_head={tableHead} table_rows={paginatedData} />
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
                    pageLinkClassName="text-white px-3 py-2 rounded-md shadow-lg border-2 m-2 bg-primary hover:bg-white hover:text-primary"
                    activeClassName={"text-black"}
                    activeLinkClassName="bg-white rounded-md text-green-600 px-3 py-2 shadow-md border-2 m-2"
                />
            </div>
        </>
    );
}