import React from 'react';

function ListItem({article, index, click}) {
    return (
        <li >
            {index + 1} 
            {article} 
            <button onClick={() => click(index)} >del</button>
        </li>
    );
}

export default ListItem;