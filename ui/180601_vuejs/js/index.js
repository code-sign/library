
        //자기소개 컴포넌트
        //songsComponent 로도 가능 -> 단 html에서는 -으로 표기해야함
        Vue.component('songs-component',{
            template:'<p>my name is {{first}} {{last}}, live in {{city}}</p>',
            props:['first','last','city']
            //props로 데이터 전달하기
            //속성 카멜표기법으로 바인딩 안됨
        })

        Vue.component('my-comp-global',{
            template:'<p>전역 컴포넌트</p>'
        })

        var childComp = {
            template:'<p>지역 컴포넌트</p>'
        }

        // case01, 문제있음, 같은 data객체를 공유, 동시작동됨
        var data = {nums:0}
        Vue.component('simple-counter', {
            template:'<button @click="nums += 1">{{nums}}</button>',
            data: function(){
                return data
            }
        })

        // case 02 새로운 데이터 객체 반환
        Vue.component('simple-counter2', {
            template:'<button @click="nums +=1">{{nums}}</button>',
            data: function(){
                return {
                    nums:0
                }
            }
        })

        new Vue({
            el:'#app1',
            data:{
                message:'hello vue',
                welcomeMsg:'안녕하세요',
                seen:true,
                items:[
                    {text:'one'},
                    {text:'two'},
                    {text:'three'}
                ],
                styleBasic:{
                    fontSize:'20px',
                    color:'royalblue',
                    backgroundColor:'#eee',
                    padding:'10px'
                },
                line:{
                    border:'1px solid royalblue',
                    textDecoration:'underline'
                },
                sameText:'', 
                multiLine:'',        
                feel:true,
                good:'^_^',
                bad:'T_T',
                code:'<li>html로 렌더링</li>',
                count:0,
                show:true,
                number:0,
                foodItems:[],
                picked:'',
                choice:'',
                choiceMulti:[],
                selectFor:'a',
                options:[
                    {text:'first', value:'a'},
                    {text:'second', value:'b'},
                    {text:'third', value:'c'}
                ],
                nowMsg:'hohohoho',
                n:'0',
                numbers:[1,2,3,4,5],
                velo:false,
                docs:0,
                views:'v-a',
                numbering:[1,2,3,4,5],
                nextNum:6,
                numbs:0,
                animatedNum:10
            },
            watch:{
                numbs: function(newValue, oldValue){
                    var vm = this
                    function animate(){
                        if(TWEEN.update()){
                            requestAnimationFrame(animate)
                        }
                    }

                    new TWEEN.Tween({tNum: oldValue})
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .to({tNum: newValue}, 500)
                        .onUpdate(function(){
                            vm.animatedNum = this.tNum.toFixed(0)
                        })
                        .start()
                    animate()
                }
            },
            components:{
                'my-comp':childComp,
                childNewComp:{
                    props:['msging'],
                    template:'<p>{{msging}}</p>'
                },
                'v-a':{
                    template:'<div>componentA</div>'
                },
                'v-b':{
                    template:'<div>componentB</div>'
                }
            },
            methods:{
                messagePop: function(){
                    alert('this is pop msg');
                },
                addCnt: function(){
                    this.count++;
                },
                disCnt: function(){
                    this.count--;
                },
                say: function(msg){
                    alert(msg);
                },
                beforeEnter: function(el){
                    el.style.opacity = 0
                    el.style.transformOrigin = 'left'
                },
                enter: function(el, done){
                    Velocity(el,{opacity:1, fontSize:'1.4em'},{duration:300})
                    Velocity(el,{fontSize:'1em'},{complete:done})
                },
                leave: function(el,done){
                    Velocity(el,{translateX:'15px', rotateZ:'50deg'},{duration:600})
                    Velocity(el,{rotateZ:'130deg'},{loop:2})
                    Velocity(el,{
                        rotateZ:'90deg',
                        translateY:'100px',
                        opacity:0
                    },{complete:done})

                },
                randomIndex: function(){
                    return Math.floor(Math.random() * this.numbering.length)
                },
                addNum: function(){
                    this.numbering.splice(this.randomIndex(), 0, this.nextNum++)
                },
                removeNum: function(){
                    this.numbering.splice(this.randomIndex(),1)
                },
                shuf: function(){
                    this.numbering = _.shuffle(this.numbering)
                }
            },
            computed:{
                moreFive: function(){
                    return this.count >= 5
                },
                lessZero: function(){
                    return this.count <= 0
                },
                evenNumbers: function(){
                    return this.numbers.filter(function(v){
                        return v % 2 == 1
                    })
                }
            }
            
        })

        //전역 사용자 디렉티브 v-focus 등록
        Vue.directive('focusgo',{
            inserted: function(el){
            //바인딩된 엘리먼트가 돔에 삽입되었을때
                el.focus();
                //엘리먼트에 포커스를 준다.
            }
        })

        //사용자 디렉티브
        Vue.directive('demo', function(el, binding){
            var t1 = binding.value.coloring;
            var t2 = binding.value.text;
            document.querySelector("#txtxt").text('coloring is :'  + t1 + '<br> '+ t2);
        })

        //mixin 객체 생성
        var myMixin = {
            created: function(){
                this.hello()
            },
            methods:{
                hello:function(){
                    document.write('hello mixin!')
                }
            }
        }

        var Compsong = Vue.extend({
            mixins: [myMixin]
        })

        var coms = new Compsong()
        

        //init
        var Color =  net.brehaut.Color

        new Vue({
            el:'#app2',
            data:{
                colorQuery: '',
                color: {
                    red: 0,
                    green: 0,
                    blue: 0,
                    alpha: 1
                },
                tweenedColor: {}
            },
            created: function () {
                //생성
                this.tweenedColor = Object.assign({}, this.color)
                //개체를 복제한다
            },
            watch: {
                //변경될 때 마다 이 기능이 실행
                color: function () {
                function animate () {
                    if (TWEEN.update()) {
                    requestAnimationFrame(animate)
                    }
                }
                
                new TWEEN.Tween(this.tweenedColor)
                    .to(this.color, 750)
                    .start()
                
                animate()
                }
            },
            computed: {
                //계산된 속성
                tweenedCSSColor: function () {
                return new Color({
                    red: this.tweenedColor.red,
                    green: this.tweenedColor.green,
                    blue: this.tweenedColor.blue,
                    alpha: this.tweenedColor.alpha
                }).toCSS()
                }
            },
            methods: {
                updateColor: function () {
                    if(this.colorQuery == ''){
                        alert('color 값을 입력하세요!');
                    } else{
                        this.color = new Color(this.colorQuery).toRGB()
                        this.colorQuery = ''
                    }
                }
            }
        }) 



        Vue.component('todo-temp', {
            template:'<li>{{title}}\
                <button @click="$emit(\'remove\')">x</button></li>',
            props:['title']
        })
        new Vue({
            el:'#app3',
            data:{
                todos:[
                    'shopping',
                    'exercise!',
                    'sleep zzZ'
                ],
                newTodo:'',
                countTodo:0
            },
            methods:{
                addNewTodo: function(){
                    if(this.newTodo == ''){
                        alert('내용은 필수입니다')
                    } else {
                    this.todos.push(this.newTodo)
                    this.newTodo = ''
                    }
                }
            }
        })