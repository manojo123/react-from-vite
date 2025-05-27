import { LoaderCircle, X } from "lucide-react";
import { Puppy } from "../types";
import { toggleLikedStatus } from "../queries";
import { Dispatch, SetStateAction, useState } from "react";

export function ShortlistButton({
    puppy,
    setPuppies
}: {
    puppy: Puppy,
    setPuppies: Dispatch<SetStateAction<Puppy[]>>
}) {
    const [pending, setPending] = useState(false)
    return (
        <button
            className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
            onClick={async () => {
                setPending(true)
                const updatedPuppy = await toggleLikedStatus(puppy.id)
                setPuppies((prevPups) =>
                    prevPups.map((existingPuppy) =>
                        existingPuppy.id === updatedPuppy.id ? updatedPuppy : existingPuppy
                    )
                )
                setPending(false)
            }}
            disabled={pending}
        >
            {
                pending ? (
                    <LoaderCircle className="size-4 animate-spin stroke-slate-300" />
                ) : (
                    <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
                )}
        </button >
    )
}
