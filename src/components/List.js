import React from "react";

export default function List({item, callback}) {
    const handleSelect = (item) => {
        callback(item);
    }

    return (
        <li onClick={() => handleSelect(item)}>
            {item.name}
        </li>
    )
}