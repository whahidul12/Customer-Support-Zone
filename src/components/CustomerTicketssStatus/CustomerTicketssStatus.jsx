import React from "react";
import { toast } from "react-toastify";
const CustomerTicketssStatus = ({ taskQueue, handleTastComplete, resolvedTask }) => {
    console.log(resolvedTask);

    return (
        <>
            <div className="col-span-1">
                <div>
                    <h1 className="text-2xl text-[#34485A] font-semibold">Task Status</h1>
                    {taskQueue.length !== 0 ? (
                        taskQueue.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" bg-white p-4 shadow-lg mt-4 rounded-sm"
                                >
                                    <h1 className="font-medium text-lg mb-4">
                                        {card.title}
                                    </h1>
                                    <button
                                        onClick={() => {
                                            handleTastComplete(card.id);
                                            toast(
                                                <div className="flex-col">
                                                    <h1 className="text-[#02A53B] font-bold">
                                                        Congratulations Your Problem has
                                                        been resolved 🎊🎉🎊
                                                    </h1>
                                                    <h1 className="font-bold">
                                                        Issue resolved: {card.title}
                                                    </h1>

                                                    <h1>Thanks for your patience</h1>
                                                </div>
                                            );
                                        }}
                                        className="btn border-none w-full bg-[#02A53B] text-white rounded-sm"
                                    >
                                        Complete
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <p className="mt-2 mb-4 text-[#627382]">
                            Select a ticket to add to Task Status
                        </p>
                    )}
                </div>
                <div>
                    <h1 className="text-2xl text-[#34485A] font-semibold mt-6">
                        Resolved Task
                    </h1>
                    {resolvedTask.length !== 0 ? (
                        resolvedTask.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" bg-[#E0E7FF] p-4 shadow-lg mt-4 rounded-sm"
                                >
                                    <h1 className="font-medium text-lg py-5 px-4">
                                        {card.title}
                                    </h1>
                                </div>
                            );
                        })
                    ) : (
                        <p className="mt-2 mb-4 text-[#627382]">No resolved tasks yet.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default CustomerTicketssStatus;
