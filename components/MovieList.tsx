import React from "react";
import { isEmpty } from "lodash";

import { MovieInterface } from "@/types";

interface MovieListProps {
    data: MovieInterface[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">

        </div>
    );
}

export default MovieList;