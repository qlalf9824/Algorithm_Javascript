function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => a-b)
    
    for(let i=0;i<citations.length;i++){
        if(citations[i] >= citations.length - i ){
            answer = citations.length - i;
            break;
        }
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42747