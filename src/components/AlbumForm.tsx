import { IAlbumProps } from "../types/album";
import Spinner from "./ui/Spinner";

const MovieForm = ({ setNewAlbumDate, setNewAlbumName, saveAlbum, setIsReceive, isReceive, isLoading, setFileUpload, uploadFile }
    : IAlbumProps
) => {
    return (
        <>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col items-center justify-center space-y-3 py-10">

                <div className="flex flex-col justify-center items-center space-y-3">
                    <input
                        className="border border-gray-400 focus:border-blue-500 outline-none rounded-md p-2"
                        type="text"
                        placeholder="Name.."
                        onChange={e => setNewAlbumName(e.target.value)}
                    />

                    <input
                        className=""
                        type="file"
                        onChange={e => {
                            if (e.target.files && e.target.files.length > 0) {
                                setFileUpload(e.target.files[0])
                            }
                        }}
                    />
                </div>


                <input
                    className="border border-gray-400 focus:border-blue-500 outline-none rounded-md p-2"
                    type="number"
                    placeholder="Release day.."
                    onChange={e => setNewAlbumDate(Number(e.target.value))}
                />

                <div>
                    <label htmlFor="">Receive an Grammy</label>
                    <input
                        type="checkbox"
                        checked={isReceive}
                        onChange={e => setIsReceive(e.target.checked)}
                    />
                </div>


                <button
                    className="bg-green-600 text-lg text-white rounded-md p-2"
                    onClick={saveAlbum}
                    disabled={isLoading}
                >
                    <span className="flex items-center justify-center">
                        Save Album
                        {isLoading && (<span className="ml-2"> <Spinner /> </span>)}
                    </span>
                </button>

                <button onClick={uploadFile} className="">
                    Upload File
                </button>
            </form>
        </>
    )
};

export default MovieForm;
