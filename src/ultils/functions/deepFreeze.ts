import type { TDeepReadonly } from "../types";

export function deepFreeze<const T>(obj: T): TDeepReadonly<T> {
    if (typeof obj !== "object" || obj === null) {
        return obj as TDeepReadonly<T>;
    }

    Object.freeze(obj);

    for (const key of Object.keys(obj)) {
        const val = obj[key as keyof T];

        if (typeof val === "object" && val !== null && !Object.isFrozen(val)) {
            deepFreeze(val);
        }
    }

    return obj as TDeepReadonly<T>;
}
