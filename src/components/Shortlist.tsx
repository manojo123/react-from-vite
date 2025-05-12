import { Heart } from "lucide-react";
import { ShortlistButton } from "./ShortlistButton";
import { Dispatch, SetStateAction } from "react";
import { Puppy } from "../types";

export function Shortlist({
    puppies,
    liked,
    setLiked
}: {
    puppies: Puppy[],
    liked: Puppy["id"][],
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>
}) {
    return (
        < div >
            <h2 className="flex items-center gap-2 font-medium">
                <span>Your shortlist</span>
                <Heart className="fill-pink-500 stroke-pink-500" />
            </h2>

            <ul className="mt-4 flex flex-wrap gap-4">
                {puppies.map(puppy => (
                    liked.includes(puppy.id) && (
                        <ShortListCard key={puppy.id} puppy={puppy} liked={liked} setLiked={setLiked} />
                    )
                ))}
            </ul>
        </div >
    )
}

type ShortListCardProps = {
    puppy: Puppy,
    liked: Puppy["id"][],
    setLiked: Dispatch<SetStateAction<Puppy["id"][]>>
}

function ShortListCard({ puppy, liked, setLiked }: ShortListCardProps) {
    return (
        <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
            <img
                height={32}
                width={32}
                alt="Chase"
                className="aspect-square w-8 object-cover"
                src={puppy.imagePath}
            />
            <p className="px-3 text-sm text-slate-800">{puppy.name}</p>

            <ShortlistButton id={puppy.id} liked={liked} setLiked={setLiked} />
        </li>
    )
}
