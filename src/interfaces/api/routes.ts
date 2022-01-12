module.exports = function(express, impl){
    
    function _index(req, method, body) {
        impl()
    }
    
    express.post('/:method', function(req, res, next){
        res.send(_index(req, req.method, req.body));
    });

    //other routes..
}