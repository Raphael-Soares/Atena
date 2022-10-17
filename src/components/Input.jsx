import React from "react";

function Input({label, placeholder, name, required, changeForm}) {
    return (
        <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <input
                type="text"
                id={label}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required={required}
                name={name}
                onChange={(e) => changeForm(e)}
            />
        </div>
    );
}

export default Input;
