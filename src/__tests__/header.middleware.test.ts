import {Request, Response, NextFunction} from 'express';
import {validateHeader} from '@src/api/middleware/validateHeader';
describe('ValidateHeader middleware', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();

    beforeAll(() => {
        jest.useFakeTimers();
        mockRequest = {};
        mockResponse = {
            json: jest.fn()
        };        
    })

    test('without headers', () => {
        const expectResponse = {
            "error": "Missing x-user from the header"
        };

        validateHeader(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
        expect(mockResponse.json).toBeCalledWith(expectResponse);
        expect(mockResponse.statusCode).toBe(400);
    });
    
    test('without "x-user" header', () => {
        const expectResponse = {
            "error": "Missing x-user from the header"
        };

        mockRequest = {
            headers: {

            }
        }
        validateHeader(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
        expect(mockResponse.json).toBeCalledWith(expectResponse);
        expect(mockResponse.statusCode).toBe(400);
    });

    test('with "x-user" header', () => {
        mockRequest = {
            headers: {
                'x-user': 'thangnguyen@gmail.com'
            }
        };

        validateHeader(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);
        expect(nextFunction).toBeCalledTimes(3);        
    });

    test('with "x-user" is an email without @ and domain', () => {
        const expectResponse = {
            "error": "x-user is not a valid email"
        };
        mockRequest = {
            headers: {
                'x-user': 'thangnguyen'
            }
        };

        validateHeader(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);

        expect(mockResponse.json).toBeCalledWith(expectResponse);
        expect(mockResponse.statusCode).toBe(400);
    });

    test('with "x-user" is an email without domain', () => {
        const expectResponse = {
            "error": "x-user is not a valid email"
        };
        mockRequest = {
            headers: {
                'x-user': 'thangnguyen@'
            }
        };

        validateHeader(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);

        expect(mockResponse.json).toBeCalledWith(expectResponse);
        expect(mockResponse.statusCode).toBe(400);
    });

    test('with "x-user" is an email without @', () => {
        const expectResponse = {
            "error": "x-user is not a valid email"
        };
        mockRequest = {
            headers: {
                'x-user': 'thangnguyen.com'
            }
        };

        validateHeader(mockRequest as Request, mockResponse as Response, nextFunction as NextFunction);

        expect(mockResponse.json).toBeCalledWith(expectResponse);
        expect(mockResponse.statusCode).toBe(400);
    });
})