import * as React from "react";
// import { SpinnerIcon } from "../svg";
import type { ButtonProps } from "../types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            pre,
            post,
            icon,
            loading,
            ...props
        },
        ref
    ) => {
        const Comp = "button";

        return (
            <Comp
                className={className}
                ref={ref}
                {...props}
            >
                {loading ? (
                    //   <SpinnerIcon /> 
                    <p>loading...</p>
                ) : (
                    <>
                        {pre && <span className="pre pr-0">{pre}</span>} {props.children}
                        {post && <span className="post pl-0">{post}</span>} {icon && icon}
                    </>
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";
export { Button };