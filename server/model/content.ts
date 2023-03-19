module.exports = (() => {
  return {
    mbti: [
      {
        q: "드디어 내일이 개강날이네. 나름 새학기인데 옷 좀 신경 써서 입고 갈까?",
        a: [
          { answer: "피곤하니까 일단 자고 내일 생각해야지 히히", score: 1 },
          {
            answer:
              "(날씨를 미리 검색해본 후)\n내일 날씨가 조금 쌀쌀하네? 이거랑 이거 입고 가야겠다.",
            score: 2,
          },
        ],
        type: "PJ",
      },
      {
        q: "대망의 개강날. 학교 가는 길에 나는",
        a: [
          { answer: "하암 피곤해… 점심 뭐 먹지?", score: 1 },
          {
            answer:
              "친구들과 만나면 무슨 얘기를 할 지,\n교수님이 진도를 나가실지 상상한다.",
            score: 2,
          },
        ],
        type: "SN",
        result: -1,
      },
      {
        q: "수업에 들어가기 전 과방에 들렀더니 오랜만에 보는 동기들이 있다. 이 때 나는",
        a: [
          {
            answer: "헉 얘들아 오랜만이야~!\n다들 방학 동안 뭐하고 지냈어?!",
            score: 1,
          },
          { answer: "(먼저 와서 말 걸어줬으면 좋겠당… ㅎㅎ)", score: 2 },
        ],
        type: "EI",
        result: -1,
      },
      {
        q: "학과 행사로 개강파티가 열린다고 한다. 필참하라는 소식을 들은 나는?",
        a: [
          {
            answer: "새로운 사람 많이 사귈 수 있겠다!\n벌써부터 신난다.",
            score: 1,
          },
          { answer: "어색한 사람도 많을 텐데...\n벌써부터 걱정이 된다.", score: 2 },
        ],
        type: "EI",
        result: -1,
      },
      {
        q: "수업이 시작했는데 친구가 오지 않는다. 결국 지각한 친구가 오다가 사고가 났다고 한다.",
        a: [
          { answer: "헉 어떡해 많이 놀랐겠다… 괜찮아? ", score: 1 },
          { answer: "헉 어쩌다가? 병원은? 보험 처리는 했어?", score: 2 },
        ],
        type: "FT",
        result: -1,
      },
      {
        q: "친구가 방학 동안 자격증을 땄다고 한다. 내 대답은?",
        a: [
          { answer: "축하해~ 고생 많았겠다~", score: 1 },
          { answer: "오 축하해! 무슨 자격증 땄어?", score: 2 },
        ],
        type: "FT",
        result: -1,
      },
      {
        q: "강의를 듣는 중, 오티 주인데도 교수님이 과제를 내주셨다.",
        a: [
          {
            answer:
              "아 하기 싫어…\n근데 다음 수업 전까지만 끝내면 되는 거 아닌가?\n일단 놀자~",
            score: 1,
          },
          {
            answer:
              "으 무슨 오티 주부터 과제야…\n오늘은 개강파티니까 내일 바로 끝내버려야겠다.",
            score: 2,
          },
        ],
        type: "PJ",
        result: -1,
      },
      {
        q: "친구와 점심 약속을 잡았다. 나는?",
        a: [
          { answer: "뭐 먹지?\n이따 땡기는 거 먹어야겠다~", score: 1 },
          {
            answer: "뭐 먹지?\nA식당은 맛있지만 가격이 비싸고 B식당은 …",
            score: 2,
          },
        ],
        type: "PJ",
        result: -1,
      },
      {
        q: "수업 끝~! 점심시간이다. 친구들과 식당에 갔는데 사장님이 우리를 알아보시고 오랜만이라며 서비스를 주셨다.",
        a: [
          { answer: "서비스 개이득! 잘 먹겠습니다~", score: 1 },
          {
            answer:
              "헉 우리를 기억해주시다니..! 감동이야🥺 근데 어떻게 알아보셨지?\n기억을 더듬으며 생각해본다.",
            score: 2,
          },
        ],
        type: "SN",
        result: -1,
      },
      {
        q: "개강 파티에 왔다! 나와 친한 동기들이 저기 모여있다.",
        a: [
          { answer: "새로운 친구들이 있는 곳에 슬쩍 낀다.", score: 1 },
          { answer: "친한 동기들한테 가서 같이 논다.", score: 2 },
        ],
        type: "EI",
        result: -1,
      },
      {
        q: "한참 술자리가 무르익고 있을 때, 갑자기 정전이 일어났다. 나는?",
        a: [
          { answer: "정전났네? 언제 복구되려나... 스토리 올려야겠다.", score: 1 },
          {
            answer:
              "무슨 일이지? 누가 실수로 스위치를 껐나?\n괴한이 나타난 건 아니겠지? 별의 별 상상을 다 해본다.",
            score: 2,
          },
        ],
        type: "SN",
        result: -1,
      },
      {
        q: "정전은 다행히 금방 해결되었다.\n그 때 친구가 속이 너무 안 좋다고 한다. 토할 것 같다고?!",
        a: [
          {
            answer:
              "어떡해 너무 많이 마셨나보다 ㅠㅠ\n밖에 나가서 바람 좀 쐴래?",
            score: 1,
          },
          {
            answer:
              "으이구 그러니까 내가 조절해서 마시랬지!\n숙취해소제라도 사다줄까?",
            score: 2,
          },
        ],
        type: "FT",
        result: -1,
      },
    ],
    tastes: [
      {
        q: "1. 즐겨 먹는 마라탕 맵기 단계, 엽떡 맵기 단계",
        a: [
          { answer: "마라탕 안 먹음", score: 1 },
          { answer: "착한맛", score: 2 },
          { answer: "초보맛", score: 3 },
          { answer: "덜 매운맛", score: 4 },
          { answer: "오리지널", score: 5 },
          { answer: "매운맛", score: 6 },
        ],
      },
      {
        q: "2. 즐겨먹는 커피, 카페 음료",
        a: [
          { answer: "아메리카노", score: 1 },
          { answer: "라떼", score: 2 },
          { answer: "에아드", score: 3 },
          { answer: "스무디", score: 4 },
          { answer: "티", score: 5 },
          { answer: "안 먹음", score: 6 },
        ],
      },
      {
        q: "3. 좋아하는 콜라",
        a: [
          { answer: "코카콜라", score: 1 },
          { answer: "펩시", score: 2 },
          { answer: "코카콜라 제로", score: 3 },
          { answer: "펩시제로", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "4. 좋아하는 고기",
        a: [
          { answer: "돼지고기", score: 1 },
          { answer: "소고기", score: 2 },
          { answer: "닭고기", score: 3 },
          { answer: "양고기", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "5. 좋아하는 곱창",
        a: [
          { answer: "돼지곱창", score: 1 },
          { answer: "소곱창", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "6. 붕어빵",
        a: [
          { answer: "팥붕", score: 1 },
          { answer: "슈붕", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "7. 호빵",
        a: [
          { answer: "팥호빵", score: 1 },
          { answer: "야채호빵", score: 2 },
          { answer: "피자호빵", score: 3 },
          { answer: "안 먹음", score: 4 },
        ],
      },
      {
        q: "8. 회",
        a: [
          { answer: "먹음", score: 1 },
          { answer: "못 먹음", score: 2 },
        ],
      },
      {
        q: "9. 좋아하는 주종",
        a: [
          { answer: "소주", score: 1 },
          { answer: "맥주", score: 2 },
          { answer: "양주", score: 3 },
          { answer: "칵테일/하이볼", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "10. 소주 종류",
        a: [
          { answer: "처음처럼", score: 1 },
          { answer: "참이슬", score: 2 },
          { answer: "진로", score: 3 },
          { answer: "안 먹음", score: 4 },
        ],
      },
      {
        q: "11. 좋아하는 우유",
        a: [
          { answer: "흰우유", score: 1 },
          { answer: "초코우유", score: 2 },
          { answer: "딸기우유", score: 3 },
          { answer: "바나나우유", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "12. 고기 먹고 후식",
        a: [
          { answer: "물냉", score: 1 },
          { answer: "비냉", score: 2 },
          { answer: "된장찌개", score: 3 },
          { answer: "김치찌개", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "13. 복숭아",
        a: [
          { answer: "물복", score: 1 },
          { answer: "딱복", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "14. 탕수육",
        a: [
          { answer: "부먹", score: 1 },
          { answer: "찍먹", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "15. 떡볶이 떡",
        a: [
          { answer: "밀떡", score: 1 },
          { answer: "쌀떡", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "16. 파스타",
        a: [
          { answer: "토마토 파스타", score: 1 },
          { answer: "크림 파스타", score: 2 },
          { answer: "로제 파스타", score: 3 },
          { answer: "오일 파스타", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "17. 라면",
        a: [
          { answer: "빨간 국물", score: 1 },
          { answer: "흰 국물", score: 2 },
          { answer: "짜장라면", score: 3 },
          { answer: "비빔라면", score: 4 },
          { answer: "안 먹음", score: 5 },
        ],
      },
      {
        q: "18. 짜장 vs 짬뽕",
        a: [
          { answer: "짜장면", score: 1 },
          { answer: "짬뽕", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "19. 마라탕 vs 마라샹궈",
        a: [
          { answer: "마라탕", score: 1 },
          { answer: "마라샹궈", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "20. 떡볶이",
        a: [
          { answer: "시장 떡볶이", score: 1 },
          { answer: "브랜드 떡볶이", score: 2 },
          { answer: "안 먹음", score: 3 },
        ],
      },
      {
        q: "21. 민트초코",
        a: [
          { answer: "민초", score: 1 },
          { answer: "반민초", score: 2 },
        ],
      },
    ],
    average: [
      {
        id: 0,
        question: '주량(소주기준) ',
        answer: [
          {
            pMin: 0,
            pMax: 10,
            pStep: 0.5,
            unit: '병',
          },
        ],
        type: 'range',
        result: -1,
      },
      {
        id: 1,
        question: '맵기 단계',
        answer: [
          { answer: '1단계: 못 먹음', score: 0 },
          { answer: '2단계: 진라면 순한맛', score: 1 },
          { answer: '3단계: 신라면', score: 2 },
          { answer: '4단계: 불닭', score: 3 },
          { answer: '5단계: 그 이상', score: 4 },
        ],
        type: 'button',
        result: -1,
      },
      {
        id: 2,
        question: '신 맛 단계',
        answer: [
          { answer: '1단계: 못 먹음', score: 0 },
          { answer: '2단계: 새콤달콤', score: 1 },
          { answer: '3단계: 아이셔', score: 2 },
          { answer: '4단계: 패션후르츠', score: 3 },
          { answer: '5단계: 레몬', score: 4 },
        ],
        type: 'button',
        result: -1,
      },
      {
        id: 3,
        question: '하루에 커피 ',
        answer: [
          {
            pMin: 0,
            pMax: 5,
            pStep: 1,
            unit: '잔',
          },
        ],
        type: 'range',
        result: -1,
      },
      {
        id: 4,
        question: '피자 (라지 기준) ',
        answer: [
          {
            pMin: 0,
            pMax: 10,
            pStep: 1,
            unit: '조각',
          },
        ],
        type: 'range',
        result: -1,
      },
      {
        id: 5,
        question: '붕어빵 한자리에서 ',
        answer: [
          {
            pMin: 0,
            pMax: 20,
            pStep: 1,
            unit: '개',
          },
        ],
        type: 'range',
        result: -1,
      },
      {
        id: 6,
        question: '하루 ',
        answer: [
          {
            pMin: 0,
            pMax: 5,
            pStep: 1,
            unit: '끼',
          },
        ],
        type: 'range',
        result: -1,
      },
      {
        id: 7,
        question: '일주일에 외식/배달음식 ',
        answer: [
          {
            pMin: 0,
            pMax: 20,
            pStep: 1,
            unit: '번',
          },
        ],
        type: 'range',
        result: -1,
      },
      {
        id: 8,
        question: '팥붕 vs 슈붕',
        answer: [
          { answer: '팥붕', score: 0 },
          { answer: '슈붕', score: 1 },
        ],
        type: 'button',
        result: -1,
      },
      {
        id: 9,
        question: '물냉 vs 비냉',
        answer: [
          { answer: '물냉', score: 0 },
          { answer: '비냉', score: 1 },
        ],
        type: 'button',
        result: -1,
      },
      {
        id: 10,
        question: '민초 vs 반민초',
        answer: [
          { answer: '민초', score: 0 },
          { answer: '반민초', score: 1 },
        ],
        type: 'button',
        result: -1,
      },
    ],
  };
})();
