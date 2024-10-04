// Q1) What will th following Print in Javascript
//     console.log("har\"".length);

        // console.log("har\"".length);
        // It prints 4, Because in the middle There is 1 Escape Sequence Character


// Q2) Explore includes, StartsWith & endsWith functions of a String

        // includes :
        // let myPlace = "Ghansoli is The amazing Place on the planet";
        // console.log(myPlace.includes("amazing", "2"))

        /* SYNTAX : string.includes(searchvalue, start)
        
        Explanation : includes function cha first argument sangtoy ki "amazing" hi String myPlace ya Variable madhe ahe ki nahi so aaplya case madhe aahe Then second argument Sangtoy ki "amazing" ya string la index 2 pasun shodhayla start kar which is true. Second argument Optional aahe 

        Special case : if we print console.log(myPlace.includes("n", "2"))
                        It prints true because myPlace variable includes n when we search form 2nd index position  */


        // startsWith :
        // let myPlace = "Ghansoli is The amazing Place on the planet";
        // console.log(myPlace.startsWith("Ghansoli", "0"));

        // SYNTAX : string.startsWith(searchValue, start)


        // endsWith :
        // let myPlace = "Ghansoli is The amazing Place on the planet";
        // console.log(myPlace.endsWith("the", "36"));

        // Explanation : consider the first 36 characters of the string from the starting of the string & it searches "the" at the end of the selected string which is true 




// Q3) Write a Program to convert a Given Srting to Lowercase

        // let name = "SUJAL";
        // console.log(name.toLowerCase());




// Q4) Extract The Amount out of This String : "Please give Rs 1000" 


        // let str = "Please give Rs 1000";
        // console.log(str.slice(12));




// Q5) Try to change 4th character of a given String Were You able to do it ?
        
        // let str = "Please give Rs 1000";
        // str[3] = "hii"
        // console.log(str);

        // no, Because The String are immutable, means orignal sring change nahi Honar
        
        
         
        



        
        






    
    