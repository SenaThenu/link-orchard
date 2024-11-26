import { motion } from "framer-motion";

// components
import Icon from "./Icon";

// styles
import "./LinkBlock.scss";

interface LinkBlockProps {
    linkName: string;
    url: string;
    logoName: string;
    logoColor: string;
}

const linkBlockVariants = {
    initial: { opacity: 1, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
    focus: { scale: 1.05 },
    tap: { scale: 0.95 },
};

export default function LinkBlock(props: LinkBlockProps) {
    return (
        <a className="link-block" href={props.url} target="_blank">
            <motion.div
                className="link-content"
                variants={linkBlockVariants}
                initial="initial"
                animate="visible"
                whileHover="hover"
                whileFocus="focus"
                whileTap="tap"
                transition={{
                    duration: 0.1,
                    type: "spring",
                    damping: 25,
                    stiffness: 500,
                }}>
                <Icon
                    fillColor={props.logoColor}
                    name={props.logoName}
                    size={42}
                />
                <div className="link-name">{props.linkName}</div>
            </motion.div>
        </a>
    );
}
