import React, { useEffect, useState } from "react";

function LigthList({ socket }) {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const messageListener = (message) => {
      console.log(message);
      setMessages(message);
    };

    socket.on("connectionState", messageListener);
    socket.on("changeStatus", messageListener);
    socket.on("lightState", messageListener);
    //socket.emit("changeStatus",{'status':'on'});

    return () => {
      socket.off("connectionState", messageListener);
      socket.off("changeStatus", messageListener);
      socket.off("lightState", messageListener);
    };
  }, [socket]);

  const changeStatus = (value) => {
    let status = value === "on" ? "off" : "on";
    socket.emit("changeStatus", status);
  };

  const openConnection = () => {
    socket.emit("openConnection", { state: "open" });
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <div className={`card `}>
            <i
              style={{
                fontSize: "150px",
                color: messages?.status === "on" ? "yellow" : "black",
              }}
              className={`fa fa-lightbulb-o `}
            />
            <div className="card-body">
              <h5 className="card-title">Room1Light</h5>
              <p className="card-text">on off light</p>
              <button
                onClick={() => changeStatus(messages?.status)}
                className="btn btn-primary"
              >
                {messages?.status}
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className={`card light-${messages?.status} `}>
            <i
              style={{
                fontSize: "150px",
              }}
              className={` fa fa-lightbulb-o `}
            />
            <div className="card-body">
              <h5 className="card-title">Room1Light</h5>
              <p className="card-text">on off light</p>
              <button
                onClick={() => changeStatus(messages?.status)}
                className="btn btn-primary"
              >
                {messages?.status}
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <button onClick={() => openConnection()} className="btn btn-primary">
            open connection
          </button>
        </div>
      </div>
    </>
  );
}
export default LigthList;
