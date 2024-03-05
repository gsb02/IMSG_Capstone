import Player from '../api_src/models/Player.js';

// Mocking the MySQL database connection
jest.mock('mysql2', () => {
    const mockCreatePool = jest.fn(() => ({
        promise: jest.fn()
    }));

    return {
        createPool: mockCreatePool
    };
});

describe('createNewPlayer', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            body: {
                playerName: 'Test Player',
                teamID: '1',
                age: 20,
                grade: 'A',
                isCoach: false,
                jerseyNum: 10
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        next = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new player', async () => {
        await createNewPlayer(req, res, next);
        expect(Player).toHaveBeenCalled(); // Ensure Player class constructor is called
        expect(Player.prototype.createPlayer).toHaveBeenCalled(); // Ensure createPlayer method is called
        expect(res.status).toHaveBeenCalledWith(200); // Ensure response status is 200
        expect(res.json).toHaveBeenCalledWith({ playerID: 1, playerName: 'Test Player' }); // Ensure correct response JSON
    });

    it('should handle errors', async () => {
        Player.prototype.createPlayer.mockRejectedValueOnce(new Error('Database error')); // Mocking database error
        await createNewPlayer(req, res, next);
        expect(res.status).toHaveBeenCalledWith(500); // Ensure response status is 500
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to create new player' }); // Ensure correct error response JSON
    });
});
