import {createError } from 'http-errors'
export const notFoundHandler = (req,res) => {
    const error = createError(404,"Route not found")
    res.status(404).json({
        status: error.status,
        message: error.message,
    })

}

export default notFoundHandler;