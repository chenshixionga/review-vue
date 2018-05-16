const globalDirective = {
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
}

export { globalDirective }