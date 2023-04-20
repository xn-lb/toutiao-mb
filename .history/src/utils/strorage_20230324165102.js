// 本地存储封装模块

// 获取
export const getItem = (name) => {
    try {
        return window.localStorage.getItem(name)
    } catch (err) {
        return
    }
}

// 存储
export const setItem = () => {}

// 删除
export const removeItem = () => {}