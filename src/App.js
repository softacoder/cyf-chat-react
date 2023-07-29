// Version4 this one connect with index.html
import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      // const res = await axios.get("http://localhost:9090/messages");
      const res = await axios.get(
        "https://jan-softa-quote-server.glitch.me/quotes"
      );
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Display fetched data */}
        <ul>
          {data.map((message) => (
            <li key={message.id}>
              <strong>{message.from}:</strong> {message.text}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

// version3
// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchApi = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-quote-server.glitch.me/quotes"
//       );
//       // You can utilize 'res.data' if needed for further processing
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>; // You can add a loading spinner here
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Display error message if there's an error
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// version2
// import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");

//   const fetchApi = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-cyf-chat-server.glitch.me"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>; // You can add a loading spinner here
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Display error message if there's an error
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// First version
// import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const fetchApi = async () => {
//     try {
//       const res = await axios.get(
//         "https://jan-softa-quote-server.glitch.me/quotes"
//       );
//       setData(res.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>; // You can add a loading spinner here
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Display error message if there's an error
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
