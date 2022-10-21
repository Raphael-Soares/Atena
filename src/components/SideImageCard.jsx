import React from "react";

function SideImageCard({title, image, children}) {
    return (
        <div class=" flex  bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="w-4/5">
                <img class="rounded-tl-lg w-fit " src={image} alt="" />
            </div>

            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900">{title}</h5>

                <p class="mb-3 font-normal text-gray-700">{children}</p>
            </div>
        </div>
    );
}

export default SideImageCard;
