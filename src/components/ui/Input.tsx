/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'
import cn from 'classnames'
//
type InputProps = {
    label?: string
    id?: string
    type?: HTMLInputTypeAttribute
    register?: UseFormRegister<any>
    error?: string
    placeholder?: string
    className?: string
    name?: string
    disable?: boolean
    handleChange?:(e: React.SyntheticEvent) => void
}

export const Input = ({
    label,
    id,
    register,
    type = 'text',
    error,
    placeholder,
    className = '',
    name,
    disable,
    handleChange

}: InputProps) => {
    return (
        <div className={className}>
            {!!label && (
                <label className="text-black" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                className={
                    cn({
                        "p-10 mt-8 w-full text-white rounded-6": true,
                        "disabled-input": disable

                    })
                }
                {...register?.(name)}
                disabled={disable}
                onChange={handleChange}
            />
            {!!error && <p className="text-red-500 text-14">{error}</p>}
        </div>
    )
}
export const InputS = styled(Input)`

label {
    color: #B35252;
    font-size: 17px
}

input {
    &.disabled-input {
        background-color: #cccccc;
    }

    padding: 10px 20px;
    color: black;
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;

}
`
