import React, { useEffect, useState } from 'react'

interface BreedSelectorProps {
    onSelectBreeds: (selectedBreeds: string[]) => void
}

const BreedSelector: React.FC<BreedSelectorProps> = ({ onSelectBreeds }) => {
    const [breeds, setBreeds] = useState<string[]>([])
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchBreeds = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://dog.ceo/api/breeds/list/all')
                const data = await response.json()
                if (data.status === 'success') {
                    const breedList = Object.keys(data.message)
                    setBreeds(breedList)
                } else {
                    setError('Failed to fetch breeds.')
                }
            } catch (err) {
                setError('An error occurred while fetching breeds.')
            } finally {
                setLoading(false)
            }
        }

        fetchBreeds()
    }, [])

    const handleChange = (breed: string) => {
        let updatedBreeds: string[] = []
        if (selectedBreeds.includes(breed)) {
            updatedBreeds = selectedBreeds.filter((b) => b !== breed)
        } else {
            updatedBreeds = [...selectedBreeds, breed]
        }
        setSelectedBreeds(updatedBreeds)
        onSelectBreeds(updatedBreeds)
    }

    const handleClearAll = () => {
        setSelectedBreeds([])
        onSelectBreeds([])
    }

    if (loading) return <p>Loading breeds...</p>
    if (error) return <p className="error-message">{error}</p>

    return (
        <div className="breed-selector">
            <div className="clear-all-container">
                <button
                    className="clear-all-button"
                    onClick={handleClearAll}
                    aria-label="Clear All Selected Breeds"
                >
                    Clear All Selection
                </button>
            </div>
            {selectedBreeds.length > 0 && (
                <p className="selected-info">
                    🐶 Selected Breeds: {selectedBreeds.map((b) => b.charAt(0).toUpperCase() + b.slice(1)).join(', ')}
                </p>
            )}
            <div className="breeds-list">
                {breeds.map((breed) => (
                    <label key={breed} className="breed-item">
                        <input
                            type="checkbox"
                            value={breed}
                            onChange={() => handleChange(breed)}
                            checked={selectedBreeds.includes(breed)}
                            aria-label={`Select ${breed} breed`}
                        />
                        {breed.charAt(0).toUpperCase() + breed.slice(1)}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default BreedSelector
