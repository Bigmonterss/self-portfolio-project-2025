import { useCallback } from "react";
import { RiScrollToBottomFill } from "react-icons/ri";
import "./JumpNotification.css";

export default function JumpNotification() {
  return (
    <div
      className="jump-notification"
      aria-label="Scroll down"
    >
      <span className="jump-text">Scroll down</span>
      <span className="jump-arrow" aria-hidden><RiScrollToBottomFill size={20}/></span>
    </div>
  );
}
