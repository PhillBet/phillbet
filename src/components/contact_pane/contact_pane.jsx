import React from "react";
import "../../styles/contact_pane.css";
//import "../../values/text/en/presentation.json"

const ContactPane = () => {
    const expYears = (startYear="2020-10-01") => {
        const dateNow = new Date();
        const startDate = new Date(startYear);
        const difference = dateNow - startDate;
        return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    };

    return (
        <div className="contact-pane">
            <div>
                <p>I am PhillBet a Python Developer with {expYears()} years of experience in Back End projects in the genomic sciences sector.</p>
                <p>I have experience working with:</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>Python, Git, GitHub, Snakemake, Docker Products, Java, MongoDB, Linux, Unix, PostgreSQL, C++, C#</p>
                <p>END</p>

            </div>
        </div>
    );
};

export default ContactPane;