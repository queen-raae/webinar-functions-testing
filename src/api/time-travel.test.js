import handler from "./time-travel.js";

const mockSend = jest.fn();

describe("time-travel.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("checks if it finds the princess in specific year and city", () => {
    it("does find the princess in Oslo 2026", async () => {
      const testYear = "2026";
      const testCity = "Oslo";

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
        `You time-traveled to ${testCity}, in the year ${testYear}, where you found the princess!`
      );
    });

    it("does  NOT find the princess in Oslo 2021", async () => {
      const testYear = "2021";
      const testCity = "Oslo";

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
        `You time-traveled to ${testCity}, in the year ${testYear}, where you did NOT find the princess!`
      );
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
        `You time-traveled to ${testCity}, in the year ${testYear}, where you did NOT find the princess!`
      );
    });
  });
});
