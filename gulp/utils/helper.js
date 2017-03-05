var helper = {};

helper.getAttrValues = function(array, attr) {
    var values = [];
    array.forEach(function(e){
        if(typeof e[attr] === 'string')
            values.push(e[attr]);
        else if(e[attr] instanceof Array)
            values = values.concat(e[attr]);
    });
    return values;
};

helper.getSources = function(array) {
    return helper.getAttrValues(array, 'src');
};

helper.getDestinations = function(array) {
    return helper.getAttrValues(array, 'dest');
};

helper.splitPath = function(path) {
    path = path.split('/');
    var name = path[path.length - 1];
    path.splice(path.length - 1, 1);
    return {
        name: name,
        dir: path.join('/')
    };
};

module.exports = helper;
