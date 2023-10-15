function MainContent({ children, className }) {
    return (
        <div className={`mainContent ${className}`}>
            {children}
        </div>
    );
}

export default MainContent