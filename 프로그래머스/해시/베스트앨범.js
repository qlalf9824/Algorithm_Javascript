function solution(genres, plays) {
    var answer = [];
    let genresMap = new Map();
    
    for(let i=0;i<genres.length;i++){
        if(genresMap.has(genres[i])){
            let arr = genresMap.get(genres[i])
            arr[0] += plays[i]
            arr.push(i)
            genresMap.set(genres[i], arr)
        }else{
            genresMap.set(genres[i],[plays[i], i])
        }
    }
    
    [...genresMap].sort((a, b) => b[1][0] - a[1][0] ).map((value) => {
        value[1].shift()
        value[1].sort((a,b) => plays[b] - plays[a])
        if(value[1].length > 1){
            answer.push(value[1][0])
            answer.push(value[1][1])
        }else{
            answer.push(value[1][0])
        }
    })
    
    
    return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42579

/*
[접근방법]
일단 같은 장르의 음악들의 Map으로 묶는다. 
( Map을 선택한 이유 : set, get 메소드를 제공함으로써 좀더 명시적으로 값을 저장하고 꺼내올 수 있고 배열로도 쉽게 변환이 가능했기 때문에 선택했다. )
장르를 키로 설정하고 값을 배열로 설정하여 배열에 첫번쨰 값은 장르의 속하는 노래 플레이 수의 합을 저장하고 그 뒤에 값들은 노래들의 인덱스 값을 저장한다.

그렇게 저장된 값을 배열로 변경해 
플레이 수가 많은 장르를 가장 먼저 배열에 저장해야 하기 때문에 플레이 수의 합을 기준으로 내림차순으로 정렬 한 후
배열을 map 메소드를 통해 값을 하나씩 가져와서 플레이 수 합을 제거하고 배열의 인덱스를 기준으로 가장 많이 플레이 된 순서로 내림차순으로 정렬한다.
그리고 장르의 노래 수가 2개 이상이면 가장 앞에 있는 두가지 곡을 배열에 넣고
1개이면 한가지 곡만 배열에 넣는다.
*/