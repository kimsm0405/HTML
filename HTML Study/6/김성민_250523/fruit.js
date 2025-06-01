function showDescription(fruit) {
    let description;

    switch(fruit) {
        case 'apples':
            description = "맛있는 빨간 사과입니다. 비타민 C가 풍부해요.";
            break;
        case 'banana':
            description = "달콤하고 부드러운 바나나입니다. 칼륨이 많아요.";
            break;
        case 'orange':
            description = "상큼한 오렌지입니다. 주스로 마셔도 좋아요.";
            break;
        default:
            description = "알 수 없는 과일입니다.";
            break;
    }

    alert(description);
}