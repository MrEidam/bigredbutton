//? Function to convert a number into a more readable format
function fornum(num){
    if(num<1000) return Math.floor(num);
    else{
        const suffixes = ['', ' K', ' M', ' B', ' T',
            ' aa', ' ab', ' ac', ' ad', ' ae', ' af', ' ag', ' ah', ' ai', ' aj', ' ak', ' al', ' am', ' an', ' ao', ' ap', ' aq', ' ar', ' as', ' at', ' au', ' av', ' aw', ' ax', ' ay', ' az', 
            ' ba', ' bb', ' bc', ' bd', ' be', ' bf', ' bg', ' bh', ' bi', ' bj', ' bk', ' bl', ' bm', ' bn', ' bo', ' bp', ' bq', ' br', ' bs', ' bt', ' bu', ' bv', ' bw', ' bx', ' by', ' bz',
            ' ca', ' cb', ' cc', ' cd', ' ce', ' cf', ' cg', ' ch', ' ci', ' cj', ' ck', ' cl', ' cm', ' cn', ' co', ' cp', ' cq', ' cr', ' cs', ' ct', ' cu', ' cv', ' cw', ' cx', ' cy', ' cz',
            ' da', ' db', ' dc', ' dd', ' de', ' df', ' dg', ' dh', ' di', ' dj', ' dk', ' dl', ' dm', ' dn', ' do', ' dp', ' dq', ' dr', ' ds', ' dt', ' du', ' dv', ' dw', ' dx', ' dy', ' dz'];
            
        let i = 0;
        while (num >= 1000 && i < suffixes.length - 1) {
            num /= 1000;
            i++;
        }
        num = Math.floor(num * 10) / 10;
        return num + suffixes[i];
    }
}