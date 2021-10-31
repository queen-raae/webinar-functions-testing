import handler from "./time-travel.js";

const mockSend = jest.fn();

describe("time-travel.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sends a message to the user", async () => {
    const res = {
      send: mockSend,
    };

    handler("", res);

    expect(mockSend).toHaveBeenCalledWith(
      "You time-travelled to Frankfurt, in the year 2021"
    );
  });
});
