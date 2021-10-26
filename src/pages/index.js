import React, { useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [status, setStatus] = useState("initial");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("pending");
    setMessage("");

    try {
      // Send data to the function,
      // await the result.
      const { data } = await axios.post("/api/time-travel", {
        year: event.target.elements.year.value,
        city: event.target.elements.city.value,
      });
      setMessage(data.message);
      setStatus("fulfilled");
    } catch (error) {
      setMessage(error.response?.data?.message || error.message);
      setStatus("failed");
    }
  };

  const isDisabled = status === "pending";

  return (
    <main>
      <header>
        <h1>Ruby's TimeShip</h1>
        <p>
          Your mission: Locate The Pirate Princess Lillian at the age of 11, so
          you can bring her back to 1554 and save Ruby's sister, Princess
          Lizabeth from prison.
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <fieldset disabled={isDisabled}>
          <p>
            <label htmlFor="year">Year: </label>
            <br />
            <input required type="number" id="year" name="year" />
          </p>

          <p>
            <label htmlFor="city">City: </label>
            <br />
            <input required type="text" id="city" name="city" />
          </p>

          <p>
            <button>Let's Travel</button>
          </p>
        </fieldset>

        <p>
          <strong>
            {status === "pending" && <>Hold on... </>}
            {status === "failed" && <>Hold up! </>}
            {status === "fulfilled" && <>Woosh! </>}
          </strong>

          {message}
        </p>
      </form>
    </main>
  );
};

export default IndexPage;
