/// <reference types="react" />
/// <reference types="history" />
/// <reference types="react-router-dom" />
/// <reference types="zebras" />
/// <reference types="react-activation" />
/// <reference types="single-spa" />
/// <reference types="react-intl" />
declare module '@zebras/runtime/401' {
import React from 'react';
interface NotFoundProps {
}
 const Unauthorized: React.FC<NotFoundProps>;
export default Unauthorized;
}
declare module '@zebras/runtime/404' {
import React from 'react';
interface NotFoundProps {
}
 const NotFound: React.FC<NotFoundProps>;
export default NotFound;
}
declare module '__private$-sr-rendere-hook-useLocation' {
import { Location } from 'react-router-dom';
type TLocation = Location & {
    params?: {
        [key: string]: string;
    };
    fullpath: string;
};
export  const useLocation: () => TLocation;

}
declare module '__private$-sr-rendere-appContext' {
export  const AppContext: any;
export  function useAppData(): any;
export  function usePageData(): {
    data: any;
    reload: (opts: any) => void;
};
}
declare module '__private$-sr-rendere-defineConfi-pageConfig' {
export interface IPageConfig {
    preloadData: <T extends any>(params?: any) => Promise<T>;
    html: Partial<{
        title: string;
        metas: Array<Partial<Record<'name' | 'charset' | 'content' | 'http-equiv', string>>>;
        links: Array<Partial<Record<'rel' | 'href' | 'type', string>>>;
        scripts: Array<Partial<Record<'src' | 'type', string>>>;
    }>;
    info: Partial<{
        name: string;
        title: string;
        parent: string;
        parentTitle: string;
        order: number;
        icon: string;
        path: string;
        api: string;
        authCode: string;
        blocks: {
            [key: string]: any;
        };
    }>;
}
export  const definePageConfig: (config: Partial<IPageConfig>) => Partial<IPageConfig>;
}
declare module '__private$-sr-rendere-types' {
import { DependencyList } from 'react';
import { IPageConfig } from '__private$-sr-rendere-defineConfi-pageConfig';
export interface IRoute {
    id: string;
    path?: string;
    index?: boolean;
    parentId?: string;
    redirect?: string;
    hasServerLoader?: boolean;
    PAGE_CONFIG?: Partial<IPageConfig>;
    microApp?: string;
}
export interface IClientRoute {
    id: string;
    element: React.ReactNode;
    children?: IClientRoute[];
    routes?: IClientRoute[];
    path?: string;
    index?: boolean;
    parentId?: string;
    clientLoader?: () => Promise<any>;
}
export interface IRoutesById {
    [id: string]: IRoute;
}
export interface IRouteComponents {
    [id: string]: any;
}
export interface ILoaderData {
    [routeKey: string]: any;
}
export interface CachedData<TData = any, TParams = any> {
    data: TData;
    params: TParams;
    time: number;
}
export interface Options<TData, TParams extends any[]> {
    manual?: boolean;
    onBefore?: (params: TParams) => void;
    onSuccess?: (data: TData, params: TParams) => void;
    onError?: (e: Error, params: TParams) => void;
    onFinally?: (params: TParams, data?: TData, e?: Error) => void;
    defaultParams?: TParams;
    refreshDeps?: DependencyList;
    refreshDepsAction?: () => void;
    loadingDelay?: number;
    pollingInterval?: number;
    pollingWhenHidden?: boolean;
    pollingErrorRetryCount?: number;
    refreshOnWindowFocus?: boolean;
    focusTimespan?: number;
    debounceWait?: number;
    debounceLeading?: boolean;
    debounceTrailing?: boolean;
    debounceMaxWait?: number;
    throttleWait?: number;
    throttleLeading?: boolean;
    throttleTrailing?: boolean;
    cacheKey?: string;
    cacheTime?: number;
    staleTime?: number;
    setCache?: (data: CachedData<TData, TParams>) => void;
    getCache?: (params: TParams) => CachedData<TData, TParams> | undefined;
    retryCount?: number;
    retryInterval?: number;
    ready?: boolean;
}
export interface Path {
    /**
     * A URL pathname, beginning with a /.
     */
    pathname: string;
    /**
     * A URL search string, beginning with a ?.
     */
    search: string;
    /**
     * A URL fragment identifier, beginning with a #.
     */
    hash: string;
}
export type LimitedMouseEvent = Pick<MouseEvent, 'button' | 'metaKey' | 'altKey' | 'ctrlKey' | 'shiftKey'>;
export type RelativeRoutingType = 'route' | 'path';
export type To = string | Partial<Path>;
}
declare module '__private$--src-auth' {
import React from 'react';
interface CheckParams {
    path: string;
    code?: string;
    block?: {
        code: string;
    };
}
export  const checkCode: (code: string) => boolean;
export  const checkUniqueCode: (code: string) => boolean;
export  const check: (actionCode: string, ...codes: string[]) => boolean;
export  const getAuth: (actionCode: string | Partial<Record<'code' | 'url', string>>) => any;
export  const useAuth: (path?: string) => {
    auth: any;
    setAuth: {
        (data: IAuth[]): void;
        (data: IAuth, path: string): void;
    };
    check: (...args: string[] | [CheckParams]) => boolean;
    checkCode: (code: string) => boolean;
};
export interface AuthProps {
    code: boolean | string;
    fallback?: React.ReactNode;
    path?: string;
}
export  const Auth: React.FC<React.PropsWithChildren<AuthProps>>;

}
declare module '__private$-sr-rendere-browser' {
import { History } from 'history';
import React from 'react';
import { IRouteComponents, IRoutesById } from '__private$-sr-rendere-types';

import type { IAuth } from '__private$--src-auth';
export  function __getRoot(): any;
export  function __getAppName(): string;
export  function Routes(): any;
type AppType = 'base' | 'app' | 'lib';
export type Opts = {
    publicPath?: string;
    runtimePublicPath?: boolean;
    rootElement?: HTMLElement;
    routes: IRoutesById;
    routeComponents: IRouteComponents;
    pluginManager: any;
    basename?: string;
    loadingComponent?: React.ReactNode;
    notAuthComponent?: React.ReactNode;
    errorComponent?: React.ReactNode;
    history: History;
    hydrate?: boolean;
    reactRouter5Compat?: boolean;
    type: AppType;
    getInitAuth?: () => Promise<IAuth[]>;
    ignorePaths: string[];
    disableAuth?: boolean;
};
export  const getAppType: () => AppType;
export  function renderClient(opts: Opts): Promise<void>;

}
declare module '__private$-sr-rendere-link' {
import React, { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import { LimitedMouseEvent, RelativeRoutingType, To } from '__private$-sr-rendere-types';
export  function LinkWithPrefetch(props: PropsWithChildren<{
    prefetch?: boolean;
} & LinkProps & React.RefAttributes<HTMLAnchorElement>>): JSX.Element;
export  function useLinkClickHandler<E extends Element = HTMLAnchorElement>(to: To, { target, replace: replaceProp, state, preventScrollReset, relative, }?: {
    target?: React.HTMLAttributeAnchorTarget;
    replace?: boolean;
    state?: any;
    preventScrollReset?: boolean;
    relative?: RelativeRoutingType;
}): (event: React.MouseEvent<E, MouseEvent>) => void;
export  function shouldProcessLinkClick(event: LimitedMouseEvent, target?: string): boolean;
export  function createSearchParams(params: Record<string, string | string[]>): URLSearchParams;
}
declare module '__private$-sr-rendere-routeContext' {
import { IRoute } from '__private$-sr-rendere-types';
export interface IRouteContextType {
    route: IRoute;
}
export  const RouteContext: any;
export  function useRouteData(): IRouteContextType;
}
declare module '__private$-sr-rendere-useFetcher' {
export  function __useFetcher(): {
    load(path?: string): void;
};
}
declare module '__private$-sr-rendere-withRouter' {
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
export interface RouteComponentProps<T = ReturnType<typeof useParams>> {
    history?: {
        back: () => void;
        goBack: () => void;
        location: ReturnType<typeof useLocation>;
        push: (url: string, state?: any) => void;
    };
    location?: ReturnType<typeof useLocation>;
    match?: {
        params: T;
    };
    params?: T;
    navigate?: ReturnType<typeof useNavigate>;
}
export  function withRouter<P extends RouteComponentProps<P>>(Component: React.ComponentType<P>): (props: P) => JSX.Element;
}
declare module '__private$-sr-rendere-defineConfi-appConfig' {
interface IDefaultRuntimeConfig {
    onRouteChange?: (props: {
        routes: any;
        clientRoutes: any;
        location: any;
        action: any;
    }) => void;
    render?: (oldRender: () => void) => void;
    rootContainer?: (lastRootContainer: JSX.Element, args?: any) => void;
    request?: () => {
        requestInterceptor?: (config: RequestInit) => RequestInit;
        responseInterceptor?: (data: Response) => any;
        baseUrl?: string;
        headers?: Record<string, string>;
        defaultOptions?: {
            queries?: {
                enabled?: boolean;
                staleTime?: number;
                refetchInterval?: number;
                refetchIntervalInBackground?: boolean;
                refetchOnWindowFocus?: boolean | 'always';
                refetchOnReconnect?: boolean | 'always';
                refetchOnMount?: boolean | 'always';
                retryOnMount?: boolean;
                onSuccess?: (data: unknown) => void;
                onError?: (err: unknown) => void;
                onSettled?: (data: unknown | undefined, error: unknown | null) => void;
                keepPreviousData?: boolean;
                suspense?: boolean;
                _optimisticResults?: 'optimistic' | 'isRestoring';
            };
            mutations?: {
                mutationFn?: MutationFunction;
                mutationKey?: MutationKey;
                variables?: void;
                onMutate?: (variables: void) => Promise<unknown | undefined> | unknown | undefined;
                onSuccess?: (data: unknown, variables: unknown, context: unknown | undefined) => Promise<unknown> | unknown;
                onError?: (error: unknown, variables: unknown, context: unknown | undefined) => Promise<unknown> | unknown;
                onSettled?: (data: unknown | undefined, error: unknown | null, variables: unknown, context: unknown | undefined) => Promise<unknown> | unknown;
                retry?: boolean | number;
                retryDelay?: boolean | number;
                networkMode?: 'online' | 'always' | 'offlineFirst';
                cacheTime?: number;
                _defaulted?: boolean;
                meta?: {
                    [index: string]: unknown;
                };
            };
        };
    };
    [key: string]: any;
}
export  type MutationKey = readonly unknown[];
export  type MutationFunction<TData = unknown, TVariables = unknown> = (variables: TVariables) => Promise<TData>;
export type RuntimeConfig = IDefaultRuntimeConfig;
export  function defineApp(config: RuntimeConfig): RuntimeConfig;

}
declare module '__private$-sr-rendere-defineConfig' {
export  enum Env {
    development = "development",
    production = "production"
}
 type ConfigType = IConfig;
type IConfig = Partial<{
    chainWebpack?: {
        (memo: any, args: {
            env: keyof typeof Env;
            webpack: any;
        }): void;
    };
    mfsu: boolean;
    type: 'base' | 'app' | 'lib';
    name: string;
    domain: string;
    auth: {
        disable?: boolean;
        ignore?: string[];
    } | false;
    locale: {
        default?: string;
        baseSeparator?: string;
        title?: boolean;
    };
    debug: Record<string, string>;
    imports: Array<{
        name?: string;
        lib?: string[];
    }>;
    exports: {
        [key: string]: string;
    };
}>;
export  function defineConfig(config: ConfigType): ConfigType;
export { defineApp, type RuntimeConfig } from '__private$-sr-rendere-defineConfi-appConfig';
export { definePageConfig } from '__private$-sr-rendere-defineConfi-pageConfig';
}
declare module '__private$-sr-cor-history' {
import type { History, HashHistory, MemoryHistory, BrowserHistory } from 'history';
import { To } from 'react-router-dom';
 let router: {
    push: (to: To, query?: {
        [key: string]: string;
    }, hash?: string) => void;
    replace: (to: To, query?: {
        [key: string]: string;
    }, hash?: string) => void;
    open: (to: string, query?: {
        [key: string]: string;
    }, hash?: string) => void;
    reload: () => void;
    getComponent: (app: string, url: string) => Promise<unknown>;
};
 let history: History | MemoryHistory | BrowserHistory;
export  let basename: string;
export  function createHistory(opts: any): HashHistory;
export { history, router };
}
declare module '__private$-sr-rendere-hook-local-storag-events' {
interface KV<K, V> {
    key: K;
    value: V;
}
/**
 * LocalStorageChanged, 提供从组件外部更新LocalStorage的能力，且不依赖其它状态传递。
 *
 * @class LocalStorageChanged
 * @extends {CustomEvent<KV<string, string>>}
 */
export  class LocalStorageChangedEvent<T> extends CustomEvent<KV<string, T>> {
    static eventName: string;
    constructor(payload: KV<string, T>);
    /**
     * 检查是否是LocalStorageChanged对象
     *
     * @static
     * @template T
     * @param {*} evt 需要断言的对象
     * @returns {evt is LocalStorageChangedEvent<T>} ture表示断言成功
     * @memberof LocalStorageChanged
     */
    static assert<T>(evt: any): evt is LocalStorageChangedEvent<T>;
}
/**
 *
 * @example
 * ```js
 * setLocalStorage('hello', { name: 'world' });
 * ```
 *
 * @export
 * @param {string} key The key to write to in the localStorage.
 * @param {string} value The value to write to in the localStorage.
 */
export  function setLocalStorage<T = string>(key: string, value: T): void;
/**
 *
 * @example
 * ```js
 * const user = { name: 'John', email: 'John@fakemail.com' };
 *
 * // Add a user to your localStorage
 * setLocalStorage('user', user);
 *
 * // This will also trigger an update to the state of your component
 * clearLocalStorage('user');
 * ```
 *
 * @export
 * @param {string} key The key of the item you wish to delete from localStorage.
 */
export  function clearLocalStorage(key: string): void;

}
declare module '__private$-sr-rendere-hook-local-storage' {
import { setLocalStorage, clearLocalStorage } from '__private$-sr-rendere-hook-local-storag-events';
import { Dispatch } from 'react';
 function getLocalStorage<T = string>(key: string, defaultValue: T): T | null;
/**
 * 封装React hook方式使用localStorage
 *
 * @example
 * ```js
 * const App = () => {
 *   const [value, setValue, clear] = useLocalStorage('key1');
 *   return (
 *     <p>{value}</p>
 *   );
 * };
 * ```
 *
 * @export
 * @template T 值的类型，默认为string.
 * @param {string} key
 * @param {T} initialValue
 * @returns {[T | null, Dispatch<T>, Dispatch<void>]} 返回数组，依次是value(存储值)，setValue(设置值)和clear(清除值).
 */
 function useLocalStorage<T = string>(key: string, initialValue?: T): [T | null, Dispatch<T>, Dispatch<void>];
export { useLocalStorage, getLocalStorage, setLocalStorage, clearLocalStorage };
}
declare module '__private$-sr-stor-valti-vanilla' {
type AnyFunction = (...args: any[]) => any;
type AsRef = {
    $$valtioRef: true;
};
type Path = (string | symbol)[];
type Op = [op: 'set', path: Path, value: unknown, prevValue: unknown] | [op: 'delete', path: Path, prevValue: unknown] | [op: 'resolve', path: Path, value: unknown] | [op: 'reject', path: Path, error: unknown];
type SnapshotIgnore = Date | Map<any, any> | Set<any> | WeakMap<any, any> | WeakSet<any> | AsRef | Error | RegExp | AnyFunction;
type Snapshot<T> = T extends SnapshotIgnore ? T : T extends Promise<unknown> ? Awaited<T> : T extends object ? {
    readonly [K in keyof T]: Snapshot<T[K]>;
} : T;
/**
 * This is not a public API.
 * It can be changed without any notice.
 */
export type INTERNAL_Snapshot<T> = Snapshot<T>;
type HandlePromise = <P extends Promise<any>>(promise: P) => Awaited<P>;
type CreateSnapshot = <T extends object>(target: T, version: number, handlePromise?: HandlePromise) => T;
export  function proxy<T extends object>(initialObject?: T): T;
export  function getVersion(proxyObject: unknown): number | undefined;
export  function subscribe<T extends object>(proxyObject: T, callback: (ops: Op[]) => void, notifyInSync?: boolean): () => void;
export  function snapshot<T extends object>(proxyObject: T, handlePromise?: HandlePromise): Snapshot<T>;
export  function ref<T extends object>(obj: T): T & AsRef;
export  const unstable_buildProxyFunction: (objectIs?: (value1: any, value2: any) => boolean, newProxy?: <T extends object>(target: T, handler: ProxyHandler<T>) => T, canProxy?: (x: unknown) => boolean, defaultHandlePromise?: <P extends Promise<any>>(promise: P & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: Awaited<P>;
    reason?: unknown;
}) => Awaited<P>, snapCache?: WeakMap<object, [version: number, snap: unknown]>, createSnapshot?: CreateSnapshot, proxyCache?: WeakMap<object, object>, versionHolder?: [number, number], proxyFunction?: <T_1 extends object>(initialObject: T_1) => T_1) => readonly [<T_1 extends object>(initialObject: T_1) => T_1, any, any, (value1: any, value2: any) => boolean, <T extends object>(target: T, handler: ProxyHandler<T>) => T, (x: unknown) => boolean, <P extends Promise<any>>(promise: P & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: Awaited<P>;
    reason?: unknown;
}) => Awaited<P>, WeakMap<object, [version: number, snap: unknown]>, CreateSnapshot, WeakMap<object, object>, [number, number]];

}
declare module '__private$-sr-stor-valti-react' {
import type { INTERNAL_Snapshot as Snapshot } from '__private$-sr-stor-valti-vanilla';
type Options = {
    sync?: boolean;
};
/**
 * useSnapshot
 *
 * Create a local snapshot that catches changes. This hook actually returns a wrapped snapshot in a proxy for
 * render optimization instead of a plain object compared to `snapshot()` method.
 * Rule of thumb: read from snapshots, mutate the source.
 * The component will only re-render when the parts of the state you access have changed, it is render-optimized.
 *
 * @example A
 * function Counter() {
 *   const snap = useSnapshot(state)
 *   return (
 *     <div>
 *       {snap.count}
 *       <button onClick={() => ++state.count}>+1</button>
 *     </div>
 *   )
 * }
 *
 * [Notes]
 * Every object inside your proxy also becomes a proxy (if you don't use "ref"), so you can also use them to create
 * the local snapshot as seen on example B.
 *
 * @example B
 * function ProfileName() {
 *   const snap = useSnapshot(state.profile)
 *   return (
 *     <div>
 *       {snap.name}
 *     </div>
 *   )
 * }
 *
 * Beware that you still can replace the child proxy with something else so it will break your snapshot. You can see
 * above what happens with the original proxy when you replace the child proxy.
 *
 * > console.log(state)
 * { profile: { name: "zebras" } }
 * > childState = state.profile
 * > console.log(childState)
 * { name: "zebras" }
 * > state.profile.name = "react"
 * > console.log(childState)
 * { name: "react" }
 * > state.profile = { name: "new name" }
 * > console.log(childState)
 * { name: "react" }
 * > console.log(state)
 * { profile: { name: "new name" } }
 *
 * `useSnapshot()` depends on the original reference of the child proxy so if you replace it with a new one, the component
 * that is subscribed to the old proxy won't receive new updates because it is still subscribed to the old one.
 *
 * In this case we recommend the example C or D. On both examples you don't need to worry with re-render,
 * because it is render-optimized.
 *
 * @example C
 * const snap = useSnapshot(state)
 * return (
 *   <div>
 *     {snap.profile.name}
 *   </div>
 * )
 *
 * @example D
 * const { profile } = useSnapshot(state)
 * return (
 *   <div>
 *     {profile.name}
 *   </div>
 * )
 */
export  function useSnapshot<T extends object>(proxyObject: T, options?: Options): Snapshot<T>;

}
declare module '__private$-sr-stor-valti-util-proxyMap' {
/**
 * proxyMap
 *
 * This is to create a proxy which mimic the native Map behavior.
 * The API is the same as Map API
 *
 * @example
 * import { proxyMap } from 'zebras'
 * const state = proxyMap([["key", "value"]])
 *
 * //can be used inside a proxy as well
 * const state = proxy({
 *   count: 1,
 *   map: proxyMap()
 * })
 *
 * // When using an object as a key, you can wrap it with `ref` so it's not proxied
 * // this is useful if you want to preserve the key equality
 * import { ref } from 'zebras'
 *
 * const key = ref({})
 * state.set(key, "value")
 * state.get(key) //value
 *
 * const key = {}
 * state.set(key, "value")
 * state.get(key) //undefined
 */
export  function proxyMap<K, V>(entries?: Iterable<readonly [K, V]> | null): Map<K, V>;
}
declare module '__private$-sr-stor-valti-util-proxySet' {
/**
 * proxySet
 *
 * This is to create a proxy which mimic the native Set behavior.
 * The API is the same as Set API
 *
 * @example
 * import { proxySet } from 'zebras'
 * const state = proxySet([1,2,3])
 * //can be used inside a proxy as well
 * const state = proxy({
 *   count: 1,
 *   set: proxySet()
 * })
 */
export  function proxySet<T>(initialValues?: Iterable<T> | null): Set<T>;
}
declare module '__private$-sr-stor-valti-util-useProxy' {
/**
 * useProxy
 *
 * Takes a proxy and returns a new proxy which you can use in both react render
 * and in callbacks. The root reference is replaced on every render, but the
 * keys (and subkeys) below it are stable until they're intentionally mutated.
 * For the best ergonomics, you can export a custom hook from your store, so you
 * don't have to figure out a separate name for the hook reference. E.g.:
 *
 * export const store = proxy(initialState)
 * export const useStore = () => useProxy(store)
 * // in the component file:
 * function Cmp() {
 *   const store = useStore()
 *   return <button onClick={() => {store.count++}}>{store.count}</button>
 * }
 *
 * @param proxy
 * @returns A new proxy which you can use in the render as well as in callbacks.
 */
export  function useProxy<T extends object>(proxy: T): T;
}
declare module '__private$-sr-stor-valti-util-subscribeKey' {
/**
 * subscribeKey
 *
 * The subscribeKey utility enables subscription to a primitive subproperty of a given state proxy.
 * Subscriptions created with subscribeKey will only fire when the specified property changes.
 * notifyInSync: same as the parameter to subscribe(); true disables batching of subscriptions.
 *
 * @example
 * import { subscribeKey } from 'zebras'
 * subscribeKey(state, 'count', (v) => console.log('state.count has changed to', v))
 */
export  function subscribeKey<T extends object, K extends keyof T>(proxyObject: T, key: K, callback: (value: T[K]) => void, notifyInSync?: boolean): () => void;
}
declare module '__private$--src-store-valtio' {
export { snapshot, ref, subscribe, proxy } from '__private$-sr-stor-valti-vanilla';
export { useSnapshot } from '__private$-sr-stor-valti-react';
export { proxyMap } from '__private$-sr-stor-valti-util-proxyMap';
export { proxySet } from '__private$-sr-stor-valti-util-proxySet';
export { useProxy } from '__private$-sr-stor-valti-util-useProxy';
export { subscribeKey } from '__private$-sr-stor-valti-util-subscribeKey';
}
declare module '__private$-sr-rendere-stor-valtio' {
import { snapshot, useSnapshot, subscribe, subscribeKey } from '__private$--src-store-valtio';
type PersistType = 'session' | 'local' | 'memory';
type Opts = {
    key?: string;
    type: PersistType;
};
 const createStore: <T extends object>(state: T, opts?: Opts) => T;
 const cusSubscribe: <T extends object>(state: T, key: keyof T, fb: () => any) => void;
export { createStore, useSnapshot as useStore, subscribe, subscribeKey, cusSubscribe, snapshot as unProxy, };
}
declare module '__private$-sr-rendere-hook-stor-types' {
/**
 * 当不为function时，直接覆盖/设置状态值
 * @important 当function有返回值时，使用返回值覆盖/设置状态值，当function没有返回值时，使用immer修改状态值
 * @warning ！！！请不要初始化状态时使用function，除非你清楚自己在做什么！！！
 */
export type SetStateAction<T> = T | ((prevState: T) => void) | ((prevState: T) => T);
}
declare module '__private$-sr-rendere-hook-stor-store' {
import { Dispatch } from 'react';
import { SetStateAction } from '__private$-sr-rendere-hook-stor-types';
/**
 * 状态修改事件
 */
export  const STATE_CHANGED = "STORKS_STATE_CHANGED";
export interface EventData<T> {
    key: string;
    state: T;
}
/**
 * 监听状态修改事件
 *
 * @export
 * @template T
 * @param {(data: EventData<T>) => void} handler
 * @returns {() => void} 移除监听
 */
export  function listenStateChange<T = any>(handler: (data: EventData<T>) => void): () => void;
/**
 * state store
 */
export  class Store<T = any> {
    key: string;
    state: T;
    type: string;
    setters: Dispatch<SetStateAction<T>>[];
    effects: ((state: T) => void)[];
    constructor(key: string, value: T);
    private getNextState;
    setState: (value: SetStateAction<T>, sync?: boolean) => T;
}
}
declare module '__private$-sr-rendere-hook-stor-storage' {
import { Store } from '__private$-sr-rendere-hook-stor-store';
import { SetStateAction } from '__private$-sr-rendere-hook-stor-types';
type StoreValue<T> = Store<T> | T;
export type StorageType = 'memory' | 'localStorage';
/**
 * memory storage
 */
 class Storage {
    private stores;
    private _init;
    private _bc;
    constructor();
    private postMessage;
    set<T = any>(key: string, value: StoreValue<T>, storageType: StorageType, sync?: boolean): Store<T>;
    get<T = any>(key: string, storageType: StorageType): Store<T> | undefined;
    remove(key: string, storageType: StorageType, sync?: boolean): void;
    clear(sync?: boolean): void;
}
 const GlobalStorage: Storage;
export { GlobalStorage as Storage };
export  function tryParse(value: string | null, decompress?: boolean): any;
/**
 * 用来修改一个 store 中的 state
 *
 * @summary 作用与[state, setState] = useStore(key) 中的 setState相同，不同点在于setStore可以在任何地方使用
 * @export
 * @template T
 * @param {string} key
 * @param {SetStateAction<T>} value
 * @param {T} initValue
 * @returns {Store<T>}
 */
export  function setStore<T = any>(key: string, value: SetStateAction<T>, initValue?: T): Store<T>;
export  function setLocalStorage<T = any>(key: string, value: SetStateAction<T>, initValue?: T): Store<T>;
/**
 * 用来获取一个 store 中的 state
 *
 * @summary 作用与[state, setState] = useStore(key) 中的 state相同，不同点在于getStore可以在任何地方使用
 * @export
 * @template T
 * @param {string} key
 * @param {T} initValue
 * @returns {T}
 */
export  function getStore<T = any>(key: string, initValue?: T): T | undefined;
export  function getLocalStorage<T = any>(key: string, initValue?: T): T | undefined;
/**
 * 清除store
 *
 * @export
 * @template T
 * @param {string} key
 * @returns {T}
 */
export  function clearStore(key: string): void;
export  function clearLocalStorage(key: string): void;
}
declare module '__private$-sr-rendere-hook-store' {
import { Dispatch } from 'react';
import { clearLocalStorage, clearStore, getLocalStorage, getStore, setLocalStorage, setStore, Storage } from '__private$-sr-rendere-hook-stor-storage';
import { EventData, listenStateChange, STATE_CHANGED } from '__private$-sr-rendere-hook-stor-store';
import { SetStateAction } from '__private$-sr-rendere-hook-stor-types';
 const STATE_INITED = "ZEBRAS_STORKS_STATE_INITED";
/**
 * 监听状态加载事件
 *
 * @template T
 * @param {(data: EventData<T>) => void} handler
 * @returns {() => void} 移除监听
 */
 function listenStateInit<T = any>(handler: (data: EventData<T>) => void): () => void;
/**
 * 移除状态变更监听
 *
 * @template T
 * @param {(data: EventData<T>) => void} handler
 */
 function unlistenStateChange<T = any>(handler: (data: EventData<T>) => void): void;
/**
 * 移除状态加载监听
 *
 * @template T
 * @param {(data: EventData<T>) => void} handler
 */
 function unlistenStateInit<T = any>(handler: (data: EventData<T>) => void): void;
/**
 * 基于immer封装React.useState
 *
 * @example
 * import { useStore } from 'zebras';
 *
 * const App = () => {
 *   const [value, setValue] = useStore('key', 1);
 *   return (
 *     <p>{value}</p>
 * 	   <button onClick={() => setValue(count + 1)}>increase</button>
 *   );
 * };
 *
 * // custom state hooks
 * function useCounter() {
 *		const [count, setCount] = useStore('Counter', 0)
 *		const decrease = () => setCount(count - 1)
 *		const increase = () => setCount(count + 1)
 *		return { count, increase, decrease }
 *	}
 * @export
 * @param {string} key
 * @param {T} initialValue
 * @returns {[T | null, Dispatch<SetStateAction<T>>]} 返回数组，依次是value(存储值)，setValue(设置值).
 */
 const useStore: <T = any>(key: string, value?: T, effects?: {
    onInit?: (state: T) => void;
    onChange?: (state: T) => void;
}) => [T, Dispatch<SetStateAction<T>>];
 const useLocalStorage: <T = any>(key: string, value?: T, effects?: {
    onInit?: (state: T) => void;
    onChange?: (state: T) => void;
}) => [T, Dispatch<SetStateAction<T>>];
export { useStore, getStore, setStore, clearStore, listenStateChange, listenStateInit, unlistenStateChange, unlistenStateInit, STATE_INITED, STATE_CHANGED, SetStateAction, Storage, useLocalStorage, getLocalStorage, setLocalStorage, clearLocalStorage, useLocalStorage as useGlobalStore, getLocalStorage as getGlobalStore, setLocalStorage as setGlobalStore, clearLocalStorage as clearGlobalStore, };
}
declare module '__private$-sr-rendere-hook-settings' {
export  const useDataSettings: <T = any>(key: string, defaultValue?: unknown) => T;
export  const getDataSettings: <T = any>(key: string, remote?: boolean) => T | Promise<T>;
export  const useDefaultSettings: (key?: string, defaultValue?: unknown) => any;
export  const getDefaultSettings: <T = any>(key?: string, defaultValue?: any) => T | Promise<T>;
}
declare module '__private$-sr-rendere-hook-useScrollTop' {
 const useScrollTop: () => void;
export default useScrollTop;
}
declare module '__private$-sr-keep-aliv-Outlet' {
import React, { ReactNode } from 'react';
interface IProps {
    Tabs?: ReactNode;
    ingoreSearch?: boolean;
}
export interface ITabsProps {
    url: string;
    title?: string;
    /** 关闭时可指定跳转到某个tab，默认跳转到最后一个tab */
    to?: string;
    /** 是否固定，closeRight,closeLeft,closeOther,closeAll时忽略fixed=true */
    fixed?: boolean;
    /** 切换即销毁 */
    destroy?: boolean;
}
export  function useKeepControl(): any;
export  function useActive(fb: Function): void;
export  const useUnActive: () => void;
export  const patchDropEvent: (url: string) => void;
export  const patchMessage: (path: string) => void;
export  const Outlet: React.FC<IProps>;

}
declare module '__private$-sr-keep-aliv-NewOutlet' {
import React from 'react';
export interface ITabsProps {
    url: string;
    title?: string;
    /** 关闭时可指定跳转到某个tab，默认跳转到最后一个tab */
    to?: string;
    /** 是否固定，closeRight,closeLeft,closeOther,closeAll时忽略fixed=true */
    fixed?: boolean;
    /** 切换即销毁 */
    destroy?: boolean;
}
export  const getAppCode: (path?: string) => any;
export  const clearTabsCache: () => void;
export  const patchMessage: (path?: string | string[]) => boolean;
export  const getCacheKeys: () => {
    key: string;
    path: any;
}[];
export  const drop: (path: string | string[], callBack?: boolean | Function) => void;
export  const dropAll: () => void;
type ICacheKeys = Array<Record<'key' | 'path', string>>;
export  const useCacheKeys: () => [ICacheKeys, (keys: ICacheKeys) => void];
export  const Outlet: React.FC;

}
declare module '__private$--src-keep-alive' {
export { Outlet, useKeepControl, patchMessage, useActive, useUnActive, } from '__private$-sr-keep-aliv-Outlet';
export { Outlet as NewOutlet, drop, useCacheKeys, getCacheKeys, clearTabsCache } from '__private$-sr-keep-aliv-NewOutlet';
export { KeepAlive, useActivate, useUnactivate, withActivation, withAliveScope, useAliveController, } from 'react-activation';
export  const MultiTabs: (props: any) => any;
}
declare module '__private$-sr-rendere-patc-context' {
export  function createPatchContext(key: string, defaultValue: any): any;
}
declare module '__private$-sr-rendere-patc-outlet' {
import { OutletProps } from 'react-router-dom';
import React from 'react';
export  function Outlet(props: OutletProps & {
    Tabs?: React.ReactNode;
    ingoreSearch?: boolean;
    animated?: boolean;
}): React.ReactElement | null;
}
declare module '__private$-sr-rendere-patch' {
export { createPatchContext as createContext } from '__private$-sr-rendere-patc-context';
export { Outlet } from '__private$-sr-rendere-patc-outlet';
}
declare module '__private$-sr-rendere-component-Prompt' {
import React from 'react';
type Props = {
    when: boolean;
    message?: string | (() => boolean) | (() => Promise<boolean>);
};
 const Prompt: React.FC<Props>;
export default Prompt;
}
declare module '__private$-sr-rendere-component-IconFont' {
import React, { FC } from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    type: string;
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    toolTit?: string;
}
 const ZebrasIconFont: FC<Props>;
