import { useState } from "react";
import "./LoveLetter.css";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import Mensaje from "./Mensaje";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [showYesOrNo, setShowYesOrNo] = useState(true);

  const handleNoClick = () => {
    setSize((prevSize) => prevSize * 1.5);
  };

  const handleYesClick = () => {
    setShowMessage(true);
    setShowYesOrNo(false);
  };

  return (
    <div className="letter-container" onClick={() => setIsOpen(true)}>
      <div className={`letter ${isOpen ? "open" : ""}`}>
        {!isOpen ? (
          <div className="front">💌 Toca para abrir</div>
        ) : (
          <div className="content">
            {!showMessage ? (
              <>
                <h2>¿Querés ser mi San Valentín? ❤️</h2>
                {showYesOrNo && (
                  <div className="button-group">
                    <YesButton size={size} onClick={handleYesClick} />
                    <NoButton onClick={handleNoClick} />
                  </div>
                )}
              </>
            ) : (
              <Mensaje />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;
