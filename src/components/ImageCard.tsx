import React, { useState } from 'react'
import Modal from 'react-modal'
import LazyLoad from 'react-lazyload'

interface ImageCardProps {
    url: string
    breed: string
}

const ImageCard: React.FC<ImageCardProps> = ({ url, breed }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => setModalIsOpen(true)
    const closeModal = () => setModalIsOpen(false)

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            openModal()
        }
    }

    return (
        <>
            <div
                className="image-card"
                onClick={openModal}
                onKeyPress={handleKeyPress}
                tabIndex={0}
                role="button"
                aria-label={`View more details about ${breed}`}
            >
                <LazyLoad height={200} offset={100} once placeholder={<div className="lazyload-placeholder"></div>}>
                    <img src={url} alt={breed} />
                </LazyLoad>
                <div className="tooltip">{breed.charAt(0).toUpperCase() + breed.slice(1)}</div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={`${breed} Details`}
                className="image-details-modal"
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                <div className="image-details-content">
                    <img src={url} alt={breed} className="modal-image" />

                    <div className="close-button" onClick={closeModal} aria-label="Close Details">
                        &times;
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ImageCard
