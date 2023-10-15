function Section({ id, children }) {
    return (
        <div className="section" id={id}>
            {children}
        </div>
    );
}

export default Section