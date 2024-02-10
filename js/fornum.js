// Function to convert a number into a more readable format
function fornum(num){
    if(num<1000) return Math.floor(num);
    else if(items.lang == 0){
        const suffixes = ['', ' tis', ' mil', ' mld', ' bil', ' bld', ' tril', ' trild', ' kvad', ' kvadld', ' quint', ' quintld', ' sext', ' sextld', ' sept', ' septld', ' okt', ' oktld', ' non', ' nonld', ' dec', ' decld', ' undec', ' undecld', ' duodec', ' duodecld', ' tredec', ' tredecld', ' kvaddec', ' kvaddecld', ' quintdec', ' quintdecld', ' sextdec', ' sextdecld', ' googol'];
        let i = 0;
        while (num >= 1000 && i < suffixes.length - 1) {
            num /= 1000;
            i++;
        }
        num = Math.floor(num * 10) / 10;
        return num + suffixes[i];
    }else{
        const suffixes = ['', ' k', ' mil', ' bil', ' tri', ' quad', ' qui', ' sex', ' sep', ' oct', ' non', ' dec', ' und', ' duo', ' tre', ' qua', ' qui', ' sex', ' sep', ' oct', ' nov', ' vig', ' uvi', ' dvi', ' tvi', ' qvi', ' qv', ' svi', ' spv', ' ov', ' nv', ' cen', ' ucn', ' dcn', ' googol'];
        let i = 0;
        while (num >= 1000 && i < suffixes.length - 1) {
            num /= 1000;
            i++;
        }
        num = Math.floor(num * 10) / 10;
        return num + suffixes[i];
    }
}