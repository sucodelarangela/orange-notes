import { useState } from "react";

const UrlTitle = ({ href }) => {
    const [pageTitle, setPageTitle] = useState('');
    const [loading, setLoading] = useState(true);

    fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(href)}`
    ).then((response) => {
        if (response.ok) return response.text();
        throw new Error("Network response was not ok.");
    }).then((data) => {
        const doc = new DOMParser().parseFromString(data, "text/html");
        let title = doc.querySelector('title');
        title == null ? setPageTitle(href) : setPageTitle(title.textContent);
        setLoading(false);
    });

    return (
        <a className='create__sections--link' href={href}>
            {loading && <span>Carregando...</span>}
            {pageTitle == null ? href : pageTitle}
        </a>
    );
};

export default UrlTitle;

/*

    const getTitle = (anchor) => {
        fetch(
            `https://api.allorigins.win/get?url=${encodeURIComponent(anchor)}`
        ).then((response) => {
            if (response.ok) return response.text();
            throw new Error("Network response was not ok.");
        }).then((data) => {
            const doc = new DOMParser().parseFromString(data, "text/html");
            title = doc.querySelector('title');
            setPageTitles(pageTitles => [...pageTitles, { link: title }]);
        });

    };

    */