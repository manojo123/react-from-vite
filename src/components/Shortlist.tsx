import { Heart } from "lucide-react";
import { ShortlistButton } from "./ShortlistButton";
import { Puppy } from "../types";
import { Dispatch, SetStateAction } from "react";

export function Shortlist({
    puppies,
    setPuppies
}: {
    puppies: Puppy[],
    setPuppies: Dispatch<SetStateAction<Puppy[]>>
}) {
    return (
        <div>
            <h2 className="flex items-center gap-2 font-medium">
                <span>Your shortlist</span>
                <Heart className="fill-pink-500 stroke-pink-500" />
            </h2>

            <ul className="mt-4 flex flex-wrap gap-4">
                {puppies
                    .filter(puppy => puppy.likedBy.includes(1))
                    .map(puppy => (
                        <ShortListCard key={puppy.id} puppy={puppy} setPuppies={setPuppies} />
                    ))}
            </ul>
        </div >
    )
}

function ShortListCard({
    puppy,
    setPuppies
}: {
    puppy: Puppy,
    setPuppies: Dispatch<SetStateAction<Puppy[]>>
}) {
    return (
        <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
            <img
                height={32}
                width={32}
                alt="Chase"
                className="aspect-square w-8 object-cover"
                src={puppy.imageUrl}
            />
            <p className="px-3 text-sm text-slate-800">{puppy.name}</p>

            <ShortlistButton puppy={puppy} setPuppies={setPuppies} />
        </li>
    )
}
