function getCount(str) {
    
    console.log('str.match( /[aeiou]/ig || []).length',str.match( /[aeiou]/ig || []).length);

    return str.match( /[aeiou]/ig || []).length;

}


getCount("testing");