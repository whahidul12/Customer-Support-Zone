import React from "react";
import calendarIcon from "/src/assets/calendar-icon.png";
const CustomerTicket = ({ customerData, hendleAddToTaskbar }) => {
    const { title, status, description, id, priority, customer, createdAt } =
        customerData;

    return (
        <div
            onClick={() => {
                hendleAddToTaskbar(customerData);
            }}
            className="ticket bg-white p-4 rounded-sm shadow-lg cursor-pointer"
        >
            <div className="flex justify-between items-center">
                <h1 className="font-medium">{title}</h1>
                <span
                    className={`bg-[#B9F8CF] 
                    ${status === "open" ? "bg-[#B9F8CF]" : "bg-[#FEBB0C]"}
                    py-1 px-4 rounded-4xl text-sm`}
                >
                    {status}
                </span>
            </div>
            <p className="text-justify mt-2 mb-4 text-[#627382] text-sm">{description}</p>
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-[#627382] text-xs mr-4">{id}</span>
                    <span
                        className={`
                        ${
                            priority === "HIGH PRIORITY"
                                ? "text-[#F83044]"
                                : priority === "MEDIUM PRIORITY"
                                ? "text-[#FEBB0C]"
                                : "text-[#02A53B]"
                        } text-xs`}
                    >
                        {priority}
                    </span>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <span className="text-[#627382]  text-xs">{customer}</span>
                    <span className="text-[#627382]  text-xs flex justify-center items-center">
                        <img
                            className="w-6 h-6 mr-2"
                            src={calendarIcon}
                            alt="calendar-icon"
                        />
                        {createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;