export default ZebrasIconFont;
}
declare module '__private$-sr-rendere-component-IconFon-Icon' {
import * as React from 'react';
export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
    spin?: boolean;
    rotate?: number;
}
export interface CustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
}
export interface IconComponentProps extends IconBaseProps {
    viewBox?: string;
    component?: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps>;
    ariaLabel?: React.AriaAttributes['aria-label'];
}
 const Icon: React.ForwardRefExoticComponent<Omit<IconComponentProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export default Icon;
}
declare module '__private$-sr-rendere-component-IconFon-create' {
import * as React from 'react';
import { IconBaseProps } from '__private$-sr-rendere-component-IconFon-Icon';
export interface CustomIconOptions {
    scriptUrl?: string | string[];
    extraCommonProps?: {
        [key: string]: any;
    };
}
export interface IconFontProps<T extends string = string> extends IconBaseProps {
    type: T;
}
export default function create<T extends string = string>(options?: CustomIconOptions): React.FC<IconFontProps<T>>;
}
declare module '__private$-sr-rendere-tools' {
export  const sleep: (timeout: number) => Promise<void>;
export  const scheduleMicrotask: (callback: () => void) => void;
export  const nextTick: (callback: () => void) => Promise<void>;
export  const loadGlobalCss: (url: string) => Promise<void>;
export  const loadCss: (url: string) => Promise<void>;
export  const loadGlobalScript: (url: string) => Promise<void>;
}
declare module '__private$--src-mf' {
import React from 'react';
import type { ComponentType, ReactNode } from 'react';
type MFModuleImportRequest = {
    entry: string;
    remoteName: string;
    moduleName: string;
};
export  function loadScript(url: string): Promise<void>;
export  function getMfRemoteModule(remoteName: string, moduleName: string): Promise<any>;
type RawRemoteComponentOpts = {
    mfConfig: {
        entry: string;
        remoteName: string;
        moduleName: string;
    };
    fallbackComponent: ComponentType<any>;
    loadingElement: ReactNode;
};
export  function safeRemoteComponentWithMfConfig<T extends ComponentType<any>>(opts: RawRemoteComponentOpts): T;
export  function getRemoteModule(url: string): Promise<any>;
export  function getRemoteComponent(url: string, name?: string): React.FC<any>;
export  function rawMfImport(opts: MFModuleImportRequest): Promise<any>;
export  const useRemoteModule: (url: string) => any;
type RemoteModuleProps = {
    url: string;
    name?: 'default' | string;
    loading?: (props: any) => JSX.Element;
    [key: string]: any;
};
export  const RemoteComponent: React.FC<RemoteModuleProps>;
type DynamicFormProps = {
    url: string;
    name?: string;
    loading?: (props: any) => JSX.Element;
};
export  const DynamicForm: React.FC<DynamicFormProps>;
export  const getDynamicForm: (formUrl: string, name: string) => Promise<any>;
export  const getFormComponent: (url: string, name: string) => Promise<any>;

}
declare module '__private$-sr-mode-types' {
export interface Converter<T, R> {
    from(val: R): T | null;
    to(val: T): R | null;
}
export type Instance<T> = T extends Converter<infer R, any> ? R : string;
}
declare module '__private$-sr-model' {
import { Converter, Instance } from '__private$-sr-mode-types';
export type { Converter, Instance, Create };
type Field<T, R> = keyof typeof converters | Converter<T, R>;
type Model = {
    [T: string]: Field<any, any>;
};
type ModelType<T extends Model> = {
    [K in keyof T]?: T[K] extends Converter<infer R, any> ? R : never;
};
type Mixin<T1 extends Converter<any, any>, T2 extends Converter<any, any>> = T1 extends Converter<infer R1, any> ? T2 extends Converter<infer R2, any> ? Converter<R1 & R2, any> : T1 : never;
type Create = {
    <T extends Model>(model: T): Converter<ModelType<T>, any>;
    <T extends Model, R extends Converter<ModelType<any>, any>>(model: T, inherit: R): Mixin<Converter<ModelType<T>, any>, typeof inherit>;
};
export  const create: Create;
 const converters: {
    id: Converter<string, string>;
    none: Converter<any, any>;
    boolean: Converter<boolean, boolean>;
    string: Converter<string, string>;
    number: Converter<number, number>;
    date: Converter<Moment, string>;
    time: Converter<Moment, string>;
    datetime: Converter<Moment, string>;
    json: Converter<object, string>;
    arr2str: Converter<string[], string>;
    str2arr: Converter<string, string[]>;
};
export  const arrayOf: <T extends Converter<any, any>>(converter: T) => Converter<T[], T[]>;
}
declare module '__private$-sr-rendere-store' {
 let run: (fn: () => void) => void;
export  function getStateNoFn(obj: any): any;
type State = Record<string, any>;
 enum PersistType {
    Session = "session",
    Storage = "storage",
    Memory = "memory"
}
export type StoreOptions = {
    key: string;
    persist?: PersistType;
};
export type InitStore<T> = (get: (key?: string) => State, set: (opt: Partial<State> | ((state: State) => Partial<State>)) => void) => T & {
    $options?: StoreOptions;
};
export  const create: {
    <T extends State>(initStore: InitStore<T>): () => T;
    config({ batch }: {
        batch: typeof run;
    }): void;
};

}
declare module '__private$--src-utils' {
export  const isDev: boolean;
export  const isDoc: boolean;
export  const getAppCode: (path?: string) => string;
export  const getApp: (path?: string) => Record<'alias' | 'name', string>;
export  const getAppNameByUrl: (url: string) => string;
export  const isMasterAppByRouter: () => boolean;
export  const strictMountDom: ShadowRoot;
export  const hiddenAllAntTooltip: () => void;
export  const urlToString: (url: URL) => string;
export  const getRemoteName: (app: string) => string;
export  const downloadFileByBlob: (blob: Blob, fileName: string) => void;
}
declare module '__private$-sr-rendere-monitor' {
import type { Opts } from "__private$-sr-rendere-browser";
export  const initMonitor: (opts: Opts) => Promise<void>;
export  const reportEvent: (...args: any[]) => any;
}
declare module '@zebras/runtime/renderer' {
export { createBrowserHistory, createHashHistory, createMemoryHistory, type History, } from 'history';
export { generatePath, matchPath, matchRoutes, Navigate, NavLink, resolvePath, useMatch, useNavigate, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams, } from 'react-router-dom';
export { useLocation } from '__private$-sr-rendere-hook-useLocation';
export { useAppData, usePageData } from '__private$-sr-rendere-appContext';
export { renderClient, __getRoot } from '__private$-sr-rendere-browser';
export { LinkWithPrefetch as Link, createSearchParams } from '__private$-sr-rendere-link';
export { useRouteData } from '__private$-sr-rendere-routeContext';
export { __useFetcher } from '__private$-sr-rendere-useFetcher';
export { withRouter, type RouteComponentProps } from '__private$-sr-rendere-withRouter';
export { definePageConfig, defineApp, defineConfig, type RuntimeConfig, } from '__private$-sr-rendere-defineConfig';
export { router, history } from '__private$-sr-cor-history';
export { getLocalStorage, setLocalStorage, clearLocalStorage, useLocalStorage, } from '__private$-sr-rendere-hook-local-storage';
export { createStore as createSignal, useStore as useSignal, subscribe, subscribeKey, cusSubscribe, } from '__private$-sr-rendere-stor-valtio';
export { proxySet, proxyMap, snapshot, useSnapshot, ref, proxy } from '__private$--src-store-valtio';
export { setStore, getStore, clearStore, useStore } from '__private$-sr-rendere-hook-store';
export { useDataSettings, getDataSettings, useDefaultSettings, getDefaultSettings, } from '__private$-sr-rendere-hook-settings';
export { default as useScrollTop } from '__private$-sr-rendere-hook-useScrollTop';
export { useKeepControl, getCacheKeys, drop, useCacheKeys, MultiTabs, useActive, useUnActive, clearTabsCache, NewOutlet as KeepAliveOutlet, } from '__private$--src-keep-alive';
export { createContext, Outlet } from '__private$-sr-rendere-patch';
export { default as Prompt } from '__private$-sr-rendere-component-Prompt';
export { default as Icon } from '__private$-sr-rendere-component-IconFont';
export { default as createFromIconfontCN } from '__private$-sr-rendere-component-IconFon-create';
export { sleep, nextTick, scheduleMicrotask } from '__private$-sr-rendere-tools';
export { loadScript, getRemoteModule, getRemoteComponent, RemoteComponent, useRemoteModule, } from '__private$--src-mf';

export { create as createTransfer, arrayOf, type Converter } from '__private$-sr-model';
export { create } from '__private$-sr-rendere-store';
export { checkCode, check, getAuth, checkUniqueCode } from '__private$--src-auth';
export { loadGlobalCss, loadGlobalScript, loadCss } from '__private$-sr-rendere-tools';
export { getAppCode as getRunningAppCode, getApp as getAppInfo } from '__private$--src-utils';
export  const systemConfig: {
    domain: any;
    env: any;
    baseApp: any;
    tabs: any;
    auth: any;
    log: any;
    feedback: any;
    nonTabbedApp: any;
};
type ISystemConfig = Partial<{
    tabs: boolean;
    auth: boolean;
    feedback: boolean;
    log: 'trace' | 'debug' | 'log' | 'info' | 'warn' | 'error' | 'silent';
    nonTabbedApp: string[];
}>;
export  const changeSystemConfig: (config: ISystemConfig) => void;
export { reportEvent } from '__private$-sr-rendere-monitor';
}
declare module '@zebras/runtime/core' {
export { createHistory, history, router } from '__private$-sr-cor-history';
}
declare module '@zebras/runtime/mf' {
import React from 'react';
import type { ComponentType, ReactNode } from 'react';
type MFModuleImportRequest = {
    entry: string;
    remoteName: string;
    moduleName: string;
};
export  function loadScript(url: string): Promise<void>;
export  function getMfRemoteModule(remoteName: string, moduleName: string): Promise<any>;
type RawRemoteComponentOpts = {
    mfConfig: {
        entry: string;
        remoteName: string;
        moduleName: string;
    };
    fallbackComponent: ComponentType<any>;
    loadingElement: ReactNode;
};
export  function safeRemoteComponentWithMfConfig<T extends ComponentType<any>>(opts: RawRemoteComponentOpts): T;
export  function getRemoteModule(url: string): Promise<any>;
export  function getRemoteComponent(url: string, name?: string): React.FC<any>;
export  function rawMfImport(opts: MFModuleImportRequest): Promise<any>;
export  const useRemoteModule: (url: string) => any;
type RemoteModuleProps = {
    url: string;
    name?: 'default' | string;
    loading?: (props: any) => JSX.Element;
    [key: string]: any;
};
export  const RemoteComponent: React.FC<RemoteModuleProps>;
type DynamicFormProps = {
    url: string;
    name?: string;
    loading?: (props: any) => JSX.Element;
};
export  const DynamicForm: React.FC<DynamicFormProps>;
export  const getDynamicForm: (formUrl: string, name: string) => Promise<any>;
export  const getFormComponent: (url: string, name: string) => Promise<any>;

}
declare module '__private$--src-qiankun-source-import-entry' {
interface TemplateScriptObject {
    async: boolean;
    src: string;
}
interface TemplateResult {
    template: string;
    scripts: (string | TemplateScriptObject)[];
    styles: string[];
    entry: string | TemplateScriptObject;
}
type Fetch = typeof window.fetch;
export type ImportEntryOpts = {
    fetch?: Fetch;
    getPublicPath?: (entry: Entry) => string;
    getDomain?: (entry: Entry) => string;
    getTemplate?: (tpl: string) => string;
    postProcessTemplate?: (tplResult: TemplateResult) => TemplateResult;
};
export type ExecScriptOpts = {
    beforeExec?: (code: string, script: string) => string | void;
    afterExec?: (code: string, script: string) => void;
    scopedGlobalVariables?: string[];
};
type ExecScriptsOpts = Pick<ImportEntryOpts, 'fetch'> & ExecScriptOpts & {
    strictGlobal?: boolean;
    success?: CallableFunction;
    error?: CallableFunction;
    proxy?: typeof window.Proxy;
};
export type Entry = string | {
    styles?: string[];
    scripts?: string[];
    html?: string;
};
export  function getExternalStyleSheets(styles: string[], fetch?: Fetch): Promise<any[]>;
export  function getExternalScripts(scripts: string[], fetch?: typeof window.fetch, errorCallback?: () => void): Promise<any[]>;
/**
 * FIXME to consistent with browser behavior, we should only provide callback way to invoke success and error event
 * @param entry
 * @param scripts
 * @param proxy
 * @param opts
 * @returns {Promise<unknown>}
 */
export  function execScripts<T>(entry: string | null, scripts: string[], proxy?: Window, opts?: ExecScriptsOpts): Promise<T>;
export default function importHTML(url: string, opts?: ExecScriptsOpts): any;
export  function importEntry(entry: Entry, opts: ImportEntryOpts, name: string): any;

}
declare module '__private$-sr-qiankun-sourc-interfaces' {
/**
 * @author kuitos
 * @since 2019-05-16
 */
import type { ImportEntryOpts } from '__private$--src-qiankun-source-import-entry';
import type { RegisterApplicationConfig, StartOpts, Parcel } from 'single-spa';
 global {
    interface Window {
        __POWERED_BY_QIANKUN__?: boolean;
        __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
        __QIANKUN_DEVELOPMENT__?: boolean;
        Zone?: CallableFunction;
    }
}
export type ObjectType = Record<string, any>;
export type Entry = string | {
    scripts?: string[];
    styles?: string[];
    html?: string;
};
export type HTMLContentRender = (props: {
    appContent: string;
    loading: boolean;
}) => any;
export type AppMetadata = {
    name: string;
    entry: Entry;
};
export type LoadableApp<T extends ObjectType> = AppMetadata & {
    props?: T;
} & ({
    render: HTMLContentRender;
} | {
    container: string | HTMLElement;
});
export type RegistrableApp<T extends ObjectType> = LoadableApp<T> & {
    loader?: (loading: boolean) => void;
    activeRule: RegisterApplicationConfig['activeWhen'];
};
export type PrefetchStrategy = boolean | 'all' | string[] | ((apps: AppMetadata[]) => {
    criticalAppNames: string[];
    minorAppsName: string[];
});
type QiankunSpecialOpts = {
    /**
     * @deprecated internal api, don't used it as normal, might be removed after next version
     */
    $$cacheLifecycleByAppName?: boolean;
    prefetch?: PrefetchStrategy;
    sandbox?: boolean | {
        strictStyleIsolation?: boolean;
        experimentalStyleIsolation?: boolean;
        /**
         * @deprecated We use strict mode by default
         */
        loose?: boolean;
        /**
         * use speed sandbox mode, enabled by default from 2.9.0
         */
        speedy?: boolean;
        patchers?: Patcher[];
    };
    singular?: boolean | ((app: LoadableApp<any>) => Promise<boolean>);
    /**
     * skip some scripts or links intercept, like JSONP
     */
    excludeAssetFilter?: (url: string) => boolean;
    globalContext?: typeof window;
};
export type FrameworkConfiguration = QiankunSpecialOpts & ImportEntryOpts & StartOpts;
export type LifeCycleFn<T extends ObjectType> = (app: LoadableApp<T>, global: typeof window) => Promise<any>;
export type FrameworkLifeCycles<T extends ObjectType> = {
    beforeLoad?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    beforeMount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    afterMount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    beforeUnmount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
    afterUnmount?: LifeCycleFn<T> | Array<LifeCycleFn<T>>;
};
export type MicroApp = Parcel;
export type Rebuilder = () => void;
export type Freer = () => Rebuilder;
export type Patcher = () => Freer;
export  enum SandBoxType {
    Proxy = "Proxy",
    Snapshot = "Snapshot",
    LegacyProxy = "LegacyProxy"
}
export type SandBox = {
    /** 沙箱的名字 */
    name: string;
    /** 沙箱的类型 */
    type: SandBoxType;
    /** 沙箱导出的代理实体 */
    proxy: WindowProxy;
    /** 沙箱是否在运行中 */
    sandboxRunning: boolean;
    /** latest set property */
    latestSetProp?: PropertyKey | null;
    /** 启动沙箱 */
    active: () => void;
    /** 关闭沙箱 */
    inactive: () => void;
};
export type OnGlobalStateChangeCallback = (state: Record<string, any>, prevState: Record<string, any>) => void;
export type MicroAppStateActions = {
    onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void;
    setGlobalState: (state: Record<string, any>) => boolean;
    offGlobalStateChange: () => boolean;
};

}
declare module '__private$-sr-qiankun-sourc-apis' {
import type { FrameworkConfiguration, FrameworkLifeCycles, LoadableApp, MicroApp, ObjectType, RegistrableApp } from '__private$-sr-qiankun-sourc-interfaces';
export  let frameworkConfiguration: FrameworkConfiguration;
export  const setFrameworkConfiguration: (configuration: FrameworkConfiguration) => void;
export  function registerMicroApps<T extends ObjectType>(apps: Array<RegistrableApp<T>>, lifeCycles?: FrameworkLifeCycles<T>): void;
export  function loadMicroApp<T extends ObjectType>(app: LoadableApp<T>, configuration?: FrameworkConfiguration & {
    autoStart?: boolean;
}, lifeCycles?: FrameworkLifeCycles<T>): MicroApp;
export  function start(opts?: FrameworkConfiguration): void;
}
declare module '__private$-sr-qiankun-sourc-globalState' {
/**
 * @author dbkillerf6
 * @since 2020-04-10
 */
import type { MicroAppStateActions } from '__private$-sr-qiankun-sourc-interfaces';
export  function initGlobalState(state?: Record<string, any>): MicroAppStateActions;
export  function getMicroAppStateActions(id: string, isMaster?: boolean): MicroAppStateActions;
}
declare module '__private$-sr-qiankun-sourc-sandbo-patcher-dynamicAppen-common' {
export  const rawHeadAppendChild: <T extends Node>(node: T) => T;
export  const styleElementTargetSymbol: unique symbol;
export type DynamicDomMutationTarget = 'head' | 'body';
 global {
    interface HTMLLinkElement {
        [styleElementTargetSymbol]: DynamicDomMutationTarget;
    }
    interface HTMLStyleElement {
        [styleElementTargetSymbol]: DynamicDomMutationTarget;
    }
}
export  const getAppWrapperHeadElement: (appWrapper: Element | ShadowRoot) => Element;
export  const getAppWrapperBodyElement: (appWrapper: Element | ShadowRoot) => Element;
export  function isExecutableScriptType(script: HTMLScriptElement): boolean;
export  function isHijackingTag(tagName?: string): boolean;
/**
 * Check if a style element is a styled-component liked.
 * A styled-components liked element is which not have textContext but keep the rules in its styleSheet.cssRules.
 * Such as the style element generated by styled-components and emotion.
 * @param element
 */
export  function isStyledComponentsLike(element: HTMLStyleElement): number;
export  function calcAppCount(appName: string, calcType: 'increase' | 'decrease', status: 'bootstrapping' | 'mounting'): void;
export  function isAllAppsUnmounted(): boolean;
export  function recordStyledComponentsCSSRules(styleElements: HTMLStyleElement[]): void;
export  function getStyledElementCSSRules(styledElement: HTMLStyleElement): CSSRuleList | undefined;
export type ContainerConfig = {
    appName: string;
    proxy: WindowProxy;
    strictGlobal: boolean;
    speedySandbox: boolean;
    dynamicStyleSheetElements: Array<HTMLStyleElement | HTMLLinkElement>;
    appWrapperGetter: CallableFunction;
    scopedCSS: boolean;
    excludeAssetFilter?: CallableFunction;
};
export  function patchHTMLDynamicAppendPrototypeFunctions(isInvokedByMicroApp: (element: HTMLElement) => boolean, containerConfigGetter: (element: HTMLElement) => ContainerConfig): () => void;
export  function rebuildCSSRules(styleSheetElements: HTMLStyleElement[], reAppendElement: (stylesheetElement: HTMLStyleElement) => boolean): void;
}
declare module '__private$-sr-qiankun-sourc-sandbo-common' {
import { DynamicDomMutationTarget } from '__private$-sr-qiankun-sourc-sandbo-patcher-dynamicAppen-common';
type AppInstance = {
    name: string;
    window: WindowProxy;
};
export type AppExt = {
    name: string;
    elementGetter: () => HTMLElement | ShadowRoot;
};
export  const appInstanceMap: Map<string, AppExt>;
/**
 * get the app that running tasks at current tick
 */
export  function getCurrentRunningApp(): AppInstance;
export  function setCurrentRunningApp(appInstance: {
    name: string;
    window: WindowProxy;
} | null): void;
export  const trustedGlobals: string[];
export  function getTargetValue(target: any, value: any): any;
export  function getMountDOM(target: DynamicDomMutationTarget): Element;

}
declare module '__private$-sr-qiankun-sourc-sandbo-patcher-css' {
/**
 * @author Saviio
 * @since 2020-4-19
 */
export  class ScopedCSS {
    private static ModifiedTag;
    private sheet;
    private swapNode;
    constructor();
    process(styleNode: HTMLStyleElement, prefix?: string): void;
    private rewrite;
    private ruleStyle;
    private ruleMedia;
    private ruleSupport;
}
export  const QiankunCSSRewriteAttr = "data-zebras";
export  const process: (appWrapper: HTMLElement, stylesheetElement: HTMLStyleElement | HTMLLinkElement, appName: string) => void;
}
declare module '__private$-sr-qiankun-sourc-sandbo-patchers' {
/**
 * @author Kuitos
 * @since 2019-04-11
 */
import type { Freer, SandBox } from '__private$-sr-qiankun-sourc-interfaces';
import * as css from '__private$-sr-qiankun-sourc-sandbo-patcher-css';
export  function patchAtMounting(appName: string, elementGetter: () => HTMLElement | ShadowRoot, sandbox: SandBox, scopedCSS: boolean, excludeAssetFilter?: CallableFunction, speedySandBox?: boolean): Freer[];
export  function patchAtBootstrapping(appName: string, elementGetter: () => HTMLElement | ShadowRoot, sandbox: SandBox, scopedCSS: boolean, excludeAssetFilter?: CallableFunction, speedySandBox?: boolean): Freer[];
export { css };
}
declare module '__private$-sr-qiankun-sourc-sandbox' {
/**
 * @author Kuitos
 * @since 2019-04-11
 */
import type { SandBox } from '__private$-sr-qiankun-sourc-interfaces';
export { getCurrentRunningApp } from '__private$-sr-qiankun-sourc-sandbo-common';
export { css } from '__private$-sr-qiankun-sourc-sandbo-patchers';
/**
 * 生成应用运行时沙箱
 *
 * 沙箱分两个类型：
 * 1. app 环境沙箱
 *  app 环境沙箱是指应用初始化过之后，应用会在什么样的上下文环境运行。每个应用的环境沙箱只会初始化一次，因为子应用只会触发一次 bootstrap 。
 *  子应用在切换时，实际上切换的是 app 环境沙箱。
 * 2. render 沙箱
 *  子应用在 app mount 开始前生成好的的沙箱。每次子应用切换过后，render 沙箱都会重现初始化。
 *
 * 这么设计的目的是为了保证每个子应用切换回来之后，还能运行在应用 bootstrap 之后的环境下。
 *
 * @param appName
 * @param elementGetter
 * @param scopedCSS
 * @param useLooseSandbox
 * @param excludeAssetFilter
 * @param globalContext
 * @param speedySandBox
 */
export  function createSandboxContainer(appName: string, elementGetter: () => HTMLElement | ShadowRoot, scopedCSS: boolean, useLooseSandbox?: boolean, excludeAssetFilter?: (url: string) => boolean, globalContext?: typeof window, speedySandBox?: boolean): {
    instance: SandBox;
    /**
     * 沙箱被 mount
     * 可能是从 bootstrap 状态进入的 mount
     * 也可能是从 unmount 之后再次唤醒进入 mount
     */
    mount(): Promise<void>;
    /**
     * 恢复 global 状态，使其能回到应用加载之前的状态
     */
    unmount(): Promise<void>;
};
}
declare module '__private$-sr-qiankun-sourc-errorHandler' {
/**
 * @author Kuitos
 * @since 2020-02-21
 */
export { addErrorHandler, removeErrorHandler } from 'single-spa';
export  function addGlobalUncaughtErrorHandler(errorHandler: OnErrorEventHandlerNonNull): void;
export  function removeGlobalUncaughtErrorHandler(errorHandler: (...args: any[]) => any): void;
}
declare module '__private$-sr-qiankun-sourc-effects' {
export  function setDefaultMountApp(defaultAppLink: string): void;
export  function runDefaultMountEffects(defaultAppLink: string): void;
export  function runAfterFirstMounted(effect: () => void): void;
}
declare module '__private$-sr-qiankun-sourc-prefetch' {
/**
 * @author Kuitos
 * @since 2019-02-26
 */
import type { ImportEntryOpts } from '__private$--src-qiankun-source-import-entry';
import type { AppMetadata, PrefetchStrategy } from '__private$-sr-qiankun-sourc-interfaces';
 global {
    interface NetworkInformation {
        saveData: boolean;
        effectiveType: string;
    }
    interface Node {
        __QIANKUN_APP_NAME__?: string | null;
    }
}
 global {
    interface Navigator {
        connection: {
            saveData: boolean;
            effectiveType: string;
            type: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';
        };
    }
}
export  function prefetchImmediately(apps: AppMetadata[], opts?: ImportEntryOpts): void;
export  function doPrefetchStrategy(apps: AppMetadata[], prefetchStrategy: PrefetchStrategy, importEntryOpts?: ImportEntryOpts): void;
}
declare module '@zebras/runtime/qiankun-source' {
/**
 * @author Kuitos
 * @since 2019-04-25
 */
export { loadMicroApp, registerMicroApps, start } from '__private$-sr-qiankun-sourc-apis';
export { initGlobalState } from '__private$-sr-qiankun-sourc-globalState';
export { getCurrentRunningApp as __internalGetCurrentRunningApp } from '__private$-sr-qiankun-sourc-sandbox';
export * from '__private$-sr-qiankun-sourc-errorHandler';
export * from '__private$-sr-qiankun-sourc-effects';
export * from '__private$-sr-qiankun-sourc-interfaces';
export { prefetchImmediately as prefetchApps } from '__private$-sr-qiankun-sourc-prefetch';
}
declare module '__private$--src-qiankun-source' {
/**
 * @author Kuitos
 * @since 2019-04-25
 */
export { loadMicroApp, registerMicroApps, start } from '__private$-sr-qiankun-sourc-apis';
export { initGlobalState } from '__private$-sr-qiankun-sourc-globalState';
export { getCurrentRunningApp as __internalGetCurrentRunningApp } from '__private$-sr-qiankun-sourc-sandbox';
export * from '__private$-sr-qiankun-sourc-errorHandler';
export * from '__private$-sr-qiankun-sourc-effects';
export * from '__private$-sr-qiankun-sourc-interfaces';
export { prefetchImmediately as prefetchApps } from '__private$-sr-qiankun-sourc-prefetch';
}
declare module '__private$-sr-qianku-maste-MicroApp' {
import { FrameworkConfiguration } from '__private$--src-qiankun-source';
import React from 'react';
type HashHistory = {
    type?: 'hash';
} & any;
type BrowserHistory = {
    type?: 'browser';
} & any;
type MemoryHistory = {
    type?: 'memory';
} & any;
export type Props = {
    name: string;
    settings?: FrameworkConfiguration;
    base?: string;
    history?: 'hash' | 'browser' | 'memory' | HashHistory | BrowserHistory | MemoryHistory;
    getMatchedBase?: () => string;
    loader?: (loading: boolean) => React.ReactNode;
    errorBoundary?: (error: any) => React.ReactNode;
    onHistoryInit?: (history: any) => void;
    autoSetLoading?: boolean;
    autoCaptureError?: boolean;
    wrapperClassName?: string;
    className?: string;
} & Record<string, any>;
export  const MicroApp: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<MicroAppType>>;

}
declare module '__private$-sr-qianku-maste-MicroAppWithMemoHistory' {
import { Props as MicroAppProps } from '__private$-sr-qianku-maste-MicroApp';
export interface Props extends MicroAppProps {
    history?: never;
}
export  function MicroAppWithMemoHistory(componentProps: Props): JSX.Element;
}
declare module '__private$-sr-qianku-maste-getMicroAppRouteComponent' {
export  function getMicroAppRouteComponent(opts: {
    appName: string;
    base: string;
    routePath: string;
    masterHistoryType: string;
    routeProps?: any;
    strict?: boolean;
}): () => JSX.Element;
}
declare module '__private$-sr-renderer' {
export { createBrowserHistory, createHashHistory, createMemoryHistory, type History, } from 'history';
export { generatePath, matchPath, matchRoutes, Navigate, NavLink, resolvePath, useMatch, useNavigate, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams, } from 'react-router-dom';
export { useLocation } from '__private$-sr-rendere-hook-useLocation';
export { useAppData, usePageData } from '__private$-sr-rendere-appContext';
export { renderClient, __getRoot } from '__private$-sr-rendere-browser';
export { LinkWithPrefetch as Link, createSearchParams } from '__private$-sr-rendere-link';
export { useRouteData } from '__private$-sr-rendere-routeContext';
export { __useFetcher } from '__private$-sr-rendere-useFetcher';
export { withRouter, type RouteComponentProps } from '__private$-sr-rendere-withRouter';
export { definePageConfig, defineApp, defineConfig, type RuntimeConfig, } from '__private$-sr-rendere-defineConfig';
export { router, history } from '__private$-sr-cor-history';
export { getLocalStorage, setLocalStorage, clearLocalStorage, useLocalStorage, } from '__private$-sr-rendere-hook-local-storage';
export { createStore as createSignal, useStore as useSignal, subscribe, subscribeKey, cusSubscribe, } from '__private$-sr-rendere-stor-valtio';
export { proxySet, proxyMap, snapshot, useSnapshot, ref, proxy } from '__private$--src-store-valtio';
export { setStore, getStore, clearStore, useStore } from '__private$-sr-rendere-hook-store';
export { useDataSettings, getDataSettings, useDefaultSettings, getDefaultSettings, } from '__private$-sr-rendere-hook-settings';
export { default as useScrollTop } from '__private$-sr-rendere-hook-useScrollTop';
export { useKeepControl, getCacheKeys, drop, useCacheKeys, MultiTabs, useActive, useUnActive, clearTabsCache, NewOutlet as KeepAliveOutlet, } from '__private$--src-keep-alive';
export { createContext, Outlet } from '__private$-sr-rendere-patch';
export { default as Prompt } from '__private$-sr-rendere-component-Prompt';
export { default as Icon } from '__private$-sr-rendere-component-IconFont';
export { default as createFromIconfontCN } from '__private$-sr-rendere-component-IconFon-create';
export { sleep, nextTick, scheduleMicrotask } from '__private$-sr-rendere-tools';
export { loadScript, getRemoteModule, getRemoteComponent, RemoteComponent, useRemoteModule, } from '__private$--src-mf';

export { create as createTransfer, arrayOf, type Converter } from '__private$-sr-model';
export { create } from '__private$-sr-rendere-store';
export { checkCode, check, getAuth, checkUniqueCode } from '__private$--src-auth';
export { loadGlobalCss, loadGlobalScript, loadCss } from '__private$-sr-rendere-tools';
export { getAppCode as getRunningAppCode, getApp as getAppInfo } from '__private$--src-utils';
export  const systemConfig: {
    domain: any;
    env: any;
    baseApp: any;
    tabs: any;
    auth: any;
    log: any;
    feedback: any;
    nonTabbedApp: any;
};
type ISystemConfig = Partial<{
    tabs: boolean;
    auth: boolean;
    feedback: boolean;
    log: 'trace' | 'debug' | 'log' | 'info' | 'warn' | 'error' | 'silent';
    nonTabbedApp: string[];
}>;
export  const changeSystemConfig: (config: ISystemConfig) => void;
export { reportEvent } from '__private$-sr-rendere-monitor';
}
declare module '__private$-sr-qianku-maste-common' {
import { ReactComponentElement } from 'react';
import { type IRouteProps } from '__private$-sr-renderer';
export  const defaultMountContainerId = "root-subapp";
export  const noop: () => void;
export  function toArray<T>(source: T | T[]): T[];
export  function patchMicroAppRoute(route: any, getMicroAppRouteComponent: (opts: {
    appName: string;
    base: string;
    routePath: string;
    masterHistoryType: string;
    routeProps?: any;
}) => string | ReactComponentElement<any>, masterOptions: {
    base: string;
    masterHistoryType: string;
    routeBindingAlias: string;
}): void;
export  function insertRoute(routes: IRouteProps[], microAppRoute: IRouteProps): void;
}
declare module '@zebras/runtime/master' {
export { MicroApp } from '__private$-sr-qianku-maste-MicroApp';
export { MicroAppWithMemoHistory } from '__private$-sr-qianku-maste-MicroAppWithMemoHistory';
export { getMicroAppRouteComponent } from '__private$-sr-qianku-maste-getMicroAppRouteComponent';
export { defaultMountContainerId, noop, toArray, patchMicroAppRoute, insertRoute, } from '__private$-sr-qianku-maste-common';
}
declare module '@zebras/runtime/master-runtime' {
}
declare module '__private$-sr-qianku-slav-slaveRuntimePlugin' {
import React from 'react';
export  function render(oldRender: any): Promise<any>;
export  function modifyContextOpts(memo: any): any;
export  function rootContainer(container: React.ReactNode): JSX.Element;
}
declare module '__private$-sr-qianku-slav-lifecycles' {
 const noop: () => void;
 const _default: () => Promise<any>;
export default _default;
export  const contextOptsStack: any[];
export  function genBootstrap(oldRender: typeof noop): (props: any) => Promise<void>;
export  function genMount(mountElementId: string): (props?: any) => Promise<void>;
export  function genUpdate(): (props: any) => Promise<void>;
export  function genUnmount(mountElementId: string): (props: any) => Promise<void>;
}
declare module '__private$-sr-qianku-slav-qiankunModel' {
 let setModelState: (val: any) => void;
 const getModelState: (label?: string | string[]) => any;
export { setModelState, getModelState };
}
declare module '@zebras/runtime/slave' {
export { render, modifyContextOpts } from '__private$-sr-qianku-slav-slaveRuntimePlugin';
export { genBootstrap, genMount, genUpdate, genUnmount } from '__private$-sr-qianku-slav-lifecycles';
export { setModelState, getModelState } from '__private$-sr-qianku-slav-qiankunModel';
}
declare module '@zebras/runtime/slave-runtime' {
import React from 'react';
export  function render(oldRender: any): Promise<any>;
export  function modifyContextOpts(memo: any): any;
export  function rootContainer(container: React.ReactNode): JSX.Element;
}
declare module '__private$-sr-reques-createRequest' {
export type IHeaders = Record<string, string>;
type Method = 'get' | 'delete' | 'head' | 'options' | 'post' | 'put' | 'patch';
export type IRequestInterceptor = (config: IRequest) => IRequest;
export type IResponseInterceptor = (response: Response, config: IRequest) => Response;
export interface IRequest<T = any> extends RequestInit {
    data?: T;
    params?: T;
    formData?: T;
    headers?: IHeaders;
    url?: string;
}
export type RequestBaseConfig = {
    requestInterceptor?: IRequestInterceptor;
    responseInterceptor?: IResponseInterceptor;
    baseUrl?: string;
    headers?: IHeaders;
};
export interface RequestInstance {
    <T = Response>(url: string, config?: IRequest<any> & {
        method?: Method;
    }, extraConfig?: {
        download: boolean;
    }): Promise<T>;
    get<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    delete<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    head<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    options<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    post<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    put<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    patch<T = Response>(url: string, config?: IRequest<any>): Promise<T>;
    download(url: string, config?: IRequest<any> & {
        method?: Method;
    }, fileName?: string | ((res: unknown) => string)): Promise<boolean | Response>;
    setHeaders(headers: IHeaders | ((headers: IHeaders) => IHeaders)): void;
    getHeaders(): IHeaders;
}
export  function createRequest(baseConfig?: RequestBaseConfig): RequestInstance;
export  const request: RequestInstance;

}
declare module '__private$-sr-reques-query-cor-subscribable' {
type Listener = () => void;
export  class Subscribable<TListener extends Function = Listener> {
    protected listeners: TListener[];
    constructor();
    subscribe(listener: TListener): () => void;
    hasListeners(): boolean;
    protected onSubscribe(): void;
    protected onUnsubscribe(): void;
}

}
declare module '__private$-sr-reques-query-cor-queryObserver' {
import type { DefaultedQueryObserverOptions, RefetchPageFilters } from '__private$-sr-reques-query-cor-types';
import type { QueryKey, QueryObserverOptions, QueryObserverResult, RefetchOptions } from '__private$-sr-reques-query-cor-types';
import type { Query, Action, FetchOptions } from '__private$-sr-reques-query-cor-query';
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
type QueryObserverListener<TData, TError> = (result: QueryObserverResult<TData, TError>) => void;
export interface NotifyOptions {
    cache?: boolean;
    listeners?: boolean;
    onError?: boolean;
    onSuccess?: boolean;
}
export interface ObserverFetchOptions extends FetchOptions {
    throwOnError?: boolean;
}
export  class QueryObserver<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends Subscribable<QueryObserverListener<TData, TError>> {
    options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>;
    private client;
    private currentQuery;
    private currentQueryInitialState;
    private currentResult;
    private currentResultState?;
    private currentResultOptions?;
    private previousQueryResult?;
    private selectError;
    private selectFn?;
    private selectResult?;
    private staleTimeoutId?;
    private refetchIntervalId?;
    private currentRefetchInterval?;
    private trackedProps;
    constructor(client: QueryClient, options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>);
    protected bindMethods(): void;
    protected onSubscribe(): void;
    protected onUnsubscribe(): void;
    shouldFetchOnReconnect(): boolean;
    shouldFetchOnWindowFocus(): boolean;
    destroy(): void;
    setOptions(options?: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>, notifyOptions?: NotifyOptions): void;
    getOptimisticResult(options: DefaultedQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>): QueryObserverResult<TData, TError>;
    getCurrentResult(): QueryObserverResult<TData, TError>;
    trackResult(result: QueryObserverResult<TData, TError>): QueryObserverResult<TData, TError>;
    getCurrentQuery(): Query<TQueryFnData, TError, TQueryData, TQueryKey>;
    remove(): void;
    refetch<TPageData>({ refetchPage, ...options }?: RefetchOptions & RefetchPageFilters<TPageData>): Promise<QueryObserverResult<TData, TError>>;
    fetchOptimistic(options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>): Promise<QueryObserverResult<TData, TError>>;
    protected fetch(fetchOptions: ObserverFetchOptions): Promise<QueryObserverResult<TData, TError>>;
    private executeFetch;
    private updateStaleTimeout;
    private computeRefetchInterval;
    private updateRefetchInterval;
    private updateTimers;
    private clearStaleTimeout;
    private clearRefetchInterval;
    protected createResult(query: Query<TQueryFnData, TError, TQueryData, TQueryKey>, options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>): QueryObserverResult<TData, TError>;
    updateResult(notifyOptions?: NotifyOptions): void;
    private updateQuery;
    onQueryUpdate(action: Action<TData, TError>): void;
    private notify;
}

}
declare module '__private$-sr-reques-query-cor-queryCache' {
import type { QueryFilters } from '__private$-sr-reques-query-cor-utils';
import type { Action, QueryState } from '__private$-sr-reques-query-cor-query';
import { Query } from '__private$-sr-reques-query-cor-query';
import type { NotifyEvent, QueryKey, QueryOptions } from '__private$-sr-reques-query-cor-types';
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
import type { QueryObserver } from '__private$-sr-reques-query-cor-queryObserver';
interface QueryCacheConfig {
    onError?: (error: unknown, query: Query<unknown, unknown, unknown>) => void;
    onSuccess?: (data: unknown, query: Query<unknown, unknown, unknown>) => void;
    onSettled?: (data: unknown | undefined, error: unknown | null, query: Query<unknown, unknown, unknown>) => void;
}
interface NotifyEventQueryAdded extends NotifyEvent {
    type: 'added';
    query: Query<any, any, any, any>;
}
interface NotifyEventQueryRemoved extends NotifyEvent {
    type: 'removed';
    query: Query<any, any, any, any>;
}
interface NotifyEventQueryUpdated extends NotifyEvent {
    type: 'updated';
    query: Query<any, any, any, any>;
    action: Action<any, any>;
}
interface NotifyEventQueryObserverAdded extends NotifyEvent {
    type: 'observerAdded';
    query: Query<any, any, any, any>;
    observer: QueryObserver<any, any, any, any, any>;
}
interface NotifyEventQueryObserverRemoved extends NotifyEvent {
    type: 'observerRemoved';
    query: Query<any, any, any, any>;
    observer: QueryObserver<any, any, any, any, any>;
}
interface NotifyEventQueryObserverResultsUpdated extends NotifyEvent {
    type: 'observerResultsUpdated';
    query: Query<any, any, any, any>;
}
interface NotifyEventQueryObserverOptionsUpdated extends NotifyEvent {
    type: 'observerOptionsUpdated';
    query: Query<any, any, any, any>;
    observer: QueryObserver<any, any, any, any, any>;
}
type QueryCacheNotifyEvent = NotifyEventQueryAdded | NotifyEventQueryRemoved | NotifyEventQueryUpdated | NotifyEventQueryObserverAdded | NotifyEventQueryObserverRemoved | NotifyEventQueryObserverResultsUpdated | NotifyEventQueryObserverOptionsUpdated;
type QueryCacheListener = (event: QueryCacheNotifyEvent) => void;
export  class QueryCache extends Subscribable<QueryCacheListener> {
    config: QueryCacheConfig;
    private queries;
    private queriesMap;
    constructor(config?: QueryCacheConfig);
    build<TQueryFnData, TError, TData, TQueryKey extends QueryKey>(client: QueryClient, options: QueryOptions<TQueryFnData, TError, TData, TQueryKey>, state?: QueryState<TData, TError>): Query<TQueryFnData, TError, TData, TQueryKey>;
    add(query: Query<any, any, any, any>): void;
    remove(query: Query<any, any, any, any>): void;
    clear(): void;
    get<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryHash: string): Query<TQueryFnData, TError, TData, TQueryKey> | undefined;
    getAll(): Query[];
    find<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData>(arg1: QueryKey, arg2?: QueryFilters): Query<TQueryFnData, TError, TData> | undefined;
    findAll(queryKey?: QueryKey, filters?: QueryFilters): Query[];
    findAll(filters?: QueryFilters): Query[];
    findAll(arg1?: QueryKey | QueryFilters, arg2?: QueryFilters): Query[];
    notify(event: QueryCacheNotifyEvent): void;
    onFocus(): void;
    onOnline(): void;
}

}
declare module '__private$-sr-reques-query-cor-logger' {
export interface Logger {
    log: LogFunction;
    warn: LogFunction;
    error: LogFunction;
}
type LogFunction = (...args: any[]) => void;
export  const defaultLogger: Logger;

}
declare module '__private$-sr-reques-query-cor-removable' {
export  abstract class Removable {
    cacheTime: number;
    private gcTimeout?;
    destroy(): void;
    protected scheduleGc(): void;
    protected updateCacheTime(newCacheTime: number | undefined): void;
    protected clearGcTimeout(): void;
    protected abstract optionalRemove(): void;
}
}
declare module '__private$-sr-reques-query-cor-query' {
import type { QueryKey, QueryOptions, QueryStatus, QueryMeta, CancelOptions, SetDataOptions, FetchStatus } from '__private$-sr-reques-query-cor-types';
import type { QueryCache } from '__private$-sr-reques-query-cor-queryCache';
import type { QueryObserver } from '__private$-sr-reques-query-cor-queryObserver';
import type { Logger } from '__private$-sr-reques-query-cor-logger';
import { Removable } from '__private$-sr-reques-query-cor-removable';
interface QueryConfig<TQueryFnData, TError, TData, TQueryKey extends QueryKey = QueryKey> {
    cache: QueryCache;
    queryKey: TQueryKey;
    queryHash: string;
    logger?: Logger;
    options?: QueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    defaultOptions?: QueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    state?: QueryState<TData, TError>;
}
export interface QueryState<TData = unknown, TError = unknown> {
    data: TData | undefined;
    dataUpdateCount: number;
    dataUpdatedAt: number;
    error: TError | null;
    errorUpdateCount: number;
    errorUpdatedAt: number;
    fetchFailureCount: number;
    fetchFailureReason: TError | null;
    fetchMeta: any;
    isInvalidated: boolean;
    status: QueryStatus;
    fetchStatus: FetchStatus;
}
export interface FetchContext<TQueryFnData, TError, TData, TQueryKey extends QueryKey = QueryKey> {
    fetchFn: () => unknown | Promise<unknown>;
    fetchOptions?: FetchOptions;
    signal?: AbortSignal;
    options: QueryOptions<TQueryFnData, TError, TData, any>;
    queryKey: TQueryKey;
    state: QueryState<TData, TError>;
}
export interface QueryBehavior<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> {
    onFetch: (context: FetchContext<TQueryFnData, TError, TData, TQueryKey>) => void;
}
export interface FetchOptions {
    cancelRefetch?: boolean;
    meta?: any;
}
interface FailedAction<TError> {
    type: 'failed';
    failureCount: number;
    error: TError;
}
interface FetchAction {
    type: 'fetch';
    meta?: any;
}
interface SuccessAction<TData> {
    data: TData | undefined;
    type: 'success';
    dataUpdatedAt?: number;
    manual?: boolean;
}
interface ErrorAction<TError> {
    type: 'error';
    error: TError;
}
interface InvalidateAction {
    type: 'invalidate';
}
interface PauseAction {
    type: 'pause';
}
interface ContinueAction {
    type: 'continue';
}
interface SetStateAction<TData, TError> {
    type: 'setState';
    state: Partial<QueryState<TData, TError>>;
    setStateOptions?: SetStateOptions;
}
export type Action<TData, TError> = ContinueAction | ErrorAction<TError> | FailedAction<TError> | FetchAction | InvalidateAction | PauseAction | SetStateAction<TData, TError> | SuccessAction<TData>;
export interface SetStateOptions {
    meta?: any;
}
export  class Query<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends Removable {
    queryKey: TQueryKey;
    queryHash: string;
    options: QueryOptions<TQueryFnData, TError, TData, TQueryKey>;
    initialState: QueryState<TData, TError>;
    revertState?: QueryState<TData, TError>;
    state: QueryState<TData, TError>;
    isFetchingOptimistic?: boolean;
    private cache;
    private logger;
    private promise?;
    private retryer?;
    private observers;
    private defaultOptions?;
    private abortSignalConsumed;
    constructor(config: QueryConfig<TQueryFnData, TError, TData, TQueryKey>);
    get meta(): QueryMeta | undefined;
    private setOptions;
    protected optionalRemove(): void;
    setData(newData: TData, options?: SetDataOptions & {
        manual: boolean;
    }): TData;
    setState(state: Partial<QueryState<TData, TError>>, setStateOptions?: SetStateOptions): void;
    cancel(options?: CancelOptions): Promise<void>;
    destroy(): void;
    reset(): void;
    isActive(): boolean;
    isDisabled(): boolean;
    isStale(): boolean;
    isStaleByTime(staleTime?: number): boolean;
    onFocus(): void;
    onOnline(): void;
    addObserver(observer: QueryObserver<any, any, any, any, any>): void;
    removeObserver(observer: QueryObserver<any, any, any, any, any>): void;
    getObserversCount(): number;
    invalidate(): void;
    fetch(options?: QueryOptions<TQueryFnData, TError, TData, TQueryKey>, fetchOptions?: FetchOptions): Promise<TData>;
    private dispatch;
}

}
declare module '__private$-sr-reques-query-cor-utils' {
import type { Mutation } from '__private$-sr-reques-query-cor-mutation';
import type { Query } from '__private$-sr-reques-query-cor-query';
import type { FetchStatus, MutationFunction, MutationKey, MutationOptions, QueryFunction, QueryKey, QueryOptions } from '__private$-sr-reques-query-cor-types';
export interface QueryFilters {
    /**
     * Filter to active queries, inactive queries or all queries
     */
    type?: QueryTypeFilter;
    /**
     * Match query key exactly
     */
    exact?: boolean;
    /**
     * Include queries matching this predicate function
     */
    predicate?: (query: Query) => boolean;
    /**
     * Include queries matching this query key
     */
    queryKey?: QueryKey;
    /**
     * Include or exclude stale queries
     */
    stale?: boolean;
    /**
     * Include queries matching their fetchStatus
     */
    fetchStatus?: FetchStatus;
}
export interface MutationFilters {
    /**
     * Match mutation key exactly
     */
    exact?: boolean;
    /**
     * Include mutations matching this predicate function
     */
    predicate?: (mutation: Mutation<any, any, any>) => boolean;
    /**
     * Include mutations matching this mutation key
     */
    mutationKey?: MutationKey;
    /**
     * Include or exclude fetching mutations
     */
    fetching?: boolean;
}
export type DataUpdateFunction<TInput, TOutput> = (input: TInput) => TOutput;
export type Updater<TInput, TOutput> = TOutput | DataUpdateFunction<TInput, TOutput>;
export type QueryTypeFilter = 'all' | 'active' | 'inactive';
export  const isServer: boolean;
export  function noop(): undefined;
export  function functionalUpdate<TInput, TOutput>(updater: Updater<TInput, TOutput>, input: TInput): TOutput;
export  function isValidTimeout(value: unknown): value is number;
export  function difference<T>(array1: T[], array2: T[]): T[];
export  function replaceAt<T>(array: T[], index: number, value: T): T[];
export  function timeUntilStale(updatedAt: number, staleTime?: number): number;
export  function parseQueryArgs<TOptions extends QueryOptions<any, any, any, TQueryKey>, TQueryKey extends QueryKey = QueryKey>(arg1: TQueryKey | TOptions, arg2?: QueryFunction<any, TQueryKey> | TOptions, arg3?: TOptions): TOptions;
export  function parseMutationArgs<TOptions extends MutationOptions<any, any, any, any>>(arg1: MutationKey | MutationFunction<any, any> | TOptions, arg2?: MutationFunction<any, any> | TOptions, arg3?: TOptions): TOptions;
export  function parseFilterArgs<TFilters extends QueryFilters, TOptions = unknown>(arg1?: QueryKey | TFilters, arg2?: TFilters | TOptions, arg3?: TOptions): [TFilters, TOptions | undefined];
export  function parseMutationFilterArgs<TFilters extends MutationFilters, TOptions = unknown>(arg1?: QueryKey | TFilters, arg2?: TFilters | TOptions, arg3?: TOptions): [TFilters, TOptions | undefined];
export  function matchQuery(filters: QueryFilters, query: Query<any, any, any, any>): boolean;
export  function matchMutation(filters: MutationFilters, mutation: Mutation<any, any>): boolean;
export  function hashQueryKeyByOptions<TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: QueryOptions<any, any, any, TQueryKey>): string;
/**
 * Default query keys hash function.
 * Hashes the value into a stable hash.
 */
