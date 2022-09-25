
//Problem 1 - Worth 4 Points
//Write a function called findSum that takes an array of numbers as 
//an argument and finds the sum of that array of numbers and 
//returns the sum as a number. For example:

//findSum([2, 4, 6]);  // 12

function findSum(array){
    let a=0;
    for(let i = 0; i<array.length;i++){
        a+=array[i];
    }
    return a;
}
console.log(findSum([2,4,6]));

//Problem 2 - Worth 4 Points
//Write a function called findFrequency to find the MOST frequent item, and the LEAST frequent 
//item in any given array of strings. It should return an object that looks 
//like this: { most: 'a', least: 'd'}. Note, you can assume that findFrequency will always 
//be called with an array of strings passed in as an argument. For example:

//findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']); // { most: 'a', least: 'd' }

function findFrequency(array){
    let obj={
        most:0,
        least:0,
    }
    var mf = 0;
    
    for (var i=0; i<array.length; i++)
        {var the_number_that_shows_most_tiems=0;
    
            for (var j=i; j<array.length; j++)
                {
                    if (array[{i}] == array[{j}])
                               
                    the_number_that_shows_most_tiems++;
                 
                    if (mf<the_number_that_shows_most_tiems)
                    {
                    mf=the_number_that_shows_most_tiems; 
                    item = array[i];                    
                    }      
                    items = array[j];          
                    }
                    obj.most=item;
                    obj.least=items;                        
                }
                return obj;
                               
};
console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));

//Problem 3 - Worth 4 Points//
//Write a function called isPalindrome that takes an argumcent as 
//a string and returns true if that string is a palindrome and 
//false if that string is not a palindrome. You can assume that 
//all strings will be single words with no spaces. For example:

//isPalindrome('canal'); // false
//isPalindrome('Ana'); // true

function isPalindrome(str){
    let c = "";
    let newWord = str.toLowerCase();
    for (var i=newWord.length-1;i>=0;i--){
         c+=newWord[i];        
    }if(c==newWord){
            return true; 
        }else{
            return false;
        }
}
console.log(isPalindrome("canal"));
console.log(isPalindrome("Ana"));

//Problem 4 - Worth 3 Points
//Write a function called largestPair that takes an array of integers 
//and finds the pair of adjacent elements that has the largest product and return that product. For example:

//largestPair([5, 1, 2, 3, 1, 4]); // 6
//largestPair([9, 5, 10, 2, 24, -1, -48]) // 50

function largestPair(array){
    
    let maxP=array[0]*array[1];
    for (let i=0;i<array.length;i++){
        product=array[i]*array[i+1];
        
        if(product>maxP){
            maxP=product;            
        }        
    } 
    return maxP;
}
console.log(largestPair([5, 1, 2, 3, 1, 4]));
console.log(largestPair([9, 5, 10, 2, 24, -1, -48]));

//Problem 5 - Worth 3 Points

//Write a function called removeParenth that takes one argument (a string) which has parentheses 
//(1 open and 1 close) and returns that same string, but without the parentheses and the text inside 
//the parentheses. You can assume that the string is one word with no spaces and only 1 set of parentheses. 
//For example:

//removeParenth('ido(not)liketocode'); // 'idoliketocode'

function removeParenth(str){
    a=str.replace(/ *\([^)]*\) */g, "");
    return a
}
console.log(removeParenth("ido(not)liketocode"));


//Problem 6 - Worth 2 Points

//Write a function called scoreScrabble which takes a string as an argument (a single word) and returns 
//the word's scrabble score as a number. For reference, the following letters are the worth of the following 
//points:

    //1 - a, e, i, o, u, l, n, r, s, t
    //2 - d, g
    //3 - b, c, m, p
    //4 - f, h, v, w, y
    //5 - k
    //8 - j, x
    //10 - q, z

//Examples:

//scoreScrabble('hello'); // 8
//scoreScrabble('quiet'); // 14


function scoreScrabble(str){
    let scrabbleWord ={

        a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10,    
    };    

    sum=0;
    
    let c = str.toLowerCase();
    for (let i=0; i<c.length; i++){
        sum=sum + scrabbleWord[c[i]] || 0;
    }
    return sum;
}

console.log(scoreScrabble('hello'));
console.log(scoreScrabble('quiet'));


