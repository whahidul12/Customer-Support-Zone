import React, { use } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import CustomerTicketssStatus from "../CustomerTicketssStatus/CustomerTicketssStatus";

const CustomerTicketss = ({
    customerData,
    hendleAddToTaskbar,
    taskQueue,
    handleTastComplete,
    completeTask,
}) => {
    const customerAllData = use(customerData);
    const resolvedTask = customerAllData.filter((card) => completeTask.includes(card.id));
    const updatedCustomerAllData = customerAllData.filter(
        (card) => !completeTask.includes(card.id)
    );

    return (
        <>
            <div className="max-w-[1400px] mx-auto px-3">
                <h1 className="text-2xl text-[#34485A] font-semibold mt-6">
                    Customer Tickets
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
                    <div className="col-span-1 md:col-span-6 xl:col-span-7 grid h-fit grid-cols-1 xl:grid-cols-2 gap-5">
                        {updatedCustomerAllData.map((customerData) => (
                            <CustomerTicket
                                key={customerData.id}
                                customerData={customerData}
                                hendleAddToTaskbar={hendleAddToTaskbar}
                            ></CustomerTicket>
                        ))}
                    </div>
                    <div className="col-span-1 md:col-span-4 xl:col-span-3">
                        <CustomerTicketssStatus
                            taskQueue={taskQueue}
                            handleTastComplete={handleTastComplete}
                            customerAllData={customerAllData}
                            resolvedTask={resolvedTask}
                        ></CustomerTicketssStatus>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerTicketss;
