const UrlTitle = () => {
    return (
        <div>UrlTitle</div>
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