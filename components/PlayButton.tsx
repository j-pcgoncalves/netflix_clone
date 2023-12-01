import React from "react";
import { PlayIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface PlayButtonProps {
    movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(`/watch/${movieId}`)}
        >
            <PlayIcon className="w-4 md:w-7 text-black mr-1" />
        </button>
    )
}

export default PlayButton;