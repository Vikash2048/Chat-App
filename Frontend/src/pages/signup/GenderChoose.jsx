import React from 'react'

const GenderChoose = () => {
    return (
        <div className='flex'>
            <div className="form-control">
                <label className="label gap-3 cursor-pointer ">
                    <span className="label-text text-white">Male</span>
                    <input type="checkbox" className="checkbox checkbox-info" />
                </label>
            </div>

            <div className="form-control">
                <label className="label gap-3 cursor-pointer ">
                    <span className="label-text text-white">Female</span>
                    <input type="checkbox" className="checkbox checkbox-info" />
                </label>
            </div>
        </div>
    )
}

export default GenderChoose