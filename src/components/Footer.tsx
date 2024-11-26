import { motion } from "framer-motion";

// components
import Icon from "./Icon";

// styles
import "./Footer.scss";

interface FooterProps {
    name: string;
    buildYourOwnBtnColor: string;
}

const btnVariants = {
    initial: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
    focus: { scale: 1.05 },
    tap: { scale: 0.95 },
};

export default function Footer(props: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="copyright">
                &copy; {`${props.name} ${currentYear}`}
            </div>
            <motion.div
                variants={btnVariants}
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
                <a
                    href="https://github.com/SenaThenu/link-orchard"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <div
                        className="build-your-own-btn"
                        style={{ backgroundColor: props.buildYourOwnBtnColor }}>
                        <Icon fillColor="#fff" name="github" />
                        Build Your Own
                    </div>
                </a>
            </motion.div>
        </div>
    );
}
