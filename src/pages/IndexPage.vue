<template>
  <q-page class="column items-center justify-center">
    <q-avatar rounded size="240px">
      <img src="/logo.png" />
    </q-avatar>
    <div @keyup.enter="onSubmit()" style="width: 100%; padding: 0 20% 0 25%">
      <q-input bottom-slots v-model="userNickname" counter maxlength="16">
        <template v-slot:hint> 별명을 입력해주세요 </template>
        <template v-slot:after>
          <q-btn round flat icon="send" @click="onSubmit()" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import {useUserStore} from "stores/user";
import {storeToRefs} from "pinia";

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const store = useUserStore()
    const { userNickname } = storeToRefs(store)
    return {
      $q: useQuasar(),
      userNickname
    };
  },
  data() {
    return {
    };
  },
  mounted() {
    // MARK: 사용자 세션 존재 시 main화면으로 라우팅
    if (this.$q.sessionStorage.has('user_nickname')) {
      this.$q.loading.show();
      setTimeout(() => {
        this.$q.loading.hide();
        // MARK: 공유되어서 들어온 경우: 쿼리 존재 시 해당 content로 바로 라우팅
        if (this.$route.query.friend_id !== undefined) {
          const query = `?friend_id=${this.$route.query.friend_id}`;
          this.$router.push(`/content${this.$route.query.content}${query}`);
        } else {
          this.$router.push('/main');
        }
      }, 500);
    }
  },
  methods: {
    onSubmit: function () {
      // MARK: 사용자 닉네임 세션 저장 후 main으로 이동
      if (this.userNickname !== '') {
        this.$q.sessionStorage.set('user_nickname', this.userNickname);
        // MARK: 브라우저 식별값(uuid) 할당
        this.$q.sessionStorage.set('user_key', crypto.randomUUID())
        if (this.$route.query.friend_id !== undefined) {
          const query = encodeURI(
            `?friend_id=${this.$route.query.friend_id}&friend_key=${this.$route.query.friend_key}&friend=${this.$route.query.friend}`
          );
          this.$router.push(`/content/${this.$route.query.content}${query}`);
        } else {
          this.$router.push('/main');
        }
      }
    },
  },
});
</script>
