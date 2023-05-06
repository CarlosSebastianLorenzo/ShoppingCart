import './Filters.css'
import { useState, useId } from 'react'

export function Filters ( {changeFilters}) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categroyFilterId = useId()

    const handleChangeMinPrice = (e) =>{
        setMinPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategroy = (e) =>{
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min Price 
                    <input
                        type="range"
                        id={minPriceFilterId}
                        min='0'
                        max='1000'
                        onChange={handleChangeMinPrice}
                    />
                    ${minPrice},00
                </label>
            </div>
            <div>
                <label htmlFor={categroyFilterId}>Category
                    <select name="" id={categroyFilterId} onChange={handleChangeCategroy}>
                        <option value="all">All</option>
                        <option value="laptops">Laptops</option>
                        <option value="smartphones">SmartPhones</option>
                        <option value="home-decoration">Home-Decoration</option>
                    </select>
                </label>
            </div>
        </section>
    )
}