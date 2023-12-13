import React from "react";
export const Input = ({ value, onClick }) => {
    return (
        <div>
            <input
                onClick={onClick}
                value={value}
                className={"  text-center  text-white  w-full h-16 outline-none focus:outline-none bg-indigo-700 text-xl font-light"
                } />

        </div>
    );
}