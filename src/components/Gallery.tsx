import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'

interface GalleryProps {
    selectedBreeds: string[]
    isDarkMode: boolean
}

interface DogImage {
    breed: string
    url: string
}

const Gallery: React.FC<GalleryProps> = ({ selectedBreeds, isDarkMode }) => {
    const [images, setImages] = useState<DogImage[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        if (selectedBreeds.length === 0) {
            setImages([])
            return
        }

        const fetchImages = async () => {
            setLoading(true)
            setError('')
            try {
                const promises = selectedBreeds.map(async (breed) => {
                    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/6`)
                    const data = await response.json()
                    if (data.status === 'success') {
                        return data.message.map((url: string) => ({ breed, url }))
                    } else {
                        throw new Error(`Failed to fetch images for breed: ${breed}`)
                    }
                })

                const results = await Promise.all(promises)
                const allImages = results.flat()
                setImages(allImages)
            } catch (err) {
                setError(`An error occurred while fetching images: ${(err as Error).message}`)
            } finally {
                setLoading(false)
            }
        }

        fetchImages()
    }, [selectedBreeds])

    const renderMessage = (message: string, className: string) => (
        <div className={`gallery-container ${isDarkMode ? 'dark-mode' : ''}`}>
            <p className={className}>{message}</p>
        </div>
    )

    if (loading) return renderMessage("Loading images 💡", "gallery-message")
    if (error) return renderMessage(error, "error-message")
    if (selectedBreeds.length === 0) return renderMessage("Welcome to Ziji's dog gallery! Please select at least one breed to view images 😊", "gallery-message")
    if (images.length === 0) return renderMessage("No images found for the selected breeds.", "gallery-message")

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <ImageCard
                    key={`${image.breed}-${index}`}
                    url={image.url}
                    breed={image.breed}
                />
            ))}
        </div>
    )
}

export default Gallery
