import { ipairs, kpairs, LuaArray, tostring, type } from "@wowts/lua";
import { format, gsub } from "@wowts/string";
import { DEFAULT_CHAT_FRAME } from "@wowts/wow-mock";

export function debug(s: any) {
    DEFAULT_CHAT_FRAME.AddMessage(format("|cff33ff99GOML|r: %s", stringify(s)));
}

export function isString(s: unknown): s is string {
    return type(s) === "string";
}

export function isNumber(s: unknown): s is number {
    return type(s) === "number";
}

export function isBoolean(s: unknown): s is number {
    return type(s) === "boolean";
}

export function isLuaArray<T>(a: unknown): a is LuaArray<T> {
    return type(a) === "table";
}

export function stringify(obj: any) {
    if (obj === undefined) return "null";

    if (isString(obj)) {
        return `"${gsub(obj, '"', '\\"')}"`;
    }
    if (isNumber(obj)) {
        return tostring(obj);
    }
    if (isBoolean(obj)) {
        return (obj && "true") || "false";
    }
    if (obj[1]) {
        let firstItem = true;
        let serialized = "[";
        for (const [, item] of ipairs(obj)) {
            if (firstItem) firstItem = false;
            else serialized += ",";
            serialized += stringify(item);
        }
        serialized += "]";
        return serialized;
    }
    let serialized = "{";
    let firstProp = true;
    for (const [k, v] of kpairs(obj)) {
        if (v !== undefined) {
            if (firstProp) firstProp = false;
            else serialized += ",";
            serialized += `"${k as string}": `;
            serialized += stringify(v);
        }
    }
    serialized += "}";
    return serialized;
}
