import { Status } from "@/src/types/types";
import { tv } from "tailwind-variants";

interface TagProps {
  status: Status;
}

const tag = tv({
  base: "px-2 py-0.5 flex flex-col justify-center items-center rounded-full text-sm border",
  variants: {
    status: {
      [Status.OPEN]: "text-amber-500 border-amber-300 bg-amber-100",
      [Status.IN_PROGRESS]: "text-slate-500 border-slate-300 bg-slate-100",
      [Status.DONE]: "text-green-500 border-green-300 bg-green-100",
    },
  },
});

const Tag = ({ status }: TagProps) => {
  const statusText = () => {
    switch (status) {
      case Status.OPEN:
        return "Aberto";
      case Status.IN_PROGRESS:
        return "Em andamento";
      case Status.DONE:
        return "Concluído";
    }
  };

  return <div className={tag({ status })}>{statusText()}</div>;
};

export default Tag;
