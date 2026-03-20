import type { TDeepReadonly, TDeepWritable } from "../ultils/types";
export type TListener<T extends object> = (args: T) => any;
export type TEventReturn<T = any> = T;
/**
 * Parent of singletons
 */
export declare class EventBus<TState extends {}, TEvents extends {
    [key: string]: TEventReturn;
} = {}> {
    #private;
    private readonly _listeners;
    private readonly _eventListeners;
    /**
     * Subcribe station by listener(s)
     * @param args
     */
    subscribe(args: Required<{
        listeners: TListener<TState | TDeepReadonly<TState> | TDeepReadonly<TDeepWritable<TState>>> | Array<TListener<TState | TDeepReadonly<TState> | TDeepReadonly<TDeepWritable<TState>>>>;
    }>): void;
    /**
     * Unsubcribe station on specific listenter(s)
     * @param args
     */
    unsubscribe(args: Required<{
        listeners: TListener<TState | TDeepReadonly<TState> | TDeepReadonly<TDeepWritable<TState>>> | Array<TListener<TState | TDeepReadonly<TState> | TDeepReadonly<TDeepWritable<TState>>>>;
    }>): void;
    /**
     * Subcribe to receive event(s) base on defined event name
     * @param args
     */
    subscribeOnEvent<TEventName extends keyof TEvents>(args: Required<{
        eventName: TEventName;
        listeners: (args: TEvents[TEventName]) => any | Promise<any> | Array<(args: TEvents[TEventName]) => any | Promise<any>>;
    }>): void;
    /**
     * Subcribe on customize event
     * @param args
     */
    unsubscribeOnEvent<TEventName extends keyof TEvents>(args: Required<{
        eventName: TEventName;
        listeners: (args: TEvents[TEventName]) => any | Promise<any> | Array<(args: TEvents[TEventName]) => any | Promise<any>>;
    }>): void;
    /**
     * Update state and emit new state changes to listening React component(s)
     * @param args
     */
    protected setState(args: ((args: TDeepWritable<TState>) => TState) | TState): void;
    /**
     *
     * @param args
     * @returns
     */
    protected dispatch<TEventName extends keyof TEvents>(args: Required<{
        eventName: TEventName;
        data: TEvents[TEventName];
    }>): void;
    get $state(): TDeepReadonly<TState>;
    get $writableState(): TDeepWritable<TState>;
}
