import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Puppy } from "../types";

export function ShortlistButton({
    id,
    liked,
    setLiked
}: {
    id: Puppy["id"],
    liked: Puppy["id"][],
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>
}) {
    return (
        <button
            className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
            onClick={() => setLiked(liked.filter(pupId => pupId !== id))}
        >
            <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
        </button>
    )
}
