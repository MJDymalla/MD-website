export const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            delay: 0,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

export const item = {
    hidden: { y: 15, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};