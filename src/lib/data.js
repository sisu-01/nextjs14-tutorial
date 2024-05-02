// 임시 데이터

const users = [
    {id: 1, username: "Jhon"},
    {id: 2, username: "Grace"},
]

const posts = [
    {id: 1, title: "제목1", body: "aa", userId: 1},
    {id: 2, title: "제목2", body: "sdfadsfqqqq", userId: 1},
    {id: 3, title: "제목3", body: "sadsffdasdfadsf", userId: 2},
    {id: 4, title: "제목4", body: "sbbbf", userId: 2},
]

export const getPosts = async () => {
    return posts;
}

export const getPost = async (id) => {
    return posts.find((post) => post.id === parseInt(id));
}

export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id));
}