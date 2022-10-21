import React from "react";

function SideRightImageCard({title, image, children}) {
    return (
        <div class=" flex justify-between bg-white rounded-lg border border-gray-200 shadow-md">
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>

                <p class="mb-3 font-normal text-gray-700">{children}</p>
            </div>
            <div className="w-4/5">
                <img class="rounded-tr-lg w-fit " src={image} alt="" />
            </div>
        </div>
    );
}

export default SideRightImageCard;
