function greatestComDivisor(a, b){
    if(b == 0)
        return a;
    else 
        return greatestComDivisor(b, a%b);
}