import React from 'react';
import Cards from '../components/dashboard/cards';
import { TableMed } from '../components/tables/classic';

const HomeClient = () => {
    const table_head = [
        'commande id',
        'pharmacie',
        'price',
        'date',
        'status',
    ]
    const table_body = [
        {
            id: 1,
            pharmacie: 'pharmacie 1',
            price: '1000',
            date: '12/12/2021',
            status: 'en cours',
        },
        {
            id: 2,
            pharmacie: 'pharmacie 2',
            price: '2000',
            date: '12/12/2021',
            status: 'terminé',
        },
        {
            id: 3,
            pharmacie: 'pharmacie 3',
            price: '3000',
            date: '12/12/2021',
            status: 'en cours',
        },
        {
            id: 4,
            pharmacie: 'pharmacie 4',
            price: '4000',
            date: '12/12/2021',
            status: 'en cours',
        },
        {
            id: 5,
            pharmacie: 'pharmacie 5',
            price: '5000',
            date: '12/12/2021',
            status: 'rejeté',
        },
        {
            id: 6,
            pharmacie: 'pharmacie 6',
            price: '6000',
            date: '12/12/2021',
            status: 'en cours',
        },
    ]

    return (
        <div>
            <TableMed table_head={table_head} table_rows={table_body} />
        </div>
    );
};

export default HomeClient;
