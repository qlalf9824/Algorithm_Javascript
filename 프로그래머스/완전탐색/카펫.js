function solution(brown, yellow) {
    var answer = [];
    let yellow_div = 1;
    let flag = true;
    
    while(flag){
        if(yellow % yellow_div === 0){
            let yellow_quotient = yellow / yellow_div
            let brown_side1 = yellow_div + 2
            let brown_side2 = yellow_quotient + 2
            
            if(brown_side1 * brown_side2 - yellow === brown){
                answer = brown_side1 < brown_side2 ? 
                            [brown_side2, brown_side1] : [brown_side1, brown_side2]
                break;
            }
            
        }
        yellow_div++;
    }
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42842