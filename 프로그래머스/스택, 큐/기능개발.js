function solution(progresses, speeds) {
    var answer = [1];
    var index = 0;
    let complete = Math.ceil((100 - progresses[0]) / speeds[0])
    
    for(let i=1;i<progresses.length;i++){
        if(complete >= Math.ceil((100 - progresses[i]) / speeds[i]) ){
            answer[index] += 1
        }else{
            answer.push(1)
            complete = Math.ceil((100 - progresses[i]) / speeds[i])
            index += 1
        }
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42586

/*
[접근방식]
문제에서 보면 뒤의 기능이 먼저 개발되어도 앞의 기능이 먼저 배포되어야 배포 될 수 있기 때문에

앞의 기능이 개발 되는 시간을 기준으로 잡고 뒤에 기능이 앞의 기능보다 먼저 개발되면 앞의 기능이 개발되는 날에 같이 배포되기 때문에 
앞의 기능이 개발이 끝나는 날에 배포되는 것을 나타내기 위해 1씩 증가시켜 준다.
만약 앞의 기능이 개발된 후 뒤의 기능이 개발 된다면 개발 기준으로 그 다음 기능을 변경하고 새로운 날의 인덱스를 추가한다.
*/