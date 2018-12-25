module.exports = {
    _proxy: {
        proxy: {
            '/data/*': 'http://localhost:8091/'
        },

        changeHost: true
    }
}