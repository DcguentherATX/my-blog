import React, { useEffect } from 'react';

const ApplicationPlanning = () => {

    useEffect(() => {
        const nav = document.getElementById("navigation");
        const foot = document.getElementById("footer-container");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        }
        if (foot.style.display === "none") {
            foot.style.display = "flex";
        }
    })

    return (
        <>
            <article className="news-article">
                This will be an article!
            </article>
        </>
    )
}

export default ApplicationPlanning;