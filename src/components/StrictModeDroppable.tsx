import { useEffect, useState } from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";

export default function StrictModeDroppable({
  children,
  ...props
}: DroppableProps) {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
}
