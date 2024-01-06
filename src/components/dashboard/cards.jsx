import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Cards() {
    const lng = navigator.language;

    const pendingOrders = 1;
    const deliveredOrders = 1;
    const processOrders = 4;
    const allOrders = 6;

    return (
        <div className="cards-section">
            <div className="cards">
                <div className="card dark:bg-dark_cards">
                    <div className="card-header">
                        <h2 className="card-header-name dark:text-white">
                            allOrders
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-body-text dark:text-white">{allOrders}</p>
                        <div className="card-icon">
                            <ArchiveBoxIcon className="w-12 h-10" />
                        </div>
                    </div>
                </div>{" "}
                <div className="card dark:bg-dark_cards">
                    <div className="card-header">
                        <h2 className="card-header-name dark:text-white">
                            pendingOrders
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-body-tex dark:text-white">{pendingOrders}</p>
                        <div className="card-icon">
                            <ClockIcon className="w-12 h-10" />
                        </div>
                    </div>
                </div>{" "}
                <div className="card dark:bg-dark_cards">
                    <div className="card-header">
                        <h2 className="card-header-name dark:text-white">
                            {" "}
                            processOrders
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-body-text dark:text-white">{processOrders}</p>
                        <div className="card-icon">
                            <ArrowPathRoundedSquareIcon className="w-12 h-10" />
                        </div>
                    </div>
                </div>
                <div className="card dark:bg-dark_cards">
                    <div className="card-header">
                        <h2 className="card-header-name dark:text-white">
                            {" "}
                            completedOrders
                        </h2>
                    </div>
                    <div className="card-body">
                        <p className="card-body-text dark:text-white">{deliveredOrders}</p>
                        <div className="card-icon">
                            <CheckCircleIcon className="w-12 h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;