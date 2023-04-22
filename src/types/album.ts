export interface IAlbum {
    id: string,
    name: string,
    releaseDate: number,
    receiveGrammy: boolean
}


export interface IAlbumProps {
    setNewAlbumDate: React.Dispatch<React.SetStateAction<number>>,
    setNewAlbumName: React.Dispatch<React.SetStateAction<string>>,
    setIsReceive: React.Dispatch<React.SetStateAction<boolean>>,
    isReceive: boolean,
    saveAlbum: () => Promise<void>,
    setFileUpload: React.Dispatch<React.SetStateAction<File | null>>,
    isLoading: boolean,
    uploadFile: () => Promise<void>,
}