"use client";
import { useParams } from "next/navigation";

export default function SelectedOptionPage() {
    const params = useParams();
    const selectedOption = params.selectedOption;

    return (
     <div>
        <h1>Selected Option: {selectedOption}</h1>
     </div>
    );
}