export  function hashQueryKey(queryKey: QueryKey): string;
/**
 * Checks if key `b` partially matches with key `a`.
 */
export  function partialMatchKey(a: QueryKey, b: QueryKey): boolean;
/**
 * Checks if `b` partially matches with `a`.
 */
export  function partialDeepEqual(a: any, b: any): boolean;
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */
export  function replaceEqualDeep<T>(a: unknown, b: T): T;
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */
export  function shallowEqualObjects<T>(a: T, b: T): boolean;
export  function isPlainArray(value: unknown): boolean;
export  function isPlainObject(o: any): o is Object;
export  function isQueryKey(value: unknown): value is QueryKey;
export  function isError(value: any): value is Error;
export  function sleep(timeout: number): Promise<void>;
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */
export  function scheduleMicrotask(callback: () => void): void;
export  function getAbortController(): AbortController | undefined;
export  function replaceData<TData, TOptions extends QueryOptions<any, any, any, any>>(prevData: TData | undefined, data: TData, options: TOptions): TData;
}
declare module '__private$-sr-reques-query-cor-queryClient' {
import type { QueryFilters, Updater, MutationFilters } from '__private$-sr-reques-query-cor-utils';
import type { QueryClientConfig, DefaultOptions, FetchInfiniteQueryOptions, FetchQueryOptions, InfiniteData, InvalidateOptions, InvalidateQueryFilters, MutationKey, MutationObserverOptions, MutationOptions, QueryFunction, QueryKey, QueryObserverOptions, RefetchOptions, RefetchQueryFilters, ResetOptions, ResetQueryFilters, SetDataOptions, WithRequired } from '__private$-sr-reques-query-cor-types';
import type { QueryState } from '__private$-sr-reques-query-cor-query';
import { QueryCache } from '__private$-sr-reques-query-cor-queryCache';
import { MutationCache } from '__private$-sr-reques-query-cor-mutationCache';
import type { CancelOptions, DefaultedQueryObserverOptions } from '__private$-sr-reques-query-cor-types';
import type { Logger } from '__private$-sr-reques-query-cor-logger';
export  class QueryClient {
    private queryCache;
    private mutationCache;
    private logger;
    private defaultOptions;
    private queryDefaults;
    private mutationDefaults;
    private mountCount;
    private unsubscribeFocus?;
    private unsubscribeOnline?;
    constructor(config?: QueryClientConfig);
    mount(): void;
    unmount(): void;
    isFetching(filters?: QueryFilters): number;
    isFetching(queryKey?: QueryKey, filters?: QueryFilters): number;
    isMutating(filters?: MutationFilters): number;
    getQueryData<TQueryFnData = unknown>(queryKey: QueryKey, filters?: QueryFilters): TQueryFnData | undefined;
    ensureQueryData<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: WithRequired<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>): Promise<TData>;
    ensureQueryData<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>): Promise<TData>;
    ensureQueryData<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>): Promise<TData>;
    getQueriesData<TQueryFnData = unknown>(queryKey: QueryKey): [QueryKey, TQueryFnData | undefined][];
    getQueriesData<TQueryFnData = unknown>(filters: QueryFilters): [QueryKey, TQueryFnData | undefined][];
    setQueryData<TQueryFnData>(queryKey: QueryKey, updater: Updater<TQueryFnData | undefined, TQueryFnData | undefined>, options?: SetDataOptions): TQueryFnData | undefined;
    setQueriesData<TQueryFnData>(queryKey: QueryKey, updater: Updater<TQueryFnData | undefined, TQueryFnData | undefined>, options?: SetDataOptions): [QueryKey, TQueryFnData | undefined][];
    setQueriesData<TQueryFnData>(filters: QueryFilters, updater: Updater<TQueryFnData | undefined, TQueryFnData | undefined>, options?: SetDataOptions): [QueryKey, TQueryFnData | undefined][];
    getQueryState<TQueryFnData = unknown, TError = undefined>(queryKey: QueryKey, filters?: QueryFilters): QueryState<TQueryFnData, TError> | undefined;
    removeQueries(filters?: QueryFilters): void;
    removeQueries(queryKey?: QueryKey, filters?: QueryFilters): void;
    resetQueries<TPageData = unknown>(filters?: ResetQueryFilters<TPageData>, options?: ResetOptions): Promise<void>;
    resetQueries<TPageData = unknown>(queryKey?: QueryKey, filters?: ResetQueryFilters<TPageData>, options?: ResetOptions): Promise<void>;
    cancelQueries(filters?: QueryFilters, options?: CancelOptions): Promise<void>;
    cancelQueries(queryKey?: QueryKey, filters?: QueryFilters, options?: CancelOptions): Promise<void>;
    invalidateQueries<TPageData = unknown>(filters?: InvalidateQueryFilters<TPageData>, options?: InvalidateOptions): Promise<void>;
    invalidateQueries<TPageData = unknown>(queryKey?: QueryKey, filters?: InvalidateQueryFilters<TPageData>, options?: InvalidateOptions): Promise<void>;
    refetchQueries<TPageData = unknown>(filters?: RefetchQueryFilters<TPageData>, options?: RefetchOptions): Promise<void>;
    refetchQueries<TPageData = unknown>(queryKey?: QueryKey, filters?: RefetchQueryFilters<TPageData>, options?: RefetchOptions): Promise<void>;
    fetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<TData>;
    fetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<TData>;
    fetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<TData>;
    prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>;
    prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>;
    prefetchQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>;
    fetchInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<InfiniteData<TData>>;
    fetchInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<InfiniteData<TData>>;
    fetchInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<InfiniteData<TData>>;
    prefetchInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>;
    prefetchInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>;
    prefetchInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: FetchInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey>): Promise<void>;
    resumePausedMutations(): Promise<unknown>;
    getQueryCache(): QueryCache;
    getMutationCache(): MutationCache;
    getLogger(): Logger;
    getDefaultOptions(): DefaultOptions;
    setDefaultOptions(options: DefaultOptions): void;
    setQueryDefaults(queryKey: QueryKey, options: QueryObserverOptions<unknown, any, any, any>): void;
    getQueryDefaults(queryKey?: QueryKey): QueryObserverOptions<any, any, any, any, any> | undefined;
    setMutationDefaults(mutationKey: MutationKey, options: MutationObserverOptions<any, any, any, any>): void;
    getMutationDefaults(mutationKey?: MutationKey): MutationObserverOptions<any, any, any, any> | undefined;
    defaultQueryOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey extends QueryKey>(options?: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> | DefaultedQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>): DefaultedQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>;
    defaultMutationOptions<T extends MutationOptions<any, any, any, any>>(options?: T): T;
    clear(): void;
}
}
declare module '__private$-sr-reques-query-cor-mutationObserver' {
import type { Action } from '__private$-sr-reques-query-cor-mutation';
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
import type { MutateOptions, MutationObserverResult, MutationObserverOptions } from '__private$-sr-reques-query-cor-types';
type MutationObserverListener<TData, TError, TVariables, TContext> = (result: MutationObserverResult<TData, TError, TVariables, TContext>) => void;
export  class MutationObserver<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends Subscribable<MutationObserverListener<TData, TError, TVariables, TContext>> {
    options: MutationObserverOptions<TData, TError, TVariables, TContext>;
    private client;
    private currentResult;
    private currentMutation?;
    private mutateOptions?;
    constructor(client: QueryClient, options: MutationObserverOptions<TData, TError, TVariables, TContext>);
    protected bindMethods(): void;
    setOptions(options?: MutationObserverOptions<TData, TError, TVariables, TContext>): void;
    protected onUnsubscribe(): void;
    onMutationUpdate(action: Action<TData, TError, TVariables, TContext>): void;
    getCurrentResult(): MutationObserverResult<TData, TError, TVariables, TContext>;
    reset(): void;
    mutate(variables?: TVariables, options?: MutateOptions<TData, TError, TVariables, TContext>): Promise<TData>;
    private updateResult;
    private notify;
}

}
declare module '__private$-sr-reques-query-cor-mutationCache' {
import type { MutationObserver } from '__private$-sr-reques-query-cor-mutationObserver';
import type { MutationOptions, NotifyEvent } from '__private$-sr-reques-query-cor-types';
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import type { Action, MutationState } from '__private$-sr-reques-query-cor-mutation';
import { Mutation } from '__private$-sr-reques-query-cor-mutation';
import type { MutationFilters } from '__private$-sr-reques-query-cor-utils';
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
interface MutationCacheConfig {
    onError?: (error: unknown, variables: unknown, context: unknown, mutation: Mutation<unknown, unknown, unknown>) => Promise<unknown> | unknown;
    onSuccess?: (data: unknown, variables: unknown, context: unknown, mutation: Mutation<unknown, unknown, unknown>) => Promise<unknown> | unknown;
    onMutate?: (variables: unknown, mutation: Mutation<unknown, unknown, unknown>) => Promise<unknown> | unknown;
    onSettled?: (data: unknown | undefined, error: unknown | null, variables: unknown, context: unknown, mutation: Mutation<unknown, unknown, unknown>) => Promise<unknown> | unknown;
}
interface NotifyEventMutationAdded extends NotifyEvent {
    type: 'added';
    mutation: Mutation<any, any, any, any>;
}
interface NotifyEventMutationRemoved extends NotifyEvent {
    type: 'removed';
    mutation: Mutation<any, any, any, any>;
}
interface NotifyEventMutationObserverAdded extends NotifyEvent {
    type: 'observerAdded';
    mutation: Mutation<any, any, any, any>;
    observer: MutationObserver<any, any, any>;
}
interface NotifyEventMutationObserverRemoved extends NotifyEvent {
    type: 'observerRemoved';
    mutation: Mutation<any, any, any, any>;
    observer: MutationObserver<any, any, any>;
}
interface NotifyEventMutationObserverOptionsUpdated extends NotifyEvent {
    type: 'observerOptionsUpdated';
    mutation?: Mutation<any, any, any, any>;
    observer: MutationObserver<any, any, any, any>;
}
interface NotifyEventMutationUpdated extends NotifyEvent {
    type: 'updated';
    mutation: Mutation<any, any, any, any>;
    action: Action<any, any, any, any>;
}
type MutationCacheNotifyEvent = NotifyEventMutationAdded | NotifyEventMutationRemoved | NotifyEventMutationObserverAdded | NotifyEventMutationObserverRemoved | NotifyEventMutationObserverOptionsUpdated | NotifyEventMutationUpdated;
type MutationCacheListener = (event: MutationCacheNotifyEvent) => void;
export  class MutationCache extends Subscribable<MutationCacheListener> {
    config: MutationCacheConfig;
    private mutations;
    private mutationId;
    private resuming;
    constructor(config?: MutationCacheConfig);
    build<TData, TError, TVariables, TContext>(client: QueryClient, options: MutationOptions<TData, TError, TVariables, TContext>, state?: MutationState<TData, TError, TVariables, TContext>): Mutation<TData, TError, TVariables, TContext>;
    add(mutation: Mutation<any, any, any, any>): void;
    remove(mutation: Mutation<any, any, any, any>): void;
    clear(): void;
    getAll(): Mutation[];
    find<TData = unknown, TError = unknown, TVariables = any, TContext = unknown>(filters: MutationFilters): Mutation<TData, TError, TVariables, TContext> | undefined;
    findAll(filters: MutationFilters): Mutation[];
    notify(event: MutationCacheNotifyEvent): void;
    resumePausedMutations(): Promise<unknown>;
}

}
declare module '__private$-sr-reques-query-cor-mutation' {
import type { MutationOptions, MutationStatus, MutationMeta } from '__private$-sr-reques-query-cor-types';
import type { MutationCache } from '__private$-sr-reques-query-cor-mutationCache';
import type { MutationObserver } from '__private$-sr-reques-query-cor-mutationObserver';
import type { Logger } from '__private$-sr-reques-query-cor-logger';
import { Removable } from '__private$-sr-reques-query-cor-removable';
interface MutationConfig<TData, TError, TVariables, TContext> {
    mutationId: number;
    mutationCache: MutationCache;
    options: MutationOptions<TData, TError, TVariables, TContext>;
    logger?: Logger;
    defaultOptions?: MutationOptions<TData, TError, TVariables, TContext>;
    state?: MutationState<TData, TError, TVariables, TContext>;
    meta?: MutationMeta;
}
export interface MutationState<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> {
    context: TContext | undefined;
    data: TData | undefined;
    error: TError | null;
    failureCount: number;
    failureReason: TError | null;
    isPaused: boolean;
    status: MutationStatus;
    variables: TVariables | undefined;
}
interface FailedAction<TError> {
    type: 'failed';
    failureCount: number;
    error: TError | null;
}
interface LoadingAction<TVariables, TContext> {
    type: 'loading';
    variables?: TVariables;
    context?: TContext;
}
interface SuccessAction<TData> {
    type: 'success';
    data: TData;
}
interface ErrorAction<TError> {
    type: 'error';
    error: TError;
}
interface PauseAction {
    type: 'pause';
}
interface ContinueAction {
    type: 'continue';
}
interface SetStateAction<TData, TError, TVariables, TContext> {
    type: 'setState';
    state: MutationState<TData, TError, TVariables, TContext>;
}
export type Action<TData, TError, TVariables, TContext> = ContinueAction | ErrorAction<TError> | FailedAction<TError> | LoadingAction<TVariables, TContext> | PauseAction | SetStateAction<TData, TError, TVariables, TContext> | SuccessAction<TData>;
export  class Mutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends Removable {
    state: MutationState<TData, TError, TVariables, TContext>;
    options: MutationOptions<TData, TError, TVariables, TContext>;
    mutationId: number;
    private observers;
    private defaultOptions?;
    private mutationCache;
    private logger;
    private retryer?;
    constructor(config: MutationConfig<TData, TError, TVariables, TContext>);
    setOptions(options?: MutationOptions<TData, TError, TVariables, TContext>): void;
    get meta(): MutationMeta | undefined;
    setState(state: MutationState<TData, TError, TVariables, TContext>): void;
    addObserver(observer: MutationObserver<any, any, any, any>): void;
    removeObserver(observer: MutationObserver<any, any, any, any>): void;
    protected optionalRemove(): void;
    continue(): Promise<unknown>;
    execute(): Promise<TData>;
    private dispatch;
}
export  function getDefaultState<TData, TError, TVariables, TContext>(): MutationState<TData, TError, TVariables, TContext>;

}
declare module '__private$-sr-reques-query-cor-types' {
import type { MutationState } from '__private$-sr-reques-query-cor-mutation';
import type { QueryBehavior, Query } from '__private$-sr-reques-query-cor-query';
import type { RetryValue, RetryDelayValue } from '__private$-sr-reques-query-cor-retryer';
import type { QueryFilters, QueryTypeFilter } from '__private$-sr-reques-query-cor-utils';
import type { QueryCache } from '__private$-sr-reques-query-cor-queryCache';
import type { MutationCache } from '__private$-sr-reques-query-cor-mutationCache';
import type { Logger } from '__private$-sr-reques-query-cor-logger';
export type QueryKey = readonly unknown[];
export type QueryFunction<T = unknown, TQueryKey extends QueryKey = QueryKey> = (context: QueryFunctionContext<TQueryKey>) => T | Promise<T>;
export interface QueryFunctionContext<TQueryKey extends QueryKey = QueryKey, TPageParam = any> {
    queryKey: TQueryKey;
    signal?: AbortSignal;
    pageParam?: TPageParam;
    meta: QueryMeta | undefined;
}
export type InitialDataFunction<T> = () => T | undefined;
export type PlaceholderDataFunction<TResult> = () => TResult | undefined;
export type QueryKeyHashFunction<TQueryKey extends QueryKey> = (queryKey: TQueryKey) => string;
export type GetPreviousPageParamFunction<TQueryFnData = unknown> = (firstPage: TQueryFnData, allPages: TQueryFnData[]) => unknown;
export type GetNextPageParamFunction<TQueryFnData = unknown> = (lastPage: TQueryFnData, allPages: TQueryFnData[]) => unknown;
export interface InfiniteData<TData> {
    pages: TData[];
    pageParams: unknown[];
}
export interface QueryMeta {
    [index: string]: unknown;
}
export type NetworkMode = 'online' | 'always' | 'offlineFirst';
export interface QueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> {
    /**
     * If `false`, failed queries will not retry by default.
     * If `true`, failed queries will retry infinitely., failureCount: num
     * If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
     * If set to a function `(failureCount, error) => boolean` failed queries will retry until the function returns false.
     */
    retry?: RetryValue<TError>;
    retryDelay?: RetryDelayValue<TError>;
    networkMode?: NetworkMode;
    cacheTime?: number;
    isDataEqual?: (oldData: TData | undefined, newData: TData) => boolean;
    queryFn?: QueryFunction<TQueryFnData, TQueryKey>;
    queryHash?: string;
    queryKey?: TQueryKey;
    queryKeyHashFn?: QueryKeyHashFunction<TQueryKey>;
    initialData?: TData | InitialDataFunction<TData>;
    initialDataUpdatedAt?: number | (() => number | undefined);
    behavior?: QueryBehavior<TQueryFnData, TError, TData>;
    /**
     * Set this to `false` to disable structural sharing between query results.
     * Set this to a function which accepts the old and new data and returns resolved data of the same type to implement custom structural sharing logic.
     * Defaults to `true`.
     */
    structuralSharing?: boolean | ((oldData: TData | undefined, newData: TData) => TData);
    /**
     * This function can be set to automatically get the previous cursor for infinite queries.
     * The result will also be used to determine the value of `hasPreviousPage`.
     */
    getPreviousPageParam?: GetPreviousPageParamFunction<TQueryFnData>;
    /**
     * This function can be set to automatically get the next cursor for infinite queries.
     * The result will also be used to determine the value of `hasNextPage`.
     */
    getNextPageParam?: GetNextPageParamFunction<TQueryFnData>;
    _defaulted?: boolean;
    /**
     * Additional payload to be stored on each query.
     * Use this property to pass information that can be used in other places.
     */
    meta?: QueryMeta;
}
export type UseErrorBoundary<TQueryFnData, TError, TQueryData, TQueryKey extends QueryKey> = boolean | ((error: TError, query: Query<TQueryFnData, TError, TQueryData, TQueryKey>) => boolean);
export interface QueryObserverOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends QueryOptions<TQueryFnData, TError, TQueryData, TQueryKey> {
    /**
     * Set this to `false` to disable automatic refetching when the query mounts or changes query keys.
     * To refetch the query, use the `refetch` method returned from the `useQuery` instance.
     * Defaults to `true`.
     */
    enabled?: boolean;
    /**
     * The time in milliseconds after data is considered stale.
     * If set to `Infinity`, the data will never be considered stale.
     */
    staleTime?: number;
    /**
     * If set to a number, the query will continuously refetch at this frequency in milliseconds.
     * If set to a function, the function will be executed with the latest data and query to compute a frequency
     * Defaults to `false`.
     */
    refetchInterval?: number | false | ((data: TData | undefined, query: Query<TQueryFnData, TError, TQueryData, TQueryKey>) => number | false);
    /**
     * If set to `true`, the query will continue to refetch while their tab/window is in the background.
     * Defaults to `false`.
     */
    refetchIntervalInBackground?: boolean;
    /**
     * If set to `true`, the query will refetch on window focus if the data is stale.
     * If set to `false`, the query will not refetch on window focus.
     * If set to `'always'`, the query will always refetch on window focus.
     * If set to a function, the function will be executed with the latest data and query to compute the value.
     * Defaults to `true`.
     */
    refetchOnWindowFocus?: boolean | 'always' | ((query: Query<TQueryFnData, TError, TQueryData, TQueryKey>) => boolean | 'always');
    /**
     * If set to `true`, the query will refetch on reconnect if the data is stale.
     * If set to `false`, the query will not refetch on reconnect.
     * If set to `'always'`, the query will always refetch on reconnect.
     * If set to a function, the function will be executed with the latest data and query to compute the value.
     * Defaults to the value of `networkOnline` (`true`)
     */
    refetchOnReconnect?: boolean | 'always' | ((query: Query<TQueryFnData, TError, TQueryData, TQueryKey>) => boolean | 'always');
    /**
     * If set to `true`, the query will refetch on mount if the data is stale.
     * If set to `false`, will disable additional instances of a query to trigger background refetches.
     * If set to `'always'`, the query will always refetch on mount.
     * If set to a function, the function will be executed with the latest data and query to compute the value
     * Defaults to `true`.
     */
    refetchOnMount?: boolean | 'always' | ((query: Query<TQueryFnData, TError, TQueryData, TQueryKey>) => boolean | 'always');
    /**
     * If set to `false`, the query will not be retried on mount if it contains an error.
     * Defaults to `true`.
     */
    retryOnMount?: boolean;
    /**
     * If set, the component will only re-render if any of the listed properties change.
     * When set to `['data', 'error']`, the component will only re-render when the `data` or `error` properties change.
     * When set to `'all'`, the component will re-render whenever a query is updated.
     * By default, access to properties will be tracked, and the component will only re-render when one of the tracked properties change.
     */
    notifyOnChangeProps?: Array<keyof InfiniteQueryObserverResult> | 'all';
    /**
     * This callback will fire any time the query successfully fetches new data.
     */
    onSuccess?: (data: TData) => void;
    /**
     * This callback will fire if the query encounters an error and will be passed the error.
     */
    onError?: (err: TError) => void;
    /**
     * This callback will fire any time the query is either successfully fetched or errors and be passed either the data or error.
     */
    onSettled?: (data: TData | undefined, error: TError | null) => void;
    /**
     * Whether errors should be thrown instead of setting the `error` property.
     * If set to `true` or `suspense` is `true`, all errors will be thrown to the error boundary.
     * If set to `false` and `suspense` is `false`, errors are returned as state.
     * If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`).
     * Defaults to `false`.
     */
    useErrorBoundary?: UseErrorBoundary<TQueryFnData, TError, TQueryData, TQueryKey>;
    /**
     * This option can be used to transform or select a part of the data returned by the query function.
     */
    select?: (data: TQueryData) => TData;
    /**
     * If set to `true`, the query will suspend when `status === 'loading'`
     * and throw errors when `status === 'error'`.
     * Defaults to `false`.
     */
    suspense?: boolean;
    /**
     * Set this to `true` to keep the previous `data` when fetching based on a new query key.
     * Defaults to `false`.
     */
    keepPreviousData?: boolean;
    /**
     * If set, this value will be used as the placeholder data for this particular query observer while the query is still in the `loading` data and no initialData has been provided.
     */
    placeholderData?: TQueryData | PlaceholderDataFunction<TQueryData>;
    _optimisticResults?: 'optimistic' | 'isRestoring';
}
export type WithRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export type DefaultedQueryObserverOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = WithRequired<QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>, 'useErrorBoundary' | 'refetchOnReconnect'>;
export interface InfiniteQueryObserverOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends QueryObserverOptions<TQueryFnData, TError, InfiniteData<TData>, InfiniteData<TQueryData>, TQueryKey> {
}
export type DefaultedInfiniteQueryObserverOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = WithRequired<InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>, 'useErrorBoundary' | 'refetchOnReconnect'>;
export interface FetchQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends QueryOptions<TQueryFnData, TError, TData, TQueryKey> {
    /**
     * The time in milliseconds after data is considered stale.
     * If the data is fresh it will be returned from the cache.
     */
    staleTime?: number;
}
export interface FetchInfiniteQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends FetchQueryOptions<TQueryFnData, TError, InfiniteData<TData>, TQueryKey> {
}
export interface ResultOptions {
    throwOnError?: boolean;
}
export interface RefetchPageFilters<TPageData = unknown> {
    refetchPage?: (lastPage: TPageData, index: number, allPages: TPageData[]) => boolean;
}
export interface RefetchOptions extends ResultOptions {
    cancelRefetch?: boolean;
}
export interface InvalidateQueryFilters<TPageData = unknown> extends QueryFilters, RefetchPageFilters<TPageData> {
    refetchType?: QueryTypeFilter | 'none';
}
export interface RefetchQueryFilters<TPageData = unknown> extends QueryFilters, RefetchPageFilters<TPageData> {
}
export interface ResetQueryFilters<TPageData = unknown> extends QueryFilters, RefetchPageFilters<TPageData> {
}
export interface InvalidateOptions extends RefetchOptions {
}
export interface ResetOptions extends RefetchOptions {
}
export interface FetchNextPageOptions extends ResultOptions {
    cancelRefetch?: boolean;
    pageParam?: unknown;
}
export interface FetchPreviousPageOptions extends ResultOptions {
    cancelRefetch?: boolean;
    pageParam?: unknown;
}
export type QueryStatus = 'loading' | 'error' | 'success';
export type FetchStatus = 'fetching' | 'paused' | 'idle';
export interface QueryObserverBaseResult<TData = unknown, TError = unknown> {
    data: TData | undefined;
    dataUpdatedAt: number;
    error: TError | null;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: TError | null;
    errorUpdateCount: number;
    isError: boolean;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isLoading: boolean;
    isLoadingError: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetchError: boolean;
    isRefetching: boolean;
    isStale: boolean;
    isSuccess: boolean;
    refetch: <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<QueryObserverResult<TData, TError>>;
    remove: () => void;
    status: QueryStatus;
    fetchStatus: FetchStatus;
}
export interface QueryObserverLoadingResult<TData = unknown, TError = unknown> extends QueryObserverBaseResult<TData, TError> {
    data: undefined;
    error: null;
    isError: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: 'loading';
}
export interface QueryObserverLoadingErrorResult<TData = unknown, TError = unknown> extends QueryObserverBaseResult<TData, TError> {
    data: undefined;
    error: TError;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: 'error';
}
export interface QueryObserverRefetchErrorResult<TData = unknown, TError = unknown> extends QueryObserverBaseResult<TData, TError> {
    data: TData;
    error: TError;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: 'error';
}
export interface QueryObserverSuccessResult<TData = unknown, TError = unknown> extends QueryObserverBaseResult<TData, TError> {
    data: TData;
    error: null;
    isError: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: 'success';
}
export type DefinedQueryObserverResult<TData = unknown, TError = unknown> = QueryObserverRefetchErrorResult<TData, TError> | QueryObserverSuccessResult<TData, TError>;
export type QueryObserverResult<TData = unknown, TError = unknown> = DefinedQueryObserverResult<TData, TError> | QueryObserverLoadingErrorResult<TData, TError> | QueryObserverLoadingResult<TData, TError>;
export interface InfiniteQueryObserverBaseResult<TData = unknown, TError = unknown> extends QueryObserverBaseResult<InfiniteData<TData>, TError> {
    fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverResult<TData, TError>>;
    fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<InfiniteQueryObserverResult<TData, TError>>;
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    isFetchingNextPage: boolean;
    isFetchingPreviousPage: boolean;
}
export interface InfiniteQueryObserverLoadingResult<TData = unknown, TError = unknown> extends InfiniteQueryObserverBaseResult<TData, TError> {
    data: undefined;
    error: null;
    isError: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: 'loading';
}
export interface InfiniteQueryObserverLoadingErrorResult<TData = unknown, TError = unknown> extends InfiniteQueryObserverBaseResult<TData, TError> {
    data: undefined;
    error: TError;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: 'error';
}
export interface InfiniteQueryObserverRefetchErrorResult<TData = unknown, TError = unknown> extends InfiniteQueryObserverBaseResult<TData, TError> {
    data: InfiniteData<TData>;
    error: TError;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: 'error';
}
export interface InfiniteQueryObserverSuccessResult<TData = unknown, TError = unknown> extends InfiniteQueryObserverBaseResult<TData, TError> {
    data: InfiniteData<TData>;
    error: null;
    isError: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: 'success';
}
export type InfiniteQueryObserverResult<TData = unknown, TError = unknown> = InfiniteQueryObserverLoadingErrorResult<TData, TError> | InfiniteQueryObserverLoadingResult<TData, TError> | InfiniteQueryObserverRefetchErrorResult<TData, TError> | InfiniteQueryObserverSuccessResult<TData, TError>;
export type MutationKey = readonly unknown[];
export type MutationStatus = 'idle' | 'loading' | 'success' | 'error';
export interface MutationMeta {
    [index: string]: unknown;
}
export type MutationFunction<TData = unknown, TVariables = unknown> = (variables: TVariables) => Promise<TData>;
export interface MutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> {
    mutationFn?: MutationFunction<TData, TVariables>;
    mutationKey?: MutationKey;
    variables?: TVariables;
    onMutate?: (variables: TVariables) => Promise<TContext | undefined> | TContext | undefined;
    onSuccess?: (data: TData, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
    onError?: (error: TError, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
    onSettled?: (data: TData | undefined, error: TError | null, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
    retry?: RetryValue<TError>;
    retryDelay?: RetryDelayValue<TError>;
    networkMode?: NetworkMode;
    cacheTime?: number;
    _defaulted?: boolean;
    meta?: MutationMeta;
}
export interface MutationObserverOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends MutationOptions<TData, TError, TVariables, TContext> {
    useErrorBoundary?: boolean | ((error: TError) => boolean);
}
export interface MutateOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> {
    onSuccess?: (data: TData, variables: TVariables, context: TContext) => void;
    onError?: (error: TError, variables: TVariables, context: TContext | undefined) => void;
    onSettled?: (data: TData | undefined, error: TError | null, variables: TVariables, context: TContext | undefined) => void;
}
export type MutateFunction<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> = (variables: TVariables, options?: MutateOptions<TData, TError, TVariables, TContext>) => Promise<TData>;
export interface MutationObserverBaseResult<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends MutationState<TData, TError, TVariables, TContext> {
    isError: boolean;
    isIdle: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    mutate: MutateFunction<TData, TError, TVariables, TContext>;
    reset: () => void;
}
export interface MutationObserverIdleResult<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends MutationObserverBaseResult<TData, TError, TVariables, TContext> {
    data: undefined;
    error: null;
    isError: false;
    isIdle: true;
    isLoading: false;
    isSuccess: false;
    status: 'idle';
}
export interface MutationObserverLoadingResult<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends MutationObserverBaseResult<TData, TError, TVariables, TContext> {
    data: undefined;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: true;
    isSuccess: false;
    status: 'loading';
}
export interface MutationObserverErrorResult<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends MutationObserverBaseResult<TData, TError, TVariables, TContext> {
    data: undefined;
    error: TError;
    isError: true;
    isIdle: false;
    isLoading: false;
    isSuccess: false;
    status: 'error';
}
export interface MutationObserverSuccessResult<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends MutationObserverBaseResult<TData, TError, TVariables, TContext> {
    data: TData;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: false;
    isSuccess: true;
    status: 'success';
}
export type MutationObserverResult<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> = MutationObserverIdleResult<TData, TError, TVariables, TContext> | MutationObserverLoadingResult<TData, TError, TVariables, TContext> | MutationObserverErrorResult<TData, TError, TVariables, TContext> | MutationObserverSuccessResult<TData, TError, TVariables, TContext>;
export interface QueryClientConfig {
    queryCache?: QueryCache;
    mutationCache?: MutationCache;
    logger?: Logger;
    defaultOptions?: DefaultOptions;
}
export interface DefaultOptions<TError = unknown> {
    queries?: QueryObserverOptions<unknown, TError>;
    mutations?: MutationObserverOptions<unknown, TError, unknown, unknown>;
}
export interface CancelOptions {
    revert?: boolean;
    silent?: boolean;
}
export interface SetDataOptions {
    updatedAt?: number;
}
export type NotifyEventType = 'added' | 'removed' | 'updated' | 'observerAdded' | 'observerRemoved' | 'observerResultsUpdated' | 'observerOptionsUpdated';
export interface NotifyEvent {
    type: NotifyEventType;
}
}
declare module '__private$-sr-reques-query-cor-retryer' {
import type { CancelOptions, NetworkMode } from '__private$-sr-reques-query-cor-types';
interface RetryerConfig<TData = unknown, TError = unknown> {
    fn: () => TData | Promise<TData>;
    abort?: () => void;
    onError?: (error: TError) => void;
    onSuccess?: (data: TData) => void;
    onFail?: (failureCount: number, error: TError) => void;
    onPause?: () => void;
    onContinue?: () => void;
    retry?: RetryValue<TError>;
    retryDelay?: RetryDelayValue<TError>;
    networkMode: NetworkMode | undefined;
}
export interface Retryer<TData = unknown> {
    promise: Promise<TData>;
    cancel: (cancelOptions?: CancelOptions) => void;
    continue: () => Promise<unknown>;
    cancelRetry: () => void;
    continueRetry: () => void;
}
export type RetryValue<TError> = boolean | number | ShouldRetryFunction<TError>;
type ShouldRetryFunction<TError> = (failureCount: number, error: TError) => boolean;
export type RetryDelayValue<TError> = number | RetryDelayFunction<TError>;
type RetryDelayFunction<TError = unknown> = (failureCount: number, error: TError) => number;
export  function canFetch(networkMode: NetworkMode | undefined): boolean;
export  class CancelledError {
    revert?: boolean;
    silent?: boolean;
    constructor(options?: CancelOptions);
}
export  function isCancelledError(value: any): value is CancelledError;
export  function createRetryer<TData = unknown, TError = unknown>(config: RetryerConfig<TData, TError>): Retryer<TData>;

}
declare module '__private$-sr-reques-query-cor-queriesObserver' {
import type { QueryObserverOptions, QueryObserverResult } from '__private$-sr-reques-query-cor-types';
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import type { NotifyOptions } from '__private$-sr-reques-query-cor-queryObserver';
import { QueryObserver } from '__private$-sr-reques-query-cor-queryObserver';
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
type QueriesObserverListener = (result: QueryObserverResult[]) => void;
export  class QueriesObserver extends Subscribable<QueriesObserverListener> {
    private client;
    private result;
    private queries;
    private observers;
    private observersMap;
    constructor(client: QueryClient, queries?: QueryObserverOptions[]);
    protected onSubscribe(): void;
    protected onUnsubscribe(): void;
    destroy(): void;
    setQueries(queries: QueryObserverOptions[], notifyOptions?: NotifyOptions): void;
    getCurrentResult(): QueryObserverResult[];
    getQueries(): import("__private$-sr-reques-query-cor-query").Query<unknown, unknown, unknown, import("__private$-sr-reques-query-cor-types").QueryKey>[];
    getObservers(): QueryObserver<unknown, unknown, unknown, unknown, import("__private$-sr-reques-query-cor-types").QueryKey>[];
    getOptimisticResult(queries: QueryObserverOptions[]): QueryObserverResult[];
    private findMatchingObservers;
    private onUpdate;
    private notify;
}

}
declare module '__private$-sr-reques-query-cor-infiniteQueryObserver' {
import type { DefaultedInfiniteQueryObserverOptions, FetchNextPageOptions, FetchPreviousPageOptions, InfiniteData, InfiniteQueryObserverOptions, InfiniteQueryObserverResult, QueryKey } from '__private$-sr-reques-query-cor-types';
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import type { NotifyOptions } from '__private$-sr-reques-query-cor-queryObserver';
import { QueryObserver } from '__private$-sr-reques-query-cor-queryObserver';
import type { Query } from '__private$-sr-reques-query-cor-query';
export  class InfiniteQueryObserver<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends QueryObserver<TQueryFnData, TError, InfiniteData<TData>, InfiniteData<TQueryData>, TQueryKey> {
    constructor(client: QueryClient, options: InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>);
    protected bindMethods(): void;
    setOptions(options?: InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>, notifyOptions?: NotifyOptions): void;
    getOptimisticResult(options: DefaultedInfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>): InfiniteQueryObserverResult<TData, TError>;
    fetchNextPage({ pageParam, ...options }?: FetchNextPageOptions): Promise<InfiniteQueryObserverResult<TData, TError>>;
    fetchPreviousPage({ pageParam, ...options }?: FetchPreviousPageOptions): Promise<InfiniteQueryObserverResult<TData, TError>>;
    protected createResult(query: Query<TQueryFnData, TError, InfiniteData<TQueryData>, TQueryKey>, options: InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>): InfiniteQueryObserverResult<TData, TError>;
}
}
declare module '__private$-sr-reques-query-cor-notifyManager' {
type NotifyCallback = () => void;
type NotifyFunction = (callback: () => void) => void;
type BatchNotifyFunction = (callback: () => void) => void;
export  function createNotifyManager(): {
    readonly batch: <T>(callback: () => T) => T;
    readonly batchCalls: <T_1 extends Function>(callback: T_1) => T_1;
    readonly schedule: (callback: NotifyCallback) => void;
    readonly setNotifyFunction: (fn: NotifyFunction) => void;
    readonly setBatchNotifyFunction: (fn: BatchNotifyFunction) => void;
};
export  const notifyManager: {
    readonly batch: <T>(callback: () => T) => T;
    readonly batchCalls: <T_1 extends Function>(callback: T_1) => T_1;
    readonly schedule: (callback: NotifyCallback) => void;
    readonly setNotifyFunction: (fn: NotifyFunction) => void;
    readonly setBatchNotifyFunction: (fn: BatchNotifyFunction) => void;
};

}
declare module '__private$-sr-reques-query-cor-focusManager' {
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
type SetupFn = (setFocused: (focused?: boolean) => void) => (() => void) | undefined;
export  class FocusManager extends Subscribable {
    private focused?;
    private cleanup?;
    private setup;
    constructor();
    protected onSubscribe(): void;
    protected onUnsubscribe(): void;
    setEventListener(setup: SetupFn): void;
    setFocused(focused?: boolean): void;
    onFocus(): void;
    isFocused(): boolean;
}
export  const focusManager: FocusManager;

}
declare module '__private$-sr-reques-query-cor-onlineManager' {
import { Subscribable } from '__private$-sr-reques-query-cor-subscribable';
type SetupFn = (setOnline: (online?: boolean) => void) => (() => void) | undefined;
export  class OnlineManager extends Subscribable {
    private online?;
    private cleanup?;
    private setup;
    constructor();
    protected onSubscribe(): void;
    protected onUnsubscribe(): void;
    setEventListener(setup: SetupFn): void;
    setOnline(online?: boolean): void;
    onOnline(): void;
    isOnline(): boolean;
}
export  const onlineManager: OnlineManager;

}
declare module '__private$-sr-reques-query-cor-hydration' {
import type { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
import type { Query, QueryState } from '__private$-sr-reques-query-cor-query';
import type { MutationKey, MutationOptions, QueryKey, QueryOptions } from '__private$-sr-reques-query-cor-types';
import type { Mutation, MutationState } from '__private$-sr-reques-query-cor-mutation';
export interface DehydrateOptions {
    dehydrateMutations?: boolean;
    dehydrateQueries?: boolean;
    shouldDehydrateMutation?: ShouldDehydrateMutationFunction;
    shouldDehydrateQuery?: ShouldDehydrateQueryFunction;
}
export interface HydrateOptions {
    defaultOptions?: {
        queries?: QueryOptions;
        mutations?: MutationOptions;
    };
}
interface DehydratedMutation {
    mutationKey?: MutationKey;
    state: MutationState;
}
interface DehydratedQuery {
    queryHash: string;
    queryKey: QueryKey;
    state: QueryState;
}
export interface DehydratedState {
    mutations: DehydratedMutation[];
    queries: DehydratedQuery[];
}
export type ShouldDehydrateQueryFunction = (query: Query) => boolean;
export type ShouldDehydrateMutationFunction = (mutation: Mutation) => boolean;
export  function defaultShouldDehydrateMutation(mutation: Mutation): boolean;
export  function defaultShouldDehydrateQuery(query: Query): boolean;
export  function dehydrate(client: QueryClient, options?: DehydrateOptions): DehydratedState;
export  function hydrate(client: QueryClient, dehydratedState: unknown, options?: HydrateOptions): void;

}
declare module '__private$-sr-reques-query-core' {
export { CancelledError } from '__private$-sr-reques-query-cor-retryer';
export { QueryCache } from '__private$-sr-reques-query-cor-queryCache';
export { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
export { QueryObserver } from '__private$-sr-reques-query-cor-queryObserver';
export { QueriesObserver } from '__private$-sr-reques-query-cor-queriesObserver';
export { InfiniteQueryObserver } from '__private$-sr-reques-query-cor-infiniteQueryObserver';
export { MutationCache } from '__private$-sr-reques-query-cor-mutationCache';
export { MutationObserver } from '__private$-sr-reques-query-cor-mutationObserver';
export { notifyManager } from '__private$-sr-reques-query-cor-notifyManager';
export { focusManager } from '__private$-sr-reques-query-cor-focusManager';
export { onlineManager } from '__private$-sr-reques-query-cor-onlineManager';
export { hashQueryKey, replaceEqualDeep, isError, isServer, matchQuery, parseQueryArgs, parseFilterArgs, parseMutationFilterArgs, parseMutationArgs, } from '__private$-sr-reques-query-cor-utils';
export type { MutationFilters, QueryFilters, Updater } from '__private$-sr-reques-query-cor-utils';
export { isCancelledError } from '__private$-sr-reques-query-cor-retryer';
export { dehydrate, hydrate, defaultShouldDehydrateMutation, defaultShouldDehydrateQuery, } from '__private$-sr-reques-query-cor-hydration';
export * from '__private$-sr-reques-query-cor-types';
export type { Query, QueryState } from '__private$-sr-reques-query-cor-query';
export type { Mutation } from '__private$-sr-reques-query-cor-mutation';
export type { Logger } from '__private$-sr-reques-query-cor-logger';
export type { DehydrateOptions, DehydratedState, HydrateOptions, ShouldDehydrateMutationFunction, ShouldDehydrateQueryFunction, } from '__private$-sr-reques-query-cor-hydration';
}
declare module '__private$-sr-reques-quer-types' {
import type * as React from 'react';
import type { InfiniteQueryObserverOptions, InfiniteQueryObserverResult, MutationObserverResult, QueryObserverOptions, QueryObserverResult, QueryKey, MutationObserverOptions, MutateFunction, DefinedQueryObserverResult } from '__private$-sr-reques-query-core';
import type { QueryClient } from '__private$-sr-reques-query-core';
export interface ContextOptions {
    /**
     * Use this to pass your React Query context. Otherwise, `defaultContext` will be used.
     */
    context?: React.Context<QueryClient | undefined>;
}
export interface UseBaseQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends ContextOptions, QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> {
}
export interface UseQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends UseBaseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey> {
}
export interface UseInfiniteQueryOptions<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> extends ContextOptions, InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey> {
}
export type UseBaseQueryResult<TData = unknown, TError = unknown> = QueryObserverResult<TData, TError>;
export type UseQueryResult<TData = unknown, TError = unknown> = UseBaseQueryResult<TData, TError>;
export type DefinedUseBaseQueryResult<TData = unknown, TError = unknown> = DefinedQueryObserverResult<TData, TError>;
export type DefinedUseQueryResult<TData = unknown, TError = unknown> = DefinedUseBaseQueryResult<TData, TError>;
export type UseInfiniteQueryResult<TData = unknown, TError = unknown> = InfiniteQueryObserverResult<TData, TError>;
export interface UseMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> extends ContextOptions, Omit<MutationObserverOptions<TData, TError, TVariables, TContext>, '_defaulted' | 'variables'> {
}
export type UseMutateFunction<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> = (...args: Parameters<MutateFunction<TData, TError, TVariables, TContext>>) => void;
export type UseMutateAsyncFunction<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> = MutateFunction<TData, TError, TVariables, TContext>;
export type UseBaseMutationResult<TData = unknown, TError = unknown, TVariables = unknown, TContext = unknown> = Override<MutationObserverResult<TData, TError, TVariables, TContext>, {
    mutate: UseMutateFunction<TData, TError, TVariables, TContext>;
}> & {
    mutateAsync: UseMutateAsyncFunction<TData, TError, TVariables, TContext>;
};
export type UseMutationResult<TData = unknown, TError = unknown, TVariables = unknown, TContext = unknown> = UseBaseMutationResult<TData, TError, TVariables, TContext>;
type Override<A, B> = {
    [K in keyof A]: K extends keyof B ? B[K] : A[K];
};

}
declare module '__private$-sr-reques-quer-useQueries' {
import type { QueryKey, QueryFunction } from '__private$-sr-reques-query-core';
import type { UseQueryOptions, UseQueryResult } from '__private$-sr-reques-quer-types';
type UseQueryOptionsForUseQueries<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey> = Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'context'>;
type MAXIMUM_DEPTH = 20;
type GetOptions<T> = T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
    data: infer TData;
} ? UseQueryOptionsForUseQueries<TQueryFnData, TError, TData> : T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
} ? UseQueryOptionsForUseQueries<TQueryFnData, TError> : T extends {
    data: infer TData;
    error?: infer TError;
} ? UseQueryOptionsForUseQueries<unknown, TError, TData> : T extends [infer TQueryFnData, infer TError, infer TData] ? UseQueryOptionsForUseQueries<TQueryFnData, TError, TData> : T extends [infer TQueryFnData, infer TError] ? UseQueryOptionsForUseQueries<TQueryFnData, TError> : T extends [infer TQueryFnData] ? UseQueryOptionsForUseQueries<TQueryFnData> : T extends {
    queryFn?: QueryFunction<infer TQueryFnData, infer TQueryKey>;
    select: (data: any) => infer TData;
} ? UseQueryOptionsForUseQueries<TQueryFnData, unknown, TData, TQueryKey> : T extends {
    queryFn?: QueryFunction<infer TQueryFnData, infer TQueryKey>;
} ? UseQueryOptionsForUseQueries<TQueryFnData, unknown, TQueryFnData, TQueryKey> : UseQueryOptionsForUseQueries;
type GetResults<T> = T extends {
    queryFnData: any;
    error?: infer TError;
    data: infer TData;
} ? UseQueryResult<TData, TError> : T extends {
    queryFnData: infer TQueryFnData;
    error?: infer TError;
} ? UseQueryResult<TQueryFnData, TError> : T extends {
    data: infer TData;
    error?: infer TError;
} ? UseQueryResult<TData, TError> : T extends [any, infer TError, infer TData] ? UseQueryResult<TData, TError> : T extends [infer TQueryFnData, infer TError] ? UseQueryResult<TQueryFnData, TError> : T extends [infer TQueryFnData] ? UseQueryResult<TQueryFnData> : T extends {
    queryFn?: QueryFunction<unknown, any>;
    select: (data: any) => infer TData;
} ? UseQueryResult<TData> : T extends {
    queryFn?: QueryFunction<infer TQueryFnData, any>;
} ? UseQueryResult<TQueryFnData> : UseQueryResult;
/**
 * QueriesOptions reducer recursively unwraps function arguments to infer/enforce type param
 */
export type QueriesOptions<T extends any[], Result extends any[] = [], Depth extends ReadonlyArray<number> = []> = Depth['length'] extends MAXIMUM_DEPTH ? UseQueryOptionsForUseQueries[] : T extends [] ? [] : T extends [infer Head] ? [...Result, GetOptions<Head>] : T extends [infer Head, ...infer Tail] ? QueriesOptions<[...Tail], [...Result, GetOptions<Head>], [...Depth, 1]> : unknown[] extends T ? T : T extends UseQueryOptionsForUseQueries<infer TQueryFnData, infer TError, infer TData, infer TQueryKey>[] ? UseQueryOptionsForUseQueries<TQueryFnData, TError, TData, TQueryKey>[] : UseQueryOptionsForUseQueries[];
/**
 * QueriesResults reducer recursively maps type param to results
 */
export type QueriesResults<T extends any[], Result extends any[] = [], Depth extends ReadonlyArray<number> = []> = Depth['length'] extends MAXIMUM_DEPTH ? UseQueryResult[] : T extends [] ? [] : T extends [infer Head] ? [...Result, GetResults<Head>] : T extends [infer Head, ...infer Tail] ? QueriesResults<[...Tail], [...Result, GetResults<Head>], [...Depth, 1]> : T extends UseQueryOptionsForUseQueries<infer TQueryFnData, infer TError, infer TData, any>[] ? UseQueryResult<unknown extends TData ? TQueryFnData : TData, TError>[] : UseQueryResult[];
export  function useQueries<T extends any[]>({ queries, context, }: {
    queries: readonly [...QueriesOptions<T>];
    context?: UseQueryOptions['context'];
}): QueriesResults<T>;

}
declare module '__private$-sr-reques-quer-useQuery' {
import type { QueryFunction, QueryKey } from '__private$-sr-reques-query-core';
import type { DefinedUseQueryResult, UseQueryOptions, UseQueryResult } from '__private$-sr-reques-quer-types';
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>): UseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
export  function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>): UseQueryResult<TData, TError>;
}
declare module '__private$-sr-reques-quer-QueryClientProvider' {
import * as React from 'react';
import type { QueryClient } from '__private$-sr-reques-query-core';
import type { ContextOptions } from '__private$-sr-reques-quer-types';
 global {
    interface Window {
        ReactQueryClientContext?: React.Context<QueryClient | undefined>;
    }
}
export  const defaultContext: React.Context<QueryClient>;
export  const useQueryClient: ({ context }?: ContextOptions) => QueryClient;
type QueryClientProviderPropsBase = {
    client: QueryClient;
    children?: React.ReactNode;
};
type QueryClientProviderPropsWithContext = ContextOptions & {
    contextSharing?: never;
} & QueryClientProviderPropsBase;
type QueryClientProviderPropsWithContextSharing = {
    context?: never;
    contextSharing?: boolean;
} & QueryClientProviderPropsBase;
export type QueryClientProviderProps = QueryClientProviderPropsWithContext | QueryClientProviderPropsWithContextSharing;
export  const QueryClientProvider: ({ client, children, context, contextSharing, }: QueryClientProviderProps) => JSX.Element;

}
declare module '__private$-sr-reques-quer-QueryErrorResetBoundary' {
import * as React from 'react';
export interface QueryErrorResetBoundaryValue {
    clearReset: () => void;
    isReset: () => boolean;
    reset: () => void;
}
export  const useQueryErrorResetBoundary: () => QueryErrorResetBoundaryValue;
export interface QueryErrorResetBoundaryProps {
    children: ((value: QueryErrorResetBoundaryValue) => React.ReactNode) | React.ReactNode;
}
export  const QueryErrorResetBoundary: ({ children, }: QueryErrorResetBoundaryProps) => React.JSX.Element;
}
declare module '__private$-sr-reques-quer-Hydrate' {
import * as React from 'react';
import type { HydrateOptions } from '__private$-sr-reques-query-core';
import type { ContextOptions } from '__private$-sr-reques-quer-types';
export  function useHydrate(state: unknown, options?: HydrateOptions & ContextOptions): void;
export interface HydrateProps {
    state?: unknown;
    options?: HydrateOptions;
    children?: React.ReactNode;
}
export  const Hydrate: ({ children, options, state }: HydrateProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
declare module '__private$-sr-reques-quer-useIsFetching' {
import type { QueryKey, QueryFilters } from '__private$-sr-reques-query-core';
import type { ContextOptions } from '__private$-sr-reques-quer-types';
interface Options extends ContextOptions {
}
export  function useIsFetching(filters?: QueryFilters, options?: Options): number;
export  function useIsFetching(queryKey?: QueryKey, filters?: QueryFilters, options?: Options): number;

}
declare module '__private$-sr-reques-quer-useIsMutating' {
import type { MutationKey, MutationFilters } from '__private$-sr-reques-query-core';
import type { ContextOptions } from '__private$-sr-reques-quer-types';
interface Options extends ContextOptions {
}
export  function useIsMutating(filters?: MutationFilters, options?: Options): number;
export  function useIsMutating(mutationKey?: MutationKey, filters?: Omit<MutationFilters, 'mutationKey'>, options?: Options): number;

}
declare module '__private$-sr-reques-quer-useMutation' {
import type { MutationFunction, MutationKey } from '__private$-sr-reques-query-core';
import type { UseMutationOptions, UseMutationResult } from '__private$-sr-reques-quer-types';
export  function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(options: UseMutationOptions<TData, TError, TVariables, TContext>): UseMutationResult<TData, TError, TVariables, TContext>;
export  function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationFn: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>): UseMutationResult<TData, TError, TVariables, TContext>;
export  function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationKey: MutationKey, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey'>): UseMutationResult<TData, TError, TVariables, TContext>;
export  function useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationKey: MutationKey, mutationFn?: MutationFunction<TData, TVariables>, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<TData, TError, TVariables, TContext>;
}
declare module '__private$-sr-reques-quer-useInfiniteQuery' {
import type { QueryFunction, QueryKey } from '__private$-sr-reques-query-core';
import type { UseInfiniteQueryOptions, UseInfiniteQueryResult } from '__private$-sr-reques-quer-types';
export  function useInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>): UseInfiniteQueryResult<TData, TError>;
export  function useInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey'>): UseInfiniteQueryResult<TData, TError>;
export  function useInfiniteQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>, 'queryKey' | 'queryFn'>): UseInfiniteQueryResult<TData, TError>;
}
declare module '__private$-sr-reques-quer-isRestoring' {
import * as React from 'react';
export  const useIsRestoring: () => boolean;
export  const IsRestoringProvider: React.Provider<boolean>;
}
declare module '__private$-sr-reques-query' {

export * from '__private$-sr-reques-query-core';
export * from '__private$-sr-reques-quer-types';
export { useQueries } from '__private$-sr-reques-quer-useQueries';
export type { QueriesResults, QueriesOptions } from '__private$-sr-reques-quer-useQueries';
export { useQuery } from '__private$-sr-reques-quer-useQuery';
export { defaultContext, QueryClientProvider, useQueryClient, } from '__private$-sr-reques-quer-QueryClientProvider';
export type { QueryClientProviderProps } from '__private$-sr-reques-quer-QueryClientProvider';
export type { QueryErrorResetBoundaryProps } from '__private$-sr-reques-quer-QueryErrorResetBoundary';
export { useHydrate, Hydrate } from '__private$-sr-reques-quer-Hydrate';
export type { HydrateProps } from '__private$-sr-reques-quer-Hydrate';
export { QueryErrorResetBoundary, useQueryErrorResetBoundary, } from '__private$-sr-reques-quer-QueryErrorResetBoundary';
export { useIsFetching } from '__private$-sr-reques-quer-useIsFetching';
export { useIsMutating } from '__private$-sr-reques-quer-useIsMutating';
export { useMutation } from '__private$-sr-reques-quer-useMutation';
export { useInfiniteQuery } from '__private$-sr-reques-quer-useInfiniteQuery';
export { useIsRestoring, IsRestoringProvider } from '__private$-sr-reques-quer-isRestoring';
}
declare module '__private$-sr-reques-query-devtool-theme' {
import * as React from 'react';
export  const defaultTheme: {
    readonly background: "#0b1521";
    readonly backgroundAlt: "#132337";
    readonly foreground: "white";
    readonly gray: "#3f4e60";
    readonly grayAlt: "#222e3e";
    readonly inputBackgroundColor: "#fff";
    readonly inputTextColor: "#000";
    readonly success: "#00ab52";
    readonly danger: "#ff0085";
    readonly active: "#006bff";
    readonly paused: "#8c49eb";
    readonly warning: "#ffb200";
};
export type Theme = typeof defaultTheme;
interface ProviderProps {
    theme: Theme;
    children?: React.ReactNode;
}
export  function ThemeProvider({ theme, ...rest }: ProviderProps): React.JSX.Element;
export  function useTheme(): {
    readonly background: "#0b1521";
    readonly backgroundAlt: "#132337";
    readonly foreground: "white";
    readonly gray: "#3f4e60";
    readonly grayAlt: "#222e3e";
    readonly inputBackgroundColor: "#fff";
    readonly inputTextColor: "#000";
    readonly success: "#00ab52";
    readonly danger: "#ff0085";
    readonly active: "#006bff";
    readonly paused: "#8c49eb";
    readonly warning: "#ffb200";
};

}
declare module '__private$-sr-reques-query-devtool-utils' {
import * as React from 'react';
import type { Query } from '__private$-sr-reques-query';
import type { Theme } from '__private$-sr-reques-query-devtool-theme';
type StyledComponent<T> = T extends 'button' ? React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> : T extends 'input' ? React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> : T extends 'select' ? React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> : T extends keyof HTMLElementTagNameMap ? React.HTMLAttributes<HTMLElementTagNameMap[T]> : never;
export  function getQueryStatusColor({ queryState, observerCount, isStale, theme, }: {
    queryState: Query['state'];
    observerCount: number;
    isStale: boolean;
    theme: Theme;
}): "#3f4e60" | "#00ab52" | "#006bff" | "#8c49eb" | "#ffb200";
export  function getQueryStatusLabel(query: Query): "请求中" | "不活跃的" | "暂停" | "过期的" | "有效的";
type Styles = React.CSSProperties | ((props: Record<string, any>, theme: Theme) => React.CSSProperties);
export  function styled<T extends keyof HTMLElementTagNameMap>(type: T, newStyles: Styles, queries?: Record<string, Styles>): React.ForwardRefExoticComponent<React.PropsWithoutRef<StyledComponent<T>> & React.RefAttributes<HTMLElementTagNameMap[T]>>;
export  function useIsMounted(): () => boolean;
/**
 * Displays a string regardless the type of the data
 * @param {unknown} value Value to be stringified
 * @param {boolean} beautify Formats json to multiline
 */
export  const displayValue: (value: unknown, beautify?: boolean) => string;
type SortFn = (a: Query, b: Query) => number;
export  const sortFns: Record<string, SortFn>;
export  const minPanelSize = 70;
export  const defaultPanelSize = 500;
export  const sides: Record<Side, Side>;
export type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type Side = 'left' | 'right' | 'top' | 'bottom';
/**
 * Check if the given side is vertical (left/right)
 */
export  function isVerticalSide(side: Side): boolean;
/**
 * Get the opposite side, eg 'left' => 'right'. 'top' => 'bottom', etc
 */
export  function getOppositeSide(side: Side): Side;
/**
 * Given as css prop it will return a sided css prop based on a given side
 * Example given `border` and `right` it return `borderRight`
 */
export  function getSidedProp<T extends string>(prop: T, side: Side): `${T}Top` | `${T}Left` | `${T}Right` | `${T}Bottom`;
export interface SidePanelStyleOptions {
    /**
     * Position of the panel
     * Defaults to 'bottom'
     */
    position?: Side;
    /**
     * Staring height for the panel, it is set if the position is horizontal eg 'top' or 'bottom'
     * Defaults to 500
     */
    height?: number;
    /**
     * Staring width for the panel, it is set if the position is vertical eg 'left' or 'right'
     * Defaults to 500
     */
    width?: number;
    /**
     * RQ devtools theme
     */
    devtoolsTheme: Theme;
    /**
     * Sets the correct transition and visibility styles
     */
    isOpen?: boolean;
    /**
     * If the panel is resizing set to true to apply the correct transition styles
     */
    isResizing?: boolean;
    /**
     * Extra panel style passed by the user
     */
    panelStyle?: React.CSSProperties;
}
export  function getSidePanelStyle({ position, height, width, devtoolsTheme, isOpen, isResizing, panelStyle, }: SidePanelStyleOptions): React.CSSProperties;
/**
 * Get resize handle style based on a given side
 */
export  function getResizeHandleStyle(position?: Side): React.CSSProperties;

}
declare module '__private$-sr-reques-query-devtools' {
import * as React from 'react';
import type { ContextOptions } from '__private$-sr-reques-query';
import type { Corner, Side } from '__private$-sr-reques-query-devtool-utils';
export interface DevtoolsOptions extends ContextOptions {
    /**
     * Set this true if you want the dev tools to default to being open
     */
    initialIsOpen?: boolean;
    /**
     * Use this to add props to the panel. For example, you can add className, style (merge and override default style), etc.
     */
    panelProps?: React.ComponentPropsWithoutRef<'div'>;
    /**
     * Use this to add props to the close button. For example, you can add className, style (merge and override default style), onClick (extend default handler), etc.
     */
    closeButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /**
     * Use this to add props to the toggle button. For example, you can add className, style (merge and override default style), onClick (extend default handler), etc.
     */
    toggleButtonProps?: React.ComponentPropsWithoutRef<'button'>;
    /**
     * The position of the React Query logo to open and close the devtools panel.
     * Defaults to 'bottom-left'.
     */
    position?: Corner;
    /**
     * The position of the React Query devtools panel.
     * Defaults to 'bottom'.
     */
    panelPosition?: Side;
    /**
     * Use this to render the devtools inside a different type of container element for a11y purposes.
     * Any string which corresponds to a valid intrinsic JSX element is allowed.
     * Defaults to 'aside'.
     */
    containerElement?: string | any;
    /**
     * nonce for style element for CSP
     */
    styleNonce?: string;
}
interface DevtoolsPanelOptions extends ContextOptions {
    /**
     * The standard React style object used to style a component with inline styles
     */
    style?: React.CSSProperties;
    /**
     * The standard React className property used to style a component with classes
     */
    className?: string;
    /**
     * A boolean variable indicating whether the panel is open or closed
     */
    isOpen?: boolean;
    /**
     * nonce for style element for CSP
     */
    styleNonce?: string;
    /**
     * A function that toggles the open and close state of the panel
     */
    setIsOpen: (isOpen: boolean) => void;
    /**
     * Handles the opening and closing the devtools panel
     */
    onDragStart: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * The position of the React Query devtools panel.
     * Defaults to 'bottom'.
     */
    position?: Side;
    /**
     * Handles the panel position select change
     */
    onPositionChange?: (side: Side) => void;
    /**
     * Show a close button inside the panel
     */
    showCloseButton?: boolean;
    /**
     * Use this to add props to the close button. For example, you can add className, style (merge and override default style), onClick (extend default handler), etc.
     */
    closeButtonProps?: React.ComponentPropsWithoutRef<'button'>;
}
export  function ReactQueryDevtools({ initialIsOpen, panelProps, closeButtonProps, toggleButtonProps, position, containerElement: Container, context, styleNonce, panelPosition: initialPanelPosition, }: DevtoolsOptions): React.ReactElement | null;
export  const ReactQueryDevtoolsPanel: React.ForwardRefExoticComponent<DevtoolsPanelOptions & React.RefAttributes<HTMLDivElement>>;

}
declare module '__private$-sr-reques-resource' {
interface PoolOptions {
    concurrency?: number;
    maxQueuedJobs?: number;
    name?: string;
    size?: number;
}
type Opts = {
    url: string;
    type: 'js' | 'css' | 'img' | 'other';
};
export  function createResourcer(opts?: PoolOptions | number): (opts: Opts[]) => Promise<Blob[]>;

}
declare module '__private$-sr-reques-requsetContext' {
import { IHeaders, IRequestInterceptor, IResponseInterceptor } from '__private$-sr-reques-createRequest';
export type RequestContextProps = {
    projectId?: string;
    tenantId?: string;
    systemId?: string;
    actionId?: string;
    actionCode?: string;
    pgId?: string;
    requestInterceptor?: IRequestInterceptor;
    responseInterceptor?: IResponseInterceptor;
    baseUrl?: string;
    headers?: IHeaders;
};
export  const useRequestContext: () => any;
export  const RequestProvider: ({ children, ...options }: React.PropsWithChildren<RequestContextProps>) => any;
export  const useContextRequest: () => any;
}
declare module '__private$-sr-reques-useRequest' {
import { RequestInstance } from '__private$-sr-reques-createRequest';
import type { QueryFunction, QueryKey } from '__private$-sr-reques-query-core';
import type { DefinedUseQueryResult, UseQueryOptions, UseQueryResult } from '__private$-sr-reques-quer-types';
export  function useRequest(): RequestInstance;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey'>): UseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
    initialData?: () => undefined;
}): UseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' | 'initialData'> & {
    initialData: TQueryFnData | (() => TQueryFnData);
}): DefinedUseQueryResult<TData, TError>;
export  function useRequest<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>): UseQueryResult<TData, TError>;
}
declare module '@zebras/runtime/request' {
import type { RequestBaseConfig, RequestInstance } from '__private$-sr-reques-createRequest';
import { QueryClient } from '__private$-sr-reques-query';
export { QueryClient, MutationObserver, MutationCache, InfiniteQueryObserver, QueriesObserver, QueryObserver, QueryCache, useInfiniteQuery, useIsMutating, useIsFetching, useMutation, useQueries, useQuery, QueryClientProvider, useQueryClient, QueryErrorResetBoundary, useQueryErrorResetBoundary, } from '__private$-sr-reques-query';
export { ReactQueryDevtools } from '__private$-sr-reques-query-devtools';
export { createRequest } from '__private$-sr-reques-createRequest';
export { createResourcer } from '__private$-sr-reques-resource';
export { RequestProvider, useContextRequest } from '__private$-sr-reques-requsetContext';
export { useRequest } from '__private$-sr-reques-useRequest';
export  let queryClient: QueryClient;
export  let request: RequestInstance;
export  const setRequestExport: (client: QueryClient, requestConfig?: RequestBaseConfig) => void;
export  const getRequestExport: () => any;
export  const getLocaleData: (locale?: string) => any;
}
declare module '@zebras/runtime/request-runtime' {
import React from 'react';
import { PluginManager } from 'zebras';
export  function rootContainer(container: React.ReactNode, { type, plugin }: {
    type: 'app' | 'base' | 'lib';
    plugin: PluginManager;
}): Promise<JSX.Element>;
}
declare module '@zebras/runtime/query-core' {
export { CancelledError } from '__private$-sr-reques-query-cor-retryer';
export { QueryCache } from '__private$-sr-reques-query-cor-queryCache';
export { QueryClient } from '__private$-sr-reques-query-cor-queryClient';
export { QueryObserver } from '__private$-sr-reques-query-cor-queryObserver';
export { QueriesObserver } from '__private$-sr-reques-query-cor-queriesObserver';
export { InfiniteQueryObserver } from '__private$-sr-reques-query-cor-infiniteQueryObserver';
export { MutationCache } from '__private$-sr-reques-query-cor-mutationCache';
export { MutationObserver } from '__private$-sr-reques-query-cor-mutationObserver';
export { notifyManager } from '__private$-sr-reques-query-cor-notifyManager';
export { focusManager } from '__private$-sr-reques-query-cor-focusManager';
export { onlineManager } from '__private$-sr-reques-query-cor-onlineManager';
export { hashQueryKey, replaceEqualDeep, isError, isServer, matchQuery, parseQueryArgs, parseFilterArgs, parseMutationFilterArgs, parseMutationArgs, } from '__private$-sr-reques-query-cor-utils';
export type { MutationFilters, QueryFilters, Updater } from '__private$-sr-reques-query-cor-utils';
export { isCancelledError } from '__private$-sr-reques-query-cor-retryer';
export { dehydrate, hydrate, defaultShouldDehydrateMutation, defaultShouldDehydrateQuery, } from '__private$-sr-reques-query-cor-hydration';
export * from '__private$-sr-reques-query-cor-types';
export type { Query, QueryState } from '__private$-sr-reques-query-cor-query';
export type { Mutation } from '__private$-sr-reques-query-cor-mutation';
export type { Logger } from '__private$-sr-reques-query-cor-logger';
export type { DehydrateOptions, DehydratedState, HydrateOptions, ShouldDehydrateMutationFunction, ShouldDehydrateQueryFunction, } from '__private$-sr-reques-query-cor-hydration';
}
declare module '@zebras/runtime/auth' {
import React from 'react';
interface CheckParams {
    path: string;
    code?: string;
    block?: {
        code: string;
    };
}
export  const checkCode: (code: string) => boolean;
export  const checkUniqueCode: (code: string) => boolean;
export  const check: (actionCode: string, ...codes: string[]) => boolean;
export  const getAuth: (actionCode: string | Partial<Record<'code' | 'url', string>>) => any;
export  const useAuth: (path?: string) => {
    auth: any;
    setAuth: {
        (data: IAuth[]): void;
        (data: IAuth, path: string): void;
    };
    check: (...args: string[] | [CheckParams]) => boolean;
    checkCode: (code: string) => boolean;
};
export interface AuthProps {
    code: boolean | string;
    fallback?: React.ReactNode;
    path?: string;
}
export  const Auth: React.FC<React.PropsWithChildren<AuthProps>>;

}
declare module '@zebras/runtime/keep-alive' {
export { Outlet, useKeepControl, patchMessage, useActive, useUnActive, } from '__private$-sr-keep-aliv-Outlet';
export { Outlet as NewOutlet, drop, useCacheKeys, getCacheKeys, clearTabsCache } from '__private$-sr-keep-aliv-NewOutlet';
export { KeepAlive, useActivate, useUnactivate, withActivation, withAliveScope, useAliveController, } from 'react-activation';
export  const MultiTabs: (props: any) => any;
}
declare module '@zebras/runtime/keep-alive-runtime' {
import React from 'react';
export  function rootContainer(container: React.ReactNode): any;
}
declare module '__private$-sr-contex-micro' {
import React from 'react';
type ZebraProviderProps = {
    value: any;
    label: string;
    children: React.ReactNode;
};
export  const ZebraContext: any;
export  const useZebraContext: (label?: string | string[]) => any;
export  const ZebraProvider: React.FC<ZebraProviderProps>;

}
declare module '@zebras/runtime/context' {
export { ZebraContext, useZebraContext, ZebraProvider } from '__private$-sr-contex-micro';
}
declare module '__private$-sr-them-utils' {
export type ThemeData = Array<{
    code: string;
    name: string;
    style: {
        [key: string]: string;
    };
}>;
export  const requestThemeData: () => Promise<ThemeData>;
export  const getThemeContent: (stylesData: ThemeData) => string;
export  const setThemeContentToHead: (content: string) => void;
/**
 * 切换主题事件
 * @param theme 主题的code
 */
export  const changeTheme: (theme: string) => void;
/**
 * 获取主题数据
 * @returns Array<{ code: string, name: string }>
 */
export  const getThemeData: () => {
    code: string;
    name: string;
}[];
export  const useTheme: () => any[];
}
declare module '@zebras/runtime/theme' {
export { changeTheme, getThemeData, useTheme } from '__private$-sr-them-utils';
}
declare module '@zebras/runtime/theme-runtime' {
}
declare module '__private$-sr-local-context' {
export  function _onCreate(): void;
export  const addLocaleMessage: (data: Record<string, Record<string, string>>) => void;
export  const _LocaleContainer: (props: any) => JSX.Element;
}
declare module '__private$-sr-local-utils' {
import { IntlShape } from 'react-intl';
export  const LANG_CHANGE_EVENT: unique symbol;
export  const localeInfo: {
    [key: string]: any;
};
/**
 * 增加一个新的国际化语言
 * @param name 语言的 key
 * @param messages 对应的枚举对象
 * @param extraLocales momentLocale, antd 国际化
 */
export  const addLocale: (name: string, messages: Object, extraLocales: {
    momentLocale: string;
    antd: string;
}) => void;
/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */
export  const getIntl: (locale?: string, changeIntl?: boolean, otherMessage?: Record<string, Record<string, string>>) => Promise<any>;
/**
 * 切换全局的 intl 的设置
 * @param locale 语言的key
 */
export  const setIntl: (locale: string) => void;
/**
 * 获取当前选择的语言
 * @returns string
 */
export  const getLocale: () => string;
/**
 * 获取当前选择的方向
 * @returns string
 */
export  const getDirection: () => "ltr" | "rtl";
/**
 * 切换语言
 * @param lang 语言的 key
 * @param realReload 是否刷新页面，默认不刷新
 * @returns string
 */
export  const setLocale: (lang: string, realReload?: boolean) => void;
/**
 * intl.formatMessage 的语法糖
 * @deprecated 使用此 api 会造成切换语言的时候无法自动刷新，请使用 useIntl 或 injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */
export  const formatMessage: IntlShape['formatMessage'];
/**
 * 获取语言列表
 * @returns string[]
 */
/**
 * 获取语言列表
 * @returns string[]
 */
export  const getAllLocales: () => Promise<any[]>;
/**
 * 合并 target 和 other 对应位置的值，冲突的会保留 target 的值
 */
export  function deepMerge(target: any, other: any): any;
 function useLocale(p1?: unknown, p2?: unknown, p3?: unknown, p4?: unknown): unknown;
export { useLocale };
}
declare module '@zebras/runtime/locale' {
export { FormattedDate, FormattedDateParts, FormattedDisplayName, FormattedList, FormattedMessage, FormattedNumber, FormattedNumberParts, FormattedPlural, FormattedRelativeTime, FormattedTime, FormattedTimeParts, IntlContext, IntlProvider, RawIntlProvider, createIntlCache, defineMessages, injectIntl, useIntl, createIntl, type IntlShape, type MessageDescriptor, } from 'react-intl';
export { _LocaleContainer as LocaleProvider, addLocaleMessage } from '__private$-sr-local-context';
export { deepMerge, useLocale, addLocale, setLocale, getLocale, getIntl, formatMessage, getAllLocales } from '__private$-sr-local-utils';
}
declare module '@zebras/runtime/locale-runtime' {
import React from 'react';
export  function i18nProvider(container: React.ReactNode, opts: any): any;
}
declare module '__private$-sr-veaur-applyReactInVue' {
 function applyReactInVue(component: any, options?: {}): {
    originReactComponent: any;
    setup(props: any, context: any): {};
    data(): {
        VEAURY_Portals: any[];
    };
    created(): void;
    computed: {
        __veauryInjectedProps__(): any;
    };
    render(): any;
    methods: {
        __veauryCheckReactSlot__(slots: any): void;
        __veauryPushVuePortal__(vuePortal: any): void;
        __veauryRemoveVuePortal__(vuePortal: any): void;
        __veauryGetScopeSlot__(slotFunction: any, hashList: any, originSlotFunction: any): {
            (createReactSlot: any): {
                (...args: any[]): any;
                vueFunction: any;
            };
            __scopedSlot: boolean;
        };
        __veaurySyncUpdateProps__(extraData: any): void;
        __veauryMountReactComponent__(update: any, updateType: any, extraData?: {}): void;
    };
    mounted(): void;
    beforeUnmount(): void;
    updated(): void;
    inheritAttrs: boolean;
    watch: {
        $attrs: {
            handler(): void;
            deep: boolean;
        };
        __veauryInjectedProps__: {
            handler(): void;
            deep: boolean;
        };
    };
};
export default applyReactInVue;
}
declare module '__private$-sr-veaur-applyVueInReact' {
import * as React from 'react';
export  function transferSlots($slots: any): any;
 const VueContainer: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export { VueContainer };
export default function applyVueInReact(component: any, options?: {}): React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
}
declare module '@zebras/runtime/veaury' {
export { default as applyReactInVue } from '__private$-sr-veaur-applyReactInVue';
export { default as applyVueInReact } from '__private$-sr-veaur-applyVueInReact';
}
