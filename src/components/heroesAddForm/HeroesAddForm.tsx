import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store'; // Correct import for RootState
import { selectAll } from '../heroesFilters/filtersSlice';
import { useCreateHeroMutation } from '../../api/apiSlice';

interface Filter {
    id: string;
    name: string;
    label: string;
    className: string;
}

const HeroesAddForm = () => {
    const [heroName, setHeroName] = useState<string>('');
    const [heroDescr, setHeroDescr] = useState<string>('');
    const [heroElement, setHeroElement] = useState<string>('');

    const [createHero] = useCreateHeroMutation();

    const filtersLoadingStatus = useSelector((state: RootState) => state.filters.filtersLoadingStatus);
    const filters = useSelector((state: RootState) => selectAll(state.filters));

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDescr,
            element: heroElement,
        };

        createHero(newHero).unwrap();

        setHeroName('');
        setHeroDescr('');
        setHeroElement('');
    };

    const renderFilters = (filters: Filter[], status: 'loading' | 'error' | 'idle') => {
        if (status === 'loading') {
            return <option>Loading ...</option>;
        } else if (status === 'error') {
            return <option>Error ...</option>;
        }

        if (filters && filters.length > 0) {
            return filters.map(({ name, label }) => {
                if (name === 'all') return null; // Use `null` instead of `return;`
                return <option key={name} value={name}>{label}</option>;
            });
        }
        return null; // Handle the case where filters are empty
    };

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Name of new hero</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="What is my name?"
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Description</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="What can I do?"
                    style={{ height: '130px' }}
                    value={heroDescr}
                    onChange={(e) => setHeroDescr(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Choose an element of hero</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={heroElement}
                    onChange={(e) => setHeroElement(e.target.value)}
                >
                    <option value="">I own this ...</option>
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    );
};

export default HeroesAddForm;