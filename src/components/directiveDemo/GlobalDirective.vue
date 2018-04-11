
<script>
  export default {
    name: 'hi',
    data () {
      return {
        msg: 'Hi, I am globalDirective!'
      }
    },
    methods:{
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>

