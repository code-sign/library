  // songsvue render
  var songsvue = new Vue({
    el: '#app',
    data: {
        tit:'Songs Todo List',
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
                alert('내용은 필수입니다');
            } else {
            
            this.todos.push(this.newTodo);

            this.newTodo = '' //인풋 초기화
            
            }
        },
        removeTodo: function(todo){
            this.todos.splice(this.todos.indexOf(todo),1)
        }
      }
  })