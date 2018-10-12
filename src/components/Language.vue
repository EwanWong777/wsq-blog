<template>
    <div class="m-lang" @mouseover="handleShowLangItems" @mouseout="handleHideLangItems">
      <div class="m-lang-btn">
        <span>{{$t('common.lang')}} </span><i class="el-icon-arrow-down" :class="translateArrow?'m-arrow-up':'m-arrow-down'"></i>
      </div>
      <transition name="el-zoom-in-top">
        <ul class="m-lang-items" v-if="showLangItems">
          <li @click="setZh">中文</li>
          <li @click="setEn">ENGLISH</li>
        </ul>
      </transition>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      showLangItems: false,
      translateArrow: false
    };
  },
  methods: {
    handleShowLangItems() {
      this.showLangItems = true;
      this.translateArrow = true;
    },
    handleHideLangItems() {
      this.showLangItems = false;
      this.translateArrow = false;
    },
    ...mapActions(["setLanguage"]),
    setZh() {
      this.$i18n.locale = "zh";
      this.setLanguage("zh");
    },
    setEn() {
      this.$i18n.locale = "en";
      this.setLanguage("en");
    }
  }
};
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
.m-lang
{
    position: relative;
    .m-lang-btn
    {
        font-size: 18px;
        line-height: 80px;

        height: 80px;
        padding-left: 20px;

        cursor: pointer;
        letter-spacing: 2px;

        color: @white;
    }
    .m-lang-items
    {
        position: absolute;
        top: 80px;
        right: 0;

        width: 120px;
        li
        {
            padding: 15px 0;

            cursor: pointer;
            text-align: center;
            letter-spacing: 2px;

            color: @deepPurple500;
            background-color: @white;
            &:hover
            {
                background-color: @deepPurple50;
            }
        }
    }
}
.m-arrow-down
{
    transition: all .5s;
    transform: rotate(0);
}
.m-arrow-up
{
    transition: all .5s;
    transform: rotate(-180deg);
}

</style>


