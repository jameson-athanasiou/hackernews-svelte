<script lang="ts">
  import StoryCard from './StoryCard.svelte'
  const URL = 'http://localhost:3000/stories';
  export const apiCall = window.fetch(URL).then((res) => res.json());
</script>

<main>
  <div>HackerNews (Svelte Edition)</div>
  {#await apiCall then data}
    {#each data as story}
      <StoryCard title={story.title} url={story.url} votes={story.score} by={story.by} descendants={story.descendants} />
    {/each}
  {/await}
</main>