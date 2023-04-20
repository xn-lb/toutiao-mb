// 本地存储封装模块

// 获取
export const getItem = (name) => {
    const data = window.localStorage.getItem(name)
    try {
        // 尝试把data转为JavaScript对象
        return JSON.parse(data)
    } catch (err) {
        // data不是JSON格式字符串，直接原样返回
        return data
    }
}

// 存储
export const setItem = (name, value) => {
    // 如果value 是对象，就把value 转为JSON格式字符串再储存
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(name, value)
}



// 删除
export const removeItem = (name) => {
    window.localStorage.removeItem(name)
}