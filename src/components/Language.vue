<template>
    <div class="m-lang">
        <div class="m-lang-item" v-if="language==='en'" @click="setZh">中</div>
        <div class="m-lang-item" v-if="language==='zh'" @click="setEn">En</div>
    </div>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$i18n.locale;
    }
  },
  methods: {
    setZh() {
      this.$i18n.locale = "zh";
    },
    setEn() {
      this.$i18n.locale = "en";
    }
  }
};
</script>

<style lang="less" scoped>
@import '../styles/variables.less';
.m-lang
{
    padding: 24px;
    .m-lang-item
    {
        line-height: 32px;

        width: 60px;
        height: 32px;

        cursor: pointer;
        text-align: center;

        color: @deepPurple500;
        background-color: @white;
    }
}

</style>


