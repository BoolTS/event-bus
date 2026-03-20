export type TDeepWritable<T> = T extends (...args: any[]) => any
    ? T
    : T extends readonly any[]
      ? { -readonly [K in keyof T]: TDeepWritable<T[K]> }
      : T extends object
        ? { -readonly [K in keyof T]: TDeepWritable<T[K]> }
        : T;
