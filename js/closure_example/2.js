  function debounce(fn, delay) {
            return function(args) {
                setTimeout(function() {
                    fn(args);
                }, delay)
            }
        }

let obj = {
    count: 0,
    inc: debounce(function(val) {
        // this
        this.count += val;
    }, 500)
}
obj.inc(2);