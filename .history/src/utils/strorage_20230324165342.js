// 本地存储封装模块

// 获取
export const getItem = (name) => {
    const data = window.localStorage.getItem(name)
    try {
        // 尝试把data转为JavaScript对象
        return JSON.parse(data)
    } catch (err) {
        return data
    }
}

// 存储
export const setItem = () => {}

// 删除
export const removeItem = () => {}