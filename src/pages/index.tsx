import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim() !== "" && age.trim() !== "") {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (name && age) {
      setIsSubmitted(false);
    }
  }, [name, age]);

  return (
    <>
      <Head>
        <title>😂😂😂</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A brief description of the page" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="out-of-hand">
        <>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </>
        <>
          <label>Age:</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} />
        </>
        <button onClick={handleSubmit}>Submit</button>
        {isSubmitted && (
          <>
            <div className="response">
              your name is <span>{age}</span> and you are <span>{name}</span>{" "}
              years
            </div>
            <span>😂😂😂</span>
          </>
        )}
      </div>
    </>
  );
}
