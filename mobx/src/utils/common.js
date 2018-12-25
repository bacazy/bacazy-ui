

export function trimSlash(path) {
    let _p = path;
    if(typeof _p === 'string'){
        _p.endsWith
        while(_p.length > 0 && _p.startsWith('/')){
            _p = _p.substr(1);
        }
        while(_p.length > 0 && _p.endsWith('/')){
            _p = _p.substr(0, _p.length - 1);
        }
    }

    return _p;
}

export function pathResolve(a, b) {
    let _a = "";
    let _b = "";
    if(a){
        _a = trimSlash(a.trim());
    }    
    if(b){
        _b = trimSlash(b.trim());
    }

    if(_a.length === 0){
        return "/" + _b;
    }

    if(_b.length === 0){
        return "/" + _a;
    }
    return "/"+_a +"/"+_b;
}