import React from "react";
import vector1 from "/src/assets/vector1.png";
import vector2 from "/src/assets/vector2.png";

const ProgressResolvedCountcontainer = ({ taskQueue, completeTask }) => {
    return (
        <div className="max-w-[1400px] mx-auto md:flex justify-center items-center gap-6 py-20 px-3">
            <div className="bg-[linear-gradient(140deg,#632EE3_0%,#9F62F2_100%)] w-3/4 md:w-1/2 h-44 md:h-[230px] mx-auto md:mx-0 mb-5 md:mb-0 rounded-lg">
                <div
                    className="w-full h-full grid place-items-center"
                    style={{
                        backgroundImage: `url(${vector1}), url(${vector2})`,
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundPosition: "left center, right center",
                        backgroundSize: "contain, contain",
                    }}
                >
                    <div className="text-center text-white">
                        <h1 className=" text-2xl mb-4">In-Progress</h1>
                        <h1 className="text-6xl">{taskQueue.length}</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[linear-gradient(90deg,#54CF68_0%,#00827A_100%)] w-3/4 md:w-1/2 h-44 md:h-[230px] mx-auto md:mx-0 mb-5 md:mb-0 rounded-lg">
                <div
                    className="w-full h-full grid place-items-center"
                    style={{
                        backgroundImage: `url(${vector1}), url(${vector2})`,
                        backgroundRepeat: "no-repeat, no-repeat",
                        backgroundPosition: "left center, right center",
                        backgroundSize: "contain, contain",
                    }}
                >
                    <div className="text-center text-white">
                        <h1 className=" text-2xl mb-4">Resolved</h1>
                        <h1 className="text-6xl">{completeTask.length}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressResolvedCountcontainer;
