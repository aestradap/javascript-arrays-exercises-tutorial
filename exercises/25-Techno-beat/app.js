// Your code here
const lyricsGenerator = (arr) => {
    let lyric = '';
    let dropBassCounter = 0;
   
    for (const value of arr){
        
        if(value === 0)
            lyric = lyric.concat(' ', 'Boom');
        else if(value === 1){
            lyric = lyric.concat(' ', 'Drop the bass');
            dropBassCounter += 1;
            if(dropBassCounter === 3){
                lyric = lyric.concat(' ', '!!!Break the bass!!!');
                dropBassCounter = 0;
            }  
        }
    }
    
    return lyric.trim();
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))

