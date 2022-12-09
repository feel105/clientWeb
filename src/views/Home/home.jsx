import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import LigthList from "../lightBox/LigthList";
const Home = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            {socket ? (
              <div className="chat-container">
                <LigthList socket={socket} />
              </div>
            ) : (
              <div>Not Connected</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
