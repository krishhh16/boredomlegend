"use client";
import { useParams } from "next/navigation";
import {Gift, CheckCircle, Disc, Flame, Wallet} from "lucide-react"
import {useState} from "react"

export default function SelectedOptionPage() {
    const params = useParams();
    const selectedOption = params.selectedOption;
    const [activeTab, setActiveTab] = useState("Tap")

    return (
     <div>
        <h1>Selected Option: {selectedOption}</h1>
     </div>
    );
}
