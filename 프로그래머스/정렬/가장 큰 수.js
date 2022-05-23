function solution(numbers) {
    var answer = '';
    
    answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
       
    return answer[0] === '0' ? '0' : answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42746