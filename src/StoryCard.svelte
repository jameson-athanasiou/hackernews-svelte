<script lang="ts">
    import Vote from './Vote.svelte'

   export let title: string = 'Title';
   export let url: string = 'www.google.com';
   export let votes: number= 2;
   export let by: string = 'someone';
   export let descendants: number = 1;

   const originalVotes = votes;

   const adjustVotes = (newVote: number) => {
     votes = originalVotes + newVote
   }
</script>

<style>
    .card {
        border: 1px solid black;
        margin-bottom: 10px;
        max-width: 600;
        padding: 10px;
    }
</style>

<div class="card">
    <Vote adjustVotes={adjustVotes} />
    <div>
        {title} (<a href={url}>{url}</a>)
        </div>
        <div>
        {votes} points by {by} | {descendants} comments
    </div>
</div>