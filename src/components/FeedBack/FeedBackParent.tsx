import EditArtistForm from './EditArtistForm/EditArtistForm'
import BackDrop from './BackDrop'
import Modal from './Modal'
import DeleteModal from './DeleteModal'

export default function FeedBackParent() {
    return (
        <>
            <EditArtistForm />
            <BackDrop />
            <Modal />
            <DeleteModal />
        </>
    )
}
