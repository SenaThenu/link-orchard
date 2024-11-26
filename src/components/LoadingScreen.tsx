import { motion } from "framer-motion";

// assets
import favicon from "../assets/favicon.svg";

interface LoadingScreenProps {
    isLoaded: boolean;
}

export default function LoadingScreen({ isLoaded }: LoadingScreenProps) {
    return (
        !isLoaded && (
            <div className="loading-screen">
                <motion.div
                    className="loading-img"
                    animate={{
                        scale: [1, 1.5, 1], // scales from 1 to 1.5 and back to 1
                    }}
                    transition={{
                        duration: 1, // time to complete one full cycle
                        repeat: Infinity, // repeat the animation infinitely
                        repeatType: "loop", // ensures the animation loops back to the start
                    }}>
                    <img src={favicon} alt="Loading" height={64} width={64} />
                </motion.div>
            </div>
        )
    );
}
