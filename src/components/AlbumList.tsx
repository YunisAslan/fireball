import { useEffect, useState } from "react";
import AlbumForm from "./AlbumForm";

import { auth, db, storage } from "../config/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { IAlbum } from "../types/album";
import { ref, uploadBytes } from "firebase/storage";


function AlbumList() {

    const [albumList, setAlbumList] = useState<IAlbum[]>([])
    const albumsCollectionRef = collection(db, "albums")

    const [newAlbumName, setNewAlbumName] = useState("");
    const [newAlbumDate, setNewAlbumDate] = useState(0)
    const [isReceive, setIsReceive] = useState(false)

    // updated album NAME
    const [newName, setNewName] = useState("")

    //loading effect
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(false)
    // console.log(message);

    //file upload state 
    const [fileUpload, setFileUpload] = useState<File | null>(null)


    const getMovieList = async () => {
        try {
            const data = await getDocs(albumsCollectionRef)
            const filteredData = data.docs.map(doc => ({
                ...(doc.data() as IAlbum),
                id: doc.id
            }))

            setAlbumList(filteredData)
        } catch (error) {
            console.error(error);
        }
    }

    const saveAlbum = async () => {
        try {
            setIsLoading(true);
            await addDoc(albumsCollectionRef, {
                name: newAlbumName,
                releaseDate: newAlbumDate,
                receiveGrammy: isReceive,
                userId: auth?.currentUser?.uid
            })
            getMovieList()
        } catch (error) {
            console.error(error);
            // console.log("Please login !");
            setMessage(true);
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                setMessage(false);
            }, 3000);
            // Set loading state and message state to false
        }
    }

    const deleteAlbum = async (id: string) => {
        const albumDoc = doc(db, "albums", id)
        try {
            await deleteDoc(albumDoc)
            getMovieList()
        } catch (error) {
            console.error(error);
        }
    }

    const updateAlbum = async (id: string) => {
        const albumDoc = doc(db, "albums", id)

        try {
            await updateDoc(albumDoc, { name: newName })
            getMovieList()
        } catch (error) {
            console.error(error)
        }
    }

    const uploadFile = async () => {
        if (!fileUpload) return
        const filesFolderRef = ref(storage, `ProjectFiles/${fileUpload.name}`)
        console.log(storage);
        
        try {
            await uploadBytes(filesFolderRef, fileUpload)
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <>
            <section className="pt-28 pb-64">
                <AlbumForm
                    setNewAlbumName={setNewAlbumName}
                    setNewAlbumDate={setNewAlbumDate}
                    saveAlbum={saveAlbum}
                    setIsReceive={setIsReceive}
                    setFileUpload={setFileUpload}
                    uploadFile={uploadFile}
                    isReceive={isReceive}
                    isLoading={isLoading}
                />

                {message && <span className="text-6xl text-red-500">When the lights shut off</span>}

                <div className="flex justify-center items-center gap-6">
                    {albumList.map((album) => (
                        <div key={album.id} className={`border-2 rounded-md p-3 ${album.receiveGrammy ? 'border-green-600' : 'border-red-600'} `}>
                            <h2 className="text-xl font-bold italic">{album.name}</h2>
                            <h6>{album.releaseDate}</h6>
                            <span>Receive Grammy Nomination: {album.receiveGrammy ? "Yes" : "No"}</span>

                            <div className="pt-6 flex flex-col items-center justify-center gap-5">
                                <button className="bg-red-600 text-lg text-white rounded-md p-2 mx-2"
                                    onClick={() => deleteAlbum(album.id)}
                                >
                                    Delete
                                </button>

                                <input
                                    className="border border-gray-400 focus:border-blue-500 outline-none rounded-md p-2"
                                    type="text"
                                    onChange={e => setNewName(e.target.value)}
                                />

                                <button className="bg-orange-500 text-white text-lg p-2 rounded-full mx-2"
                                    onClick={() => updateAlbum(album.id)}
                                >
                                    Change name
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default AlbumList;
