import type { TDeepWritable } from "../types"; // Import type đã viết ở bước trước

export const deepWritable = <T>(obj: T): TDeepWritable<T> => {
    if (obj === null || typeof obj !== "object") {
        return obj as TDeepWritable<T>;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime()) as any;
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags) as any;
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => deepWritable(item)) as any;
    }

    const writableObj = Object.create(Object.getPrototypeOf(obj));

    for (const key of Object.keys(obj)) {
        writableObj[key] = deepWritable((obj as any)[key]);
    }

    return writableObj as TDeepWritable<T>;
};
