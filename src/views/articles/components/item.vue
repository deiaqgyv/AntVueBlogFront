<template>
  <div class="articles-item-container">
    <h1>
      <a class="title"
         ref="title"
         @click="$router.push({name:'Detail',params:{id:article._id}})">
        {{article.title}}
      </a>
    </h1>
    <div class="date-tag" ref="tag">
            <span class="icon fa fa-calendar">
                <span class="publish-date">{{formatTimestamp(Number(article.publishAt)/1000)}}</span>
            </span>
      <span class="post-meta-divider">|</span>
      <span class="icon fa fa-envelope">
                <a class="category"
                   @click="$router.push({path: `/categories/${article.category._id}`,query:{name:article.category.name}})"
                >{{article.category.name}}</a>
            </span>
      <span class="tagIcon post-meta-divider">|</span>
      <span class="tagIcon icon fa fa-tags">
                <a
                  class="tag"
                  @click="$router.push({ path:`/tags/${article.tag._id}` })"
                >
                    {{article.tag.name}}
                </a>
            </span>
      <span class="post-meta-divider">|</span>
      <span class="fa fa-eye">
                阅读次数 {{article.viewCount}}
            </span>
    </div>
    <article ref="content" class="content">
    </article>
    <a ref="readMore" class="read-more" @click="$router.push({name:'Detail',params:{id:article._id}})">阅读全文 »</a>
  </div>
</template>

<script>
import formatTimestamp from '@/utils/formatTimestamp'
import animation from '@/utils/animation'
export default {
  props: [
    'article',
    'index'
  ],
  created () {
    this.$nextTick(function () {
      this.$refs.content.innerHTML = this.article.htmlValue.split('</p>')[ 0 ] + '</p>'
    })
  },
  mounted () {
    animation(this.$refs.tag, 'animated  fadeInUp')
    animation(this.$refs.content, 'animated  fadeInUp')
    animation(this.$refs.readMore, 'animated  fadeInUp')
  },
  methods: {
    formatTimestamp (timestamp) {
      return formatTimestamp(timestamp)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .articles-item-container {
    padding: 25px;
    margin-bottom: 70px;
    .title {
      display: inline-block;
      color: #555;
      border-bottom: none;
      line-height: 1.2;
      vertical-align: top;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
    }
    .title:hover {
      color: rgba(0, 0, 0, 0.9);
    }
    .date-tag {
      .post-meta-divider {
        color: rgba(0, 0, 0, 0.6);
        margin: 0 5px;
      }
      margin-top: 15px;
      font-size: 12px;
      .publish-date, .tag, .category {
        font-size: 12px;
        cursor: pointer;
      }
      .publish-date, .tag, .category {
        margin-left: 5px;
      }
    }
    .content {
      max-width: 700px;
      font-size: 14px;
      overflow: hidden;
      margin-top: 15px;
    }
    .read-more {
      font-size: 14px;
      margin-top: 30px;
      display: inline-block;
      cursor: pointer;
      border-bottom: 2px solid #555;
    }
    .read-more:hover {
      color: rgba(0, 0, 0, 0.9);
      border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    }
  }

  @media screen and (max-width: 768px) {
    .tagIcon {
      display: none;
    }

  }
</style>
