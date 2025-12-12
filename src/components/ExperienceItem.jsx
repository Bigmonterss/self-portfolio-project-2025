import { useState, useRef, useEffect } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export const ExperienceItem = ({ title, role, date, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="mb-4 p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        {/* Responsive Flex */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
          {/* Left Side: Icon + Title/Role */}
          <div className="flex items-center gap-4">
            {icon && (
              <div className="w-10 h-10 flex-shrink-0">
                {icon}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 font-semibold text-base" style={{ color: 'var(--text-color)' }}>
                {title}
                {isOpen ? (
                  <IoChevronUp className="text-blue-500 text-lg" />
                ) : (
                  <IoChevronDown className="text-blue-500 text-lg" />
                )}
              </div>
              {role && (
                <div className="text-sm text-gray-400 font-normal mt-0.5">
                  {role}
                </div>
              )}
            </div>
          </div>

          {/* Date */}
          <span className="text-sm text-gray-500 sm:text-right sm:mt-0 mt-1">
            {date}
          </span>
        </div>
      </button>

      {/* Collapsible Content */}
      <div
        ref={contentRef}
        style={{ maxHeight: height, transition: "max-height 0.3s ease" }}
        className="overflow-hidden text-gray-300 mt-3"
      >
        <p>{children}</p>
      </div>
    </div>
  );
};
