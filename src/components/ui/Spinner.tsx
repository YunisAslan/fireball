
const Spinner = () => {
    return <>
        <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c1.985 0 3.826-.725 5.236-1.929l-1.427-1.428A5.963 5.963 0 0112 18a5.963 5.963 0 01-4.808-2.429L4.292 16.88zM12 4a7.96 7.96 0 00-7.97 7.291h1.994A5.965 5.965 0 0112 6a5.963 5.963 0 014.807 2.429l1.428-1.427A7.962 7.962 0 0012 4z"></path>
        </svg>
    </>;
};

export default Spinner;
