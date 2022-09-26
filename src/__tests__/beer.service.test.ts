import { Beer } from '@src/api/models/beer.model';
import {getBeerByName} from '@src/api/services/beer.service';
describe('Beer service', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeAll(() => {
        mockRequest = {};
        mockResponse = {
            json: jest.fn()
        }
    });

    test('Get beer with empty name', async () => {
        const expectResponse = {
            "status": "failed",
                "data": {
                    "statusCode": 400,
                    "error": "Bad Request",
                    "message": "Invalid query params",
                    "data": [
                        {
                            "location": "query",
                            "param": "beer_name",
                            "msg": "Must have a value and if you are using multiple words use underscores to separate",
                            "value": ""
                        }
                    ]
                }
            };

            await getBeerByName("");
            expect(mockResponse.json).toBeTruthy();            
    })

    it('Get beer with a name', async () => {
        const expectResponse = {
            "status": "success",
            "data": [
                {
                    "id": 16,
                    "name": "Libertine Porter",
                    "description": "An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.",
                    "first_brewed": "01/2012",
                    "food_pairings": [
                        "Blue cheese beef burger",
                        "Glazed short ribs",
                        "Chocolate cake"
                    ]
                }
            ]
        };

         await getBeerByName("Libertine Porter");
        expect(mockResponse.json).toBeTruthy();
    })
});