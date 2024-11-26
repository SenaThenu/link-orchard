/// <reference types="vite-plugin-svgr/client" />
import { lazy, Suspense, useMemo } from "react";

// styles
interface IconProps {
    path: string;
    fillColor: string;
    size?: number;
}

export default function Icon({ path, fillColor, size = 24 }: IconProps) {
    const IconFace = useMemo(() => {
        return lazy(() =>
            import(`../../../${path}?react`).catch((err) => {
                console.error("Icon couldn't be loaded!", err);
                return { default: () => null }; // default refers to the imported component
            })
        );
    }, [path]);

    return (
        <Suspense fallback={<div style={{ width: size, height: size }}></div>}>
            <IconFace
                width={`${size}px`}
                height={`${size}px`}
                style={{ fill: `${fillColor}` }}
                className="icon"
            />
        </Suspense>
    );
}
