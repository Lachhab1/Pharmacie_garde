import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";


export function TableMed({ table_head, table_rows }) {
    //add action button to table rows
    table_rows = table_rows.map((row) => {
        row.action = (
            <>
                <button className="bg-primary rounded-md text-white font-bold px-3 py-2 m-2">
                    <Link to={`/medic/${row.code}`}>
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
        <div className="overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse shadow-none">
                <thead>
                    <tr>
                        {table_head.map((head, index) => (
                            <th
                                className="px-6 align-middle border-b-0 border-t-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold text-gray-600 uppercase text-center"
                                key={index}
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table_rows.map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([key, value], index) => (
                                <td
                                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 text-center"
                                    key={index}
                                >
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}