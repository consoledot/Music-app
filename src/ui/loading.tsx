import { useAppStore } from "@/store/hook";
import { useEffect, useState } from "react";
import cn from "classnames";

export const Loading = () => {
  const {
    state: { loading },
  } = useAppStore();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (loading) {
      if (percentage > 60) {
        setPercentage(0);
        return;
      }
      if (percentage < 60) {
        timerId = setTimeout(() => {
          setPercentage((p) => p + 1);
        }, 10);

        return () => clearInterval(timerId);
      }
    }
  }, [percentage, loading]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (!loading) {
      setPercentage(101);
      return () => clearInterval(timerId);
    }
  }, [loading]);
  return (
    <div className="fixed top-0 right-0 left-0 h-[3px] w-fill z-50 ">
      <div
        className={cn(
          `h-full absolute top-0 bg-gradient-to-r from-[#ff0033] to-[#ff278f] ease-linear transition-all `,
          {
            hidden: percentage <= 0 || percentage >= 101,
          }
        )}
        style={{
          width: percentage + "%",
        }}
        id="loading"
      />
    </div>
  );
};
