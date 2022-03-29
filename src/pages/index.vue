<template>
  <div>
    <Logos class="mb-6" />
    <Suspense>
      <PageView />
      <template #fallback>
        <div class="op50 italic">
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
