import React, { useCallback, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import useMovie from "@/hooks/useMovie";
import useInfoModalStore from "@/hooks/useInfoModalStore";

interface InfoModalProps {
    visible?: boolean;
    onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
    const [isVisible, setIsVisible] = useState<boolean>(!!visible);

    const { movieId } = useInfoModalStore();
    const { data = {} } = useMovie(movieId);

    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">

        </div>
    )
}

export default InfoModal;