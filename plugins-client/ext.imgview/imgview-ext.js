module.exports = function setup(options, imports, register) {
    imports["client-plugins"].register("imgview", __dirname);
    register(null, {
        "ext.imgview": {}
    })
};