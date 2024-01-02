import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";


export function TableMed({ table_head, table_rows }) {
    //add action button to table rows
    return (
        <div className="overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse shadow-none">
                <thead>
                    <tr>
                        {table_head?.map((head, index) => (
                            <th
                                className="px-6 align-middle border-b-0 border-t-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold text-gray-600 uppercase text-start"
                                key={index}
                            >
                                {head}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {table_rows?.map((row, index) => (
                        <tr key={index}>
                            {Object.entries(row).map(([key, value], index) => (
                                <td
                                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md font-serif text-start whitespace-nowrap p-1 text-gray-800"
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