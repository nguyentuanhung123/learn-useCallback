import React, { useEffect, useState } from 'react'

const ChildComponent = ({ getData }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
 
       console.log('Child Component - useEffect - getData');

        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data;
                setComments(comments);
            })

    }, [getData]);

    return (
        <div>
            <p>Child Component</p>
            <p>{JSON.stringify(comments)}</p>
        </div>
    )
}

export default ChildComponent
