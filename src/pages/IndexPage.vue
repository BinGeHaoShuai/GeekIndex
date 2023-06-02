<template>
  <yu-terminal
    ref="terminalRef"
    :user="loginUser"
    full-screen
    :on-submit-command="onSubmitCommand"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { doCommandExecute } from "../core/commandExecutor";
import { useUserStore } from "../core/commands/user/userStore";

const terminalRef = ref();

const onSubmitCommand = async (inputText: string) => {
  if (!inputText) {
    return;
  }
  const terminal = terminalRef.value.terminal;
  await doCommandExecute(inputText, terminal);
};

const userStore = useUserStore();
const { loginUser } = storeToRefs(userStore);

onMounted(() => {
  userStore.getAndSetLoginUser();
});
</script>

<style></style>
