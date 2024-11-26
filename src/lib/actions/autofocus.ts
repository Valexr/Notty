export function autofocus(node: HTMLElement, condition = true) {
    if (condition) node?.focus();
    function update(condition = true) {
        if (condition) node?.focus();
        else node?.blur();
    }
    return { update, destroy() { node?.blur() } }
}