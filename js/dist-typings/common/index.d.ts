/// <reference types="flarum/@types/translator-icu-rich" />
type TranslatorParameters = Record<string, unknown>;
/**
 * 统一前缀
 */
export declare const extPrefix = "imdong-visible-to-op-only";
/**
 * 获取一个 key
 * @param key
 */
export declare function key(key: string): string;
/**
 * 获取特定 key 的翻译
 * @param id
 * @param parameters
 */
export declare function trans(id: string, parameters?: TranslatorParameters): import("@askvortsov/rich-icu-message-formatter").NestedStringArray;
declare const _default: {
    extPrefix: string;
    key: typeof key;
    trans: typeof trans;
};
export default _default;
