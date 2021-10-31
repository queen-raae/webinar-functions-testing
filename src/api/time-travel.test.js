import handler from "./time-travel.js";

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn().mockReturnThis();

const mockConsoleWarn = jest.fn();
jest.spyOn(global.console, "warn").mockImplementation(mockConsoleWarn);

describe("time-travel.js", () => {
  describe("checks if it finds the princess in specific year and city", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
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

    it("does find the princess in oslo 2026", async () => {
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

    it("does find the princess in OSlo 2026", async () => {
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

  describe("handles error", () => {
    describe("handles an unexpected error", () => {
      const testYear = "2026";
      const testCity = "Oslo";

      const req = {
        body: {
          year: testYear,
          city: 1000,
        },
      };

      const res = {
        send: mockSend,
        json: mockJson,
        status: mockStatus,
      };

      beforeAll(() => {
        handler(req, res);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      it("logs a console warning", () => {
        expect(mockConsoleWarn).toHaveBeenCalled();
      });

      it("sends an json object with a message about that error to the use", () => {
        expect(mockJson).toHaveBeenCalledWith({ message: "Faulty TimeShip!" });
      });

      it("sends a 500 status code", () => {
        expect(mockStatus).toHaveBeenCalledWith(500);
      });
    });

    describe("handles undefined parameters", () => {
      const testYear = "2026";
      const testCity = "Oslo";

      const req = {
        body: {
          year: testYear,
        },
      };

      const res = {
        send: mockSend,
        json: mockJson,
        status: mockStatus,
      };

      beforeAll(() => {
        handler(req, res);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      it("logs a console warning", () => {
        expect(mockConsoleWarn).toHaveBeenCalled();
      });

      it("sends an json object with a message about that error to the use", () => {
        expect(mockJson).toHaveBeenCalledWith({
          message: "Invalid body params",
        });
      });

      it("sends a 422 status code", () => {
        expect(mockStatus).toHaveBeenCalledWith(422);
      });
    });
  });
});
