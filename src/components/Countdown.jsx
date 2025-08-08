import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = new Date(targetDate) - now;

      if (difference <= 0) {
        setTimeLeft({ expired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.expired) {
    return <p className="contador-finalizado">¡Ya comenzó la inauguración!</p>;
  }

  return (
    <div className="countdown">
      <p className="countdown-titulo">Faltan:</p>
      <div className="countdown-numeros">
        <div>
          <strong>{timeLeft.days}</strong>
          <span>días</span>
        </div>
        <div>
          <strong>{timeLeft.hours}</strong>
          <span>hs</span>
        </div>
        <div>
          <strong>{timeLeft.minutes}</strong>
          <span>min</span>
        </div>
        <div>
          <strong>{timeLeft.seconds}</strong>
          <span>seg</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
