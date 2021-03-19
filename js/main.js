
var vm = new Vue({
    el: '#app',
    data: {
        group: [
            {
                name: '이인포',
                gender: '남자',
                koreanScore: 98,
                nhScore: 85,
                mathScore: 100,
                engScore: 75,
                cheScore: 70 
            },
            {
                name: '손포아',
                gender: '남자',
                koreanScore: 100,
                nhScore: 98,
                mathScore: 60,
                engScore: 55,
                cheScore: 50 
            },
            {
                name: '김모포',
                gender: '남자',
                koreanScore: 100,
                nhScore: 91,
                mathScore: 95,
                engScore: 54,
                cheScore: 55 
            },
            {
                name: '김아아',
                gender: '여자',
                koreanScore: 95,
                nhScore: 94,
                mathScore: 94,
                engScore: 89,
                cheScore: 56 
            },
            {
                name: '인포모',
                gender: '여자',
                koreanScore: 99,
                nhScore: 88,
                mathScore: 93,
                engScore: 97,
                cheScore: 54 
            },
            {
                name: '인포아',
                gender: '남자',
                koreanScore: 96,
                nhScore: 84,
                mathScore: 95,
                engScore: 95,
                cheScore: 53 
            },
            {
                name: '모아인',
                gender: '여자',
                koreanScore: 99,
                nhScore: 90,
                mathScore: 98,
                engScore: 70,
                cheScore: 52 
            },
            {
                name: '정포모',
                gender: '여자',
                koreanScore: 99,
                nhScore: 93,
                mathScore: 97,
                engScore: 88,
                cheScore: 78 
            },
            {
                name: '이포모',
                gender: '남자',
                koreanScore: 83,
                nhScore: 85,
                mathScore: 82,
                engScore: 83,
                cheScore: 84 
            }
        ]
    },
    methods: {
        pushData: function(){
            this.group.push({name: '홍길동', gender: '남자', koreanScore: 100, nhScore: 100, mathScore: 100, engScore: 100, cheScore: 100});
        },
        popData: function(){
            this.group.pop();
        }
    }
})