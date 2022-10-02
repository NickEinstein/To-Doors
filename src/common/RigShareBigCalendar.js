import clsx from "clsx";
import { forwardRef } from "react";
import BigCalendar from "./BigCalendar";

const RigShareBigCalendar = forwardRef(
  /**
   *
   * @param {import("./BigCalendar").BigCalendarProps} props
   * @returns
   */
  function RigShareBigCalendar(props, ref) {
    return (
      <BigCalendar
        ref={ref}
        className="h-80"
        toolbar={false}
        {...props}
        eventPropGetter={(event) => ({
          className: clsx(
            "border border-solid",
            {
              drilling: "bg-[#FFDF6D80] border-[#FF060669] text-[#FF060669]",
              completion: "bg-[#AEDFAE80] border-[#006D00] text-[#006D00]",
            }[event.shareStatus]
          ),
        })}
      />
    );
  }
);

export default RigShareBigCalendar;
