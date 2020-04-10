import React from 'react'

export default function CurrencyRow(props) {
    const {
        currencyOptions
    } = props
    return (
        <div>
            {/* Currency Row */}
            <input type='Number' className='input' />
            <select>
            {currencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
            </select>
        </div>
    )
}
