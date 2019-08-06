const mongoose = require('mongoose')
const express = require('express')
const app = express()

// app.use(express.json())
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET || 'my-super-secret',
//         cookieName: 'session',
//         duration: 60 * 60 * 1000, // 1 hour
//     })
// )

const mockResponse = () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
}

describe('D E S P A C I T O ', () => {
    test('Recall jest.fn?', () => {
        const mock = jest.fn()
        mock('a', 'b', 'c')
        expect(mock).toHaveBeenCalledTimes(1)
        expect(mock).toHaveBeenCalledWith('a', 'b', 'c')
    })
    test('Should equal 4', () => {
        const a = 2
        const b = 2
        expect(a + b).toBe(4)
    })
})
