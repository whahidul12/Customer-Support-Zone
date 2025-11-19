import React, { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProgressResolvedCountcontainer from "./components/ProgressResolvedCount/ProgressResolvedCount";
import CustomerTicketss from "./components/CustomerTicketss/CustomerTicketss";
import Footer from "./components/Footer/Footer";
import { toast } from "react-toastify";

const fetchCustomerData = async () => {
    const res = await fetch("/data.json");
    return res.json();
};
let customerData = fetchCustomerData();

function App() {
    const [taskQueue, setTaskQueue] = useState([]);
    const [completeTask, setCompleteTask] = useState([]);

    const hendleAddToTaskbar = (customerData) => {
        if (!taskQueue.includes(customerData)) {
            const now = new Date().toLocaleString();
            setTaskQueue([...taskQueue, customerData]);
            toast(
                <div className="flex-col">
                    <h1 className="text-[#FEBB0C] font-bold">
                        Your problem will be resolved soon...
                    </h1>
                    <h1>Please be patient, we are working on it⏱️</h1>
                    <h1 className="font-bold">Issue: {customerData.title}</h1>
                    <h1>Name: {customerData.customer}</h1>
                    <h1>ID: {customerData.id}</h1>
                    <h1>Date: {now}</h1>
                </div>
            );
        } else {
            toast(
                <div className="flex-col">
                    <h1 className="text-[#F93062] font-bold">
                        We have already addressed your issue.
                    </h1>
                    <h1>Please be patient, we are working on it</h1>
                </div>
            );
        }
    };
    const handleTastComplete = (id) => {
        //update the Task Queue
        const updatedTaskQueue = taskQueue.filter((card) => card.id !== id);
        setTaskQueue(updatedTaskQueue);
        //update Completed Task
        setCompleteTask([...completeTask, id]);
    };

    return (
        <>
            <nav className="shadow-sm">
                <Navbar></Navbar>
            </nav>
            <ProgressResolvedCountcontainer
                taskQueue={taskQueue}
                completeTask={completeTask}
            ></ProgressResolvedCountcontainer>
            <Suspense
                fallback={
                    <div className="w-fit mx-auto py-4">
                        <span className="loading loading-infinity loading-xl" />
                    </div>
                }
            >
                <CustomerTicketss
                    customerData={customerData}
                    hendleAddToTaskbar={hendleAddToTaskbar}
                    taskQueue={taskQueue}
                    handleTastComplete={handleTastComplete}
                    completeTask={completeTask}
                ></CustomerTicketss>
            </Suspense>
            <Footer></Footer>
        </>
    );
}

export default App;
