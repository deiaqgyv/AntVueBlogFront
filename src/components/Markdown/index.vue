<template>
    <div class="class-container">
        <article class="markdown-body" id="write" ref="content">
            <!--<vue-markdown>{{content}}</vue-markdown>-->
        </article>
    </div>

</template>

<script>
  // import { markdown } from 'markdown'
  import VueMarkdown from 'vue-markdown'

  import './style.css'
  import 'github-markdown-css'
  import './cover.css'

  export default {
    props : {
      content : {
        type : Object,
        default : () => {
        }
      }
    },
    components : {
      VueMarkdown
    },

    created () {
      this.$nextTick(function () {
        this.$refs.content.innerHTML = this.content.htmlValue
      })
    }
  }
</script>

<style scoped>
    .class-container {
        padding: 15px;
    }
</style>
