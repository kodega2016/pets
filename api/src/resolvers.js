module.exports = {
    Query: {
        me() {
            return {
                name: "Khadga Shrestha",
                id: "this-is-id"
            }
        },
        getPosts() {
            return [
                {
                    title: "Learn graphql",
                    body: "this is body..."
                }
            ]
        },
        getFriends() {
            return [
                {
                    name: "Ram Krishna",
                    id: "ram"
                }
            ];
        }
    }
}
