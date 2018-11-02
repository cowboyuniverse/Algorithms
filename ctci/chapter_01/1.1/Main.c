/*
is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
*/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>


bool isUnique(char string[]);

int main(){
    // char string[];
    // string = "testing";
    
    isUnique("string");

    printf("this is a test %d", 10);
}


bool isUnique(char string[] ){
    if (strlen(string) > 128){
        printf("return false");
        return false;
    }


    bool charSet[128] = {false};

    
}
