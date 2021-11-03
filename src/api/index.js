import parse from "rss-to-json";

export function requestEntries(url) {
    return parse(url);
}

export function requestContent(url) {
    return url;
}