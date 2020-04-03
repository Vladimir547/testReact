import React from 'react';
import ListItem from './listItem.jsx';



function List(props) {
    return (
        <ul>
            {
                props.listTitle.map((item, index) => {
                    return (
                        <ListItem key={item + index} article={item} index={index} click={props.click}/>
                    );
                })
            }
        </ul>
    );
}

export default List;