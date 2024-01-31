import { cn } from "@/lib/utils";

type BadgeProps = {
  text: string;
  classname?: string
  overwrite?: string
};

export default function Badge({ text, classname, overwrite }: BadgeProps) {
  return (
    <div className={cn(`flex items-center justify-center py-1 px-5 bg-[#E5E7EB] rounded-xl w-fit text-sm text-[#4B5563] font-medium leading-5 ${classname}`, overwrite)}>
      {text}
    </div>
  );
}
