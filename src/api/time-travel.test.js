import handler from "./time-travel.js";

const mockSend = jest.fn();

describe("time-travel.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("does not find the princess in Barcelona 1997", async () => {
    const testYear = "1997";
    const testCity = "Barcelona";

    const req = {
      body: {
        year: testYear,
        city: testCity,
      },
    };

    const res = {
      send: mockSend,
    };

    handler(req, res);

    expect(mockSend).toHaveBeenCalledWith(
      `You time-traveled to ${testCity}, in the year ${testYear}`
    );
  });
});
