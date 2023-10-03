export const News = ({ data }) => {
    return (
        <section className="News">
            <ul>
                {data.map(({ id, cardImage, cardTitle }) => {
                    return (
                        <li key={id}>
                            <figure>
                                <img src={cardImage} alt="" />
                                <figcaption>{cardTitle}</figcaption>
                            </figure>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
