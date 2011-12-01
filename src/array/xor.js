define(['./unique', './filter', './contains'], function (unique, filter, contains) {


    /**
     * Exclusive OR. Returns items that are present in a single array.
     * - like ptyhon's `symmetric_difference`
     * @author Miller Medeiros
     * @version 0.1.0 (2011/01/12)
     */
    function xor(arr1, arr2) {
        arr1 = unique(arr1);
        arr2 = unique(arr2);

        var a1 = filter(arr1, function(item){
                return !contains(arr2, item);
            }),
            a2 = filter(arr2, function(item){
                return !contains(arr1, item);
            });

        return a1.concat(a2);
    }

    return xor;

});