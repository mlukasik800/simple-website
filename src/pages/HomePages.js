import React from 'react';
import Article from '../components/Article';


const articles = [{
        id: 1,
        title: "Artykuł 1",
        author: "Mateusz Łukasik",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed culpa itaque pariatur ducimus praesentium aspernatur odio expedita. A et itaque sunt ratione officiis porro maxime laudantium tempora rem illo!",
    },
    {
        id: 2,
        title: "Artykuł 2",
        author: "Mateusz Łukasik",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed culpa itaque pariatur ducimus praesentium aspernatur odio expedita. A et itaque sunt ratione officiis porro maxime laudantium tempora rem illo!",
    },
    {
        id: 3,
        title: "Artykuł 3",
        author: "Mateusz Łukasik",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed culpa itaque pariatur ducimus praesentium aspernatur odio expedita. A et itaque sunt ratione officiis porro maxime laudantium tempora rem illo!",
    },
    {
        id: 4,
        title: "Artykuł 4",
        author: "Mateusz Łukasik",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sed culpa itaque pariatur ducimus praesentium aspernatur odio expedita. A et itaque sunt ratione officiis porro maxime laudantium tempora rem illo!",
    },
]

const HomePage = () => {
    const artList = articles.map(article => ( <
        Article key = {
            article.id
        } {
            ...article
        }
        />
    ))
    return ( <
        div className = "home" > {
            artList
        } <
        /div>
        // <Route path="/" exact coponent={HomePage} />"
    )
}

export default HomePage