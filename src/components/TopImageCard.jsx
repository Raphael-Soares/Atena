import React from "react";

function TopImageCard({title, image, children}) {
    return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
            <a href="#">
                <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900 ">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 ">{children}</p>
            </div>
        </div>
    );
}

export default TopImageCard;
