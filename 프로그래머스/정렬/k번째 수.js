function solution(array, commands) {
    var answer = [];
    
    for(let i=0;i<commands.length;i++){
        let arr = array.slice(commands[i][0]-1, commands[i][1])
        arr.sort()
        answer.push(arr[commands[i][2]-1])
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42748