import { useState } from "react";

export default function Collapse({ title, content }) { // on recoit title tet ocntent
    const [isOpen, setIsOpen] = useState(false) // fermé par défaut l'éat

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div>
            <h2 onClick={handleClick}>{title}</h2>
            {isOpen && (
                <div>
                    {content}
                </div>

            )}
        </div>
    );
}